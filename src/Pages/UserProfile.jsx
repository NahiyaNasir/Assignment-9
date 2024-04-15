import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Helmet } from "react-helmet-async";


const UserProfile = () => {
    const { currentUser, updateUser } = useContext(AuthContext);
    const [name,setName]=useState(null)
    const[photo,setPhoto]=useState(null)

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const displayName = form.get("displayName");
        const photoURL=form.get('photoURL')
        updateUser(displayName, photoURL).then(()=>{console.log(currentUser);});
    };
    
    return (
        <div>
            {/* <form  onSubmit={handleUpdate}>
                <label>Name: </label><input name="displayName" className="form-control" type="text" value={currentUser.displayName}/>
                <label>Photo URL: </label><input name="photoURL" className="form-control" type="text" value={currentUser.photoURL}/>
                <label>Email: </label><input readOnly name="email" className="form-control" type="text" value={currentUser.email}/>
                <button className="btn" type='submit'>Update</button>
            </form>     
                    */}
                   <div>
      <Helmet>
      <title> User Update</title>
    </Helmet>
      <div className=" flex items-center justify-center my-3">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URl</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoUrl"
                className="input input-bordered"
                required
              />
            </div>
            
            <div className="form-control mt-6">
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </form>

         
         
        </div>
      </div>
    </div>
        </div>
    );
};

export default UserProfile;