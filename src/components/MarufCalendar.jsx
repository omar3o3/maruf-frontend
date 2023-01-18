// import React from 'react'
import React, { useRef } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function MarufCalendar() {

    const calendarRef = useRef(null);

    const handleResize = () => {
      if (calendarRef.current) {
        calendarRef.current.style.width = window.innerWidth + "px";
        calendarRef.current.style.height = window.innerHeight + "px";
      }
    };
    window.addEventListener("resize", handleResize);


  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "8%" }}
      >
        <Grid item>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=b3RhbnRhd3k1M0BnbWFpbC5jb20&src=ZW4uY2hyaXN0aWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaXNsYW1pYyNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y19vMWRpMGdtMHFjbjcyOGRqMzEwbWRodDM5Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26&color=%23009688&color=%23009688&color=%23009688&color=%23E67C73"
            ref={calendarRef}
            width={window.innerWidth - 60}
            height={window.innerHeight - 60}
            // style={{marginLeft: "3%", marginRight: "3%"}}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MarufCalendar;