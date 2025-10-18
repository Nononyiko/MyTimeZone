document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("countries");
  const cityTime = document.getElementById("city-time");
  const homeLink = document.getElementById("home-link");
  const localTimeDisplay = document.getElementById("local-time");

  
  function updateLocalTime() {
    const now = new Date();
    localTimeDisplay.textContent = `Your local time: ${now.toLocaleString()}`;
  }
  updateLocalTime();
  setInterval(updateLocalTime, 60000);

  
  select.addEventListener("change", function () {
    const timezone = this.value;
    if (!timezone) return;

    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: timezone,
    };

    const formattedTime = new Intl.DateTimeFormat("en-US", options).format(now);
    cityTime.textContent = `It is ${formattedTime} in ${timezone}`;

    homeLink.style.display = "inline-block";
  });
});
