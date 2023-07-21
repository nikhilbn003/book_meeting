const Card = ({ title, description }) => {
    return (
      <div className="border p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p>{description}</p>
        <p>{description}</p>
        <p>{description}</p>
        <p>{description}</p>
      </div>
    );
  };
  
  export default Card;
  