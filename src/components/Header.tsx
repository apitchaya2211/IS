import { useState } from 'react';
import { Search, MessageSquare, Globe, ChevronDown, LogOut } from 'lucide-react';
import type { UserSession } from '../types';

interface HeaderProps {
  currentUser: UserSession;
  onLogout: () => void;
  activeTab: 'search' | 'chat';
  onChangeTab: (tab: 'search' | 'chat') => void;
  language: 'TH' | 'EN';
  setLanguage: (lang: 'TH' | 'EN') => void;
  onGoHome: () => void;
  t: Record<string, string>;
}

export default function Header({
  currentUser,
  onLogout,
  activeTab,
  onChangeTab,
  language,
  setLanguage,
  onGoHome,
  t
}: HeaderProps) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    <header className="app-header">
      <div
        className="header-logo"
        onClick={onGoHome}
        style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
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
            onClick={() => onChangeTab('search')}
          >
            <Search size={16} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'text-bottom' }} />
            {t.search}
          </button>
          <button
            className={`nav-tab ${activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => onChangeTab('chat')}
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
                onMouseDown={() => {
                  setLanguage('TH');
                  setIsLangMenuOpen(false);
                }}
              >
                🇹🇭 ไทย (TH)
              </button>
              <button
                className={`lang-option ${language === 'EN' ? 'active' : ''}`}
                onMouseDown={() => {
                  setLanguage('EN');
                  setIsLangMenuOpen(false);
                }}
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
            onClick={onLogout}
            title="ออกจากระบบ"
            id="logout-btn"
          >
            <LogOut size={14} />
            <span>ออกจากระบบ</span>
          </button>
        </div>
      </div>
    </header>
  );
}
