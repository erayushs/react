import { CDN_LINK } from "../utils/constants";

const Card = ({ data }) => {
  const { name, cloudinaryImageId, avgRating, areaName, cuisines, costForTwo } =
    data?.info;
  return (
    <div className="card">
      <div className="card-img-div">
        <img className="card-img" src={CDN_LINK + cloudinaryImageId}></img>
      </div>

      <div className="card-items">
        <h4>{name}</h4>
        <h4>{costForTwo}</h4>
        <p>{cuisines.join(", ")}</p>
        <p>Avg Rating : {avgRating}</p>
        <p>{areaName}, Kanpur</p>
      </div>
    </div>
  );
};

export default Card;
