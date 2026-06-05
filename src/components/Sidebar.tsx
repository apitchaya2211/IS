import React from 'react';
import { Sparkles, Upload, FileText, RefreshCw, CheckCircle2 } from 'lucide-react';
import type { StudentProfile } from '../types';

interface SidebarProps {
  studentProfile: StudentProfile | null;
  scanComplete: boolean;
  isScanning: boolean;
  selectedFile: string | null;
  language: 'TH' | 'EN';
  t: Record<string, string>;
  mockTranscripts: Array<{
    name: string;
    gpax: number;
    studyTrack: string;
    strongSubjects: string[];
    weakSubjects: string[];
    summary: string;
    imgUrl: string;
  }>;
  handleScanMock: (transcript: any) => void;
  handleReset: () => void;
  sidebarTab: 'scan' | 'manual';
  setSidebarTab: (tab: 'scan' | 'manual') => void;
  isEditingProfile: boolean;
  setIsEditingProfile: (editing: boolean) => void;
  formGpax: string;
  setFormGpax: (gpa: string) => void;
  formTrackSelect: string;
  setFormTrackSelect: (track: string) => void;
  formTrackCustom: string;
  setFormTrackCustom: (track: string) => void;
  formStrongSubjects: string;
  setFormStrongSubjects: (subj: string) => void;
  formWeakSubjects: string;
  setFormWeakSubjects: (subj: string) => void;
  formSummary: string;
  setFormSummary: (sum: string) => void;
  handleManualSubmit: (e: React.FormEvent) => void;
  handleStartEdit: () => void;
  handleSaveEdit: (e: React.FormEvent) => void;
}

export default function Sidebar({
  studentProfile,
  scanComplete,
  isScanning,
  selectedFile,
  language,
  t,
  mockTranscripts,
  handleScanMock,
  handleReset,
  sidebarTab,
  setSidebarTab,
  isEditingProfile,
  setIsEditingProfile,
  formGpax,
  setFormGpax,
  formTrackSelect,
  setFormTrackSelect,
  formTrackCustom,
  setFormTrackCustom,
  formStrongSubjects,
  setFormStrongSubjects,
  formWeakSubjects,
  setFormWeakSubjects,
  formSummary,
  setFormSummary,
  handleManualSubmit,
  handleStartEdit,
  handleSaveEdit
}: SidebarProps) {
  return (
    <section className="sidebar">
      {/* การ์ดสแกนใบเกรด */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={20} color="var(--primary)" />
          {t.analyzeTitle}
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
          {t.analyzeDesc}
        </p>

        {/* แท็บสลับ สแกน/กรอกข้อมูลเอง */}
        <div
          className="sidebar-tabs"
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '16px',
            background: 'var(--bg-main)',
            padding: '4px',
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}
        >
          <button
            type="button"
            className={`sidebar-tab-btn ${sidebarTab === 'scan' ? 'active' : ''}`}
            onClick={() => {
              setSidebarTab('scan');
              setIsEditingProfile(false);
            }}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 500,
              backgroundColor: sidebarTab === 'scan' ? 'var(--bg-card)' : 'transparent',
              color: sidebarTab === 'scan' ? 'var(--primary)' : 'var(--text-muted)',
              boxShadow: sidebarTab === 'scan' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            {t.scanTab}
          </button>
          <button
            type="button"
            className={`sidebar-tab-btn ${sidebarTab === 'manual' ? 'active' : ''}`}
            onClick={() => {
              setSidebarTab('manual');
              setIsEditingProfile(false);
            }}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 500,
              backgroundColor: sidebarTab === 'manual' ? 'var(--bg-card)' : 'transparent',
              color: sidebarTab === 'manual' ? 'var(--primary)' : 'var(--text-muted)',
              boxShadow: sidebarTab === 'manual' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            {t.manualTab}
          </button>
        </div>

        {sidebarTab === 'scan' ? (
          <>
            {!selectedFile ? (
              <div className="upload-zone" onClick={() => handleScanMock(mockTranscripts[0])}>
                <div className="upload-icon-container">
                  <Upload size={28} />
                </div>
                <p style={{ fontWeight: 500, fontSize: '14px', marginBottom: '4px' }}>{t.dragDrop}</p>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{t.orClick}</p>
              </div>
            ) : (
              <div>
                <div className="scan-container">
                  <img src={selectedFile} alt="Transcript Thumbnail" className="scan-thumbnail" />
                  {isScanning && <div className="scan-laser" />}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FileText size={14} />
                    {t.processedBy}
                  </span>
                  {!isScanning && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn-secondary"
                      style={{ padding: '6px 12px', borderRadius: '8px', fontSize: '12px', gap: '4px' }}
                    >
                      <RefreshCw size={12} />
                      {t.uploadNew}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* ส่วนสแกนใบเกรดจำลองเพื่อความสะดวกรวดเร็ว */}
            {!selectedFile && (
              <div className="mock-grade-selector">
                <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  {t.quickOption}
                </p>
                {mockTranscripts.map((transcript, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mock-grade-btn"
                    onClick={() => handleScanMock(transcript)}
                    disabled={isScanning}
                  >
                    <span>{transcript.name}</span>
                    <ChevronRightIcon size={14} />
                  </button>
                ))}
              </div>
            )}

            {isScanning && (
              <div style={{ marginTop: '16px', textAlign: 'center', color: 'var(--primary)' }}>
                <p style={{ fontSize: '14px', fontWeight: 500 }} className="animate-pulse">
                  {t.scanning}
                </p>
              </div>
            )}
          </>
        ) : (
          /* ฟอร์มกรอกข้อมูลเอง */
          <form onSubmit={handleManualSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-main)' }}>{t.formGpaxLabel}</label>
              <input
                type="number"
                min="0"
                max="4"
                step="0.01"
                placeholder="0.00 - 4.00"
                value={formGpax}
                onChange={(e) => setFormGpax(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  outline: 'none',
                  backgroundColor: 'var(--bg-main)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px'
                }}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-main)' }}>{t.formTrackLabel}</label>
              <select
                value={formTrackSelect}
                onChange={(e) => setFormTrackSelect(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  outline: 'none',
                  backgroundColor: 'var(--bg-main)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px'
                }}
              >
                <option value="วิทย์-คณิต">{t.trackSciMath}</option>
                <option value="ศิลป์-คำนวณ">{t.trackArtMath}</option>
                <option value="ศิลป์-ภาษา">{t.trackArtLang}</option>
                <option value="ปวช.สายช่าง">{t.trackVocational}</option>
                <option value="อื่น ๆ">{t.formTrackOther}</option>
              </select>
            </div>

            {formTrackSelect === 'อื่น ๆ' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <input
                  type="text"
                  placeholder={t.customTrackPlaceholder}
                  value={formTrackCustom}
                  onChange={(e) => setFormTrackCustom(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    outline: 'none',
                    backgroundColor: 'var(--bg-main)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px'
                  }}
                  required
                />
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-main)' }}>{t.formStrongLabel}</label>
              <input
                type="text"
                placeholder={t.strongPlaceholder}
                value={formStrongSubjects}
                onChange={(e) => setFormStrongSubjects(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  outline: 'none',
                  backgroundColor: 'var(--bg-main)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-main)' }}>{t.formWeakLabel}</label>
              <input
                type="text"
                placeholder={t.weakPlaceholder}
                value={formWeakSubjects}
                onChange={(e) => setFormWeakSubjects(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  outline: 'none',
                  backgroundColor: 'var(--bg-main)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-main)' }}>{t.formSummaryLabel}</label>
              <textarea
                placeholder={t.summaryPlaceholder}
                value={formSummary}
                onChange={(e) => setFormSummary(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  outline: 'none',
                  backgroundColor: 'var(--bg-main)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  minHeight: '80px',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '10px 16px', borderRadius: '8px', fontSize: '14px', width: '100%', marginTop: '6px' }}
            >
              {t.saveProfileBtn}
            </button>
          </form>
        )}
      </div>

      {/* การ์ดประวัติผู้ใช้ที่ได้จากการวิเคราะห์ของ AI */}
      {scanComplete && studentProfile && (
        <div className="student-profile glass-card animate-fade-in" style={{ backgroundColor: 'var(--bg-card)' }}>
          {!isEditingProfile ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--primary-hover)', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                  <CheckCircle2 size={18} />
                  {t.analysisResult}
                </h3>
                <button
                  type="button"
                  onClick={handleStartEdit}
                  className="btn-secondary"
                  style={{ padding: '4px 8px', borderRadius: '6px', fontSize: '11px', gap: '2px', display: 'flex', alignItems: 'center' }}
                >
                  {t.editProfile}
                </button>
              </div>

              <div className="profile-stat">
                <span className="stat-label">{t.gpax}</span>
                <span className="stat-value">{studentProfile.gpax.toFixed(2)}</span>
              </div>
              <div className="profile-stat">
                <span className="stat-label">{t.studyTrack}</span>
                <span className="stat-value">{studentProfile.studyTrack}</span>
              </div>
              <div className="profile-stat" style={{ flexDirection: 'column', gap: '6px', borderBottom: 'none' }}>
                <span className="stat-label">{t.strongSubjects}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                  {studentProfile.strongSubjects.map((sub, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '11px',
                        backgroundColor: '#fef3c7',
                        color: '#92400e',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid #fde68a'
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {studentProfile.weakSubjects && studentProfile.weakSubjects.length > 0 && (
                <div className="profile-stat" style={{ flexDirection: 'column', gap: '6px', borderBottom: 'none', paddingTop: '4px' }}>
                  <span className="stat-label">{language === 'TH' ? 'กลุ่มวิชาที่ควรพัฒนา' : 'Weak Subjects'}</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                    {studentProfile.weakSubjects.map((sub, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '11px',
                          backgroundColor: '#fee2e2',
                          color: '#991b1b',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          border: '1px solid #fca5a5'
                        }}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>
                  {t.recommendations}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  {studentProfile.summary}
                </p>
              </div>
            </>
          ) : (
            /* ส่วนของแก้ไขโปรไฟล์ */
            <form onSubmit={handleSaveEdit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ fontSize: '15px', color: 'var(--primary-hover)', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 4px 0' }}>
                {language === 'TH' ? '📝 แก้ไขข้อมูลประวัติ' : '📝 Edit Study Profile'}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)' }}>{t.formGpaxLabel}</label>
                <input
                  type="number"
                  min="0"
                  max="4"
                  step="0.01"
                  value={formGpax}
                  onChange={(e) => setFormGpax(e.target.value)}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    outline: 'none',
                    backgroundColor: 'var(--bg-main)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px'
                  }}
                  required
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)' }}>{t.formTrackLabel}</label>
                <select
                  value={formTrackSelect}
                  onChange={(e) => setFormTrackSelect(e.target.value)}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    outline: 'none',
                    backgroundColor: 'var(--bg-main)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px'
                  }}
                >
                  <option value="วิทย์-คณิต">{t.trackSciMath}</option>
                  <option value="ศิลป์-คำนวณ">{t.trackArtMath}</option>
                  <option value="ศิลป์-ภาษา">{t.trackArtLang}</option>
                  <option value="ปวช.สายช่าง">{t.trackVocational}</option>
                  <option value="อื่น ๆ">{t.formTrackOther}</option>
                </select>
              </div>

              {formTrackSelect === 'อื่น ๆ' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <input
                    type="text"
                    placeholder={t.customTrackPlaceholder}
                    value={formTrackCustom}
                    onChange={(e) => setFormTrackCustom(e.target.value)}
                    style={{
                      padding: '6px 10px',
                      borderRadius: '6px',
                      border: '1px solid var(--border)',
                      outline: 'none',
                      backgroundColor: 'var(--bg-main)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px'
                    }}
                    required
                  />
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)' }}>{t.formStrongLabel}</label>
                <input
                  type="text"
                  placeholder={t.strongPlaceholder}
                  value={formStrongSubjects}
                  onChange={(e) => setFormStrongSubjects(e.target.value)}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    outline: 'none',
                    backgroundColor: 'var(--bg-main)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)' }}>{t.formWeakLabel}</label>
                <input
                  type="text"
                  placeholder={t.weakPlaceholder}
                  value={formWeakSubjects}
                  onChange={(e) => setFormWeakSubjects(e.target.value)}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    outline: 'none',
                    backgroundColor: 'var(--bg-main)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)' }}>{t.formSummaryLabel}</label>
                <textarea
                  placeholder={t.summaryPlaceholder}
                  value={formSummary}
                  onChange={(e) => setFormSummary(e.target.value)}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    outline: 'none',
                    backgroundColor: 'var(--bg-main)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    minHeight: '60px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', fontSize: '13px' }}
                >
                  {t.cancel}
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', fontSize: '13px' }}
                >
                  {t.save}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </section>
  );
}

// Chevron Right Icon used in quick mock selector
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
