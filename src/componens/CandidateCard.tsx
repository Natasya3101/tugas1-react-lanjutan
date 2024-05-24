import React from 'react';
import { Candidate } from './Candidates.tsx';
import './CandidateCard.css';

interface CandidateCardProps {
    candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
    return (
        <div className="candidate-card">
            <div className="candidate-number">{candidate.number.toString().padStart(2, '0')}</div>
            <img src={candidate.photo} alt={candidate.name} className="candidate-photo" />
            <div className="candidate-name">{candidate.name}</div>
            <div className="candidate-batch">{candidate.batch}</div>
        </div>
    );
};

export default CandidateCard;
