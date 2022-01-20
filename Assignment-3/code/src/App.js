import React from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import "./App.css";
import './Nav.css'
const AppointmentData = {
  name: "Alan Ford",
  eid: "00005152",
  time: "9:00 (24-05-2016)",
  email: "alan.form@email.nl",
  phone: "+3112346587",
};
const appointmentstatus = {
  status: "In Progress",
  door: "Mark",
  time: "10:30 (25-05-2016)",
};
const custominfo = {
  profilepicture: "https://www.w3schools.com/howto/img_avatar.png",
  name: "john Doe",
  designation: "lorem ipsum",
};
function Nav(props) {
  return (
    <div className="nav-bowl">
      <div className="nav-bowl-1">
        <div>{props.AppointmentData.name}</div>
        <div>{props.AppointmentData.eid}</div>
      </div>
      <div className="nav-bowl-2">
        <button>Print</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site-container">
      <Nav AppointmentData={AppointmentData} />
      <First AppointmentData={AppointmentData} />
      <Second appointmentstatus={appointmentstatus}/>
      <Third custominfo={custominfo}/>
    </div>
  );
}

export default App;