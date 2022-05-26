import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import "./styles/Appcalendar.css"

function Appcalendar() {
  const [value, onChange] = useState(new Date());


  return (
    <table className="cal"> 
      <tr className="Appcalendar">
    <Calendar onChange={onChange} value={value} />
  </tr>
  </table>

  );
}

export default Appcalendar;