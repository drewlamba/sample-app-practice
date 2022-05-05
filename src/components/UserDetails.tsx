import React from "react";
import { IUser } from "../data/users";
import "./user-details.css";

const UserDetails: React.FC<IUser> = (props) => {
  return (
    <><div className="user-details">
      <h4>Data</h4>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.age}</p>


      
    </div>
    
    </>
  )}

  


export default UserDetails;
