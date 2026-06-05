import type { Program } from '../data/universities';
import type { StudentProfile } from '../types';

export interface AdmissionChanceResult {
  level: 'high' | 'match' | 'low' | 'incompatible' | 'neutral';
  label: string;
  colorClass: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

// ฟังก์ชันคำนวณหาโอกาสในการเข้าศึกษาต่อตามข้อมูลผลสแกนใบเกรด
export const evaluateAdmissionChance = (
  prog: Program,
  studentProfile: StudentProfile | null,
  language: 'TH' | 'EN' = 'TH'
): AdmissionChanceResult => {
  if (!studentProfile) {
    return {
      level: "neutral",
      label: language === 'TH' ? "ข้อมูลไม่เพียงพอ" : "Insufficient Data",
      colorClass: "neutral",
      bgColor: "#f1f5f9",
      textColor: "#475569",
      borderColor: "#cbd5e1"
    };
  }

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
      label: language === 'TH' ? "แนะนำสูงสุด (ตรงเกณฑ์)" : "Highly Recommended (Eligible)",
      colorClass: "high",
      bgColor: "#ecfdf5",
      textColor: "#047857",
      borderColor: "#a7f3d0"
    };
  } else if (isTrackEligible && studentGpax >= prog.gpaxMinimum - 0.25) {
    // ตรงสาย แต่เกรดขาดไปนิดหน่อย (ไม่เกิน 0.25)
    return {
      level: "match",
      label: language === 'TH' ? "มีโอกาสลุ้น (เกรดใกล้เคียง/ตรงสาย)" : "Good Chance (Close GPAX)",
      colorClass: "match",
      bgColor: "#fef3c7",
      textColor: "#b45309",
      borderColor: "#fde68a"
    };
  } else if (!isGpaEligible && isTrackEligible) {
    // เกรดไม่ถึงแต่สายการเรียนตรง
    return {
      level: "low",
      label: language === 'TH' ? "ท้าทาย (เกรดต่ำกว่าเกณฑ์)" : "Challenging (GPAX Below Min)",
      colorClass: "neutral",
      bgColor: "#fef2f2",
      textColor: "#991b1b",
      borderColor: "#fee2e2"
    };
  } else {
    // ไม่ผ่านเกณฑ์
    return {
      level: "incompatible",
      label: language === 'TH' ? "ไม่สอดคล้อง (แผนการเรียนไม่ตรง)" : "Incompatible (Track Mismatch)",
      colorClass: "neutral",
      bgColor: "#f1f5f9",
      textColor: "#475569",
      borderColor: "#cbd5e1"
    };
  }
};
