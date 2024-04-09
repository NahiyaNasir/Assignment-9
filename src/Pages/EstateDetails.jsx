
import {  useParams,useLoaderData } from 'react-router-dom';
const EstateDetails = () => {
    const res=useLoaderData()
    console.log(res);
    const {id}= useParams()
   // console.log(id);
   const details=res.find(r=>r.id==id)
       
    return (
        <div>
            <h2>{details.estate_title}</h2>            
        </div>        
    );
};

export default EstateDetails;