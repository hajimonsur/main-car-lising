import TeamCard from "../team/TeamCard";
import "./AddTeamForm.css";
import { useState } from "react";

const AddTeamForm = () => {
  // create state
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [teamObj, setTeamObj] = useState({});

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // create new team object
    const newTeam = { name, link, imgurl };

    setTeamObj(newTeam);
    // clear form
    setName("");
    setLink("");
    setImgurl("");
  };

  return (
    <div className="team-card" >
      <div className="container">

        <h2>Add New Team</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="link">GitHub Link:</label>
            <input
              type="text"
              id="link"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="imgurl">Profile Image Url:</label>
            <input
              type="text"
              id="imgurl"
              name="imgurl"
              value={imgurl}
              onChange={(e) => setImgurl(e.target.value)}
            />
          </div>
          <button type="submit">Add Team</button>
        </form>
      </div>
      <div  >
        <h2>Team Card</h2>
        {teamObj.name && (
          <TeamCard
            username={teamObj.name}
            link={teamObj.link}
            imgurl={teamObj.imgurl}
          />
        )}
      </div>
    </div>
  );
};

export default AddTeamForm;
