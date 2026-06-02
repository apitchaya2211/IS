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
    ]
  },
  {
    id: "mahidol",
    name: "มหาวิทยาลัยมหิดล",
    englishName: "Mahidol University",
    abbreviation: "MU",
    logoColor: "#003057", // สีน้ำเงิน-ทองมหิดล
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
    ]
  },
  {
    id: "kmutt",
    name: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    englishName: "King Mongkut's University of Technology Thonburi",
    abbreviation: "KMUTT",
    logoColor: "#F37021", // สีส้มบางมด
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
    ]
  },
  {
    id: "cmu",
    name: "มหาวิทยาลัยเชียงใหม่",
    englishName: "Chiang Mai University",
    abbreviation: "CMU",
    logoColor: "#5B2E87", // สีม่วง มช.
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
    ]
  },
  {
    id: "tu",
    name: "มหาวิทยาลัยธรรมศาสตร์",
    englishName: "Thammasat University",
    abbreviation: "TU",
    logoColor: "#C9232B", // สีเหลือง-แดงธรรมศาสตร์
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
    ]
  },
  {
    id: "ku",
    name: "มหาวิทยาลัยเกษตรศาสตร์",
    englishName: "Kasetsart University",
    abbreviation: "KU",
    logoColor: "#006C35", // สีเขียวเกษตร
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
    ]
  },
  {
    id: "kku",
    name: "มหาวิทยาลัยขอนแก่น",
    englishName: "Khon Kaen University",
    abbreviation: "KKU",
    logoColor: "#A85324", // สีดินเทศ (ส้มแดงกล่ำ)
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
    ]
  },
  {
    id: "psu",
    name: "มหาวิทยาลัยสงขลานครินทร์",
    englishName: "Prince of Songkla University",
    abbreviation: "PSU",
    logoColor: "#0A3B75", // สีน้ำเงิน รูปร่างสมอ
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
    ]
  },
  {
    id: "kmitl",
    name: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    englishName: "King Mongkut's Institute of Technology Ladkrabang",
    abbreviation: "KMITL",
    logoColor: "#E34E26", // สีส้มหมาด
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
    ]
  },
  {
    id: "kmutnb",
    name: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
    englishName: "King Mongkut's University of Technology North Bangkok",
    abbreviation: "KMUTNB",
    logoColor: "#C74D0E", // สีแสดแดง
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
    ]
  },
  {
    id: "swu",
    name: "มหาวิทยาลัยศรีนครินทรวิโรฒ",
    englishName: "Srinakharinwirot University",
    abbreviation: "SWU",
    logoColor: "#C91E3B", // สีเทา-แดง มศว
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
    ]
  },
  {
    id: "silpakorn",
    name: "มหาวิทยาลัยศิลปากร",
    englishName: "Silpakorn University",
    abbreviation: "SU",
    logoColor: "#0093A8", // สีเขียวเวอร์ริเดียน (สีเขียวน้ำทะเล)
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
    ]
  },
  {
    id: "sut",
    name: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
    englishName: "Suranaree University of Technology",
    abbreviation: "SUT",
    logoColor: "#C25E00", // สีแสดทอง
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
    ]
  },
  {
    id: "mfu",
    name: "มหาวิทยาลัยแม่ฟ้าหลวง",
    englishName: "Mae Fah Luang University",
    abbreviation: "MFU",
    logoColor: "#A6192E", // สีแดงแดงเข้ม-ทอง
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
    ]
  },
  {
    id: "naresuan",
    name: "มหาวิทยาลัยนเรศวร",
    englishName: "Naresuan University",
    abbreviation: "NU",
    logoColor: "#C4820E", // สีทองนเรศวร
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
    ]
  },
  {
    id: "walailak",
    name: "มหาวิทยาลัยวลัยลักษณ์",
    englishName: "Walailak University",
    abbreviation: "WU",
    logoColor: "#E25822", // สีแสด-ม่วง
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
    ]
  },
  {
    id: "burapha",
    name: "มหาวิทยาลัยบูรพา",
    englishName: "Burapha University",
    abbreviation: "BUU",
    logoColor: "#00629B", // สีเทา-ทอง (แต่ออกน้ำเงินเด่น)
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
    ]
  },
  {
    id: "msu",
    name: "มหาวิทยาลัยมหาสารคาม",
    englishName: "Mahasarakham University",
    abbreviation: "MSU",
    logoColor: "#C98B00", // สีเหลืองโรยัล
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
    ]
  },
  {
    id: "abac",
    name: "มหาวิทยาลัยอัสสัมชัญ",
    englishName: "Assumption University",
    abbreviation: "ABAC",
    logoColor: "#1B3B6F", // สีน้ำเงินกรมท่าเข้ม
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
    ]
  },
  {
    id: "bu",
    name: "มหาวิทยาลัยกรุงเทพ",
    englishName: "Bangkok University",
    abbreviation: "BU",
    logoColor: "#781848", // สีม่วงเข้ม/บานเย็น
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
    ]
  }
];
