import React from "react";
import { IUser, users } from "../../data/users";
import "./userCard.css";
import { FC, useState, useEffect } from "react";






const UserCard: React.FC<IUser> = (props) => {
  
  

  const userid = props.id;
  console.log("user id", userid);

  



  return (
    
   <> <div className="user-card">
      <h4>Name</h4>
      <p>{props.name}</p> 
  
    </div>

   </> 
  );
};


export default UserCard;
