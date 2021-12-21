import React from "react";
import "./First.css"
export default function First(props) {
  return (
    <div className="customer-info">
      <div>Time: {props.AppointmentData.time}</div>
      <div>Email: {props.AppointmentData.email}</div>
      <div>Phone: {props.AppointmentData.phone}</div>
    </div>
  );
}