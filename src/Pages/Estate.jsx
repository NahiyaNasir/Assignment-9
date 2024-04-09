/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Estate = ({residential}) => {
    console.log(residential);
    const {estate_title,segment_name,image, Status,location,price,id}=residential
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <h2 className="card-title">{segment_name}</h2>
    <p>{Status}</p>
    <p className="text-orange-400"> Location : {location}</p>
    <p className="font-bold"> Price:{price}</p>
    <div className="card-actions justify-end">
    <Link to={`residential/${id}`}>
    <button className="btn btn-outline bg-blue-500">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Estate;