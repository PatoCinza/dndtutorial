import React from 'react';
import { Link } from 'react-router-dom';
import './LinkCard.css';

interface LinkCardProps {
  icon: React.ReactNode;
  title: string;
  to: string;
  description?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ icon, title, to, description }) => {
  return (
    <Link className="link-card" to={to}>
      <div className="link-card-icon">{icon}</div>
      <div className="link-card-content">
        <h2 className="link-card-title">{title}</h2>
        {description && <p className="link-card-description">{description}</p>}
      </div>
    </Link>
  );
};

export default LinkCard; 