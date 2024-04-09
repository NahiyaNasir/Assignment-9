import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const UserProfile = () => {
    const { currentUser, updateUser } = useContext(AuthContext);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const displayName = form.get("displayName");
        const photoURL=form.get('photoURL')
        updateUser(displayName, photoURL).then(()=>{console.log(currentUser);});
    };
    return (
        <div>
            <form  onSubmit={handleUpdate}>
                <label>Name: </label><input name="displayName" className="form-control" type="text" value={currentUser.displayName}/>
                <label>Photo URL: </label><input name="photoURL" className="form-control" type="text" value={currentUser.photoURL}/>
                <label>Email: </label><input readOnly name="email" className="form-control" type="text" value={currentUser.email}/>
                <button className="btn" type='submit'>Update</button>
            </form>            
        </div>
    );
};

export default UserProfile;