import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// Hook menampilkan jam
function Clock() {
  const [date, setDate] = useState(new Date());

  // use effect hook
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  });

  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock />);
