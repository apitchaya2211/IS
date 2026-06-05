import { X, BookOpen, FileText, Briefcase, ExternalLink } from 'lucide-react';
import type { Program, University } from '../data/universities';

interface ProgramDetailsModalProps {
  selectedProgram: Program;
  selectedUniDetail: University;
  onClose: () => void;
  t: Record<string, string>;
}

export default function ProgramDetailsModal({
  selectedProgram,
  selectedUniDetail,
  onClose,
  t
}: ProgramDetailsModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={16} />
        </button>

        <div className="modal-header">
          <div className="uni-badge-row">
            <span
              className="uni-logo-icon"
              style={{
                backgroundColor: selectedUniDetail.logoUrl ? '#ffffff' : selectedUniDetail.logoColor,
                width: '48px',
                height: '48px',
                fontSize: '12px',
                border: selectedUniDetail.logoUrl ? '1px solid #e2e8f0' : 'none'
              }}
            >
              {selectedUniDetail.logoUrl ? (
                <img
                  src={selectedUniDetail.logoUrl}
                  alt={selectedUniDetail.abbreviation}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0px' }}
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = 'none';
                    img.parentElement!.style.backgroundColor = selectedUniDetail.logoColor;
                    img.parentElement!.style.border = 'none';
                    img.parentElement!.textContent = selectedUniDetail.abbreviation;
                  }}
                />
              ) : (
                selectedUniDetail.abbreviation
              )}
            </span>
            <span className="uni-name-text" style={{ fontSize: '15px', color: 'var(--primary-hover)', fontWeight: 600 }}>
              {selectedUniDetail.name}
            </span>
          </div>
          <h2 style={{ margin: '8px 0 4px', fontSize: '22px', color: '#1e1b15' }}>{selectedProgram.name}</h2>
          <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '14px' }}>{selectedProgram.facultyName}</p>
        </div>

        <div className="modal-body">
          {/* คำอธิบายมหาวิทยาลัย */}
          <div>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                backgroundColor: 'var(--bg-main)',
                padding: '10px 14px',
                borderRadius: '8px',
                borderLeft: `3px solid ${selectedUniDetail.logoColor}`
              }}
            >
              &ldquo;{selectedUniDetail.description}&rdquo;
            </p>
          </div>

          {/* ข้อมูลเกณฑ์และงบประมาณ */}
          <div className="modal-info-grid">
            <div className="info-item">
              <div className="info-item-label">{t.minGpax}</div>
              <div className="info-item-value">{selectedProgram.gpaxMinimum.toFixed(2)}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label">{t.tuitionFee}</div>
              <div className="info-item-value">{selectedProgram.tuitionFee}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label">{t.admissionTracks}</div>
              <div className="info-item-value" style={{ fontSize: '13px' }}>
                {selectedProgram.studyTracks.join(', ')}
              </div>
            </div>
            <div className="info-item">
              <div className="info-item-label">{t.tcasRounds}</div>
              <div className="info-item-value" style={{ fontSize: '13px' }}>
                {selectedProgram.tcasRounds.join(', ')}
              </div>
            </div>
          </div>

          {/* จุดเด่นของสาขาวิชา */}
          <div>
            <h3 className="modal-section-title">
              <BookOpen size={16} />
              {t.programHighlights}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-main)', marginTop: 0, lineHeight: 1.6 }}>
              {selectedProgram.highlights}
            </p>
          </div>

          {/* วิชาที่เน้นพิเศษ */}
          {selectedProgram.requiredSubjects && (
            <div>
              <h3 className="modal-section-title">
                <FileText size={16} />
                {t.requiredSubjects}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {selectedProgram.requiredSubjects.map((sub, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '12px',
                      backgroundColor: 'var(--primary-bg)',
                      color: 'var(--primary)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid var(--border)'
                    }}
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* โอกาสในการทำงาน */}
          <div>
            <h3 className="modal-section-title">
              <Briefcase size={16} />
              {t.careers}
            </h3>
            <div className="career-grid">
              {selectedProgram.careers.map((career, index) => (
                <div key={index} className="career-item">
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />
                  <span>{career}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" onClick={onClose} className="btn-secondary">
            {t.closeWindow}
          </button>
          <a
            href={selectedProgram.facultyWebsite || selectedUniDetail.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t.visitWebsite}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
