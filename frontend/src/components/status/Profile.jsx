import { useParams } from "react-router-dom";
const Profile = () => {
  const { id } = useParams();
  // const [user, setUser] = useState({});
  
// fetch user from local storage
// let profile = JSON.parse(localStorage.getItem("user"));
// console.log('awe',profile);
//   setUser(profile);
  return (
    <div>
          <h1 className='text-center text-danger'>Welcome to your profile {id}</h1> 
    </div>
  )
}

export default Profile