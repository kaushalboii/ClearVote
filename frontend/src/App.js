import React, { useState } from "react";
import "./App.css";

function App() {
  const [proposalText, setProposalText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    setSummary("⏳ Summarizing...");

    try {
      const response = await fetch("http://localhost:8000/summarize.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: proposalText }),
      });

      const data = await response.json();

      const output =
        data.choices?.[0]?.message?.content || "⚠️ No summary received.";
      setSummary(output);
    } catch (error) {
      console.error("Error:", error);
      setSummary("❌ Failed to fetch summary.");
    }
  };

  return (
    <div className="App">
      <h1>🧠 ClearVote - DAO Proposal Summarizer</h1>
      <textarea
        rows="10"
        cols="80"
        placeholder="Paste your DAO proposal here..."
        value={proposalText}
        onChange={(e) => setProposalText(e.target.value)}
      />
      <br />
      <button onClick={handleSummarize}>Summarize Proposal</button>
      <div className="summary-box">
        <h3>📝 Summary:</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default App;
