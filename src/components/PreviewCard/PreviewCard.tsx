import './PreviewCard.css';

interface CardProps {
  title: string;
  preview: string;
  onClick: () => void;
}

const PreviewCard = ({title, preview, onClick}: CardProps) => {
  return (
    <div 
      className="background-card"
      onClick={onClick}
    >
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-preview">
        <p>{preview.substring(0, 150)}...</p>
      </div>
    </div>
  );
};
export default PreviewCard;