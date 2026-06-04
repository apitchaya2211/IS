import { useState, useMemo, useEffect } from 'react';
import {
  Upload,
  BookOpen,
  GraduationCap,
  Search,
  MapPin,
  X,
  ExternalLink,
  DollarSign,
  Briefcase,
  FileText,
  CheckCircle2,
  RefreshCw,
  AlertTriangle,
  Award,
  Sparkles,
  MessageSquare,
  Send,
  User,
  Globe,
  ChevronDown,
  LogOut
} from 'lucide-react';
import { universitiesData } from './data/universities';
import type { Program, University } from './data/universities';
import LoginPage from './components/LoginPage';
import './App.css';

// กำหนดประเภทข้อมูลประวัติของนักเรียนจากการวิเคราะห์ของ AI
interface StudentProfile {
  gpax: number;
  studyTrack: string;
  strongSubjects: string[];
  weakSubjects: string[];
  summary: string;
}

// ตัวอย่างใบเกรดจำลองเพื่ออำนวยความสะดวกในการกดทดสอบระบบ
const mockTranscripts = [
  {
    name: "ใบเกรด 1: แผนการเรียน วิทย์-คณิต (เกรดเฉลี่ย 3.85)",
    gpax: 3.85,
    studyTrack: "วิทย์-คณิต",
    strongSubjects: ["คณิตศาสตร์", "ฟิสิกส์", "เคมี", "ชีววิทยา"],
    weakSubjects: ["ภาษาอังกฤษ"],
    summary: "ผู้สมัครมีผลการเรียนดีเลิศในกลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์ มีความถนัดด้านการคิดวิเคราะห์เชิงคำนวณและทักษะห้องปฏิบัติการวิทยาศาสตร์สูง เหมาะสำหรับการเข้าศึกษาต่อในสายวิศวกรรมศาสตร์คอมพิวเตอร์ แพทยศาสตร์ วิทยาศาสตร์สุขภาพ หรือวิศวกรรมเฉพาะทาง แนะนำให้เตรียม Portfolio ด้านผลงานวิทยาศาสตร์หรือเข้าร่วมประกวดโครงงานเพื่อยื่นในรอบที่ 1",
    imgUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "ใบเกรด 2: แผนการเรียน ศิลป์-คำนวณ (เกรดเฉลี่ย 3.12)",
    gpax: 3.12,
    studyTrack: "ศิลป์-คำนวณ",
    strongSubjects: ["ภาษาอังกฤษ", "คณิตศาสตร์", "สังคมศึกษา"],
    weakSubjects: ["ฟิสิกส์", "เคมี"],
    summary: "ผู้สมัครมีผลการเรียนระดับดี มีจุดเด่นเด่นชัดด้านภาษาอังกฤษและวิชาการคำนวณทั่วไป เหมาะกับการศึกษาต่อในคณะบริหารธุรกิจ (BBA), เทคโนโลยีสารสนเทศ (IT), เศรษฐศาสตร์ หรือโลจิสติกส์ มีความสามารถในการนำเสนอและการจัดระบบที่ดี สามารถเลือกยื่นได้ทั้งในรอบโควตาและแอดมิชชัน",
    imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "ใบเกรด 3: แผนการเรียน ศิลป์-ทั่วไป/ทุกแผนการเรียน (เกรดเฉลี่ย 2.45)",
    gpax: 2.45,
    studyTrack: "ทุกแผนการเรียน",
    strongSubjects: ["ศิลปะ", "ภาษาไทย", "ภาษาอังกฤษ"],
    weakSubjects: ["คณิตศาสตร์", "วิทยาศาสตร์"],
    summary: "ผู้สมัครมีทักษะความสร้างสรรค์และการสื่อสารเป็นจุดเด่น เหมาะสมอย่างยิ่งกับสาขาสายนิเทศศาสตร์ การผลิตภาพยนตร์ ดิจิทัลมีเดีย ทัศนศิลป์ และศิลปะการแสดง ถึงแม้เกรดเฉลี่ยสะสมจะไม่สูงมาก แต่สามารถสมัครเข้าเรียนในคณะสายสร้างสรรค์ของมหาวิทยาลัยชั้นนำที่เน้นการสอบวิชาเฉพาะ การสัมภาษณ์ หรือการยื่นแฟ้มสะสมผลงาน (Portfolio) ได้เป็นอย่างดี",
    imgUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=60"
  }
];

// ประเภทข้อมูล User Session
interface UserSession {
  name: string;
  email: string;
  picture?: string;
}

function App() {
  // ── Auth State ──
  const [currentUser, setCurrentUser] = useState<UserSession | null>(() => {
    // ตรวจสอบ session ที่บันทึกไว้เมื่อ load แอป
    const stored =
      localStorage.getItem('uni_guide_session') ||
      sessionStorage.getItem('uni_guide_session');
    if (stored) {
      try { return JSON.parse(stored); } catch { return null; }
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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedUniId, setSelectedUniId] = useState<string>("all");
  const [selectedTrack, setSelectedTrack] = useState<string>("all");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  // States เพิ่มเติมสำหรับการป้อน/แก้ไขข้อมูลแผนการเรียน
  const [sidebarTab, setSidebarTab] = useState<'scan' | 'manual'>('scan');
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const [formGpax, setFormGpax] = useState<string>("");
  const [formTrackSelect, setFormTrackSelect] = useState<string>("วิทย์-คณิต");
  const [formTrackCustom, setFormTrackCustom] = useState<string>("");
  const [formStrongSubjects, setFormStrongSubjects] = useState<string>("");
  const [formWeakSubjects, setFormWeakSubjects] = useState<string>("");
  const [formSummary, setFormSummary] = useState<string>("");

  // States สำหรับแชท AI
  const [activeTab, setActiveTab] = useState<'search' | 'chat'>('search');
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: 'สวัสดีค่ะ! ฉันคือผู้ช่วย AI แนะนำการศึกษา มีอะไรให้ฉันช่วยแนะนำเกี่ยวกับการเลือกคณะ มหาวิทยาลัย หรือการเตรียมตัวสอบเข้าไหมคะ? 😊' }
  ]);

  // States สำหรับเปลี่ยนภาษา
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'TH' | 'EN'>('TH');

  // ข้อมูลคำแปลแบบเต็มหน้าเว็บ
  const t = {
    search: language === 'TH' ? 'ค้นหาหลักสูตร' : 'Search Programs',
    chat: language === 'TH' ? 'แชทกับ AI' : 'AI Chat',
    analyzeTitle: language === 'TH' ? 'วิเคราะห์ใบเกรดของคุณ' : 'Analyze Your Transcript',
    analyzeDesc: language === 'TH' ? 'ทดสอบอัปโหลดรูปภาพใบเกรด ปพ.1 หรือสลิปคะแนนเฉลี่ยเพื่อให้อัลกอริทึม AI ดึงข้อมูลเกรดวิเคราะห์สายการเรียนและจับคู่มหาวิทยาลัยให้เหมาะสมกับคุณ' : 'Upload your transcript or score slip for the AI algorithm to analyze your academic background and match you with suitable universities.',
    dragDrop: language === 'TH' ? 'ลากไฟล์รูปภาพมาวางที่นี่' : 'Drag & drop image file here',
    orClick: language === 'TH' ? 'หรือคลิกเพื่อเลือกไฟล์รูปภาพ (JPG, PNG, PDF)' : 'Or click to select an image (JPG, PNG, PDF)',
    processedBy: language === 'TH' ? 'ประมวลผลโดย AI Vision' : 'Processed by AI Vision',
    uploadNew: language === 'TH' ? 'อัปโหลดใหม่' : 'Upload New',
    quickOption: language === 'TH' ? '💡 ตัวเลือกด่วน: เลือกลองสแกนใบเกรดตัวอย่าง' : '💡 Quick Option: Try mock transcripts',
    scanning: language === 'TH' ? '🤖 กำลังสแกนข้อมูลและประเมินเกณฑ์รับสมัคร...' : '🤖 Scanning data and evaluating criteria...',
    analysisResult: language === 'TH' ? 'ผลการวิเคราะห์ข้อมูลผู้เรียน' : 'Student Analysis Result',
    gpax: language === 'TH' ? 'เกรดเฉลี่ยสะสม (GPAX)' : 'Cumulative GPA (GPAX)',
    studyTrack: language === 'TH' ? 'แผนการเรียนมัธยม' : 'Study Track',
    strongSubjects: language === 'TH' ? 'กลุ่มวิชาที่โดดเด่น (คะแนนสูง)' : 'Strong Subjects',
    recommendations: language === 'TH' ? 'คำแนะนำในการเลือกศึกษาต่อ:' : 'Study Recommendations:',
    recommendedPrograms: language === 'TH' ? 'หลักสูตรและสาขาวิชาแนะนำ' : 'Recommended Programs',
    foundAll: language === 'TH' ? 'พบทั้งหมด' : 'Found',
    programsFrom: language === 'TH' ? 'สาขาวิชา จากมหาวิทยาลัยชั้นนำของประเทศ 20 แห่ง' : 'programs from top 20 national universities',
    aiActive: language === 'TH' ? 'เปิดใช้งานระบบวิเคราะห์คุณสมบัติ AI แล้ว' : 'AI Qualification Analysis Active',
    searchPlaceholder: language === 'TH' ? 'ค้นหาชื่อสาขา คณะ มหาวิทยาลัย หรือวิชาชีพที่สนใจ...' : 'Search for programs, faculties, universities, or careers...',
    allUni: language === 'TH' ? 'ทุกมหาวิทยาลัย (20 แห่ง)' : 'All Universities (20)',
    allTracks: language === 'TH' ? 'ทุกแผนการเรียน' : 'All Study Tracks',
    trackSciMath: language === 'TH' ? 'วิทย์-คณิต' : 'Science-Math',
    trackArtMath: language === 'TH' ? 'ศิลป์-คำนวณ' : 'Arts-Math',
    trackArtLang: language === 'TH' ? 'ศิลป์-ภาษา' : 'Arts-Language',
    minGpax: language === 'TH' ? 'เกรดขั้นต่ำ:' : 'Min GPAX:',
    yours: language === 'TH' ? 'ของคุณ:' : 'Yours:',
    viewDetails: language === 'TH' ? 'คลิกดูรายละเอียดหลักสูตร' : 'Click for program details',
    notFoundTitle: language === 'TH' ? 'ไม่พบสาขาวิชาที่ตรงกับเงื่อนไขการค้นหาของคุณ' : 'No programs match your search criteria',
    notFoundDesc: language === 'TH' ? 'ลองเปลี่ยนคำค้นหา หรือเปลี่ยนตัวกรองแผนการเรียนใหม่อีกครั้ง' : 'Try changing your search keywords or filter options',
    aiAdvisorTitle: language === 'TH' ? 'ที่ปรึกษาการศึกษา AI' : 'AI Education Advisor',
    ready24: language === 'TH' ? 'พร้อมให้คำแนะนำ 24 ชั่วโมง' : 'Available 24/7',
    chatPlaceholder: language === 'TH' ? 'พิมพ์คำถามของคุณที่นี่...' : 'Type your question here...',
    closeWindow: language === 'TH' ? 'ปิดหน้าต่าง' : 'Close Window',
    visitWebsite: language === 'TH' ? 'เข้าชมเว็บไซต์คณะ' : 'Visit Faculty Website',
    tuitionFee: language === 'TH' ? 'ค่าเทอมโดยประมาณ' : 'Estimated Tuition Fee',
    admissionTracks: language === 'TH' ? 'แผนการเรียนมัธยมที่รับสมัคร' : 'Accepted Study Tracks',
    tcasRounds: language === 'TH' ? 'รอบรับสมัคร (TCAS)' : 'Admission Rounds (TCAS)',
    programHighlights: language === 'TH' ? 'จุดเด่นของสาขาและรูปแบบการเรียน' : 'Program Highlights',
    requiredSubjects: language === 'TH' ? 'วิชาที่เน้นน้ำหนักคะแนนเป็นพิเศษ' : 'Key Weighted Subjects',
    careers: language === 'TH' ? 'อาชีพหลังสำเร็จการศึกษา' : 'Career Opportunities',
    footer: language === 'TH' ? '© 2026 AI University Guide Thailand - ระบบจำลองการแนะแนวการศึกษาด้วยปัญญาประดิษฐ์ พัฒนาขึ้นสำหรับการทดสอบแอปพลิเคชัน' : '© 2026 AI University Guide Thailand - AI Educational Guidance Simulator, developed for application testing',

    // คำแปลเพิ่มเติมสำหรับแผนการเรียนอื่น/กรอกข้อมูลเอง
    scanTab: language === 'TH' ? '📷 สแกน / ตัวอย่าง' : '📷 Scan / Mocks',
    manualTab: language === 'TH' ? '✍️ กรอกข้อมูลเอง' : '✍️ Manual Entry',
    editProfile: language === 'TH' ? 'แก้ไขประวัติ' : 'Edit Profile',
    save: language === 'TH' ? 'บันทึก' : 'Save',
    cancel: language === 'TH' ? 'ยกเลิก' : 'Cancel',
    saveProfileBtn: language === 'TH' ? 'บันทึกประวัติการเรียน' : 'Save Study Profile',
    formGpaxLabel: language === 'TH' ? 'เกรดเฉลี่ยสะสม (GPAX)' : 'Cumulative GPA (GPAX)',
    formTrackLabel: language === 'TH' ? 'แผนการเรียน' : 'Study Track',
    formTrackOther: language === 'TH' ? 'อื่น ๆ (ระบุเอง)' : 'Other (Specify)',
    formStrongLabel: language === 'TH' ? 'วิชาที่ถนัด / สนใจ (คั่นด้วยจุลภาค ,)' : 'Strong Subjects (comma separated ,)',
    formWeakLabel: language === 'TH' ? 'วิชาที่ต้องการพัฒนา (คั่นด้วยจุลภาค ,)' : 'Weak Subjects (comma separated ,)',
    formSummaryLabel: language === 'TH' ? 'คำอธิบาย / ความถนัด / เป้าหมายเพิ่มเติม' : 'Brief Bio / Target Fields',
    customTrackPlaceholder: language === 'TH' ? 'เช่น ศิลป์-ดนตรี, ศิลป์-กีฬา, คหกรรม' : 'e.g. Arts-Music, Vocational',
    strongPlaceholder: language === 'TH' ? 'เช่น คณิตศาสตร์, ศิลปะ, ภาษาอังกฤษ' : 'e.g. Mathematics, Art, English',
    weakPlaceholder: language === 'TH' ? 'เช่น ฟิสิกส์, เคมี, ภาษาจีน' : 'e.g. Physics, Chemistry, Chinese',
    summaryPlaceholder: language === 'TH' ? 'เช่น สนใจด้านการพัฒนาเกม หรือ มีทักษะด้านการวาดรูป' : 'e.g. Interested in game dev, strong in drawing',
    trackVocational: language === 'TH' ? 'ปวช.สายช่าง' : 'Vocational Engineering',
    filterOtherTracks: language === 'TH' ? 'อื่น ๆ / แผนการเรียนอื่น' : 'Other Study Tracks'
  };

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
    setFormGpax("");
    setFormTrackSelect("วิทย์-คณิต");
    setFormTrackCustom("");
    setFormStrongSubjects("");
    setFormWeakSubjects("");
    setFormSummary("");
  };

  // ฟังก์ชันจัดการบันทึกข้อมูลกรอกด้วยตนเอง
  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const gpaxValue = parseFloat(formGpax);
    if (isNaN(gpaxValue) || gpaxValue < 0 || gpaxValue > 4) {
      alert(language === 'TH' ? 'กรุณากรอกเกรดเฉลี่ยที่ถูกต้อง (0.00 - 4.00)' : 'Please enter a valid GPAX (0.00 - 4.00)');
      return;
    }

    const finalTrack = formTrackSelect === "อื่น ๆ" ? (formTrackCustom.trim() || (language === 'TH' ? 'อื่น ๆ' : 'Other')) : formTrackSelect;
    const strongList = formStrongSubjects.split(',').map(s => s.trim()).filter(s => s !== "");
    const weakList = formWeakSubjects.split(',').map(s => s.trim()).filter(s => s !== "");

    setStudentProfile({
      gpax: gpaxValue,
      studyTrack: finalTrack,
      strongSubjects: strongList.length > 0 ? strongList : (language === 'TH' ? ['ทั่วไป'] : ['General']),
      weakSubjects: weakList.length > 0 ? weakList : [],
      summary: formSummary.trim() || (language === 'TH' ? 'ป้อนข้อมูลประวัติการเรียนแบบกรอกด้วยตนเอง' : 'Manually entered study profile')
    });
    setScanComplete(true);
    setIsEditingProfile(false);
  };

  // ฟังก์ชันจัดการเริ่มการแก้ไขโปรไฟล์
  const handleStartEdit = () => {
    if (!studentProfile) return;
    setFormGpax(studentProfile.gpax.toString());
    
    const standardTracks = ["วิทย์-คณิต", "ศิลป์-คำนวณ", "ศิลป์-ภาษา", "ปวช.สายช่าง"];
    if (standardTracks.includes(studentProfile.studyTrack)) {
      setFormTrackSelect(studentProfile.studyTrack);
      setFormTrackCustom("");
    } else {
      setFormTrackSelect("อื่น ๆ");
      setFormTrackCustom(studentProfile.studyTrack);
    }
    
    setFormStrongSubjects(studentProfile.strongSubjects.join(", "));
    setFormWeakSubjects(studentProfile.weakSubjects.join(", "));
    setFormSummary(studentProfile.summary);
    setIsEditingProfile(true);
  };

  // ฟังก์ชันจัดการบันทึกการแก้ไขโปรไฟล์
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const gpaxValue = parseFloat(formGpax);
    if (isNaN(gpaxValue) || gpaxValue < 0 || gpaxValue > 4) {
      alert(language === 'TH' ? 'กรุณากรอกเกรดเฉลี่ยที่ถูกต้อง (0.00 - 4.00)' : 'Please enter a valid GPAX (0.00 - 4.00)');
      return;
    }

    const finalTrack = formTrackSelect === "อื่น ๆ" ? (formTrackCustom.trim() || (language === 'TH' ? 'อื่น ๆ' : 'Other')) : formTrackSelect;
    const strongList = formStrongSubjects.split(',').map(s => s.trim()).filter(s => s !== "");
    const weakList = formWeakSubjects.split(',').map(s => s.trim()).filter(s => s !== "");

    setStudentProfile({
      gpax: gpaxValue,
      studyTrack: finalTrack,
      strongSubjects: strongList.length > 0 ? strongList : (language === 'TH' ? ['ทั่วไป'] : ['General']),
      weakSubjects: weakList.length > 0 ? weakList : [],
      summary: formSummary.trim() || (language === 'TH' ? 'อัปเดตข้อมูลประวัติการเรียนเรียบร้อยแล้ว' : 'Updated study profile analysis')
    });
    setIsEditingProfile(false);
  };

  // ดึงรายการหลักสูตรทั้งหมดมารวมกันในอาเรย์เดียวพร้อมรายละเอียดมหาวิทยาลัยที่สอดคล้อง
  const allPrograms = useMemo(() => {
    const list: (Program & { university: University })[] = [];
    universitiesData.forEach(uni => {
      uni.programs.forEach(prog => {
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
    return universitiesData.map(uni => ({ id: uni.id, name: uni.name }));
  }, []);

  // จัดการ History API สำหรับปุ่มย้อนกลับของ Browser
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (state) {
        if (state.tab) setActiveTab(state.tab);

        if (state.programId) {
          const prog = allPrograms.find(p => p.id === state.programId);
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
    window.history.pushState({ tab, programId: selectedProgram?.id || null }, '', `?tab=${tab}${selectedProgram ? `&program=${selectedProgram.id}` : ''}`);
  };

  const handleOpenModal = (program: Program) => {
    setSelectedProgram(program);
    window.history.pushState({ tab: activeTab, programId: program.id }, '', `?tab=${activeTab}&program=${program.id}`);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
    window.history.pushState({ tab: activeTab, programId: null }, '', `?tab=${activeTab}`);
  };

  const handleGoHome = () => {
    // 1. ล้างคำค้นหาและตัวกรอง
    setSearchQuery("");
    setSelectedUniId("all");
    setSelectedTrack("all");

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
  const evaluateAdmissionChance = (prog: Program) => {
    if (!studentProfile) return { level: "neutral", label: "ข้อมูลไม่เพียงพอ", score: 0 };

    const { gpax: studentGpax, studyTrack: studentTrack } = studentProfile;

    // 1. ตรวจสอบเงื่อนไขเกรดเฉลี่ยขั้นต่ำ
    const isGpaEligible = studentGpax >= prog.gpaxMinimum;

    // 2. ตรวจสอบแผนการเรียน (สายการเรียน)
    // ถ้าโปรแกรมระบุ "ทุกแผนการเรียน" คือผ่าน
    // หรือถ้าแผนการเรียนของนักเรียนอยู่ในอาเรย์ของสายการเรียนที่รับ
    const isTrackEligible = prog.studyTracks.includes("ทุกแผนการเรียน") ||
      prog.studyTracks.includes(studentTrack);

    if (isGpaEligible && isTrackEligible) {
      // ผ่านทั้งคู่
      return {
        level: "high",
        label: "แนะนำสูงสุด (ตรงเกณฑ์)",
        colorClass: "high",
        bgColor: "#ecfdf5",
        textColor: "#047857",
        borderColor: "#a7f3d0"
      };
    } else if (isTrackEligible && studentGpax >= prog.gpaxMinimum - 0.25) {
      // ตรงสาย แต่เกรดขาดไปนิดหน่อย (ไม่เกิน 0.25)
      return {
        level: "match",
        label: "มีโอกาสลุ้น (เกรดใกล้เคียง/ตรงสาย)",
        colorClass: "match",
        bgColor: "#fef3c7",
        textColor: "#b45309",
        borderColor: "#fde68a"
      };
    } else if (!isGpaEligible && isTrackEligible) {
      // เกรดไม่ถึงแต่สายการเรียนตรง
      return {
        level: "low",
        label: "ท้าทาย (เกรดต่ำกว่าเกณฑ์)",
        colorClass: "neutral",
        bgColor: "#fef2f2",
        textColor: "#991b1b",
        borderColor: "#fee2e2"
      };
    } else {
      // ไม่ผ่านเกณฑ์
      return {
        level: "incompatible",
        label: "ไม่สอดคล้อง (แผนการเรียนไม่ตรง)",
        colorClass: "neutral",
        bgColor: "#f1f5f9",
        textColor: "#475569",
        borderColor: "#cbd5e1"
      };
    }
  };

  // คัดกรองและจัดเรียงข้อมูลหลักสูตรตามคำค้นหา ตัวเลือกฟิลเตอร์ และผลการวิเคราะห์เกรด
  const filteredPrograms = useMemo(() => {
    return allPrograms.filter(prog => {
      // กรองจากคำค้นหา (ชื่อสาขา คณะ มหาวิทยาลัย อาชีพ หรือจุดเด่น)
      const matchesSearch =
        prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.facultyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.highlights.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.careers.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

      // กรองจากมหาวิทยาลัยที่เลือก
      const matchesUni = selectedUniId === "all" || prog.university.id === selectedUniId;

      // กรองจากแผนการเรียนที่ระบุในหลักสูตร
      const matchesTrack = selectedTrack === "all" ||
        prog.studyTracks.includes(selectedTrack) ||
        prog.studyTracks.includes("ทุกแผนการเรียน");

      return matchesSearch && matchesUni && matchesTrack;
    }).sort((a, b) => {
      // ถ้านักเรียนทำการสแกนเกรดแล้ว ให้จัดเรียงโดยเอาสาขาที่มีระดับ "แนะนำสูงสุด" ขึ้นก่อนตามลำดับ
      if (studentProfile) {
        const chanceA = evaluateAdmissionChance(a).level;
        const chanceB = evaluateAdmissionChance(b).level;

        const scoreMap: Record<string, number> = { "high": 4, "match": 3, "low": 2, "incompatible": 1 };
        return (scoreMap[chanceB] || 0) - (scoreMap[chanceA] || 0);
      }
      // หากยังไม่ได้สแกนเกรด ให้เรียงลำดับตามความนิยม/อันดับมหาวิทยาลัยหลัก
      return a.university.rank - b.university.rank;
    });
  }, [allPrograms, searchQuery, selectedUniId, selectedTrack, studentProfile]);

  // ค้นหารายละเอียดของมหาวิทยาลัยที่เชื่อมโยงกับสาขาเพื่อแสดงใน Modal
  const selectedUniDetail = useMemo(() => {
    if (!selectedProgram) return null;
    return universitiesData.find(u => u.id === selectedProgram.id.split('-')[0]) || null;
  }, [selectedProgram]);

  // ฟังก์ชันส่งข้อความแชท
  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const newMessages = [...messages, { role: 'user' as const, content: chatInput }];
    setMessages(newMessages);
    setChatInput("");

    // จำลองการตอบกลับของ AI
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'ai',
        content: 'นี่คือระบบแชทแบบร่างสำหรับทดสอบ UI ค่ะ ในเวอร์ชันจริง AI จะสามารถวิเคราะห์เกรด แนะนำคณะที่เหมาะสม พร้อมช่วยวางแผนการทำ Portfolio สำหรับยื่นเข้ามหาวิทยาลัยได้แบบเจาะจงบุคคลค่ะ 🎓'
      }]);
    }, 1000);
  };

  // ── Auth Guard: แสดง LoginPage ถ้ายังไม่ได้ล็อกอิน ──
  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      {/* 1. Header แถบด้านบน */}
      <header className="app-header">
        <div
          className="header-logo"
          onClick={handleGoHome}
          style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        >
          <div className="header-logo-icon">AI</div>
          <div>
            <span style={{ color: '#1e1b15' }}>University</span>
            <span style={{ color: '#d97706', marginLeft: '5px' }}>Guide TH</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="header-nav nav-tabs">
            <button
              className={`nav-tab ${activeTab === 'search' ? 'active' : ''}`}
              onClick={() => handleChangeTab('search')}
            >
              <Search size={16} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'text-bottom' }} />
              {t.search}
            </button>
            <button
              className={`nav-tab ${activeTab === 'chat' ? 'active' : ''}`}
              onClick={() => handleChangeTab('chat')}
            >
              <MessageSquare size={16} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'text-bottom' }} />
              {t.chat}
            </button>
          </div>

          {/* Language Switcher */}
          <div className="lang-switcher-container" style={{ position: 'relative' }}>
            <button
              className="lang-switcher-btn"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              onBlur={() => setTimeout(() => setIsLangMenuOpen(false), 200)}
            >
              <Globe size={18} />
              <span>{language}</span>
              <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: isLangMenuOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>

            {isLangMenuOpen && (
              <div className="lang-dropdown">
                <button
                  className={`lang-option ${language === 'TH' ? 'active' : ''}`}
                  onMouseDown={() => { setLanguage('TH'); setIsLangMenuOpen(false); }}
                >
                  🇹🇭 ไทย (TH)
                </button>
                <button
                  className={`lang-option ${language === 'EN' ? 'active' : ''}`}
                  onMouseDown={() => { setLanguage('EN'); setIsLangMenuOpen(false); }}
                >
                  🇬🇧 English (EN)
                </button>
              </div>
            )}
          </div>

          {/* User Badge + Logout */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="user-badge">
              <div className="user-badge-avatar" style={{ overflow: 'hidden', padding: 0 }}>
                {currentUser.picture ? (
                  <img 
                    src={currentUser.picture} 
                    alt={currentUser.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : (
                  currentUser.name.charAt(0).toUpperCase()
                )}
              </div>
              <span style={{ maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentUser.name}
              </span>
            </div>
            <button
              className="logout-btn"
              onClick={handleLogout}
              title="ออกจากระบบ"
              id="logout-btn"
            >
              <LogOut size={14} />
              <span>ออกจากระบบ</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. เนื้อหาหน้าจอหลัก */}
      <main className="main-content" style={activeTab === 'chat' ? { display: 'block', maxWidth: '1000px' } : {}}>

        {activeTab === 'search' ? (
          <>
            {/* คอลัมน์ซ้าย: เครื่องมือวิเคราะห์เกรด */}
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
                <div className="sidebar-tabs" style={{ display: 'flex', gap: '8px', marginBottom: '16px', background: 'var(--bg-main)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <button
                    className={`sidebar-tab-btn ${sidebarTab === 'scan' ? 'active' : ''}`}
                    onClick={() => { setSidebarTab('scan'); setIsEditingProfile(false); }}
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
                    className={`sidebar-tab-btn ${sidebarTab === 'manual' ? 'active' : ''}`}
                    onClick={() => { setSidebarTab('manual'); setIsEditingProfile(false); }}
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
                      <div
                        className="upload-zone"
                        onClick={() => handleScanMock(mockTranscripts[0])}
                      >
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
                        style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '14px' }}
                        required
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-main)' }}>{t.formTrackLabel}</label>
                      <select
                        value={formTrackSelect}
                        onChange={(e) => setFormTrackSelect(e.target.value)}
                        style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '14px' }}
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
                          style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '14px' }}
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
                        style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '14px' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-main)' }}>{t.formWeakLabel}</label>
                      <input
                        type="text"
                        placeholder={t.weakPlaceholder}
                        value={formWeakSubjects}
                        onChange={(e) => setFormWeakSubjects(e.target.value)}
                        style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '14px' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-main)' }}>{t.formSummaryLabel}</label>
                      <textarea
                        placeholder={t.summaryPlaceholder}
                        value={formSummary}
                        onChange={(e) => setFormSummary(e.target.value)}
                        style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '14px', minHeight: '80px', resize: 'vertical' }}
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
                          style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
                          required
                        />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)' }}>{t.formTrackLabel}</label>
                        <select
                          value={formTrackSelect}
                          onChange={(e) => setFormTrackSelect(e.target.value)}
                          style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
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
                            style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
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
                          style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
                        />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)' }}>{t.formWeakLabel}</label>
                        <input
                          type="text"
                          placeholder={t.weakPlaceholder}
                          value={formWeakSubjects}
                          onChange={(e) => setFormWeakSubjects(e.target.value)}
                          style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
                        />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)' }}>{t.formSummaryLabel}</label>
                        <textarea
                          placeholder={t.summaryPlaceholder}
                          value={formSummary}
                          onChange={(e) => setFormSummary(e.target.value)}
                          style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'var(--bg-main)', fontFamily: 'var(--font-sans)', fontSize: '13px', minHeight: '60px', resize: 'vertical' }}
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

            {/* คอลัมน์ขวา: ผลการแนะนำหลักสูตร */}
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', backgroundColor: 'var(--primary-bg)', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <Award size={16} color="var(--primary)" />
                    <span>{t.aiActive}</span>
                  </div>
                )}
              </div>

              {/* แถบตัวกรองและช่องค้นหา */}
              <div className="search-filter-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 1, backgroundColor: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: '8px', padding: '0 10px' }}>
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

                <select
                  className="filter-select"
                  value={selectedUniId}
                  onChange={(e) => setSelectedUniId(e.target.value)}
                >
                  <option value="all">{t.allUni}</option>
                  {universitiesList.map(uni => (
                    <option key={uni.id} value={uni.id}>{uni.name}</option>
                  ))}
                </select>

                <select
                  className="filter-select"
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value)}
                >
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
                  filteredPrograms.map((prog) => {
                    const admissionChance = evaluateAdmissionChance(prog);

                    return (
                      <div
                        key={prog.id}
                        className="program-card glass-card animate-fade-in"
                        style={{ '--badge-color': prog.university.logoColor } as React.CSSProperties}
                        onClick={() => handleOpenModal(prog)}
                      >
                        <div className="program-card-header">
                          <div>
                            <div className="uni-badge-row">
                              <span
                                className="uni-logo-icon"
                                style={{ backgroundColor: prog.university.logoColor }}
                              >
                                {prog.university.abbreviation.substring(0, 3)}
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
                          <span className={`meta-badge ${studentProfile
                            ? (studentProfile.gpax >= prog.gpaxMinimum ? 'gpax-green' : 'gpax-red')
                            : 'gpax-yellow'
                            }`}>
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

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                          <div className="tag-list">
                            {prog.studyTracks.map((track, idx) => (
                              <span key={idx} className="tag-pill">{track}</span>
                            ))}
                          </div>
                          <span style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {t.viewDetails}
                            <ChevronRightIcon size={14} />
                          </span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="glass-card" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
                    <AlertTriangle size={36} color="var(--primary)" style={{ margin: '0 auto 12px' }} />
                    <p style={{ fontWeight: 500, fontSize: '16px', color: '#1e1b15' }}>{t.notFoundTitle}</p>
                    <p style={{ fontSize: '14px', marginTop: '4px' }}>{t.notFoundDesc}</p>
                  </div>
                )}
              </div>
            </section>
          </>
        ) : (
          <div className="chat-container animate-fade-in">
            <div className="chat-header">
              <div className="header-logo-icon" style={{ width: 32, height: 32, fontSize: 14 }}>AI</div>
              <div>
                <h2 style={{ margin: 0, fontSize: 16 }}>{t.aiAdvisorTitle}</h2>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--text-muted)' }}>{t.ready24}</p>
              </div>
            </div>

            <div className="chat-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`chat-message ${msg.role}`}>
                  <div className={`chat-avatar ${msg.role}`}>
                    {msg.role === 'ai' ? <Sparkles size={18} /> : <User size={18} />}
                  </div>
                  <div className="chat-bubble">
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="chat-input-area">
              <input
                type="text"
                className="chat-input"
                placeholder={t.chatPlaceholder}
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button className="chat-send-btn" onClick={handleSendMessage}>
                <Send size={18} />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 3. Modal แสดงรายละเอียดคณะ/สาขาที่สนใจ */}
      {selectedProgram && selectedUniDetail && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>
              <X size={16} />
            </button>

            <div className="modal-header">
              <div className="uni-badge-row">
                <span
                  className="uni-logo-icon"
                  style={{ backgroundColor: selectedUniDetail.logoColor, width: '28px', height: '28px', fontSize: '11px' }}
                >
                  {selectedUniDetail.abbreviation}
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
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontStyle: 'italic', backgroundColor: 'var(--bg-main)', padding: '10px 14px', borderRadius: '8px', borderLeft: `3px solid ${selectedUniDetail.logoColor}` }}>
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
                    {selectedProgram.studyTracks.join(", ")}
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-label">{t.tcasRounds}</div>
                  <div className="info-item-value" style={{ fontSize: '13px' }}>
                    {selectedProgram.tcasRounds.join(", ")}
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
                      <span key={i} style={{ fontSize: '12px', backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--border)' }}>
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
              <button
                onClick={handleCloseModal}
                className="btn-secondary"
              >
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
      )}

      {/* 4. Footer ท้ายเว็บ */}
      <footer className="app-footer" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', padding: '24px 16px', textAlign: 'center', marginTop: 'auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          {t.footer}
        </p>
      </footer>
    </div>
  );
}

// ไอคอนลูกศรขนาดเล็กสำหรับความสะดวก
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

export default App;
