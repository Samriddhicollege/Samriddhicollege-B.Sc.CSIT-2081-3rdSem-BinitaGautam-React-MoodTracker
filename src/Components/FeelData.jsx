import { useState } from "react";
import { getTime } from "../Utils/Helper.js";
import Button from "../button/Button.jsx";

const FeelData = ({ log, setLog }) => {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  const [mood, setMood] = useState(null);
  const [tagDay, setTagDay] = useState("");

  const handleClick = (mood) => {
    setMood(mood);
  };

  const handleTagDays = (tDay) => {
    setTagDay(tDay);
  };
  const handleLog = () => {
    if (!mood) {
      alert("Please select mood");
      return;
    }
    const m = {
      id: Date.now(),
      content: mood.content,
      data: mood.data,
      text,
      tagDay,
      time: getTime(),
    };
    setLog([...log, m]);
    setText("");
    setMood("");
    setTagDay("");
  };
  const emotions = [
    {
      data: "AMAZING",
      content: "🤩",
    },
    {
      data: "GOOD",
      content: "😊",
    },
    {
      data: "OKAY",
      content: "😐",
    },
    {
      data: "LOW",
      content: "😔",
    },
    {
      data: "AWFUL",
      content: "😭",
    },
  ];

  const tagDays = [
    "Work",
    "Family",
    "Health",
    "Social",
    "Sleep",
    "Exercise",
    "Food",
    "Creative",
  ];
  return (
    <div className="main-cont">
      <div className="feel">
        {emotions.map((dta, i) => {
          // console.log(dta);
          return (
            <button
              className="emoji-cont"
              key={dta.data}
              onClick={() => handleClick(dta)}
            >
              <p>{dta.content}</p>
              <span>{dta.data}</span>
            </button>
          );
        })}
      </div>
      <div className="note">
        <input
          type="text"
          placeholder="Add a note... (optional)"
          maxLength={280}
          //  max length blocks extra typing
          value={text}
          onChange={handleText}
        />
      </div>
      <div className="tag-day">
        <h4>TAG YOUR DAY</h4>
        {tagDays.map((td, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                handleTagDays(td);
              }}
            >
              {td}
            </button>
          );
        })}
      </div>
      <div className="button-group">
        <Button name="Log" onClick={handleLog} />
      </div>
    </div>
  );
};
export default FeelData;
