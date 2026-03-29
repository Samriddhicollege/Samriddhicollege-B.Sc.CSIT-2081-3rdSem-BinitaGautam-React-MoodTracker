const Entries = ({ log }) => {
  return (
    <div>
      <ul className="entries-grid">
        <EntriesListItem data={log.length} content={"ENTRIES"} />
        <EntriesListItem data={"😊"} content={"TOP MOOD"} />
        {/* <EntriesListItem data={"🔥"} content={"DAY STREAK"} /> */}
      </ul>
    </div>
  );
};

const EntriesListItem = ({ data, content }) => {
  return (
    <li
      style={{
        backgroundColor: "wheat",
        color: "black",
        height: "auto",
        width: "120px",
        // border: "1px solid black",
        borderRadius: "20px",
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          fontFamily: "sans-serif",
        }}
      >
        {data}
      </p>
      <p
        style={{
          fontSize: "16px",
          fontFamily: "Roboto",
        }}
      >
        {content}
      </p>
    </li>
  );
};

export { Entries };
