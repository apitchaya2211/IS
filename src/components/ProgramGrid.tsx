import { Search, GraduationCap, Award, AlertTriangle } from 'lucide-react';
import ProgramCard from './ProgramCard';
import type { Program, University } from '../data/universities';
import type { StudentProfile } from '../types';

interface ProgramGridProps {
  filteredPrograms: Array<Program & { university: University }>;
  studentProfile: StudentProfile | null;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedUniId: string;
  setSelectedUniId: (id: string) => void;
  selectedTrack: string;
  setSelectedTrack: (track: string) => void;
  universitiesList: Array<{ id: string; name: string }>;
  handleOpenModal: (prog: Program & { university: University }) => void;
  evaluateAdmissionChance: (prog: Program) => any;
  t: Record<string, string>;
}

export default function ProgramGrid({
  filteredPrograms,
  studentProfile,
  searchQuery,
  setSearchQuery,
  selectedUniId,
  setSelectedUniId,
  selectedTrack,
  setSelectedTrack,
  universitiesList,
  handleOpenModal,
  evaluateAdmissionChance,
  t
}: ProgramGridProps) {
  return (
    <section className="results-section">
      <div className="results-header">
        <div>
          <h1 className="results-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GraduationCap size={28} color="var(--primary)" />
            {t.recommendedPrograms}
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            {t.foundAll} {filteredPrograms.length} {t.programsFrom}
          </p>
        </div>

        {studentProfile && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              backgroundColor: 'var(--primary-bg)',
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}
          >
            <Award size={16} color="var(--primary)" />
            <span>{t.aiActive}</span>
          </div>
        )}
      </div>

      {/* แถบตัวกรองและช่องค้นหา */}
      <div className="search-filter-bar">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexGrow: 1,
            backgroundColor: 'var(--bg-main)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '0 10px'
          }}
        >
          <Search size={18} color="var(--text-muted)" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="search-input"
            style={{ border: 'none', backgroundColor: 'transparent', padding: '8px 4px' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <select className="filter-select" value={selectedUniId} onChange={(e) => setSelectedUniId(e.target.value)}>
          <option value="all">{t.allUni}</option>
          {universitiesList.map((uni) => (
            <option key={uni.id} value={uni.id}>
              {uni.name}
            </option>
          ))}
        </select>

        <select className="filter-select" value={selectedTrack} onChange={(e) => setSelectedTrack(e.target.value)}>
          <option value="all">{t.allTracks}</option>
          <option value="วิทย์-คณิต">{t.trackSciMath}</option>
          <option value="ศิลป์-คำนวณ">{t.trackArtMath}</option>
          <option value="ศิลป์-ภาษา">{t.trackArtLang}</option>
          <option value="ปวช.สายช่าง">{t.trackVocational}</option>
          <option value="อื่น ๆ">{t.filterOtherTracks}</option>
        </select>
      </div>

      {/* รายชื่อหลักสูตรที่ดึงขึ้นมา */}
      <div className="programs-grid">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((prog) => (
            <ProgramCard
              key={prog.id}
              prog={prog}
              studentProfile={studentProfile}
              onClick={() => handleOpenModal(prog)}
              admissionChance={evaluateAdmissionChance(prog)}
              t={t}
            />
          ))
        ) : (
          <div className="glass-card" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
            <AlertTriangle size={36} color="var(--primary)" style={{ margin: '0 auto 12px' }} />
            <p style={{ fontWeight: 500, fontSize: '16px', color: '#1e1b15' }}>{t.notFoundTitle}</p>
            <p style={{ fontSize: '14px', marginTop: '4px' }}>{t.notFoundDesc}</p>
          </div>
        )}
      </div>
    </section>
  );
}
