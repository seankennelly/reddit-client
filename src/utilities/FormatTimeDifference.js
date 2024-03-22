function formatTimeDifference(postedTime) {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeDifference = currentTime - postedTime;
  const days = Math.floor(timeDifference / (60 * 60 * 24));
  const hours = Math.floor((timeDifference % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeDifference % (60 * 60)) / 60);
  const seconds = timeDifference % 60;

  let result = "";
  if (days > 0) {
    result += `${days} day${days > 1 ? "s" : ""}, `;
  }
  if (hours > 0) {
    result += `${hours} hour${hours > 1 ? "s" : ""}, `;
  }
  if (minutes > 0) {
    result += `${minutes} minute${minutes > 1 ? "s" : ""} `;
  }
  // result += `${seconds} second${seconds > 1 ? "s" : ""}`;

  return result;
}

export default formatTimeDifference;
