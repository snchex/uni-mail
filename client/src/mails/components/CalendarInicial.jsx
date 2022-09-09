import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CalendarInicial = () => {
  // date state
  const [calendar, setCalendar] = useState("");

  // open close
  const [open, setOpen] = useState(false);


  const refOne = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCalendar(format(new Date(), "yyyy/MM/dd"));

      document.addEventListener("keydown", hideOnEscape, true);
      document.addEventListener("click", hideOnClickOutside, true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  console.log(calendar);

  const hideOnEscape = (e) => {
  
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
 
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  // on date change, store date in state
  const handleSelect = (date) => {
 
    setCalendar(format(date, "yyyy/MM/dd"));
  };

  return (
    <div className="calendarWrap">
      <input
        value={calendar}
        readOnly
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />

      <div ref={refOne}>
        {open && (
          <Calendar
            date={new Date()}
            onChange={handleSelect}
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default CalendarInicial;
