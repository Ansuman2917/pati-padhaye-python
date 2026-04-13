import React from 'react'

const styles = {
  container: {
    position: 'fixed',
    inset: 0,
    background: 'linear-gradient(180deg, #0a1628 0%, #1e3a5f 50%, #0a1628 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    fontFamily: "'Orbitron', sans-serif",
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.08) 0%, transparent 40%),
      linear-gradient(0deg, rgba(0, 212, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.02) 1px, transparent 1px)
    `,
    backgroundSize: '100% 100%, 100% 100%, 50px 50px, 50px 50px',
  },
  title: {
    fontSize: 'clamp(2rem, 8vw, 4rem)',
    fontWeight: 900,
    background: 'linear-gradient(135deg, #e8f4f8 0%, #00d4ff 50%, #e8f4f8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 60px rgba(0, 212, 255, 0.5)',
    marginBottom: '0.5rem',
    textAlign: 'center',
    animation: 'glow 2s ease-in-out infinite alternate',
  },
  subtitle: {
    fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
    color: '#c0c0c0',
    letterSpacing: '0.3em',
    marginBottom: '3rem',
  },
  diamond: {
    width: '120px',
    height: '120px',
    marginBottom: '3rem',
    animation: 'float 3s ease-in-out infinite',
  },
  button: {
    padding: '1rem 3rem',
    fontSize: '1.2rem',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 700,
    background: 'transparent',
    border: '2px solid #00d4ff',
    color: '#00d4ff',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  },
  instructions: {
    marginTop: '3rem',
    color: '#607080',
    fontSize: '0.85rem',
    textAlign: 'center',
    lineHeight: 1.8,
  },
  key: {
    display: 'inline-block',
    padding: '0.2rem 0.6rem',
    border: '1px solid #405060',
    borderRadius: '4px',
    margin: '0 0.2rem',
    fontFamily: "'JetBrains Mono', monospace",
  },
}

export default function StartScreen({ onStart }) {
  return (
    <div style={styles.container}>
      <style>{`
        @keyframes glow {
          from { filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.3)); }
          to { filter: drop-shadow(0 0 40px rgba(0, 212, 255, 0.6)); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        ${styles.button}:hover {
          background: #00d4ff;
          color: #0a1628;
          box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
        }
      `}</style>
      <div style={styles.background} />
      
      <svg style={styles.diamond} viewBox="0 0 100 100">
        <defs>
          <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8f4f8" />
            <stop offset="50%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
        </defs>
        <polygon 
          points="50,5 95,30 95,70 50,95 5,70 5,30" 
          fill="none" 
          stroke="url(#diamondGrad)" 
          strokeWidth="2"
        />
        <polygon 
          points="50,15 85,35 85,65 50,85 15,65 15,35" 
          fill="rgba(0, 212, 255, 0.1)"
        />
      </svg>
      
      <h1 style={styles.title}>PATI PADHAYE PYTHON</h1>
      <p style={styles.subtitle}>♠ ALICE IN BORDERLAND ♠</p>
      
      <button style={styles.button} onClick={onStart}>
        ENTER THE GAME
      </button>
      
      <div style={styles.instructions}>
        <p>How to Play</p>
        <p>
          <span style={styles.key}>W A S D</span> Move
          <span style={styles.key}>MOUSE</span> Look
          <span style={styles.key}>CLICK</span> Interact
        </p>
        <p>Collect tokens and complete lessons to survive!</p>
      </div>
    </div>
  )
}