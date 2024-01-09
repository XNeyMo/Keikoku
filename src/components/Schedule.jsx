import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '/public/assets/Schedule.css'

function Schedule() {
    const [date, setDate] = useState(new Date());

    return (
        <Calendar onChange={setDate} value={date} locale={"en-US"}/>
    )
}

export default Schedule