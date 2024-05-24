import React from 'react';
import './componens/CandidateCard.css';
import { candidates } from './componens/Candidates.tsx';
import CandidateCard from './componens/CandidateCard';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <h1>CALON RT DESA SUKAKAMU</h1>
            <div className="candidates-list">
                {candidates.map(candidate => (
                    <CandidateCard key={candidate.id} candidate={candidate} />
                ))}
            </div>
        </div>
    );
};

export default App;
