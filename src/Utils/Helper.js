const getTime = () => {
  const now = new Date();

  const day = now.getDate();
  const month = now.toLocaleString("default", { month: "long" }); // March
  const year = now.getFullYear();

  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");

  return {
    date: `${day} ${month} ${year} : ${hours}:${minutes}`,
  };
};

export { getTime };
