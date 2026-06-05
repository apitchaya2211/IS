import { Sparkles, User, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

interface ChatAdvisorProps {
  messages: Message[];
  chatInput: string;
  setChatInput: (input: string) => void;
  handleSendMessage: () => void;
  t: Record<string, string>;
}

export default function ChatAdvisor({
  messages,
  chatInput,
  setChatInput,
  handleSendMessage,
  t
}: ChatAdvisorProps) {
  return (
    <div className="chat-container animate-fade-in">
      <div className="chat-header">
        <div className="header-logo-icon" style={{ width: 32, height: 32, fontSize: 14 }}>
          AI
        </div>
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
            <div className="chat-bubble">{msg.content}</div>
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
        <button type="button" className="chat-send-btn" onClick={handleSendMessage}>
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
