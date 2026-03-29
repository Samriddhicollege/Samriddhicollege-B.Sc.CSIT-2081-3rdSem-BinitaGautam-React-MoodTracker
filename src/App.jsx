import { useEffect, useState } from "react";
import FeelData from "./Components/FeelData";
import Journal from "./Components/Journal";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Entries } from "./Components/Entries";
import "./App.css";

const App = () => {
  const [log, setLog] = useState(() => {
    const saved = localStorage.getItem("moodLogs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("moodLogs", JSON.stringify(log));
  }, [log]);

  useEffect(() => {
    const items = localStorage.getItem("moodLogs");
    setLog(JSON.parse(items));
  }, []);

  return (
    <div>
      <Navbar />
      <Entries log={log} />
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "26px",
        }}
      >
        Track your emotional journey,one day at a time !
      </p>
      <FeelData log={log} setLog={setLog} />
      <Journal log={log} setLog={setLog} />
      <Footer />
    </div>
  );
};
export default App;
