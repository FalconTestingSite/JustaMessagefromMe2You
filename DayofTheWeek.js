const dayOfWeek = new Date().getDay();

switch (dayOfWeek) {
  case 0:
    window.location.href = "SunPage.html";
    break;
  case 1:
    window.location.href = "MonPage.html";
    break;
  case 2:
    window.location.href = "TuesPage.html";
    break;
  case 3:
    window.location.href = "WedPage.html";
    break;
  case 4:
    window.location.href = "ThurPage.html";
    break;
  case 5:
    window.location.href = "FriPagePage.html";
    break;
  case 6:
    window.location.href = "SatPage.html";
    break;
  default:
    console.log("Invalid day of the week");
}