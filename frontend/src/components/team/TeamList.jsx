import { useEffect, useState } from 'react';
import TeamCard from './TeamCard'

const TeamList = () => {

    const styles = {
        grid: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            padding: "60px",
        }
    }

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    // fetch data from api 

    const data = async () =>{
        setLoading(true);
        const url = "https://api.github.com/users";
        try {
            const result = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });  
            const fetchedData = await result.json();
            setLoading(false);
            setUsers(fetchedData);
            }  catch (error) {
            console.log(error);
            setLoading(false);
        }
        
    }
    useEffect(() => { data()}, []);
   

  return (
    <div> <h2>Car Bay Team</h2>
    {loading && <h2>Loading...</h2>}
   <div style={styles.grid}>
    { users.map((user) =>
         <TeamCard key={user.id}
          username={user.login} 
          imgurl={user.avatar_url}
           link={user.html_url} />) }
   

   </div>
    </div>
  )
}

export default TeamList