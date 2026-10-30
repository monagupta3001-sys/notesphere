import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Sparkles, User, Mail, ArrowRight } from 'lucide-react';
import { CHAPTER_INFO } from '../data/chapter1Data';
import { AuthProvider, UserProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserProfile) => void;
  currentUser: UserProfile | null;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  currentUser,
  onLogout
}) => {
  const [selectedProvider, setSelectedProvider] = useState<AuthProvider | null>(null);
  const [customName, setCustomName] = useState('');
  const [customEmail, setCustomEmail] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [showCustomFields, setShowCustomFields] = useState(false);

  if (!isOpen) return null;

  const handleProviderLogin = (provider: AuthProvider) => {
    setSelectedProvider(provider);
    setIsAuthenticating(true);

    // Simulate authenticating via popup/OAuth handshake
    setTimeout(() => {
      let defaultName = 'Mona Gupta';
      let defaultEmail = 'monagupta3001@gmail.com';
      let avatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';

      if (provider === 'discord') {
        defaultName = customName || 'Mona#2026';
        defaultEmail = customEmail || 'mona.student@discord.gg';
        avatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80';
      } else if (provider === 'github') {
        defaultName = customName || 'monagupta-dev';
        defaultEmail = customEmail || 'monagupta@users.noreply.github.com';
        avatar = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80';
      } else {
        defaultName = customName || 'Mona Gupta';
        defaultEmail = customEmail || 'monagupta3001@gmail.com';
      }

      const newUser: UserProfile = {
        id: `user_${Date.now()}`,
        name: customName.trim() || defaultName,
        email: customEmail.trim() || defaultEmail,
        avatar,
        provider,
        role: 'Class 8 Student',
        joinedAt: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      };

      setIsAuthenticating(false);
      onLoginSuccess(newUser);
      onClose();
    }, 600);
  };

  // If already logged in, show student profile card with Logout option
  if (currentUser) {
    return (
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden border border-slate-200 shadow-2xl p-6 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-base font-extrabold text-slate-900 font-heading">
              Student Account
            </h3>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-sm"
            />
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-extrabold text-slate-900 text-base">{currentUser.name}</h4>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full capitalize">
                  {currentUser.provider}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">{currentUser.email}</p>
              <p className="text-[11px] text-emerald-700 font-bold mt-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600" /> {currentUser.role}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-600 bg-blue-50/50 p-3.5 rounded-xl border border-blue-100">
            <div className="flex justify-between">
              <span>Account Status:</span>
              <span className="font-bold text-blue-900">Active Learner</span>
            </div>
            <div className="flex justify-between">
              <span>Member Since:</span>
              <span className="font-bold text-slate-700">{currentUser.joinedAt}</span>
            </div>
            <div className="flex justify-between">
              <span>Target Standard:</span>
              <span className="font-bold text-slate-700">Class 8th Board / CBSE</span>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl transition"
            >
              Back to Study
            </button>
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold py-2.5 px-4 rounded-xl transition border border-rose-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img
              src={CHAPTER_INFO.logoPath}
              alt="NoteSphere"
              className="w-10 h-10 object-contain rounded-xl bg-white border border-blue-100 p-0.5"
            />
            <div>
              <h3 className="text-lg font-black text-slate-900 font-heading">
                Sign in to NoteSphere
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Save quiz streaks, notes & study progress
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Main Sign-in Providers */}
        <div className="space-y-3">
          {/* Gmail / Google */}
          <button
            onClick={() => handleProviderLogin('gmail')}
            disabled={isAuthenticating}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm py-3 px-4 rounded-2xl border-2 border-slate-200 hover:border-slate-300 shadow-xs transition duration-200 group relative disabled:opacity-50"
          >
            {/* Google Multicolor 'G' */}
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24Z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
              />
            </svg>
            <span>Continue with Gmail / Google</span>
          </button>

          {/* Discord */}
          <button
            onClick={() => handleProviderLogin('discord')}
            disabled={isAuthenticating}
            className="w-full flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-2xl shadow-xs transition duration-200 group disabled:opacity-50"
          >
            {/* Discord Logo SVG */}
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>Continue with Discord</span>
          </button>

          {/* GitHub */}
          <button
            onClick={() => handleProviderLogin('github')}
            disabled={isAuthenticating}
            className="w-full flex items-center justify-center gap-3 bg-[#24292F] hover:bg-[#1b1f23] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-2xl shadow-xs transition duration-200 group disabled:opacity-50"
          >
            {/* GitHub Logo SVG */}
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Continue with GitHub</span>
          </button>
        </div>

        {/* Optional Custom Student Name Details */}
        <div className="pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setShowCustomFields(!showCustomFields)}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition flex items-center justify-between w-full py-1"
          >
            <span>Custom Student Details (Optional)</span>
            <span>{showCustomFields ? '▲' : '▼'}</span>
          </button>

          {showCustomFields && (
            <div className="space-y-3 pt-3 animate-fadeIn">
              <div>
                <label className="text-[11px] font-bold text-slate-600 block mb-1">Student Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Mona Gupta"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-600 block mb-1">Email / Student ID</label>
                <input
                  type="email"
                  placeholder="e.g. student@school.edu"
                  value={customEmail}
                  onChange={(e) => setCustomEmail(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Security / Privacy disclaimer */}
        <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>NoteSphere uses secure authorization. Student data is never shared with third parties.</span>
        </div>
      </div>
    </div>
  );
};
