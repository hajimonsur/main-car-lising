

const TeamCard = ( {username, imgurl, link,}) => {
    const styles = {
        card: {
            width: '200px',
            height: '350px',
            border: '1px solid black',
            padding: "10px",
            margin: "10px",
            
        },

        img: {
            width: "200px",
            height: "200px",
            borderRadius: "10px"
        }

    }
  return (
    <div style={styles.card}>
        <img src={imgurl || "https://avatars.githubusercontent.com/u/1?v=4"} alt={`${username} profile picture`}  style={styles.img}/>
        <h3>Username: { username || "name"}</h3>
        <p>
            <a href={link}> GitHub Link</a>
        </p>
    </div>
  )
}

export default TeamCard