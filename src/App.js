
import './App.css';
import { Userlist, UserDetails, Editlist } from './Userlist';
import { useState } from "react"
import { Addusers } from './Addusers';
import { EditUser } from "./EditUser";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect } from 'react';

function App() {
  // const Users = [{
  //   name: "Mark",
  //   EmployeeId: "EI00",
  //   designation: "Associate Engineer",
  //   salary: "1,00,000",
  //   pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  // },
  // {
  //   name: "Emiliee",
  //   EmployeeId: "EI01",
  //   designation: "Associate Engineer",
  //   salary: "2,00,000",
  //   pic: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
  // },
  // {
  //   name: "Antony",
  //   EmployeeId: "EI02",
  //   designation: "Associate Engineer",
  //   salary: "3,00,000",
  //   pic: "https://upload.wikimedia.org/wikipedia/en/a/a1/NafSadh_Profile.jpg"

  // },
  // {
  //   name: "Jasmine",
  //   EmployeeId: "EI03",
  //   designation: "Associate Engineer",
  //   salary: "5,00,000",
  //   pic: "https://www.headshotsprague.com/wp-content/uploads/2019/08/Emotional-headshot-of-aspiring-actress-on-white-background-made-by-Headshots-Prague-1.jpg"
  // },
  // {
  //   name: "Josep",
  //   EmployeeId: "EI04",
  //   designation: "Associate Engineer",
  //   salary: "5,00,000",
  //   pic: "https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Justin-Welsh.jpeg"
  // },
  // {
  //   name: "Fernando",
  //   EmployeeId: "EI05",
  //   designation: "Associate Engineer",
  //   salary: "7,00,000",
  //   pic: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"

  // },
  // ]

  const [userlist, setUserlist] = useState([]);
  useEffect(() => {
    fetch("https://6166c4e813aa1d00170a6717.mockapi.io/userlist")
      .then((data) => data.json())
      .then((uls) => setUserlist(uls));
  }, []);
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/users"><Button variant="contained">User list</Button></Link></li>
          <li><Link to="/create-user"><Button variant="contained">Create User</Button></Link></li>
          <li><Link to="/edit-user/"><Button variant="contained">Edit User</Button></Link></li>
          <li><Link to="/profile/"><Button variant="contained">Profile</Button></Link></li>
        </ul>
        {/* <Userlist users={userlist} setUserlist={setUserlist} /> */}
        {/* <Addusers users={userlist} setUserlist={setUserlist} /> */}
      </nav>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/users">
          <Userlist />
        </Route>
        <Route path="/employeeList">
          <Redirect to="/uers" />
        </Route>
        <Route path="/Create-user">
          <Addusers users={userlist} setUserlist={setUserlist} />
        </Route>
        <Route exact path="/edit-user/">
          <Editlist users={userlist} setUserlist={setUserlist} />
        </Route>
        <Route path="/edit-user/:id">
          <EditUser users={userlist} setUserlist={setUserlist} />
        </Route>
        <Route exact path="/profile/">
          <Userlist users={userlist} />
        </Route>
        <Route path="/profile/:id">
          <UserDetails />
        </Route>
        <Route path="**">
          <img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
            alt="not found"></img>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
