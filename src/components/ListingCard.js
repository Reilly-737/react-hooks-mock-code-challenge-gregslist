import React, {useState} from "react";

function ListingCard({ id,deleteListing, description, image, location }) {
const [isFavorited, setIsFavorited] = useState(false);

const toggleFavorite = () => {
  setIsFavorited((isFavorited) => !isFavorited);
}
const handleDelete = () => {
deleteListing(id);
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited? (
          <button onClick={toggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
