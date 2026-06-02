import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, GraduationCap, Sparkles, BookOpen, Award } from 'lucide-react';

interface LoginPageProps {
  onLogin: (user: { name: string; email: string }) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!loginEmail || !loginPassword) {
      setError('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }

    setIsLoading(true);

    // ดึงผู้ใช้ที่ลงทะเบียนไว้
    const users: { name: string; email: string; password: string }[] = JSON.parse(
      localStorage.getItem('uni_guide_users') || '[]'
    );

    setTimeout(() => {
      const found = users.find(
        (u) => u.email === loginEmail && u.password === loginPassword
      );

      if (found) {
        const userData = { name: found.name, email: found.email };
        if (rememberMe) {
          localStorage.setItem('uni_guide_session', JSON.stringify(userData));
        } else {
          sessionStorage.setItem('uni_guide_session', JSON.stringify(userData));
        }
        onLogin(userData);
      } else {
        setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      }
      setIsLoading(false);
    }, 800);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!regName || !regEmail || !regPassword || !regConfirmPassword) {
      setError('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง');
      return;
    }

    if (regPassword.length < 6) {
      setError('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regEmail)) {
      setError('รูปแบบอีเมลไม่ถูกต้อง');
      return;
    }

    setIsLoading(true);

    const users: { name: string; email: string; password: string }[] = JSON.parse(
      localStorage.getItem('uni_guide_users') || '[]'
    );

    setTimeout(() => {
      if (users.find((u) => u.email === regEmail)) {
        setError('อีเมลนี้ถูกใช้งานแล้ว');
        setIsLoading(false);
        return;
      }

      const newUser = { name: regName, email: regEmail, password: regPassword };
      users.push(newUser);
      localStorage.setItem('uni_guide_users', JSON.stringify(users));

      const userData = { name: regName, email: regEmail };
      sessionStorage.setItem('uni_guide_session', JSON.stringify(userData));
      onLogin(userData);
      setIsLoading(false);
    }, 800);
  };

  const handleTabSwitch = (tab: 'login' | 'register') => {
    setActiveTab(tab);
    setError('');
  };

  return (
    <div className="login-page">
      {/* ฝั่งซ้าย: Branding Panel */}
      <div className="login-left-panel">
        <div className="login-left-content">
          {/* Logo */}
          <div className="login-logo-area">
            <div className="login-logo-icon">
              <GraduationCap size={32} color="#d97706" />
            </div>
            <div className="login-logo-text">
              <span className="login-logo-white">University</span>
              <span className="login-logo-amber"> Guide TH</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="login-tagline">
            <h2 className="login-tagline-title">
              ค้นหามหาวิทยาลัยที่ใช่
              <br />
              <span className="login-tagline-accent">ด้วยพลัง AI</span>
            </h2>
            <p className="login-tagline-desc">
              ระบบแนะแนวการศึกษาอัจฉริยะ ช่วยให้คุณเลือกคณะและมหาวิทยาลัย
              ได้ตรงกับศักยภาพของตัวเอง
            </p>
          </div>

          {/* Feature List */}
          <div className="login-features">
            <div className="login-feature-item">
              <div className="login-feature-icon">
                <Sparkles size={16} color="#d97706" />
              </div>
              <div>
                <div className="login-feature-title">AI วิเคราะห์ใบเกรด</div>
                <div className="login-feature-desc">อัปโหลดใบเกรด ปพ.1 ให้ AI ประเมินความสามารถ</div>
              </div>
            </div>
            <div className="login-feature-item">
              <div className="login-feature-icon">
                <BookOpen size={16} color="#d97706" />
              </div>
              <div>
                <div className="login-feature-title">หลักสูตรกว่า 20 มหาวิทยาลัย</div>
                <div className="login-feature-desc">ครอบคลุมมหาวิทยาลัยชั้นนำของประเทศไทย</div>
              </div>
            </div>
            <div className="login-feature-item">
              <div className="login-feature-icon">
                <Award size={16} color="#d97706" />
              </div>
              <div>
                <div className="login-feature-title">จับคู่สาขาที่เหมาะสม</div>
                <div className="login-feature-desc">แนะนำหลักสูตรตามเกรดและแผนการเรียนของคุณ</div>
              </div>
            </div>
          </div>

          {/* Decorative Background Circles */}
          <div className="login-deco-circle login-deco-circle-1" />
          <div className="login-deco-circle login-deco-circle-2" />
          <div className="login-deco-circle login-deco-circle-3" />
        </div>
      </div>

      {/* ฝั่งขวา: Form Panel */}
      <div className="login-right-panel">
        <div className="login-form-card">
          {/* Tab Switcher */}
          <div className="login-tabs">
            <button
              className={`login-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('login')}
            >
              เข้าสู่ระบบ
            </button>
            <button
              className={`login-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('register')}
            >
              ลงทะเบียน
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="login-error-msg">
              <span>⚠️ {error}</span>
            </div>
          )}

          {/* LOGIN FORM */}
          {activeTab === 'login' && (
            <form onSubmit={handleLogin} className="login-form animate-fade-in">
              <div className="login-welcome">
                <h1 className="login-form-title">ยินดีต้อนรับกลับ 👋</h1>
                <p className="login-form-subtitle">เข้าสู่ระบบเพื่อดูหลักสูตรที่แนะนำสำหรับคุณ</p>
              </div>

              <div className="login-field">
                <label className="login-label">อีเมล</label>
                <div className="login-input-wrapper">
                  <Mail size={16} className="login-input-icon" />
                  <input
                    id="login-email"
                    type="email"
                    className="login-input"
                    placeholder="กรอกอีเมลของคุณ"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="login-field">
                <label className="login-label">รหัสผ่าน</label>
                <div className="login-input-wrapper">
                  <Lock size={16} className="login-input-icon" />
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    className="login-input"
                    placeholder="กรอกรหัสผ่าน"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="login-eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="login-remember-row">
                <label className="login-checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="login-checkbox"
                    id="remember-me"
                  />
                  <span>จำฉันไว้</span>
                </label>
              </div>

              <button
                type="submit"
                className="login-submit-btn"
                disabled={isLoading}
                id="login-submit-btn"
              >
                {isLoading ? (
                  <span className="login-spinner" />
                ) : (
                  'เข้าสู่ระบบ'
                )}
              </button>

              <div className="login-divider">
                <span>หรือ</span>
              </div>

              <button
                type="button"
                className="login-google-btn"
                onClick={() => {
                  // จำลอง Google login
                  const mockGoogleUser = { name: 'ผู้ใช้ Google', email: 'user@gmail.com' };
                  sessionStorage.setItem('uni_guide_session', JSON.stringify(mockGoogleUser));
                  onLogin(mockGoogleUser);
                }}
                id="login-google-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                เข้าสู่ระบบด้วย Google
              </button>

              <p className="login-switch-text">
                ยังไม่มีบัญชี?{' '}
                <button type="button" className="login-switch-link" onClick={() => handleTabSwitch('register')}>
                  ลงทะเบียนที่นี่
                </button>
              </p>
            </form>
          )}

          {/* REGISTER FORM */}
          {activeTab === 'register' && (
            <form onSubmit={handleRegister} className="login-form animate-fade-in">
              <div className="login-welcome">
                <h1 className="login-form-title">สร้างบัญชีใหม่ ✨</h1>
                <p className="login-form-subtitle">ลงทะเบียนเพื่อเริ่มค้นหามหาวิทยาลัยที่ใช่สำหรับคุณ</p>
              </div>

              <div className="login-field">
                <label className="login-label">ชื่อ-นามสกุล</label>
                <div className="login-input-wrapper">
                  <User size={16} className="login-input-icon" />
                  <input
                    id="reg-name"
                    type="text"
                    className="login-input"
                    placeholder="กรอกชื่อ-นามสกุลของคุณ"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    autoComplete="name"
                  />
                </div>
              </div>

              <div className="login-field">
                <label className="login-label">อีเมล</label>
                <div className="login-input-wrapper">
                  <Mail size={16} className="login-input-icon" />
                  <input
                    id="reg-email"
                    type="email"
                    className="login-input"
                    placeholder="กรอกอีเมลของคุณ"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="login-field">
                <label className="login-label">รหัสผ่าน</label>
                <div className="login-input-wrapper">
                  <Lock size={16} className="login-input-icon" />
                  <input
                    id="reg-password"
                    type={showPassword ? 'text' : 'password'}
                    className="login-input"
                    placeholder="รหัสผ่านอย่างน้อย 6 ตัวอักษร"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="login-eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="login-field">
                <label className="login-label">ยืนยันรหัสผ่าน</label>
                <div className="login-input-wrapper">
                  <Lock size={16} className="login-input-icon" />
                  <input
                    id="reg-confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="login-input"
                    placeholder="กรอกรหัสผ่านอีกครั้ง"
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="login-eye-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="login-submit-btn"
                disabled={isLoading}
                id="register-submit-btn"
              >
                {isLoading ? (
                  <span className="login-spinner" />
                ) : (
                  'ลงทะเบียน'
                )}
              </button>

              <p className="login-switch-text">
                มีบัญชีอยู่แล้ว?{' '}
                <button type="button" className="login-switch-link" onClick={() => handleTabSwitch('login')}>
                  เข้าสู่ระบบที่นี่
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
