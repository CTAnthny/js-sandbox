function logResults(json) {
  console.log(json);

  function formatDate(data) {
    let d = new Date(data.time);
    let formattedDate =
      d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
    let hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    let minutes =
      d.getHours() > 12 ? d.getMinutes() + " PM" : d.getMinutes() + " AM";
    let formattedTime = hours + ":" + minutes;
    formattedDate = formattedDate + " " + formattedTime;
    return formattedDate;
  }

  function updateLayout(data) {
    let meetupStr =
      "<h1>Upcoming Meetups</h1><h2>" +
      data.name +
      "</h2><h3>" +
      formatDate(data) +
      "</h3><h3>" +
      data.venue.name +
      "</h3><h3>" +
      data.venue.address_1 +
      "</h3><h5>" +
      data.description +
      "</h5><hr><h2>";
    document.getElementById("meetups").innerHTML += meetupStr;
  }

  function itData(json) {
    for (let i = 0; i < json.data.length; i++) {
      updateLayout(json.data[i]);
    }
  }

  itData(json);
}

$.ajax({
  url:
    "https://api.meetup.com/charlottejuniordevs/events?photo-host=public&sig_id=182549128&sig=5e13646fba70874a21074c50827a5e377722fd01",
  dataType: "jsonp",
  jsonpCallback: "logResults"
});
