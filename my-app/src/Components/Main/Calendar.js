import React from 'react';

function Calendar() {
  return (
    <section className="calendar-section">
      <h2>Calendar</h2>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Australia%2FMelbourne&showNav=1"
        style={{ border: 'solid 1px #777' }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Club Calendar"
      ></iframe>
        <hr />
    </section>
  );
}

export default Calendar;
