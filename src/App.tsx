import { FC, useState, useEffect } from "react";
import "./App.css";
import { NavigationHeader } from "./components/navHeader/NavigationHeader";
import UserCard from "./components/userCard/UserCard";
import UserDetails from "./components/UserDetails";
import { IUser, users } from "./data/users";

const App: FC = () => {
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<number>();
  const [email, setEmail] = useState<string>();
  const [newname, setNewName] = useState<string>();
  const [newemail, setNewEmail] = useState<string>();
  const [newage, setNewAge] = useState<number>();

  const [userData, setUserData] = useState<IUser[]>(users);
  // const [x, setx]=useState<string>();
  useEffect(() =>{
    console.log("Its happening");

  },[userData]);
  
  function btnClick (){

    console.log("button has been clicked");
    
  }
  function addUser(user: IUser) {
    setUserData([...userData, user]);
   
  }
  function myclick() {
         console.log("we are testing");   
            
  }
  return (
    <>
      <NavigationHeader />
    

      <UserDetails name={selectedUser?.name} age={selectedUser?.age} email={selectedUser?.email}/>
      {userData.map((user, index) => (
        <div
          key={index}
          onClick={() => {
            setSelectedUser(user);
            console.log("selected user", selectedUser);
          }}
          
        >
        <button  className="btnDelete" key={index}
        onClick={()=>{
          userData.splice(index,1)

        }}
        >
        Delete User Below
          </button>  
          <UserCard name={user.name}  />
         
        </div>
        
      
      ))}
       <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const user: IUser = {
            id: Math.random(), name: name, age: age, email: email,
          };
          console.log("user", user);
          setUserData([...userData, user]);
          e.currentTarget.reset();
          
        }}
      >
        email
        <input
          type="text" name="email" onChange={(val) => {
            setEmail(val.target.value);
          }}
        /><br></br>
        name 
        <input
          type="text" name="name" onChange={(val) => {
            setName(val.target.value);
          }}
        />
        <br />
        age 
        <input
          type="number" name="age"
          onChange={(val) => {
            setAge(val.target.valueAsNumber);
          }}
        />
        <br/>
        <button onClick={btnClick}>Submit</button>
      </form>
      </div>


    </>

  );
  

};

export default App;
