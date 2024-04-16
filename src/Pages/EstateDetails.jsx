import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";
const EstateDetails = () => {
  const res = useLoaderData();
  console.log(res);
  const { id } = useParams();
  // console.log(id);
  const details = res.find((r) => r.id == id);
  console.log(details);
  return (
    <div>
    <Helmet>
      <title> Details About Estate</title>
    </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl  my-7 mx-auto max-w-6xl">
        <figure>
          <img src={details.image} alt="Album"  />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{details.estate_title}</h2>
          <h2 className="card-title">{details.segment_name}</h2>
          <div>
                  <p>{details.description}</p>
                  <p>{details.price}</p>
                  <p>{details.status}</p>
                  <p> {details.area}</p>
                  <p>{details.location}</p>
          </div>
          <p className=" text-xl text-blue-400">
                      {
           details.facilities.map((facility,idx)=><p key={idx}> {facility}</p>
          )
            }
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
