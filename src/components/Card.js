import { CDN_LINK } from "../utils/constants";

const Card = ({ data }) => {
  console.log(data);

  const { name, cloudinaryImageId, avgRating, areaName, cuisines } = data?.info;
  return (
    <div className="card">
      <div className="card-img">
        <img className="card-img" src={CDN_LINK + cloudinaryImageId}></img>
      </div>

      <div className="card-items">
        <p>{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>Avg Rating : {avgRating}</p>
        <p>{areaName}, Kanpur</p>
      </div>
    </div>
  );
};

export default Card;
