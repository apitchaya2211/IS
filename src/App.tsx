import React, { useState, useMemo, useEffect } from 'react';
import { universitiesData } from './data/universities';
import type { Program, University } from './data/universities';
import type { StudentProfile, UserSession } from './types';

import { mockTranscripts } from './constants/mockData';
import { translations } from './constants/translations';
import { evaluateAdmissionChance } from './utils/evaluation';

import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProgramGrid from './components/ProgramGrid';
import ProgramDetailsModal from './components/ProgramDetailsModal';
import ChatAdvisor from './components/ChatAdvisor';

import './App.css';

function App() {
  // ── Auth State ──
  const [currentUser, setCurrentUser] = useState<UserSession | null>(() => {
    // ตรวจสอบ session ที่บันทึกไว้เมื่อ load แอป
    const stored =
      localStorage.getItem('uni_guide_session') ||
      sessionStorage.getItem('uni_guide_session');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return null;
      }
    }
    return null;
  });

  const handleLogin = (user: UserSession) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('uni_guide_session');
    sessionStorage.removeItem('uni_guide_session');
    setCurrentUser(null);
  };

  // States สำหรับแอปพลิเคชัน
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanComplete, setScanComplete] = useState<boolean>(false);
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUniId, setSelectedUniId] = useState<string>('all');
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  // States เพิ่มเติมสำหรับการป้อน/แก้ไขข้อมูลแผนการเรียน
  const [sidebarTab, setSidebarTab] = useState<'scan' | 'manual'>('scan');
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const [formGpax, setFormGpax] = useState<string>('');
  const [formTrackSelect, setFormTrackSelect] = useState<string>('วิทย์-คณิต');
  const [formTrackCustom, setFormTrackCustom] = useState<string>('');
  const [formStrongSubjects, setFormStrongSubjects] = useState<string>('');
  const [formWeakSubjects, setFormWeakSubjects] = useState<string>('');
  const [formSummary, setFormSummary] = useState<string>('');

  // States สำหรับแชท AI
  const [activeTab, setActiveTab] = useState<'search' | 'chat'>('search');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([
    {
      role: 'ai',
      content: 'สวัสดีค่ะ! ฉันคือผู้ช่วย AI แนะนำการศึกษา มีอะไรให้ฉันช่วยแนะนำเกี่ยวกับการเลือกคณะ มหาวิทยาลัย หรือการเตรียมตัวสอบเข้าไหมคะ? 😊'
    }
  ]);

  // States สำหรับเปลี่ยนภาษา
  const [language, setLanguage] = useState<'TH' | 'EN'>('TH');

  // ดึงคำแปลตามภาษาปัจจุบัน
  const t = translations[language];

  // ฟังก์ชันสแกนใบเกรด
  const handleScanMock = (transcript: typeof mockTranscripts[0]) => {
    setSelectedFile(transcript.imgUrl);
    setIsScanning(true);
    setScanComplete(false);
    setStudentProfile(null);

    // จำลองระยะเวลาในการวิเคราะห์ด้วย AI 2.5 วินาที
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      setStudentProfile({
        gpax: transcript.gpax,
        studyTrack: transcript.studyTrack,
        strongSubjects: transcript.strongSubjects,
        weakSubjects: transcript.weakSubjects,
        summary: transcript.summary
      });
    }, 2500);
  };

  // ฟังก์ชันรีเซ็ตข้อมูลการสแกนเพื่ออัปโหลดใหม่
  const handleReset = () => {
    setSelectedFile(null);
    setScanComplete(false);
    setStudentProfile(null);
    setIsScanning(false);
    setIsEditingProfile(false);
    setFormGpax('');
    setFormTrackSelect('วิทย์-คณิต');
    setFormTrackCustom('');
    setFormStrongSubjects('');
    setFormWeakSubjects('');
    setFormSummary('');
  };

  // ฟังก์ชันจัดการบันทึกข้อมูลกรอกด้วยตนเอง
  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const gpaxValue = parseFloat(formGpax);
    if (isNaN(gpaxValue) || gpaxValue < 0 || gpaxValue > 4) {
      alert(
        language === 'TH'
          ? 'กรุณากรอกเกรดเฉลี่ยที่ถูกต้อง (0.00 - 4.00)'
          : 'Please enter a valid GPAX (0.00 - 4.00)'
      );
      return;
    }

    const finalTrack =
      formTrackSelect === 'อื่น ๆ'
        ? formTrackCustom.trim() || (language === 'TH' ? 'อื่น ๆ' : 'Other')
        : formTrackSelect;
    const strongList = formStrongSubjects
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s !== '');
    const weakList = formWeakSubjects
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s !== '');

    setStudentProfile({
      gpax: gpaxValue,
      studyTrack: finalTrack,
      strongSubjects: strongList.length > 0 ? strongList : language === 'TH' ? ['ทั่วไป'] : ['General'],
      weakSubjects: weakList.length > 0 ? weakList : [],
      summary:
        formSummary.trim() ||
        (language === 'TH' ? 'ป้อนข้อมูลประวัติการเรียนแบบกรอกด้วยตนเอง' : 'Manually entered study profile')
    });
    setScanComplete(true);
    setIsEditingProfile(false);
  };

  // ฟังก์ชันจัดการเริ่มการแก้ไขโปรไฟล์
  const handleStartEdit = () => {
    if (!studentProfile) return;
    setFormGpax(studentProfile.gpax.toString());

    const standardTracks = ['วิทย์-คณิต', 'ศิลป์-คำนวณ', 'ศิลป์-ภาษา', 'ปวช.สายช่าง'];
    if (standardTracks.includes(studentProfile.studyTrack)) {
      setFormTrackSelect(studentProfile.studyTrack);
      setFormTrackCustom('');
    } else {
      setFormTrackSelect('อื่น ๆ');
      setFormTrackCustom(studentProfile.studyTrack);
    }

    setFormStrongSubjects(studentProfile.strongSubjects.join(', '));
    setFormWeakSubjects(studentProfile.weakSubjects.join(', '));
    setFormSummary(studentProfile.summary);
    setIsEditingProfile(true);
  };

  // ฟังก์ชันจัดการบันทึกการแก้ไขโปรไฟล์
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const gpaxValue = parseFloat(formGpax);
    if (isNaN(gpaxValue) || gpaxValue < 0 || gpaxValue > 4) {
      alert(
        language === 'TH'
          ? 'กรุณากรอกเกรดเฉลี่ยที่ถูกต้อง (0.00 - 4.00)'
          : 'Please enter a valid GPAX (0.00 - 4.00)'
      );
      return;
    }

    const finalTrack =
      formTrackSelect === 'อื่น ๆ'
        ? formTrackCustom.trim() || (language === 'TH' ? 'อื่น ๆ' : 'Other')
        : formTrackSelect;
    const strongList = formStrongSubjects
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s !== '');
    const weakList = formWeakSubjects
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s !== '');

    setStudentProfile({
      gpax: gpaxValue,
      studyTrack: finalTrack,
      strongSubjects: strongList.length > 0 ? strongList : language === 'TH' ? ['ทั่วไป'] : ['General'],
      weakSubjects: weakList.length > 0 ? weakList : [],
      summary:
        formSummary.trim() ||
        (language === 'TH' ? 'อัปเดตข้อมูลประวัติการเรียนเรียบร้อยแล้ว' : 'Updated study profile analysis')
    });
    setIsEditingProfile(false);
  };

  // ดึงรายการหลักสูตรทั้งหมดมารวมกันในอาเรย์เดียวพร้อมรายละเอียดมหาวิทยาลัยที่สอดคล้อง
  const allPrograms = useMemo(() => {
    const list: Array<Program & { university: University }> = [];
    universitiesData.forEach((uni) => {
      uni.programs.forEach((prog) => {
        list.push({
          ...prog,
          university: uni
        });
      });
    });
    return list;
  }, []);

  // ดึงรายชื่อมหาวิทยาลัยที่มีอยู่ทั้งหมดเพื่อไปใช้ทำตัวกรอง
  const universitiesList = useMemo(() => {
    return universitiesData.map((uni) => ({ id: uni.id, name: uni.name }));
  }, []);

  // จัดการ History API สำหรับปุ่มย้อนกลับของ Browser
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (state) {
        if (state.tab) setActiveTab(state.tab);

        if (state.programId) {
          const prog = allPrograms.find((p) => p.id === state.programId);
          setSelectedProgram(prog || null);
        } else {
          setSelectedProgram(null);
        }
      } else {
        setActiveTab('search');
        setSelectedProgram(null);
      }
    };

    // บันทึก State เริ่มต้นถ้ายังไม่มี
    if (!window.history.state) {
      window.history.replaceState({ tab: 'search', programId: null }, '', '?tab=search');
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [allPrograms]);

  const handleChangeTab = (tab: 'search' | 'chat') => {
    setActiveTab(tab);
    window.history.pushState(
      { tab, programId: selectedProgram?.id || null },
      '',
      `?tab=${tab}${selectedProgram ? `&program=${selectedProgram.id}` : ''}`
    );
  };

  const handleOpenModal = (program: Program) => {
    setSelectedProgram(program);
    window.history.pushState(
      { tab: activeTab, programId: program.id },
      '',
      `?tab=${activeTab}&program=${program.id}`
    );
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
    window.history.pushState({ tab: activeTab, programId: null }, '', `?tab=${activeTab}`);
  };

  const handleGoHome = () => {
    // 1. ล้างคำค้นหาและตัวกรอง
    setSearchQuery('');
    setSelectedUniId('all');
    setSelectedTrack('all');

    // 2. ล้างภาพใบเกรดและผลวิเคราะห์ที่สแกนค้างไว้
    handleReset();

    // 3. ปิดหน้าต่าง (Modal) และพากลับมาแท็บ 'ค้นหา'
    setSelectedProgram(null);
    if (activeTab !== 'search') {
      handleChangeTab('search');
    } else {
      window.history.replaceState({ tab: 'search', programId: null }, '', '?tab=search');
    }

    // 4. เลื่อนหน้าจอกลับไปบนสุด
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ฟังก์ชันคำนวณหาโอกาสในการเข้าศึกษาต่อตามข้อมูลผลสแกนใบเกรด
  const evaluateAdmissionChanceWrapper = (prog: Program) => {
    return evaluateAdmissionChance(prog, studentProfile, language);
  };

  // คัดกรองและจัดเรียงข้อมูลหลักสูตรตามคำค้นหา ตัวเลือกฟิลเตอร์ และผลการวิเคราะห์เกรด
  const filteredPrograms = useMemo(() => {
    return allPrograms
      .filter((prog) => {
        // กรองจากคำค้นหา (ชื่อสาขา คณะ มหาวิทยาลัย อาชีพ หรือจุดเด่น)
        const matchesSearch =
          prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prog.facultyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prog.university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prog.highlights.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prog.careers.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

        // กรองจากมหาวิทยาลัยที่เลือก
        const matchesUni = selectedUniId === 'all' || prog.university.id === selectedUniId;

        // กรองจากแผนการเรียนที่ระบุในหลักสูตร
        const matchesTrack =
          selectedTrack === 'all' ||
          prog.studyTracks.includes(selectedTrack) ||
          prog.studyTracks.includes('ทุกแผนการเรียน');

        return matchesSearch && matchesUni && matchesTrack;
      })
      .sort((a, b) => {
        // ถ้านักเรียนทำการสแกนเกรดแล้ว ให้จัดเรียงโดยเอาสาขาที่มีระดับ "แนะนำสูงสุด" ขึ้นก่อนตามลำดับ
        if (studentProfile) {
          const chanceA = evaluateAdmissionChance(a, studentProfile, language).level;
          const chanceB = evaluateAdmissionChance(b, studentProfile, language).level;

          const scoreMap: Record<string, number> = { high: 4, match: 3, low: 2, incompatible: 1 };
          return (scoreMap[chanceB] || 0) - (scoreMap[chanceA] || 0);
        }
        // หากยังไม่ได้สแกนเกรด ให้เรียงลำดับตามความนิยม/อันดับมหาวิทยาลัยหลัก
        return a.university.rank - b.university.rank;
      });
  }, [allPrograms, searchQuery, selectedUniId, selectedTrack, studentProfile, language]);

  // ค้นหารายละเอียดของมหาวิทยาลัยที่เชื่อมโยงกับสาขาเพื่อแสดงใน Modal
  const selectedUniDetail = useMemo(() => {
    if (!selectedProgram) return null;
    return universitiesData.find((u) => u.id === selectedProgram.id.split('-')[0]) || null;
  }, [selectedProgram]);

  // ฟังก์ชันส่งข้อความแชท
  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const newMessages = [...messages, { role: 'user' as const, content: chatInput }];
    setMessages(newMessages);
    setChatInput('');

    // จำลองการตอบกลับของ AI
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          content:
            language === 'TH'
              ? 'นี่คือระบบแชทแบบร่างสำหรับทดสอบ UI ค่ะ ในเวอร์ชันจริง AI จะสามารถวิเคราะห์เกรด แนะนำคณะที่เหมาะสม พร้อมช่วยวางแผนการทำ Portfolio สำหรับยื่นเข้ามหาวิทยาลัยได้แบบเจาะจงบุคคลค่ะ 🎓'
              : 'This is a mock advisor chat. In the production version, AI will analyze your transcripts, suggest colleges, and help you customize a portfolio strategy. 🎓'
        }
      ]);
    }, 1000);
  };

  // ── Auth Guard: แสดง LoginPage ถ้ายังไม่ได้ล็อกอิน ──
  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      {/* 1. Header แถบด้านบน */}
      <Header
        currentUser={currentUser}
        onLogout={handleLogout}
        activeTab={activeTab}
        onChangeTab={handleChangeTab}
        language={language}
        setLanguage={setLanguage}
        onGoHome={handleGoHome}
        t={t}
      />

      {/* 2. เนื้อหาหน้าจอหลัก */}
      <main className="main-content" style={activeTab === 'chat' ? { display: 'block', maxWidth: '1000px' } : {}}>
        {activeTab === 'search' ? (
          <>
            {/* คอลัมน์ซ้าย: เครื่องมือวิเคราะห์เกรด */}
            <Sidebar
              studentProfile={studentProfile}
              scanComplete={scanComplete}
              isScanning={isScanning}
              selectedFile={selectedFile}
              language={language}
              t={t}
              mockTranscripts={mockTranscripts}
              handleScanMock={handleScanMock}
              handleReset={handleReset}
              sidebarTab={sidebarTab}
              setSidebarTab={setSidebarTab}
              isEditingProfile={isEditingProfile}
              setIsEditingProfile={setIsEditingProfile}
              formGpax={formGpax}
              setFormGpax={setFormGpax}
              formTrackSelect={formTrackSelect}
              setFormTrackSelect={setFormTrackSelect}
              formTrackCustom={formTrackCustom}
              setFormTrackCustom={setFormTrackCustom}
              formStrongSubjects={formStrongSubjects}
              setFormStrongSubjects={setFormStrongSubjects}
              formWeakSubjects={formWeakSubjects}
              setFormWeakSubjects={setFormWeakSubjects}
              formSummary={formSummary}
              setFormSummary={setFormSummary}
              handleManualSubmit={handleManualSubmit}
              handleStartEdit={handleStartEdit}
              handleSaveEdit={handleSaveEdit}
            />

            {/* คอลัมน์ขวา: ผลการแนะนำหลักสูตร */}
            <ProgramGrid
              filteredPrograms={filteredPrograms}
              studentProfile={studentProfile}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedUniId={selectedUniId}
              setSelectedUniId={setSelectedUniId}
              selectedTrack={selectedTrack}
              setSelectedTrack={setSelectedTrack}
              universitiesList={universitiesList}
              handleOpenModal={handleOpenModal}
              evaluateAdmissionChance={evaluateAdmissionChanceWrapper}
              t={t}
            />
          </>
        ) : (
          /* ห้องแชทอัจฉริยะ */
          <ChatAdvisor
            messages={messages}
            chatInput={chatInput}
            setChatInput={setChatInput}
            handleSendMessage={handleSendMessage}
            t={t}
          />
        )}
      </main>

      {/* 3. Modal แสดงรายละเอียดคณะ/สาขาที่สนใจ */}
      {selectedProgram && selectedUniDetail && (
        <ProgramDetailsModal
          selectedProgram={selectedProgram}
          selectedUniDetail={selectedUniDetail}
          onClose={handleCloseModal}
          t={t}
        />
      )}

      {/* 4. Footer ท้ายเว็บ */}
      <footer
        className="app-footer"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderTop: '1px solid var(--border)',
          padding: '24px 16px',
          textAlign: 'center',
          marginTop: 'auto'
        }}
      >
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
