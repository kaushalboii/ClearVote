# 🗳️ ClearVote – AI-Powered Chat Assistant for DAO Governance

ClearVote is an AI-powered chatbot designed to make DAO governance simple and accessible for everyone. It helps users understand complex on-chain proposals in plain English, interact with DAO data, and preview voting decisions — all from a friendly chat interface.

---

## 🚀 Overview

Decentralized Autonomous Organizations (DAOs) thrive on community participation — but many members struggle to keep up with technical jargon in governance proposals. ClearVote solves this by integrating OpenAI's GPT-4 with DAO data platforms like Snapshot.

Users can:
- Ask questions about proposals
- Get instant summaries
- Preview their voting options
- Eventually vote directly through wallet integration

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** PHP (API calls, OpenAI integration)
- **AI Services:** OpenAI GPT-4
- **Blockchain:** EVM-compatible DAO platforms (e.g., Snapshot, Compound)
- **Wallet Integration:** MetaMask, WalletConnect
- **APIs & Data:** Snapshot API, The Graph

---

## 🧪 Installation & Usage

### Prerequisites
- Node.js & npm
- PHP 7.x or higher
- Composer (for PHP dependency management)
- MetaMask or Web3-enabled browser

### Setup

```bash
# Clone the repo
git clone https://github.com/your-team/ClearVote.git
cd ClearVote

# Setup frontend
cd frontend
npm install
npm run dev

# Setup backend
cd ../backend
composer install
php -S localhost:8000
