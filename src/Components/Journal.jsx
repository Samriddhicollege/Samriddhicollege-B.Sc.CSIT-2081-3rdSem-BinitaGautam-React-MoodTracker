import { useState } from "react";
import Button from "../button/Button";

const Journal = ({ log, setLog }) => {
  const [selectedMood, setSelectedMood] = useState("ALL");

  const [editMood, setEditMood] = useState(null);
  const [editTag, setEditTag] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const moodList = ["AMAZING", "GOOD", "OKAY", "LOW", "AWFUL"];
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

  const moodEmojis = {
    AMAZING: "🤩",
    GOOD: "😊",
    OKAY: "😐",
    LOW: "😔",
    AWFUL: "😭",
  };

  // Delete a log entry
  const handleDelete = (id) => {
    setLog(log.filter((item) => item.id !== id));
  };

  // Start editing a log entry
  const handleEdit = (item) => {
    setEditId(item.id);
    setEditText(item.text);
    setEditMood({ data: item.data, content: item.content });
    setEditTag(item.tagDay);
  };

  // Save the edited entry
  const handleSave = (id) => {
    const updatedLogs = log.map((item) =>
      item.id === id
        ? {
            ...item,
            text: editText,
            data: editMood.data,
            content: editMood.content,
            tagDay: editTag,
          }
        : item,
    );
    setLog(updatedLogs);
    setEditId(null); // Exit edit mode
  };

  // Filtered list
  const displayList =
    selectedMood === "ALL"
      ? log
      : log.filter((item) => item.data === selectedMood);

  return (
    <div>
      <div className="jour-main">
        <h2>Your Journal</h2>

        <select
          onChange={(e) => setSelectedMood(e.target.value)}
          value={selectedMood}
        >
          <option value="ALL">All Moods</option>
          {moodList.map((mood) => (
            <option key={mood} value={mood}>
              {mood}
            </option>
          ))}
        </select>
      </div>

      {/* Display the logs */}
      <div className="journal-grid">
        {displayList.map((md) => (
          <div className="journal-card" key={md.id}>
            {/* Show mood emoji and type */}
            <li>{md.content}</li>
            <li>{md.data}</li>

            {/* Edit mode */}
            {editId === md.id ? (
              <>
                {/* Edit text */}
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />

                {/* Edit mood */}
                <div>
                  {moodList.map((mood) => (
                    <button
                      key={mood}
                      onClick={() =>
                        setEditMood({ data: mood, content: moodEmojis[mood] })
                      }
                    >
                      {mood}
                    </button>
                  ))}
                </div>

                {/* Edit tag */}
                <div>
                  {tagDays.map((tag) => (
                    <button key={tag} onClick={() => setEditTag(tag)}>
                      {tag}
                    </button>
                  ))}
                </div>

                <Button name="💾 Save" onClick={() => handleSave(md.id)} />
              </>
            ) : (
              <>
                <li>{md.text}</li>
                <li>{md.tagDay}</li>
                <li>{md.time?.date}</li>
                <div className="entry-action">
                  <Button name="✏️ Edit" onClick={() => handleEdit(md)} />
                  <Button
                    name="🗑️ Delete"
                    onClick={() => handleDelete(md.id)}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {displayList.length === 0 && <p>No entries found for this mood.</p>}
    </div>
  );
};

export default Journal;
