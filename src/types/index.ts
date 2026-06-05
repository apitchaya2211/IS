// กำหนดประเภทข้อมูลประวัติของนักเรียนจากการวิเคราะห์ของ AI
export interface StudentProfile {
  gpax: number;
  studyTrack: string;
  strongSubjects: string[];
  weakSubjects: string[];
  summary: string;
}

// ประเภทข้อมูล User Session
export interface UserSession {
  name: string;
  email: string;
  picture?: string;
}
