import React from 'react';
import { MapPin, DollarSign } from 'lucide-react';
import type { Program, University } from '../data/universities';
import type { StudentProfile } from '../types';
import type { AdmissionChanceResult } from '../utils/evaluation';

interface ProgramCardProps {
  prog: Program & { university: University };
  studentProfile: StudentProfile | null;
  onClick: () => void;
  admissionChance: AdmissionChanceResult;
  t: Record<string, string>;
}

export default function ProgramCard({
  prog,
  studentProfile,
  onClick,
  admissionChance,
  t
}: ProgramCardProps) {
  return (
    <div
      className="program-card glass-card animate-fade-in"
      style={{ '--badge-color': prog.university.logoColor } as React.CSSProperties}
      onClick={onClick}
    >
      <div className="program-card-header">
        <div>
          <div className="uni-badge-row">
            <span
              className="uni-logo-icon"
              style={{
                backgroundColor: prog.university.logoUrl ? '#ffffff' : prog.university.logoColor,
                border: prog.university.logoUrl ? '1px solid #e2e8f0' : 'none'
              }}
            >
              {prog.university.logoUrl ? (
                <img
                  src={prog.university.logoUrl}
                  alt={prog.university.abbreviation}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0px' }}
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = 'none';
                    img.parentElement!.style.backgroundColor = prog.university.logoColor;
                    img.parentElement!.style.border = 'none';
                    img.parentElement!.textContent = prog.university.abbreviation.substring(0, 4);
                  }}
                />
              ) : (
                prog.university.abbreviation.substring(0, 4)
              )}
            </span>
            <span className="uni-name-text">
              {prog.university.name} • {prog.university.location}
            </span>
          </div>
          <h3 className="program-name">{prog.name}</h3>
          <div className="faculty-name">{prog.facultyName}</div>
        </div>

        {/* แสดงอัตราการจับคู่แนะนำด้วย AI */}
        {studentProfile && (
          <span
            className="recommend-badge"
            style={{
              backgroundColor: admissionChance.bgColor,
              color: admissionChance.textColor,
              border: `1px solid ${admissionChance.borderColor}`
            }}
          >
            {admissionChance.label}
          </span>
        )}
      </div>

      <div className="card-meta-row">
        <span
          className={`meta-badge ${
            studentProfile
              ? studentProfile.gpax >= prog.gpaxMinimum
                ? 'gpax-green'
                : 'gpax-red'
              : 'gpax-yellow'
          }`}
        >
          {t.minGpax} {prog.gpaxMinimum.toFixed(2)}
          {studentProfile && ` (${t.yours} ${studentProfile.gpax.toFixed(2)})`}
        </span>

        <span className="meta-badge">
          <MapPin size={12} />
          {prog.university.location}
        </span>

        <span className="meta-badge">
          <DollarSign size={12} />
          {prog.tuitionFee}
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '12px',
          paddingTop: '12px',
          borderTop: '1px solid var(--border)'
        }}
      >
        <div className="tag-list">
          {prog.studyTracks.map((track, idx) => (
            <span key={idx} className="tag-pill">
              {track}
            </span>
          ))}
        </div>
        <span style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}>
          {t.viewDetails}
          <ChevronRightIcon size={14} />
        </span>
      </div>
    </div>
  );
}

function ChevronRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
