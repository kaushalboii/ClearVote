// frontend/src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [proposal, setProposal] = useState('');
  const [summary, setSummary] = useState('[Generated result appears here]');

  const handleSummarize = async () => {
    try {
      const response = await fetch('http://localhost:8000/summarize.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ proposal }),
      });

      const data = await response.json();
      if (data.summary) {
        setSummary(data.summary);
      } else {
        setSummary("❌ Failed to generate summary.");
      }
    } catch (error) {
      setSummary("❌ Error: Could not fetch summary.");
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo-section">
          <img src="https://em-content.zobj.net/source/apple/391/brain_1f9e0.png" alt="Logo" className="logo" />
          <h1 className="brand">ClearVote</h1>
        </div>
        <span className="subtitle">Understand DAO proposals in seconds</span>
      </header>

      <main className="main">
        <h2 className="main-title">DAO Proposal Summarizer</h2>
        <p className="main-subtitle">Understand DAO proposals in seconds</p>

        <div className="card">
          <label className="input-label">Paste your DAO proposal below:</label>
          <textarea
            placeholder="Enter your DAO proposal text here..."
            value={proposal}
            onChange={(e) => setProposal(e.target.value)}
          />
          <button onClick={handleSummarize}>Summarize Proposal</button>
        </div>

        <div className="summary-box">
          <h3>📄 Summary</h3>
          <p>{summary}</p>
        </div>
      </main>

      <footer className="footer">
        <a href="#">About</a>
        <a href="#">GitHub</a>
        <a href="#">Docs</a>
      </footer>
    </div>
  );
}

export default App;
