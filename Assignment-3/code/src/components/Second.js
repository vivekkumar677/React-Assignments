import React from 'react'
import "./Second.css"
export default function Second(props) {
    return (
      <div className="order-info">
        <div>
          <div>Status: </div>
          <div>{props.appointmentstatus.status}</div>
        </div>
        <div>
          <div>Door: </div>

          <div>{props.appointmentstatus.door}</div>
        </div>
        <div>
            <div>Time: </div>
          <div>{props.appointmentstatus.time}</div>
        </div>
      </div>
    );
}