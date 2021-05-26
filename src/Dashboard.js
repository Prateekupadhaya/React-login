import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyC0koCkuURxDBTCzzmANFzF3_Bp47JcftA";
let calendars = [
  {calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com"},
  {
    calendarId: "hkr1dj9k6v6pa79gvpv03eapeg@group.calendar.google.com",
    color: "#B241D1" //optional, specify color of calendar 2 events
  }
];

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    )
  }
}
