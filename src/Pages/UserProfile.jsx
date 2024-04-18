import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  // const [name,setName]=useState(null)
  // const[photo,setPhoto]=useState(null)

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const displayName = form.get("displayName");
    const photoURL = form.get("photoURL");
    updateUser(displayName, photoURL).then(() => {
      console.log(currentUser);
    });
  };
  // const handelChange=()=>{
  //   setName
  // }
  return (
    <div>
      <Helmet>
        <title> User Update</title>
      </Helmet>
      <div className=" flex justify-center items-center mt-4 flex-col gap-5">
        <div className="avatar ">
          <div className="w-10 rounded-full">
            <img src={currentUser.photoURL || " URl NOt Found"} />
            <p>{currentUser.displayName}</p>
          </div>
          <div>
            <p>{currentUser.displayName}</p>
          </div>
        </div>

        <form onSubmit={handleUpdate}>
          <div className="form-control">
          <label className="">Name: </label>
          <input
            name="displayName"
          
            type="text"
            placeholder="Name"
            defaultValue={currentUser.displayName}
          />
          </div>
          <div className="form-control">
          <label>Photo URL: </label>
          <input
            name="photoURL"
           
            type="text"
            defaultValue={currentUser.photoURL}
          />
          </div>
         
         <div className=" form-control">
         <label>Email: </label>
          <input
            readOnly
            name="email"
            className="form-control"
            type="text"
            value={currentUser.email}
          />
         </div>
          <button className="btn" type="submit">
            {" "}
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
