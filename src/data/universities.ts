export interface Program {
  id: string;
  name: string; // ชื่อสาขา
  facultyName: string; // ชื่อคณะ
  facultyWebsite?: string; // เว็บไซต์คณะ
  gpaxMinimum: number; // GPAX ขั้นต่ำ
  studyTracks: string[]; // แผนการเรียนที่รับ เช่น ["วิทย์-คณิต", "ศิลป์-คำนวณ", "ทุกแผนการเรียน"]
  tuitionFee: string; // ค่าเทอม
  tcasRounds: string[]; // รอบ TCAS ที่เปิดรับ
  careers: string[]; // อาชีพหลังเรียนจบ
  highlights: string; // จุดเด่นของสาขา
  requiredSubjects?: string[]; // วิชาเน้นเป็นพิเศษ
}

export interface University {
  id: string;
  name: string;
  englishName: string;
  abbreviation: string;
  logoColor: string; // สำหรับวาด UI Icon
  logoUrl?: string;  // URL ตรามหาวิทยาลัย
  location: string;
  description: string;
  website: string;
  rank: number;
  programs: Program[];
}

export const universitiesData: University[] = [
  {
    id: "chula",
    name: "จุฬาลงกรณ์มหาวิทยาลัย",
    englishName: "Chulalongkorn University",
    abbreviation: "CHULA",
    logoColor: "#E05A88", // สีชมพูจุฬา
    logoUrl: "/logos/chula.svg",
    location: "กรุงเทพมหานคร",
    description: "มหาวิทยาลัยแห่งแรกของประเทศไทย โดดเด่นด้านวิชาการ วิจัย และเครือข่ายศิษย์เก่าที่แข็งแกร่งในทุกวงการ",
    website: "https://www.chula.ac.th",
    rank: 1,
    programs: [
      {
        id: "chula-eng-comp",
        name: "วิศวกรรมคอมพิวเตอร์",
        facultyName: "คณะวิศวกรรมศาสตร์",
        facultyWebsite: "https://www.eng.chula.ac.th",
        gpaxMinimum: 3.25,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "21,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["Software Engineer", "AI Developer", "Data Scientist", "System Analyst"],
        highlights: "หลักสูตรระดับแนวหน้าของประเทศ เน้นวิศวกรรมซอฟต์แวร์ ฮาร์ดแวร์ และเทคโนโลยีปัญญาประดิษฐ์ระดับลึก",
        requiredSubjects: ["คณิตศาสตร์", "ฟิสิกส์", "ภาษาอังกฤษ"]
      },
      {
        id: "chula-med",
        name: "แพทยศาสตรบัณฑิต",
        facultyName: "คณะแพทยศาสตร์",
        facultyWebsite: "https://md.chula.ac.th",
        gpaxMinimum: 3.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "21,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Admission (กสพท)"],
        careers: ["แพทย์ทั่วไป", "แพทย์เฉพาะทาง", "นักวิจัยทางการแพทย์"],
        highlights: "เรียนร่วมกับโรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย เทคโนโลยีการแพทย์ทันสมัยและโอกาสทำงานวิจัยระดับโลก",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์", "คณิตศาสตร์"]
      },
      {
        id: "chula-bba",
        name: "บริหารธุรกิจบัณฑิต (หลักสูตรนานาชาติ - BBA)",
        facultyName: "คณะพาณิชยศาสตร์และการบัญชี",
        gpaxMinimum: 3.00,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ", "ศิลป์-ภาษา"],
        tuitionFee: "135,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Admission"],
        careers: ["Investment Banker", "Business Consultant", "Brand Manager", "Entrepreneur"],
        highlights: "หลักสูตรอินเตอร์ชั้นนำของไทย สังคมนานาชาติ พร้อมคอนเนกชันกับภาคธุรกิจระดับสากล",
        requiredSubjects: ["ภาษาอังกฤษ", "คณิตศาสตร์"]
      }
    ,
      {
        id: "chula-arts-eng",
        name: "ภาษาอังกฤษ",
        facultyName: "คณะอักษรศาสตร์",
        facultyWebsite: "https://www.arts.chula.ac.th",
        gpaxMinimum: 3.00,
        studyTracks: ["ศิลป์-ภาษา", "ศิลป์-คำนวณ", "วิทย์-คณิต"],
        tuitionFee: "17,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["ล่าม", "นักแปล", "นักวิชาการต่างประเทศ", "นักเขียน/คอนเทนต์ครีเอเตอร์"],
        highlights: "มุ่งเน้นความเป็นเลิศทางด้านภาษาอังกฤษ วรรณคดี และการคิดวิเคราะห์เชิงลึกระดับสากล",
        requiredSubjects: ["ภาษาอังกฤษ", "ภาษาไทย"]
      },
      {
        id: "chula-sci-chem",
        name: "เคมี",
        facultyName: "คณะวิทยาศาสตร์",
        facultyWebsite: "http://www.chemistry.sc.chula.ac.th",
        gpaxMinimum: 2.75,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "21,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักวิจัยเคมี", "นักควบคุมคุณภาพ (QA/QC)", "นักนิติวิทยาศาสตร์"],
        highlights: "เน้นกระบวนการทดลองเคมีระดับลึก การผลิตนวัตกรรมสารเคมี และการพัฒนาสิ่งแวดล้อมอย่างยั่งยืน",
        requiredSubjects: ["เคมี", "คณิตศาสตร์", "ฟิสิกส์"]
      },
      {
        id: "chula-comm-arts",
        name: "การสื่อสารมวลชน",
        facultyName: "คณะนิเทศศาสตร์",
        facultyWebsite: "https://www.commarts.chula.ac.th",
        gpaxMinimum: 2.75,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "21,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Admission"],
        careers: ["ผู้สื่อข่าว", "ผู้ผลิตสื่อ/โปรดิวเซอร์", "นักประชาสัมพันธ์", "นักการตลาดดิจิทัล"],
        highlights: "ผลิตบุคลากรผู้เชี่ยวชาญการออกแบบการสื่อสาร การบริหารสื่อแนวใหม่ และวาทวิทยาเพื่อสังคม",
        requiredSubjects: ["ภาษาไทย", "ภาษาอังกฤษ", "สังคมศึกษา"]
      }]
  },
  {
    id: "mahidol",
    name: "มหาวิทยาลัยมหิดล",
    englishName: "Mahidol University",
    abbreviation: "MU",
    logoColor: "#003057", // สีน้ำเงิน-ทองมหิดล
    logoUrl: "/logos/mahidol.png",
    location: "นครปฐม/กรุงเทพมหานคร",
    description: "สถาบันการศึกษาชั้นนำระดับประเทศ โดดเด่นเป็นอันดับหนึ่งด้านการแพทย์ สาธารณสุข วิทยาศาสตร์ และดนตรี",
    website: "https://mahidol.ac.th",
    rank: 2,
    programs: [
      {
        id: "mahidol-med-siriraj",
        name: "แพทยศาสตรบัณฑิต (ศิริราช)",
        facultyName: "คณะแพทยศาสตร์ศิริราชพยาบาล",
        gpaxMinimum: 3.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "20,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Admission (กสพท)"],
        careers: ["แพทย์เฉพาะทาง", "อาจารย์แพทย์", "ผู้อำนวยการโรงพยาบาล"],
        highlights: "คณะแพทย์ที่เก่าแก่และมีชื่อเสียงที่สุดของไทย เน้นการเรียนรู้จากเคสคนไข้จริงในโรงพยาบาลศิริราช",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์", "ภาษาอังกฤษ"]
      },
      {
        id: "mahidol-ict",
        name: "เทคโนโลยีสารสนเทศและการสื่อสาร (หลักสูตรนานาชาติ)",
        facultyName: "คณะเทคโนโลยีสารสนเทศและการสื่อสาร (ICT)",
        gpaxMinimum: 2.75,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "74,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["Full-Stack Developer", "Cybersecurity Specialist", "IT Auditor", "Database Administrator"],
        highlights: "การเรียนการสอนเป็นภาษาอังกฤษ 100% ได้รับการรับรองมาตรฐานสากล ABET มุ่งเน้นนวัตกรรมดิจิทัล",
        requiredSubjects: ["คณิตศาสตร์", "ภาษาอังกฤษ"]
      },
      {
        id: "mahidol-music",
        name: "ดุริยางคศาสตรบัณฑิต",
        facultyName: "วิทยาลัยดุริยางคศิลป์",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "90,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Direct Admission / Portfolio"],
        careers: ["นักดนตรีอาชีพ", "นักประพันธ์เพลง", "ครูสอนดนตรี", "Music Producer"],
        highlights: "สถาบันดนตรีที่ดีที่สุดในอาเซียน มีฮอลล์แสดงคอนเสิร์ตและสตูดิโอระดับโลก สอบเข้าด้วยภาคปฏิบัติและการทดสอบหูฟัง",
        requiredSubjects: ["ทักษะปฏิบัติดนตรี"]
      }
    ,
      {
        id: "mahidol-sci-biotech",
        name: "เทคโนโลยีชีวภาพ",
        facultyName: "คณะวิทยาศาสตร์",
        facultyWebsite: "https://science.mahidol.ac.th",
        gpaxMinimum: 2.75,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "20,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักวิจัยชีวภาพ", "นักพัฒนายา/วัคซีน", "นักวิชาการเกษตรกรรมสมัยใหม่"],
        highlights: "ศึกษาการนำเทคโนโลยีชีวภาพไปประยุกต์ใช้ในด้านการแพทย์ การเกษตร และอุตสาหกรรมด้วยเครื่องมือที่ทันสมัย",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ภาษาอังกฤษ"]
      },
      {
        id: "mahidol-medtech",
        name: "เทคนิคการแพทย์",
        facultyName: "คณะเทคนิคการแพทย์",
        facultyWebsite: "https://mt.mahidol.ac.th",
        gpaxMinimum: 3.00,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "25,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักเทคนิคการแพทย์ประจำโรงพยาบาล", "นักวิเคราะห์ในห้องปฏิบัติการตรวจโรค"],
        highlights: "เน้นการตรวจวิเคราะห์สิ่งส่งตรวจทางห้องปฏิบัติการเพื่อการวินิจฉัยและติดตามผลการรักษาโรค",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์"]
      },
      {
        id: "mahidol-muic-hosp",
        name: "การจัดการการบริการนานาชาติ",
        facultyName: "วิทยาลัยนานาชาติ (MUIC)",
        facultyWebsite: "https://muic.mahidol.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "95,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Admission"],
        careers: ["ผู้จัดการโรงแรม", "นักวางแผนงานอีเวนต์ระดับนานาชาติ", "พนักงานต้อนรับบนเครื่องบิน"],
        highlights: "หลักสูตรนานาชาติมุ่งเน้นการจัดการการบริการ โรงแรม และการท่องเที่ยวระดับโลกด้วยภาษาอังกฤษ",
        requiredSubjects: ["ภาษาอังกฤษ"]
      }]
  },
  {
    id: "kmutt",
    name: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    englishName: "King Mongkut's University of Technology Thonburi",
    abbreviation: "KMUTT",
    logoColor: "#F37021", // สีส้มบางมด
    logoUrl: "/logos/kmutt.png",
    location: "กรุงเทพมหานคร",
    description: "มหาวิทยาลัยเทคโนโลยีชั้นนำ โดดเด่นด้านวิศวกรรมศาสตร์ เทคโนโลยี พลังงาน และการออกแบบนวัตกรรม",
    website: "https://www.kmutt.ac.th",
    rank: 3,
    programs: [
      {
        id: "kmutt-sit-it",
        name: "เทคโนโลยีสารสนเทศ (IT)",
        facultyName: "คณะเทคโนโลยีสารสนเทศ",
        gpaxMinimum: 2.50,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "32,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio (Active Recruitment)", "Quota", "Admission"],
        careers: ["Frontend/Backend Developer", "System Administrator", "UX/UI Designer", "IT Business Analyst"],
        highlights: "เน้นการเรียนภาคปฏิบัติ โปรเจกต์ร่วมกับอุตสาหกรรมจริง และสภาพแวดล้อมการเรียนที่ทันสมัยและเป็นกันเอง",
        requiredSubjects: ["คณิตศาสตร์", "ภาษาอังกฤษ"]
      },
      {
        id: "kmutt-eng-mech",
        name: "วิศวกรรมเครื่องกล",
        facultyName: "คณะวิศวกรรมศาสตร์",
        gpaxMinimum: 2.75,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "21,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["วิศวกรโรงงาน", "วิศวกรออกแบบระบบกลไก", "วิศวกรยานยนต์", "Energy Auditor"],
        highlights: "หลักสูตรวิศวกรรมเครื่องกลที่เข้มข้นที่สุดแห่งหนึ่ง มีชื่อเสียงด้านรถสูตรสูตร Formula Student และหุ่นยนต์อุตสาหกรรม",
        requiredSubjects: ["คณิตศาสตร์", "ฟิสิกส์"]
      },
      {
        id: "kmutt-soad",
        name: "สถาปัตยกรรมศาสตรบัณฑิต (นานาชาติ)",
        facultyName: "คณะสถาปัตยกรรมศาสตร์และการออกแบบ (SoA+D)",
        gpaxMinimum: 2.50,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "85,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Admission"],
        careers: ["สถาปนิก", "นักออกแบบภายใน", "Design Consultant"],
        highlights: "เน้นพัฒนาความคิดสร้างสรรค์ด้วยภาษาอังกฤษ สตูดิโอออกแบบที่เปิดกว้างและอาจารย์จากนานาชาติ",
        requiredSubjects: ["ภาษาอังกฤษ", "การวาดเขียน/Portfolio"]
      }
    ,
      {
        id: "kmutt-sci-phys",
        name: "ฟิสิกส์",
        facultyName: "คณะวิทยาศาสตร์",
        facultyWebsite: "https://science.kmutt.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "19,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักวิเคราะห์ข้อมูล (Data Analyst)", "นักวิจัยฟิสิกส์ทฤษฎี", "ครู/อาจารย์ฟิสิกส์"],
        highlights: "เน้นวิจัยฟิสิกส์พื้นฐาน การคำนวณขั้นสูง และการวิเคราะห์โมเดลทางฟิสิกส์เพื่อตอบโจทย์อุตสาหกรรมดิจิทัล",
        requiredSubjects: ["ฟิสิกส์", "คณิตศาสตร์"]
      },
      {
        id: "kmutt-learning-tech",
        name: "เทคโนโลยีการเรียนรู้และสื่อสารมวลชน",
        facultyName: "คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี",
        facultyWebsite: "https://fiet.kmutt.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "19,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักออกแบบบทเรียนอิเล็กทรอนิกส์ (Instructional Designer)", "นักออกแบบสื่อการสอน", "ครีเอทีฟโปรดิวเซอร์สื่อการเรียนรู้"],
        highlights: "บูรณาการเทคโนโลยีคอมพิวเตอร์และการศึกษาเพื่อออกแบบบทเรียนออนไลน์และสื่อการเรียนรู้ยุคใหม่",
        requiredSubjects: ["ความคิดสร้างสรรค์", "คอมพิวเตอร์พื้นฐาน"]
      }]
  },
  {
    id: "cmu",
    name: "มหาวิทยาลัยเชียงใหม่",
    englishName: "Chiang Mai University",
    abbreviation: "CMU",
    logoColor: "#5B2E87", // สีม่วง มช.
    logoUrl: "/logos/cmu.png",
    location: "เชียงใหม่",
    description: "มหาวิทยาลัยหลักแห่งภาคเหนือ โดดเด่นด้านวิทยาศาสตร์สุขภาพ ศิลปวัฒนธรรม วิทยาศาสตร์สิ่งแวดล้อม และวิศวกรรม",
    website: "https://www.cmu.ac.th",
    rank: 4,
    programs: [
      {
        id: "cmu-med",
        name: "แพทยศาสตรบัณฑิต",
        facultyName: "คณะแพทยศาสตร์",
        gpaxMinimum: 3.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "20,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota ภาคเหนือ", "Admission (กสพท)"],
        careers: ["แพทย์ทั่วไป", "แพทย์วิจัย", "อาจารย์แพทย์"],
        highlights: "เรียนที่โรงพยาบาลมหาราชนครเชียงใหม่ (สวนดอก) โรงพยาบาลที่ใหญ่ที่สุดในภาคเหนือ ได้ฝึกปฏิบัติกับโรคที่หลากหลาย",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์"]
      },
      {
        id: "cmu-camt-se",
        name: "วิศวกรรมซอฟต์แวร์ (หลักสูตรนานาชาติ)",
        facultyName: "วิทยาลัยศิลปะ สื่อ และเทคโนโลยี (CAMT)",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "40,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["Software Engineer", "Scrum Master", "Software Tester", "Mobile Developer"],
        highlights: "เน้นขบวนการพัฒนาซอฟต์แวร์ตามมาตรฐานสากล ทำงานร่วมกับบริษัทซอฟต์แวร์ในเชียงใหม่และต่างประเทศ",
        requiredSubjects: ["คณิตศาสตร์", "ภาษาอังกฤษ"]
      },
      {
        id: "cmu-human-japan",
        name: "ภาษาญี่ปุ่น",
        facultyName: "คณะมนุษยศาสตร์",
        gpaxMinimum: 2.75,
        studyTracks: ["ศิลป์-ภาษา", "วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "15,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota ภาคเหนือ", "Admission"],
        careers: ["ล่ามแปลภาษา", "เจ้าหน้าที่ประสานงานต่างประเทศ", "มัคคุเทศก์", "พนักงานต้อนรับบนเครื่องบิน"],
        highlights: "ภาควิชาภาษาญี่ปุ่นที่มีชื่อเสียงยาวนาน มีทุนแลกเปลี่ยนไปประเทศญี่ปุ่นจำนวนมากทุกปี",
        requiredSubjects: ["ภาษาญี่ปุ่น หรือ ภาษาอังกฤษ"]
      }
    ,
      {
        id: "cmu-eng-env",
        name: "วิศวกรรมสิ่งแวดล้อม",
        facultyName: "คณะวิศวกรรมศาสตร์",
        facultyWebsite: "http://env.eng.cmu.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "16,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota ภาคเหนือ", "Admission"],
        careers: ["วิศวกรสิ่งแวดล้อมควบคุมบำบัดน้ำเสีย", "ที่ปรึกษาด้านสิ่งแวดล้อม (EIA)", "เจ้าหน้าที่ความปลอดภัย (จป.)"],
        highlights: "ศึกษาการออกแบบระบบบำบัดน้ำเสีย มลพิษทางอากาศ และการจัดการขยะชีวภาพตามแนวทางวิศวกรรมสีเขียว",
        requiredSubjects: ["ฟิสิกส์", "เคมี", "คณิตศาสตร์"]
      },
      {
        id: "cmu-agro-animal",
        name: "สัตวศาสตร์",
        facultyName: "คณะเกษตรศาสตร์",
        facultyWebsite: "https://www.agri.cmu.ac.th",
        gpaxMinimum: 2.25,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "15,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักปรับปรุงพันธุ์สัตว์", "ผู้จัดการฟาร์มปศุสัตว์", "นักโภชนาการสัตว์ในโรงงานอาหารสัตว์"],
        highlights: "เรียนรู้เทคโนโลยีปศุสัตว์สมัยใหม่ โภชนศาสตร์สัตว์ และการจัดการสุขภาพสัตว์เศรษฐกิจท่ามกลางภูมิทัศน์ธรรมชาติของภาคเหนือ",
        requiredSubjects: ["ชีววิทยา", "เคมี"]
      },
      {
        id: "cmu-finearts-design",
        name: "การออกแบบ",
        facultyName: "คณะวิจิตรศิลป์",
        facultyWebsite: "https://www.finearts.cmu.ac.th",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "15,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักออกแบบผลิตภัณฑ์", "นักออกแบบกราฟิก/แบรนด์", "ที่ปรึกษาด้านการออกแบบสร้างสรรค์"],
        highlights: "มุ่งเน้นการสร้างสรรค์นวัตกรรมการออกแบบร่วมสมัยที่ผสานงานศิลปะ วัฒนธรรมท้องถิ่น และเทคโนโลยีเข้าด้วยกัน",
        requiredSubjects: ["ทักษะการวาดภาพและการออกแบบ (Portfolio)"]
      }]
  },
  {
    id: "tu",
    name: "มหาวิทยาลัยธรรมศาสตร์",
    englishName: "Thammasat University",
    abbreviation: "TU",
    logoColor: "#C9232B", // สีเหลือง-แดงธรรมศาสตร์
    logoUrl: "/logos/tu.png",
    location: "ปทุมธานี/กรุงเทพมหานคร",
    description: "สถาบันชั้นนำด้านกฎหมาย รัฐศาสตร์ การเมือง เศรษฐศาสตร์ และศิลปศาสตร์ มุ่งเน้นการรับใช้สังคมและประชาธิปไตย",
    website: "https://tu.ac.th",
    rank: 5,
    programs: [
      {
        id: "tu-law",
        name: "นิติศาสตรบัณฑิต",
        facultyName: "คณะนิติศาสตร์",
        gpaxMinimum: 2.75,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "14,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission (สอบตรงกฎหมาย)"],
        careers: ["ผู้พิพากษา", "อัยการ", "ทนายความ", "ที่ปรึกษากฎหมายธุรกิจ (Legal Advisor)"],
        highlights: "สถาบันสอนกฎหมายที่เก่าแก่และมีชื่อเสียงที่สุดของประเทศ ผลิตศิษย์เก่าในแวดวงยุติธรรมไทยจำนวนมาก",
        requiredSubjects: ["ภาษาไทย", "ภาษาอังกฤษ", "การวัดแววกฎหมาย"]
      },
      {
        id: "tu-polsci",
        name: "รัฐศาสตรบัณฑิต",
        facultyName: "คณะรัฐศาสตร์",
        gpaxMinimum: 2.75,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "14,500 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักการทูต", "ข้าราชการปกครอง (ปลัด)", "HR Officer", "นักวิเคราะห์นโยบาย"],
        highlights: "ขึ้นชื่อเรื่องการวิเคราะห์การเมือง ความสัมพันธ์ระหว่างประเทศ และการบริหารงานภาครัฐที่ก้าวหน้า",
        requiredSubjects: ["ภาษาอังกฤษ", "ความรู้ทั่วไปทางรัฐศาสตร์"]
      },
      {
        id: "tu-econ",
        name: "เศรษฐศาสตรบัณฑิต",
        facultyName: "คณะเศรษฐศาสตร์",
        gpaxMinimum: 2.75,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "16,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักวิเคราะห์หลักทรัพย์", "นักเศรษฐศาสตร์", "นโยบายการเงิน ธปท.", "Data Analyst"],
        highlights: "เน้นทฤษฎีทางเศรษฐกิจระดับเข้มข้น และการวิเคราะห์นโยบายสาธารณะที่มีผลต่อระบบเศรษฐกิจไทย",
        requiredSubjects: ["คณิตศาสตร์", "ภาษาอังกฤษ"]
      }
    ,
      {
        id: "tu-arts-french",
        name: "ภาษาฝรั่งเศส",
        facultyName: "คณะศิลปศาสตร์",
        facultyWebsite: "https://arts.tu.ac.th",
        gpaxMinimum: 2.75,
        studyTracks: ["ศิลป์-ภาษา", "ศิลป์-คำนวณ", "วิทย์-คณิต"],
        tuitionFee: "15,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["เจ้าหน้าที่สถานทูต", "นักการทูต", "ล่ามภาษาฝรั่งเศส", "เจ้าหน้าที่องค์กรระหว่างประเทศ"],
        highlights: "มุ่งเน้นความเชี่ยวชาญการใช้ภาษาฝรั่งเศส วัฒนธรรม วรรณคดี และความสัมพันธ์ระหว่างประเทศในยุโรป",
        requiredSubjects: ["ภาษาฝรั่งเศส หรือ ภาษาอังกฤษ"]
      },
      {
        id: "tu-siit-manage",
        name: "วิศวกรรมการจัดการ (นานาชาติ)",
        facultyName: "สถาบันเทคโนโลยีนานาชาติสิรินธร (SIIT)",
        facultyWebsite: "https://www.siit.tu.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "85,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["วิศวกรอุตสาหการและการจัดการระบบ", "นักวางแผนโซ่อุปทาน (Supply Chain Planner)", "ที่ปรึกษาด้านการบริหารโครงการ"],
        highlights: "หลักสูตรวิศวกรรมนานาชาติที่ผสานทฤษฎีวิศวกรรมศาสตร์ การจัดการอุตสาหกรรม และการวิเคราะห์โลจิสติกส์",
        requiredSubjects: ["คณิตศาสตร์", "ฟิสิกส์", "ภาษาอังกฤษ"]
      },
      {
        id: "tu-jour-masscomm",
        name: "นวัตกรรมสื่อสารมวลชน",
        facultyName: "คณะวารสารศาสตร์และสื่อสารมวลชน",
        facultyWebsite: "http://www.jc.tu.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "15,500 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["คอนเทนต์ครีเอเตอร์", "ผู้จัดการแบรนด์สื่อออนไลน์", "นักวางแผนกลยุทธ์การสื่อสาร"],
        highlights: "มุ่งสร้างสรรค์และผลิตเนื้อหาสื่อรูปแบบใหม่ การประยุกต์ใช้เทคโนโลยีดิจิทัล และทักษะการเล่าเรื่องยุคใหม่",
        requiredSubjects: ["ภาษาอังกฤษ", "ภาษาไทย"]
      }]
  },
  {
    id: "ku",
    name: "มหาวิทยาลัยเกษตรศาสตร์",
    englishName: "Kasetsart University",
    abbreviation: "KU",
    logoColor: "#006C35", // สีเขียวเกษตร
    logoUrl: "/logos/ku.png",
    location: "กรุงเทพมหานคร (บางเขน)",
    description: "โดดเด่นเป็นเลิศด้านการเกษตร วนศาสตร์ อุตสาหกรรมเกษตร วิศวกรรมศาสตร์ และวิทยาศาสตร์ธรรมชาติ",
    website: "https://www.ku.ac.th",
    rank: 6,
    programs: [
      {
        id: "ku-vet",
        name: "สัตวแพทยศาสตรบัณฑิต",
        facultyName: "คณะสัตวแพทยศาสตร์",
        gpaxMinimum: 3.00,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "20,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission (กสพท)"],
        careers: ["สัตวแพทย์", "เจ้าหน้าที่วิจัยและบำรุงพันธุ์สัตว์", "เจ้าของโรงพยาบาลสัตว์"],
        highlights: "มีโรงพยาบาลสัตว์ใหญ่และสัตว์เล็กสำหรับฝึกงานวิชาชีพที่ทันสมัยเป็นอันดับต้นๆ ของประเทศ",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์"]
      },
      {
        id: "ku-agro",
        name: "เทคโนโลยีการอาหาร",
        facultyName: "คณะอุตสาหกรรมเกษตร",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "17,500 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["R&D Food Scientist", "ผู้ควบคุมคุณภาพ (QA/QC)", "ผู้จัดการโรงงานอาหาร"],
        highlights: "หลักสูตรระดับแนวหน้าที่ป้อนบุคลากรเข้าสู่ภาคการส่งออกอาหารและการพัฒนาผลิตภัณฑ์อาหารชั้นนำของไทย",
        requiredSubjects: ["เคมี", "ชีววิทยา", "คณิตศาสตร์"]
      },
      {
        id: "ku-eng-aerospace",
        name: "วิศวกรรมการบินและอวกาศ",
        facultyName: "คณะวิศวกรรมศาสตร์",
        gpaxMinimum: 3.00,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "35,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["วิศวกรซ่อมบำรุงเครื่องบิน", "นักวิเคราะห์ความปลอดภัยการบิน", "วิศวกรโครงสร้างอวกาศ"],
        highlights: "หลักสูตรเฉพาะทางที่หาเรียนยาก มีความร่วมมือกับกองทัพอากาศ และหน่วยงานการบินพลเรือน",
        requiredSubjects: ["ฟิสิกส์", "คณิตศาสตร์", "ภาษาอังกฤษ"]
      }
    ,
      {
        id: "ku-bus-finance",
        name: "การเงิน",
        facultyName: "คณะบริหารธุรกิจ",
        facultyWebsite: "https://bus.ku.ac.th",
        gpaxMinimum: 2.75,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "16,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักวิเคราะห์ทางการเงิน", "เจ้าหน้าที่ธนาคาร", "ที่ปรึกษาการลงทุน", "นักบัญชี"],
        highlights: "มุ่งเน้นการวิเคราะห์สินทรัพย์การลงทุน ตลาดตราสาร การวิเคราะห์ความเสี่ยง และการบริหารการเงินองค์กร",
        requiredSubjects: ["คณิตศาสตร์", "ภาษาอังกฤษ"]
      },
      {
        id: "ku-fishery-science",
        name: "วิทยาศาสตร์ทางประมง",
        facultyName: "คณะประมง",
        facultyWebsite: "https://fish.ku.ac.th",
        gpaxMinimum: 2.25,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "17,500 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักวิทยาศาสตร์ทางน้ำ", "เจ้าหน้าที่ประมง", "ผู้เชี่ยวชาญการเพาะเลี้ยงสัตว์น้ำ", "นักอนุรักษ์ทะเล"],
        highlights: "เรียนรู้เรื่องชีววิทยาสัตว์น้ำ การจัดการสิ่งแวดล้อมทางน้ำ และเทคโนโลยีการแปรรูปผลิตภัณฑ์ประมงที่เป็นเอกลักษณ์ของประเทศ",
        requiredSubjects: ["ชีววิทยา", "เคมี"]
      },
      {
        id: "ku-forest",
        name: "วนศาสตร์",
        facultyName: "คณะวนศาสตร์",
        facultyWebsite: "https://forest.ku.ac.th",
        gpaxMinimum: 2.25,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "17,500 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักวิชาการป่าไม้", "เจ้าหน้าที่อุทยานแห่งชาติ", "นักวิทยาศาสตร์สิ่งแวดล้อมป่าไม้"],
        highlights: "สถาบันการศึกษาด้านป่าไม้เพียงแห่งเดียวในประเทศไทย มุ่งเน้นการศึกษาทรัพยากรป่าไม้ สัตว์ป่า และระบบนิเวศต้นน้ำ",
        requiredSubjects: ["ชีววิทยา", "ฟิสิกส์"]
      }]
  },
  {
    id: "kku",
    name: "มหาวิทยาลัยขอนแก่น",
    englishName: "Khon Kaen University",
    abbreviation: "KKU",
    logoColor: "#A85324", // สีดินเทศ (ส้มแดงกล่ำ)
    logoUrl: "/logos/kku.png",
    location: "ขอนแก่น",
    description: "มหาวิทยาลัยที่ใหญ่ที่สุดในภาคตะวันออกเฉียงเหนือ มุ่งเน้นการพัฒนาชุมชน นวัตกรรมการเกษตร และการแพทย์ท้องถิ่น",
    website: "https://www.kku.ac.th",
    rank: 7,
    programs: [
      {
        id: "kku-med",
        name: "แพทยศาสตรบัณฑิต",
        facultyName: "คณะแพทยศาสตร์",
        gpaxMinimum: 3.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "20,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio (MDX)", "Quota ภาคอีสาน", "Admission (กสพท)"],
        careers: ["แพทย์ทั่วไป", "แพทย์เฉพาะทาง", "นักสาธารณสุข"],
        highlights: "เรียนที่โรงพยาบาลศรีนครินทร์ ศูนย์กลางทางการแพทย์ที่ใหญ่ที่สุดในภาคอีสาน โดดเด่นด้านโรคเฉพาะถิ่น",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์"]
      },
      {
        id: "kku-dent",
        name: "ทันตแพทยศาสตรบัณฑิต",
        facultyName: "คณะทันตแพทยศาสตร์",
        gpaxMinimum: 3.40,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "50,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota ภาคอีสาน", "Admission"],
        careers: ["ทันตแพทย์ใน รพ.รัฐ/เอกชน", "เจ้าของคลินิกทันตกรรม"],
        highlights: "เน้นฝึกทักษะหัตถการกับเครื่องมือที่ก้าวหน้า พร้อมบริการดูแลสุขภาพช่องปากให้กับประชาชนภาคอีสาน",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์"]
      }
    ,
      {
        id: "kku-eng-comp",
        name: "วิศวกรรมคอมพิวเตอร์",
        facultyName: "คณะวิศวกรรมศาสตร์",
        facultyWebsite: "https://www.en.kku.ac.th",
        gpaxMinimum: 2.75,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "25,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักพัฒนาซอฟต์แวร์", "นักวิเคราะห์ระบบ", "ผู้ดูแลระบบเครือข่าย", "นักพัฒนา AI"],
        highlights: "ศึกษาเทคโนโลยีคอมพิวเตอร์สมัยใหม่ ระบบเครือข่าย ความปลอดภัยทางไซเบอร์ และการเรียนรู้ของเครื่อง (Machine Learning)",
        requiredSubjects: ["คณิตศาสตร์", "ฟิสิกส์"]
      },
      {
        id: "kku-nurse",
        name: "พยาบาลศาสตรบัณฑิต",
        facultyName: "คณะพยาบาลศาสตร์",
        facultyWebsite: "https://nu.kku.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "22,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["พยาบาลวิชาชีพในโรงพยาบาลรัฐและเอกชน", "พยาบาลเฉพาะทาง", "อาจารย์สอนวิชาพยาบาล"],
        highlights: "เน้นพัฒนาคุณสมบัติการดูแลผู้ป่วยตามมาตรฐานสากลด้วยเครื่องมือจำลองในคณะพยาบาลศาสตร์แห่งแรกของภาคอีสาน",
        requiredSubjects: ["ชีววิทยา", "เคมี"]
      }]
  },
  {
    id: "psu",
    name: "มหาวิทยาลัยสงขลานครินทร์",
    englishName: "Prince of Songkla University",
    abbreviation: "PSU",
    logoColor: "#0A3B75", // สีน้ำเงิน รูปร่างสมอ
    logoUrl: "/logos/psu.png",
    location: "สงขลา (หาดใหญ่)",
    description: "มหาวิทยาลัยหลักแห่งภาคใต้ โดดเด่นด้านยางพารา วิศวกรรมศาสตร์ เทคโนโลยีทางทะเล และวิทยาศาสตร์การแพทย์",
    website: "https://www.psu.ac.th",
    rank: 8,
    programs: [
      {
        id: "psu-med",
        name: "แพทยศาสตรบัณฑิต",
        facultyName: "คณะแพทยศาสตร์",
        gpaxMinimum: 3.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "28,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota 14 จังหวัดภาคใต้", "Admission"],
        careers: ["แพทย์ปฐมภูมิ", "แพทย์เฉพาะทางในโรงพยาบาลศูนย์"],
        highlights: "ศึกษาที่โรงพยาบาลสงขลานครินทร์ แหล่งฝึกงานแพทย์และศูนย์บำบัดรักษาโรคที่สำคัญที่สุดในภาคใต้",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์"]
      },
      {
        id: "psu-agro-rubber",
        name: "เทคโนโลยียางและพอลิเมอร์",
        facultyName: "คณะอุตสาหกรรมเกษตร",
        gpaxMinimum: 2.25,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "16,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["R&D พอลิเมอร์ในโรงงานยาง", "วิศวกรวัสดุศาสตร์", "ผู้ควบคุมคุณภาพการผลิตยางรถยนต์"],
        highlights: "หลักสูตรระดับท็อปของประเทศเพื่อสนับสนุนอุตสาหกรรมยางพาราซึ่งเป็นพืชเศรษฐกิจหลักของภาคใต้",
        requiredSubjects: ["เคมี", "คณิตศาสตร์"]
      }
    ,
      {
        id: "psu-eng-materials",
        name: "วิศวกรรมเหมืองแร่และวัสดุ",
        facultyName: "คณะวิศวกรรมศาสตร์",
        facultyWebsite: "https://www.eng.psu.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "28,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["วิศวกรวัสดุ", "วิศวกรเหมืองแร่", "วิศวกรตรวจสอบคุณภาพโลหะ/วัสดุอุตสาหกรรม"],
        highlights: "มุ่งเน้นการสกัดแร่ นวัตกรรมวัสดุพอลิเมอร์ โลหะ และเซรามิกเพื่ออุตสาหกรรมการผลิตสมัยใหม่",
        requiredSubjects: ["ฟิสิกส์", "เคมี", "คณิตศาสตร์"]
      },
      {
        id: "psu-mgt-logistics",
        name: "การจัดการโลจิสติกส์",
        facultyName: "คณะวิทยาการจัดการ",
        facultyWebsite: "https://www.fms.psu.ac.th",
        gpaxMinimum: 2.25,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "18,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["เจ้าหน้าที่วางแผนโลจิสติกส์", "คลังสินค้าและกระจายสินค้า", "ตัวแทนนำเข้าส่งออกสินค้า"],
        highlights: "ศึกษาการจัดการห่วงโซ่อุปทาน การคลังสินค้า และการขนส่งสินค้าระหว่างประเทศในกลุ่มอาเซียนตอนใต้",
        requiredSubjects: ["ภาษาอังกฤษ", "คณิตศาสตร์"]
      }]
  },
  {
    id: "kmitl",
    name: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    englishName: "King Mongkut's Institute of Technology Ladkrabang",
    abbreviation: "KMITL",
    logoColor: "#E34E26", // สีส้มหมาด
    logoUrl: "/logos/kmitl.svg",
    location: "กรุงเทพมหานคร",
    description: "สถาบันเทคโนโลยีชั้นนำระดับประเทศ โดดเด่นเป็นเลิศด้านวิศวกรรมศาสตร์ สถาปัตยกรรมศาสตร์ และเทคโนโลยีสารสนเทศ",
    website: "https://www.kmitl.ac.th",
    rank: 9,
    programs: [
      {
        id: "kmitl-eng-computer",
        name: "วิศวกรรมคอมพิวเตอร์",
        facultyName: "คณะวิศวกรรมศาสตร์",
        gpaxMinimum: 3.00,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "25,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["Cybersecurity Specialist", "AI Software Developer", "Embedded Systems Engineer", "CTO"],
        highlights: "หนึ่งในหลักสูตรวิศวกรรมคอมพิวเตอร์ที่ใหญ่และเก่าแก่ที่สุดในประเทศ เน้นการปฏิบัติจริงและนวัตกรรมใหม่ๆ",
        requiredSubjects: ["คณิตศาสตร์", "ฟิสิกส์", "ภาษาอังกฤษ"]
      },
      {
        id: "kmitl-it",
        name: "เทคโนโลยีสารสนเทศ (IT)",
        facultyName: "คณะเทคโนโลยีสารสนเทศ",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "32,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["Database Admin", "Network Engineer", "System Analyst", "Frontend Developer"],
        highlights: "ตึกเรียนทันสมัย อุปกรณ์ครบครัน เน้นสร้างนักไอทีที่ตอบโจทย์ความต้องการของตลาดงานจริงทันทีหลังจบ",
        requiredSubjects: ["คณิตศาสตร์", "ภาษาอังกฤษ"]
      }
    ,
      {
        id: "kmitl-arch-interior",
        name: "สถาปัตยกรรมภายใน",
        facultyName: "คณะสถาปัตยกรรม ศิลปะและการออกแบบ",
        facultyWebsite: "https://www.aad.kmitl.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "26,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักออกแบบตกแต่งภายใน", "สถาปนิกภายใน", "นักจัดนิทรรศการ/Display Designer"],
        highlights: "มุ่งเน้นการสร้างสรรค์พื้นที่ภายในอาคาร การคำนวณโครงสร้างสถาปัตยกรรม และการออกแบบเพื่อความยั่งยืน",
        requiredSubjects: ["ทักษะการวาดเส้นและการออกแบบ (Portfolio)"]
      },
      {
        id: "kmitl-aviation-mgt",
        name: "การจัดการการบิน",
        facultyName: "วิทยาลัยอุตสาหกรรมการบินนานาชาติ",
        facultyWebsite: "https://iaai.kmitl.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "75,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Admission"],
        careers: ["ผู้บริหารการขนส่งทางอากาศ", "พนักงานต้อนรับบนเครื่องบิน", "เจ้าหน้าที่ควบคุมการปฏิบัติการบิน (Flight Dispatcher)"],
        highlights: "ศึกษาหลักการดำเนินงานสนามบิน กฎหมายการบินระหว่างประเทศ และการบริหารการจัดการอุตสาหกรรมการบินหลักสูตรนานาชาติ",
        requiredSubjects: ["ภาษาอังกฤษ", "คณิตศาสตร์"]
      }]
  },
  {
    id: "kmutnb",
    name: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
    englishName: "King Mongkut's University of Technology North Bangkok",
    abbreviation: "KMUTNB",
    logoColor: "#C74D0E", // สีแสดแดง
    logoUrl: "/logos/kmutnb.png",
    location: "กรุงเทพมหานคร",
    description: "สถาบันการศึกษาที่มีความเชี่ยวชาญระดับสูงด้านวิศวกรรมศาสตร์ วิศวกรรมเทคโนโลยีเชิงปฏิบัติการ และหุ่นยนต์อุตสาหกรรม",
    website: "https://www.kmutnb.ac.th",
    rank: 10,
    programs: [
      {
        id: "kmutnb-eng-robotic",
        name: "วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ (นานาชาติ)",
        facultyName: "สถาบันนวัตกรรมเทคโนโลยีไทย-ฝรั่งเศส / วิศวกรรมศาสตร์",
        gpaxMinimum: 2.75,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "60,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["วิศวกรระบบอัตโนมัติ (Automation Engineer)", "นักพัฒนาหุ่นยนต์", "วิศวกรควบคุมการผลิตแบบ Smart Factory"],
        highlights: "หลักสูตรปฏิบัติที่เข้มข้นเชิงอุตสาหกรรมตามรูปแบบเยอรมันและฝรั่งเศส ชนะเลิศการแข่งขันหุ่นยนต์ระดับโลกหลายปีซ้อน",
        requiredSubjects: ["คณิตศาสตร์", "ฟิสิกส์", "ภาษาอังกฤษ"]
      },
      {
        id: "kmutnb-cite-se",
        name: "วิศวกรรมซอฟต์แวร์",
        facultyName: "วิทยาลัยเทคโนโลยีอุตสาหกรรม (CIT)",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ", "ปวช.สายช่าง"],
        tuitionFee: "22,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["Software Developer", "DevOps Engineer", "Project Manager"],
        highlights: "เน้นงานพัฒนาซอฟต์แวร์สำหรับควบคุมกระบวนการในเชิงธุรกิจและอุตสาหกรรม มีการฝึกงานภาคปฏิบัติจริงอย่างจริงจัง",
        requiredSubjects: ["คณิตศาสตร์"]
      }
    ,
      {
        id: "kmutnb-applied-chem",
        name: "เคมีอุตสาหกรรม",
        facultyName: "คณะวิทยาศาสตร์ประยุกต์",
        facultyWebsite: "https://sci.kmutnb.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "19,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักเคมีอุตสาหกรรม", "วิศวกรควบคุมกระบวนการทางเคมี", "เจ้าหน้าที่ทดสอบผลิตภัณฑ์ในโรงงานอุตสาหกรรม"],
        highlights: "ศึกษาความรู้เคมีระดับลึกเพื่อประยุกต์ใช้ในอุตสาหกรรมพลาสติก ยาง สี สารเคมีภัณฑ์ และการวิเคราะห์ทางสิ่งแวดล้อม",
        requiredSubjects: ["เคมี", "คณิตศาสตร์"]
      },
      {
        id: "kmutnb-it",
        name: "เทคโนโลยีสารสนเทศ",
        facultyName: "คณะเทคโนโลยีและการจัดการอุตสาหกรรม",
        facultyWebsite: "https://fitm.kmutnb.ac.th",
        gpaxMinimum: 2.25,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "18,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักวิเคราะห์ข้อมูล IT", "เจ้าหน้าที่สนับสนุนเทคนิค", "นักพัฒนาเว็บ, ผู้ดูแลระบบ"],
        highlights: "ศึกษาเทคโนโลยีสารสนเทศสมัยใหม่ การพัฒนาระบบเครือข่าย ระบบความปลอดภัยข้อมูล และการจัดการเทคโนโลยีอุตสาหกรรม",
        requiredSubjects: ["ความคิดเชิงตรรกะ", "ภาษาอังกฤษ"]
      }]
  },
  {
    id: "swu",
    name: "มหาวิทยาลัยศรีนครินทรวิโรฒ",
    englishName: "Srinakharinwirot University",
    abbreviation: "SWU",
    logoColor: "#C91E3B", // สีเทา-แดง มศว
    logoUrl: "/logos/swu.svg",
    location: "กรุงเทพมหานคร (ประสานมิตร) / นครนายก (องครักษ์)",
    description: "โดดเด่นด้านคณะครุศาสตร์/ศึกษาศาสตร์ (การผลิตครู) ศิลปกรรมศาสตร์ สื่อสารมวลชน การแสดง และวิทยาศาสตร์การแพทย์",
    website: "https://www.swu.ac.th",
    rank: 11,
    programs: [
      {
        id: "swu-edu-thai",
        name: "หลักสูตรการศึกษาบัณฑิต (กศ.บ. ภาษาไทย)",
        facultyName: "คณะมนุษยศาสตร์ ร่วมกับ คณะศึกษาศาสตร์",
        gpaxMinimum: 3.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "15,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["ครูภาษาไทย", "นักวิชาการศึกษา", "นักเขียน/นักพิสูจน์อักษร"],
        highlights: "มศว มีชื่อเสียงยาวนานที่สุดในด้านการผลิตครูและพัฒนาวิชาชีพครูในประเทศไทย หลักสูตร 4 ปีพร้อมใบประกอบวิชาชีพ",
        requiredSubjects: ["ภาษาไทย", "ความถนัดความเป็นครู"]
      },
      {
        id: "swu-cosci-acting",
        name: "ศิลปะการแสดงและการกำกับการแสดง",
        facultyName: "วิทยาลัยนวัตกรรมสื่อสารมวลชน (COSCI)",
        gpaxMinimum: 2.25,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "40,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Admission (สอบทักษะการแสดง)"],
        careers: ["นักแสดงอาชีพ", "ผู้กำกับการแสดง", "Casting Director", "Creative Producer"],
        highlights: "ตั้งอยู่ใจกลางเมือง (อโศก) ใกล้ชิดอุตสาหกรรมบันเทิงไทย มีศิษย์เก่าเป็นนักแสดงและผู้จัดละครที่มีชื่อเสียงมากมาย",
        requiredSubjects: ["ทักษะด้านการแสดง/บุคลิกภาพ"]
      }
    ,
      {
        id: "swu-med",
        name: "แพทยศาสตรบัณฑิต",
        facultyName: "คณะแพทยศาสตร์",
        facultyWebsite: "https://med.swu.ac.th",
        gpaxMinimum: 3.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "28,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Admission (กสพท)"],
        careers: ["แพทย์ทั่วไป", "อาจารย์แพทย์", "นักวิจัยทางการแพทย์"],
        highlights: "ศึกษาที่โรงพยาบาลชลประทานและศูนย์การแพทย์สมเด็จพระเทพรัตนราชสุดาฯ มุ่งเน้นผลิตแพทย์ที่รับใช้สังคมอย่างมีคุณธรรม",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์", "คณิตศาสตร์"]
      },
      {
        id: "swu-pe-sport-sci",
        name: "วิทยาศาสตร์การกีฬาและการออกกำลังกาย",
        facultyName: "คณะพลศึกษา",
        facultyWebsite: "https://pe.swu.ac.th",
        gpaxMinimum: 2.25,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "15,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักวิทยาศาสตร์การกีฬา", "ผู้ฝึกสอนกีฬา", "นักฟื้นฟูสมรรถภาพทางกาย"],
        highlights: "ศึกษาหลักการส่งเสริมสุขภาพ สรีรวิทยาการออกกำลังกาย และการใช้วิทยาศาสตร์เพื่อการฝึกกีฬาในระดับชาติ",
        requiredSubjects: ["ชีววิทยา", "พละศึกษา/ทักษะกีฬา"]
      },
      {
        id: "swu-finearts-design",
        name: "การออกแบบทัศนศิลป์",
        facultyName: "คณะศิลปกรรมศาสตร์",
        facultyWebsite: "https://fofa.swu.ac.th",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "20,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักออกแบบกราฟิก", "นักสร้างสรรค์โฆษณา", "ศิลปินทัศนศิลป์"],
        highlights: "บูรณาการการออกแบบแฟชั่น การออกแบบผลิตภัณฑ์ และเซรามิกส์ เพื่อตอบโจทย์อุตสาหกรรมสร้างสรรค์",
        requiredSubjects: ["ทักษะการวาดเขียนและการออกแบบเฉพาะทาง"]
      }]
  },
  {
    id: "silpakorn",
    name: "มหาวิทยาลัยศิลปากร",
    englishName: "Silpakorn University",
    abbreviation: "SU",
    logoColor: "#0093A8", // สีเขียวเวอร์ริเดียน (สีเขียวน้ำทะเล)
    logoUrl: "/logos/silpakorn.png",
    location: "กรุงเทพมหานคร / นครปฐม",
    description: "สถาบันศิลปะและสถาปัตยกรรมชั้นนำที่เป็นเอกลักษณ์ โดดเด่นด้านทัศนศิลป์ ดุริยางคศิลป์ โบราณคดี และอักษรศาสตร์",
    website: "https://www.su.ac.th",
    rank: 12,
    programs: [
      {
        id: "silpakorn-art-paint",
        name: "ทัศนศิลป์ (จิตรกรรม)",
        facultyName: "คณะจิตรกรรม ประติมากรรมและภาพพิมพ์",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "18,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Admission (สอบวิชาเฉพาะศิลปะ)"],
        careers: ["ศิลปินอิสระ", "ภัณฑารักษ์ (Curator)", "ครูศิลปะ", "Art Director"],
        highlights: "ก่อตั้งโดยอาจารย์ศิลป์ พีระศรี ถือเป็นจุดกำเนิดของวงการศิลปะสมัยใหม่ในประเทศไทย คุณภาพและความเข้มข้นทางปฏิบัติสูงที่สุด",
        requiredSubjects: ["ทักษะวาดเส้น (Drawing)", "วิชาเฉพาะองค์ประกอบศิลป์"]
      },
      {
        id: "silpakorn-arch",
        name: "สถาปัตยกรรมไทย",
        facultyName: "คณะสถาปัตยกรรมศาสตร์",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "24,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Admission"],
        careers: ["สถาปนิก", "นักอนุรักษ์สถาปัตยกรรมประวัติศาสตร์", "ที่ปรึกษาด้านการออกแบบสถาปัตยกรรม"],
        highlights: "โดดเด่นและเป็นอันดับหนึ่งด้านการออกแบบสถาปัตยกรรมไทยประเพณีและการบูรณะอาคารโบราณสถานของชาติ",
        requiredSubjects: ["ความถนัดทางสถาปัตยกรรม"]
      }
    ,
      {
        id: "silpakorn-arts-history",
        name: "ประวัติศาสตร์",
        facultyName: "คณะอักษรศาสตร์",
        facultyWebsite: "https://www.arts.su.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "15,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักประวัติศาสตร์", "นักวิชาการจดหมายเหตุ", "บรรณาธิการสำนักพิมพ์", "นักวิจัยวัฒนธรรม"],
        highlights: "ศึกษาประวัติศาสตร์ไทยและสากล การวิเคราะห์หลักฐานทางประวัติศาสตร์ และโบราณคดีเบื้องต้นเพื่อเข้าใจสังคมโลก",
        requiredSubjects: ["สังคมศึกษา", "ภาษาไทย"]
      },
      {
        id: "silpakorn-pharm",
        name: "เภสัชศาสตรบัณฑิต",
        facultyName: "คณะเภสัชศาสตร์",
        facultyWebsite: "https://pharmacy.su.ac.th",
        gpaxMinimum: 3.00,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "35,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["เภสัชกรประจำโรงพยาบาล community/hospital", "เภสัชกรควบคุมการผลิตยาในอุตสาหกรรม", "ผู้แทนยา"],
        highlights: "ผลิตเภสัชกรที่มีความเชี่ยวชาญทั้งการบริบาลทางเภสัชกรรมและการผลิตยาที่มีคุณภาพตามมาตรฐานวิชาชีพ",
        requiredSubjects: ["เคมี", "ชีววิทยา", "ภาษาอังกฤษ"]
      }]
  },
  {
    id: "sut",
    name: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
    englishName: "Suranaree University of Technology",
    abbreviation: "SUT",
    logoColor: "#C25E00", // สีแสดทอง
    logoUrl: "/logos/sut.svg",
    location: "นครราชสีมา",
    description: "มหาวิทยาลัยแห่งความสามารถทางเทคโนโลยีและการวิจัย เน้นระบบการศึกษาสามภาคเรียน (Trimester) และสหกิจศึกษา 100%",
    website: "https://www.sut.ac.th",
    rank: 13,
    programs: [
      {
        id: "sut-eng-civil",
        name: "วิศวกรรมโยธา",
        facultyName: "สำนักวิชาวิศวกรรมศาสตร์",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "18,000 บาท/ภาคการศึกษา (ระบบ 3 เทอม)",
        tcasRounds: ["Portfolio", "Quota ภูมิภาค", "Admission"],
        careers: ["วิศวกรโยธาควบคุมงาน", "นักออกแบบโครงสร้างโยธา", "Project Engineer"],
        highlights: "เรียนจบเร็วด้วยระบบ Trimester และบังคับทำสหกิจศึกษาที่ไซส์งานก่อสร้างจริงเป็นเวลา 1-2 เทอมก่อนจบการศึกษา",
        requiredSubjects: ["คณิตศาสตร์", "ฟิสิกส์"]
      }
    ,
      {
        id: "sut-agro-plant",
        name: "เทคโนโลยีการผลิตพืช",
        facultyName: "สำนักวิชาเทคโนโลยีการเกษตร",
        facultyWebsite: "https://agr.sut.ac.th",
        gpaxMinimum: 2.00,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "14,000 บาท/ภาคการศึกษา (ระบบ 3 เทอม)",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักวิชาการเกษตร, นักปรับปรุงพันธุ์พืช, ผู้จัดการฟาร์มอัจฉริยะ (Smart Farm Manager)"],
        highlights: "เรียนรู้เทคโนโลยีการเกษตรอัจฉริยะ การผลิตพืชปลอดสารพิษ และเทคโนโลยีชีวภาพเพื่อเพิ่มประสิทธิภาพผลผลิต",
        requiredSubjects: ["ชีววิทยา", "เคมี"]
      },
      {
        id: "sut-med",
        name: "แพทยศาสตรบัณฑิต",
        facultyName: "สำนักวิชาแพทยศาสตร์",
        facultyWebsite: "https://im.sut.ac.th",
        gpaxMinimum: 3.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "50,000 บาท/ภาคการศึกษา (ระบบ 3 เทอม)",
        tcasRounds: ["Portfolio", "Quota", "Admission (กสพท)"],
        careers: ["แพทย์เวชปฏิบัติทั่วไป, แพทย์เฉพาะทาง, ผู้บริหารโรงพยาบาล"],
        highlights: "เรียนรู้ระบบสามภาคเรียนที่เข้มข้นร่วมกับโรงพยาบาลมหาวิทยาลัยเทคโนโลยีสุรนารีและเครือข่ายกระทรวงสาธารณสุข",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์"]
      }]
  },
  {
    id: "mfu",
    name: "มหาวิทยาลัยแม่ฟ้าหลวง",
    englishName: "Mae Fah Luang University",
    abbreviation: "MFU",
    logoColor: "#A6192E", // สีแดงแดงเข้ม-ทอง
    logoUrl: "/logos/mfu.png",
    location: "เชียงราย",
    description: "มหาวิทยาลัยที่สวยงามที่สุดในประเทศ โดดเด่นเรื่องการเรียนการสอนด้วยสื่อการสอนที่เป็นภาษาอังกฤษเกือบทั้งหมด และภาษาจีน",
    website: "https://www.mfu.ac.th",
    rank: 14,
    programs: [
      {
        id: "mfu-cosmetics",
        name: "วิทยาศาสตร์เครื่องสำอาง",
        facultyName: "สำนักวิชาวิทยาศาสตร์เครื่องสำอาง",
        gpaxMinimum: 2.75,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "38,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักพัฒนาสูตรเครื่องสำอาง (Cosmetic Formulator)", "QC/QA ผลิตภัณฑ์เครื่องสำอาง", "ผู้ประกอบการความงาม"],
        highlights: "สถาบันผลิตนักวิทยาศาสตร์เครื่องสำอางแห่งแรกในเอเชีย ได้เรียนการคิดค้น พัฒนาสูตร และการตลาดเครื่องสำอางครบวงจร",
        requiredSubjects: ["เคมี", "ชีววิทยา", "ภาษาอังกฤษ"]
      },
      {
        id: "mfu-liberal-china",
        name: "ภาษาจีนธุรกิจ",
        facultyName: "สำนักวิชาจีนวิทยา",
        gpaxMinimum: 2.50,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "28,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักแปล/ล่ามภาษาจีน", "ธุรกิจนำเข้าส่งออกจีน-ไทย", "ไกด์นำเที่ยวภาษาจีน"],
        highlights: "เรียนการใช้ภาษาจีนทางธุรกิจกับอาจารย์เจ้าของภาษา พร้อมโอกาสเดินทางไปฝึกงานหรือศึกษาแลกเปลี่ยนที่ประเทศจีน",
        requiredSubjects: ["ภาษาจีน หรือ ภาษาอังกฤษ"]
      }
    ,
      {
        id: "mfu-mgt-hosp",
        name: "การจัดการอุตสาหกรรมการบริการ",
        facultyName: "สำนักวิชาการจัดการ",
        facultyWebsite: "https://management.mfu.ac.th",
        gpaxMinimum: 2.25,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "28,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["เจ้าหน้าที่บริหารในธุรกิจท่องเที่ยว, ฝ่ายต้อนรับลูกค้าบนเรือสำราญ/สายการบิน"],
        highlights: "เน้นการพัฒนาทักษะวิชาชีพการโรงแรม การจัดเลี้ยง และอุตสาหกรรมสายการบินและการท่องเที่ยวระดับชาติด้วยภาษาอังกฤษ",
        requiredSubjects: ["ภาษาอังกฤษ"]
      },
      {
        id: "mfu-nurse",
        name: "พยาบาลศาสตรบัณฑิต",
        facultyName: "สำนักวิชาพยาบาลศาสตร์",
        facultyWebsite: "https://nursing.mfu.ac.th",
        gpaxMinimum: 2.75,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "30,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["พยาบาลวิชาชีพโรงพยาบาลรัฐและเอกชน, นักการศึกษาด้านสุขภาพ"],
        highlights: "ศึกษาทักษะพยาบาลและการบริบาลผู้ป่วยอย่างใกล้ชิดและใช้ภาษาอังกฤษเพื่อพร้อมดูแลผู้รับบริการในระดับสากล",
        requiredSubjects: ["ชีววิทยา", "ภาษาอังกฤษ"]
      }]
  },
  {
    id: "naresuan",
    name: "มหาวิทยาลัยนเรศวร",
    englishName: "Naresuan University",
    abbreviation: "NU",
    logoColor: "#C4820E", // สีทองนเรศวร
    logoUrl: "/logos/naresuan.png",
    location: "พิษณุโลก",
    description: "ศูนย์กลางทางการศึกษาภาคเหนือตอนล่าง มีชื่อเสียงด้านวิทยาศาสตร์สุขภาพ เกษตรกรรม พลังงาน และการท่องเที่ยว",
    website: "https://www.nu.ac.th",
    rank: 15,
    programs: [
      {
        id: "naresuan-pharm",
        name: "เภสัชศาสตรบัณฑิต (การบริบาลทางเภสัชกรรม)",
        facultyName: "คณะเภสัชศาสตร์",
        gpaxMinimum: 3.00,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "35,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota ภาคเหนือ", "Admission"],
        careers: ["เภสัชกรประจำโรงพยาบาล", "เภสัชกรชุมชน/ร้านยา", "ผู้แทนยา"],
        highlights: "หลักสูตรระดับชาติที่เน้นดูแลการใช้ยาของผู้ป่วยในตึกจริงร่วมกับแพทย์อย่างปลอดภัยสูงสุด",
        requiredSubjects: ["ชีววิทยา", "เคมี", "คณิตศาสตร์"]
      }
    ,
      {
        id: "naresuan-med",
        name: "แพทยศาสตรบัณฑิต",
        facultyName: "คณะแพทยศาสตร์",
        facultyWebsite: "http://www.med.nu.ac.th",
        gpaxMinimum: 3.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "20,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota ภาคเหนือตอนล่าง", "Admission (กสพท)"],
        careers: ["แพทย์ทั่วไป, อาจารย์แพทย์เฉพาะทาง"],
        highlights: "มุ่งเน้นการเรียนรู้วิทยาศาสตร์การแพทย์และหัตถการคลินิก เพื่อการดูแลสุขภาพและแก้ไขปัญหาสาธารณสุขในเขตภาคเหนือตอนล่าง",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์"]
      },
      {
        id: "naresuan-eng-civil",
        name: "วิศวกรรมโยธา",
        facultyName: "คณะวิศวกรรมศาสตร์",
        facultyWebsite: "https://www.eng.nu.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "16,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["วิศวกรควบคุมงานก่อสร้าง, วิศวกรออกแบบโครงสร้างอาคาร, ที่ปรึกษาด้านการโยธา"],
        highlights: "เน้นกระบวนการทดลองและฝึกงานโครงสร้างโยธา การออกแบบชลประทาน และวิศวกรรมขนส่งในภูมิภาค",
        requiredSubjects: ["ฟิสิกส์", "คณิตศาสตร์"]
      }]
  },
  {
    id: "walailak",
    name: "มหาวิทยาลัยวลัยลักษณ์",
    englishName: "Walailak University",
    abbreviation: "WU",
    logoColor: "#E25822", // สีแสด-ม่วง
    logoUrl: "/logos/walailak.svg",
    location: "นครศรีธรรมราช",
    description: "มหาวิทยาลัยวิจัยขนาดใหญ่ในภาคใต้ตอนบน โดดเด่นด้านการเรียนการสอนแบบ Active Learning ด้วยมาตรฐาน UKPSF ของอังกฤษ",
    website: "https://www.wu.ac.th",
    rank: 16,
    programs: [
      {
        id: "walailak-nurse",
        name: "พยาบาลศาสตรบัณฑิต",
        facultyName: "สำนักวิชาพยาบาลศาสตร์",
        gpaxMinimum: 2.75,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "24,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["พยาบาลวิชาชีพ", "พยาบาลวิสัญญี", "พยาบาลควบคุมการติดเชื้อ"],
        highlights: "เรียนรู้ในโรงพยาบาลศูนย์การแพทย์มหาวิทยาลัยวลัยลักษณ์ที่เพิ่งเปิดใหม่ทันสมัยสูงสุด อัตราการสอบผ่านใบประกอบวิชาชีพสูงมาก",
        requiredSubjects: ["ชีววิทยา", "เคมี", "คณิตศาสตร์"]
      }
    ,
      {
        id: "walailak-med",
        name: "แพทยศาสตรบัณฑิต",
        facultyName: "สำนักวิชาแพทยศาสตร์",
        facultyWebsite: "https://medicine.wu.ac.th",
        gpaxMinimum: 3.50,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "50,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["แพทย์เวชปฏิบัติทั่วไป, แพทย์วิจัยเฉพาะทาง"],
        highlights: "มุ่งเน้นการศึกษาแพทยศาสตร์แนวใหม่ด้วยการเรียนการสอนแบบ Active Learning ในโรงพยาบาลศูนย์การแพทย์ มวล.",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ฟิสิกส์"]
      },
      {
        id: "walailak-account",
        name: "บัญชีบัณฑิต",
        facultyName: "สำนักวิชาการจัดการ",
        facultyWebsite: "https://management.wu.ac.th",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "19,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักบัญชี, ผู้สอบบัญชีรับอนุญาต (CPA), ที่ปรึกษาด้านภาษี"],
        highlights: "มุ่งเน้นกระบวนการบัญชีวิเคราะห์ การตรวจสอบและควบคุมการเงินในระดับสากลตามมาตรฐานสมาคมนักบัญชี",
        requiredSubjects: ["คณิตศาสตร์", "สังคมศึกษา"]
      },
      {
        id: "walailak-digital-media",
        name: "ดิจิทัลมีเดียและเทคโนโลยีภาพยนตร์",
        facultyName: "สำนักวิชาสารสนเทศศาสตร์",
        facultyWebsite: "https://informatics.wu.ac.th",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "22,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["แอนิเมเตอร์ 3D, ผู้กำกับภาพยนตร์สั้น, VFX Artist, นักตัดต่อวิดีโอ"],
        highlights: "ศึกษาเทคโนโลยีการทำภาพยนตร์ สื่อดิจิทัล แอนิเมชัน และวิชวลเอฟเฟ็กต์ขั้นสูงเพื่ออุตสาหกรรมสร้างสรรค์",
        requiredSubjects: ["ศิลปะการสร้างสรรค์", "คอมพิวเตอร์พื้นฐาน"]
      }]
  },
  {
    id: "burapha",
    name: "มหาวิทยาลัยบูรพา",
    englishName: "Burapha University",
    abbreviation: "BUU",
    logoColor: "#00629B", // สีเทา-ทอง (แต่ออกน้ำเงินเด่น)
    logoUrl: "/logos/burapha.png",
    location: "ชลบุรี (บางแสน)",
    description: "มหาวิทยาลัยชั้นนำบริเวณชายฝั่งภาคตะวันออก โดดเด่นด้านวิทยาศาสตร์ทางทะเล โลจิสติกส์ และการบริหารการท่องเที่ยวชายฝั่ง",
    website: "https://www.buu.ac.th",
    rank: 17,
    programs: [
      {
        id: "burapha-logistics",
        name: "วิทยาการจัดการโลจิสติกส์",
        facultyName: "คณะโลจิสติกส์",
        gpaxMinimum: 2.50,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "20,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota ภาคตะวันออก", "Admission"],
        careers: ["Import-Export Specialist", "Supply Chain Analyst", "Warehouse Manager", "Freight Forwarder"],
        highlights: "คณะโลจิสติกส์แห่งแรกของประเทศไทย ตั้งอยู่ใกล้เขตอุตสาหกรรมท่าเรือแหลมฉบัง EEC โอกาสได้งานทำทันทีหลังจบสูงมาก",
        requiredSubjects: ["คณิตศาสตร์", "ภาษาอังกฤษ"]
      },
      {
        id: "burapha-marine-science",
        name: "วิทยาศาสตร์ทางทะเล",
        facultyName: "คณะวิทยาศาสตร์",
        gpaxMinimum: 2.25,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "18,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักวิจัยชีววิทยาทางทะเล", "นักวิชาการสิ่งแวดล้อมทางน้ำ", "ผู้ดูแลฟาร์มเพาะเลี้ยงสัตว์น้ำ"],
        highlights: "สถาบันศึกษาที่ติดชายหาดบางแสน มีสถานบันวิจัยวิทยาศาสตร์ทางทะเล (พิพิธภัณฑ์สัตว์น้ำบางแสน) ไว้สนับสนุนการเรียนรู้จริง",
        requiredSubjects: ["ชีววิทยา", "เคมี"]
      }
    ,
      {
        id: "burapha-nurse",
        name: "พยาบาลศาสตรบัณฑิต",
        facultyName: "คณะพยาบาลศาสตร์",
        facultyWebsite: "https://nurse.buu.ac.th",
        gpaxMinimum: 2.75,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "25,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["พยาบาลวิชาชีพโรงพยาบาลรัฐ/เอกชน, พยาบาลดูแลผู้ป่วยวิกฤต"],
        highlights: "เรียนรู้กระบวนการบริบาลและการปฏิบัติงานร่วมกับแพทย์ในโรงพยาบาลมหาวิทยาลัยบูรพาเพื่อความปลอดภัยสูงสุด",
        requiredSubjects: ["ชีววิทยา", "เคมี", "ภาษาอังกฤษ"]
      },
      {
        id: "burapha-marketing",
        name: "การตลาด",
        facultyName: "คณะการจัดการและการท่องเที่ยว",
        facultyWebsite: "http://bbs.buu.ac.th",
        gpaxMinimum: 2.25,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "18,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota", "Admission"],
        careers: ["นักการตลาดออนไลน์, ผู้จัดการแบรนด์สินค้า, นักวางแผนงานอีเวนต์"],
        highlights: "มุ่งเน้นการวางแผนแบรนด์ การตลาดดิจิทัล และการบริหารการค้าการบริการในเขตเศรษฐกิจพิเศษภาคตะวันออก (EEC)",
        requiredSubjects: ["ภาษาอังกฤษ", "สังคมศึกษา"]
      }]
  },
  {
    id: "msu",
    name: "มหาวิทยาลัยมหาสารคาม",
    englishName: "Mahasarakham University",
    abbreviation: "MSU",
    logoColor: "#C98B00", // สีเหลืองโรยัล
    logoUrl: "/logos/msu.png",
    location: "มหาสารคาม",
    description: "มหาวิทยาลัยชั้นนำในภาคอีสาน โดดเด่นเรื่องศิลปวัฒนธรรมท้องถิ่น เภสัชศาสตร์ วิศวกรรมระบบชีวภาพ และภูมิสารสนเทศ",
    website: "https://www.msu.ac.th",
    rank: 18,
    programs: [
      {
        id: "msu-gis",
        name: "เทคโนโลยีภูมิสารสนเทศ",
        facultyName: "คณะวิทยาการสารสนเทศ",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "15,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota ภาคอีสาน", "Admission"],
        careers: ["นักวิเคราะห์ภาพถ่ายดาวเทียม/แผนที่ GIS", "นักแผนที่ทหาร/ที่ดิน", "Web Map Developer"],
        highlights: "เรียนรู้เรื่องการสร้างแอปพลิเคชันแผนที่นำทาง GPS การประมวลผลข้อมูลภูมิสารสนเทศเชิงลึกเพื่อการวางแผนภัยพิบัติและการพัฒนาเมือง",
        requiredSubjects: ["คณิตศาสตร์", "คอมพิวเตอร์พื้นฐาน"]
      }
    ,
      {
        id: "msu-edu-math",
        name: "คณิตศาสตร์ (กศ.บ. 4 ปี)",
        facultyName: "คณะศึกษาศาสตร์",
        facultyWebsite: "https://edu.msu.ac.th",
        gpaxMinimum: 3.00,
        studyTracks: ["วิทย์-คณิต"],
        tuitionFee: "16,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota ภาคอีสาน", "Admission"],
        careers: ["ครูสอนวิชาคณิตศาสตร์, นักวิชาการคณิตศาสตร์"],
        highlights: "ผลิตครูคณิตศาสตร์ที่มีทักษะวิชาชีพครูระดับเลิศและมีความรู้ด้านคณิตศาสตร์บริสุทธิ์เพื่อตอบสนองการศึกษาของภาคอีสาน",
        requiredSubjects: ["คณิตศาสตร์", "ความเป็นครู"]
      },
      {
        id: "msu-public-health",
        name: "สาธารณสุขศาสตร์",
        facultyName: "คณะสาธารณสุขศาสตร์",
        facultyWebsite: "http://ph.msu.ac.th",
        gpaxMinimum: 2.50,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "18,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Portfolio", "Quota ภาคอีสาน", "Admission"],
        careers: ["นักวิชาการสาธารณสุขประจำโรงพยาบาลส่งเสริมสุขภาพตำบล, เจ้าหน้าที่ความปลอดภัยในการทำงาน (จป.)"],
        highlights: "ศึกษาด้านระบาดวิทยา สุขอนามัยสิ่งแวดล้อม และการป้องกันควบคุมโรคในระดับชุมชนเมืองและท้องถิ่น",
        requiredSubjects: ["ชีววิทยา", "เคมี"]
      }]
  },
  {
    id: "abac",
    name: "มหาวิทยาลัยอัสสัมชัญ",
    englishName: "Assumption University",
    abbreviation: "ABAC",
    logoColor: "#1B3B6F", // สีน้ำเงินกรมท่าเข้ม
    logoUrl: "/logos/abac.png",
    location: "สมุทรปราการ (บางนา) / กรุงเทพมหานคร (หัวหมาก)",
    description: "มหาวิทยาลัยนานาชาติแห่งแรกของประเทศไทยที่มีหลักสูตรภาษาอังกฤษเต็มรูปแบบและมีความเชื่อมโยงทางวิชาการกับสถาบันการศึกษาทั่วโลก",
    website: "https://www.au.edu",
    rank: 19,
    programs: [
      {
        id: "abac-bba",
        name: "บริหารธุรกิจบัณฑิต (BBA หลักสูตรนานาชาติ)",
        facultyName: "Martin de Tours School of Management (MSME)",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "90,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Direct Admission / สอบตรง"],
        careers: ["International Business Executive", "Financial Analyst", "Marketing Coordinator", "Startup Founder"],
        highlights: "สังคมอินเตอร์ขนานแท้ เน้นการนำเสนอไอเดียธุรกิจ สื่อสารภาษาอังกฤษคล่องแคล่ว มีเครือข่ายธุรกิจครอบคลุมทั่วโลก",
        requiredSubjects: ["ภาษาอังกฤษ (สอบภาษาอังกฤษคัดแยกระดับชั้นเรียน)"]
      }
    ,
      {
        id: "abac-comm-arts-ad",
        name: "การโฆษณาและการสื่อสารแบรนด์สร้างสรรค์",
        facultyName: "คณะนิเทศศาสตร์",
        facultyWebsite: "https://www.ca.au.edu",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "85,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Direct Admission / สอบตรง"],
        careers: ["นักวางแผนกลยุทธ์โฆษณา, Copywriter, ผู้บริหารตราสินค้า (Brand Executive)"],
        highlights: "หลักสูตรนานาชาติเน้นกระบวนการวางแผนและสร้างสรรค์แคมเปญโฆษณา การสร้างแบรนด์ และการคิดคำโฆษณาที่เข้าถึงเป้าหมายระดับโลก",
        requiredSubjects: ["ภาษาอังกฤษ", "ความคิดสร้างสรรค์"]
      },
      {
        id: "abac-it",
        name: "เทคโนโลยีคอมพิวเตอร์และการสื่อสาร",
        facultyName: "คณะเทคโนโลยีสารสนเทศ",
        facultyWebsite: "https://www.scitech.au.edu",
        gpaxMinimum: 2.00,
        studyTracks: ["วิทย์-คณิต", "ศิลป์-คำนวณ"],
        tuitionFee: "90,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Direct Admission"],
        careers: ["สถาปนิกระบบไอที (IT Systems Architect), วิศวกรเครือข่ายความปลอดภัย, ที่ปรึกษาไอที"],
        highlights: "ศึกษาเทคโนโลยีเครือข่ายระดับโลก ระบบความปลอดภัยข้อมูล คลาวด์คอมพิวติ้ง และการพัฒนาระบบสื่อสารแบบพกพาภาษาอังกฤษ",
        requiredSubjects: ["คณิตศาสตร์", "ภาษาอังกฤษ"]
      }]
  },
  {
    id: "bu",
    name: "มหาวิทยาลัยกรุงเทพ",
    englishName: "Bangkok University",
    abbreviation: "BU",
    logoColor: "#781848", // สีม่วงเข้ม/บานเย็น
    logoUrl: "/logos/bu.png",
    location: "ปทุมธานี (รังสิต) / กรุงเทพมหานคร (กล้วยน้ำไท)",
    description: "มหาวิทยาลัยเอกชนยอดนิยมชั้นนำของประเทศ มีชื่อเสียงโดดเด่นเป็นพิเศษด้านนิเทศศาสตร์ ความคิดสร้างสรรค์ และการบริหารธุรกิจแนวใหม่",
    website: "https://www.bu.ac.th",
    rank: 20,
    programs: [
      {
        id: "bu-comm-art",
        name: "นิเทศศาสตรบัณฑิต (การผลิตภาพยนตร์)",
        facultyName: "คณะนิเทศศาสตร์",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "45,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Direct Admission (ไม่ต้องใช้คะแนนกลาง)"],
        careers: ["ผู้กำกับภาพยนตร์", "ช่างภาพกองถ่ายอาชีพ", "นักเขียนบท", "Video Editor / Content Creator"],
        highlights: "มีโรงถ่ายขนาดใหญ่ อุปกรณ์กล้องระนาบฮอลลีวูดทันสมัยที่สุดในอาเซียน เน้นลงมือจับกล้องถ่ายหนังตั้งแต่เทอมแรก",
        requiredSubjects: ["ความรักในความคิดสร้างสรรค์/สัมภาษณ์"]
      },
      {
        id: "bu-creative-design",
        name: "การผลิตสื่อสร้างสรรค์และเทคโนโลยีการบันเทิง",
        facultyName: "คณะดิจิทัลมีเดียและศิลปะภาพยนตร์",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "48,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Direct Admission"],
        careers: ["VFX Artist", "3D Animator", "Game Designer", "Creative Content Producer"],
        highlights: "ทำงานร่วมกับมืออาชีพในวงการ แอนิเมชัน กราฟิก และสื่อโซเชียลมีเดียชั้นนำ พร้อมอุปกรณ์สเปกท็อปในการทำงานสร้างสรรค์",
        requiredSubjects: ["Portfolio ผลงานดิจิทัลอาร์ต (ถ้ามี)"]
      }
    ,
      {
        id: "bu-bus-entrepreneur",
        name: "การเป็นผู้ประกอบการ",
        facultyName: "คณะบริหารธุรกิจ",
        facultyWebsite: "https://www.bu.ac.th/th/business/entrepreneurship",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "42,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Direct Admission"],
        careers: ["ผู้ก่อตั้งธุรกิจสตาร์ทอัป (Startup Founder), ผู้สืบทอดธุรกิจครอบครัว, ผู้พัฒนาธุรกิจใหม่ (Business Developer)"],
        highlights: "มุ่งเน้นการเริ่มต้นธุรกิจจริง การระดมทุน แผนธุรกิจดิจิทัล และนวัตกรรมโมเดลธุรกิจผ่านการสนับสนุนจากเครือข่ายพันธมิตรทางธุรกิจ",
        requiredSubjects: ["ภาษาอังกฤษ", "ความเป็นผู้นำ"]
      },
      {
        id: "bu-it-game",
        name: "เกมและสื่อเชิงโต้ตอบ",
        facultyName: "คณะเทคโนโลยีสารสนเทศและนวัตกรรม",
        facultyWebsite: "https://www.bu.ac.th/th/it-innovation/game-interactive-media",
        gpaxMinimum: 2.00,
        studyTracks: ["ทุกแผนการเรียน"],
        tuitionFee: "48,000 บาท/ภาคการศึกษา",
        tcasRounds: ["Direct Admission"],
        careers: ["นักพัฒนาเกม (Game Developer), นักออกแบบความลื่นไหลในเกม (Game Designer), นักเขียนโค้ดระบบเกม"],
        highlights: "เรียนรู้กระบวนการพัฒนาเกมครบวงจร ตั้งแต่การเขียนโปรแกรม ออกแบบเกมเพลย์ 3D และสื่อเสมือนจริง (AR/VR)",
        requiredSubjects: ["ความคิดเชิงตรรกะ", "คอมพิวเตอร์พื้นฐาน"]
      }]
  }
];
