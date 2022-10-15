import "./App.css";
import Cards from "./Cards/Cards";

const users = [
  {
    id: "#0001",
    username: "Phineas",
    wallpaper: "rgb(0, 81, 119)",
    userInfo: "phin • 20 yrs co-founder & dev @ giggl",
    profilePic:
      "https://cdn.discordapp.com/avatars/94490510688792576/55294160686d30f11d19d21045d3f35a",
  },
  {
    id: "#1999",
    username: "Dustin",
    wallpaper: "rgb(0, 0, 0)",
    userInfo:
      "22y - Software Engineer passionate about networking and infrastructure",
    profilePic:
      "https://avatars.mds.yandex.net/i?id=b65fe49d6681bb6d0bd6953f5e24b60b-5208330-images-thumbs&n=13",
  },
  {
    id: "#3020",
    username: "pxseu",
    wallpaper: "rgb(126, 97, 59)",
    userInfo:
      "penniless, invented dogecoin, times person of the year zero years in a row",
    profilePic:
      "https://avatars.mds.yandex.net/i?id=68011b2707b32d33c71e8eee40de1b1d-5886407-images-thumbs&n=13",
  },
  {
    id: "#6577",
    username: "🗕🗗🗙",
    wallpaper: "rgb(24, 25, 28)",
    userInfo: "👶 7 years ago 💔2 years ago",
    profilePic:
      "https://cdn.discordapp.com/avatars/937051733773938689/679321173067da9d28dc7ce7f6351323",
  },
  {
    id: "#0002",
    username: "stealthwave",
    wallpaper: "rgb(66, 66, 112",
    userInfo: "follow me on twitter ☺",
    profilePic:
      "https://avatars.mds.yandex.net/i?id=68011b2707b32d33c71e8eee40de1b1d-5886407-images-thumbs&n=13",
  },
  {
    id: "#0023",
    username: "Atzu",
    wallpaper: "rgb(66, 81, 78)",
    userInfo: "Dev for streamers.",
    profilePic:
      "https://avatars.mds.yandex.net/i?id=68011b2707b32d33c71e8eee40de1b1d-5886407-images-thumbs&n=13",
  },
  {
    id: "#0016",
    username: "Voltages",
    wallpaper: "rgb(0, 81, 119)",
    userInfo: "Information technology specialist.",
    profilePic:
      "https://avatars.mds.yandex.net/i?id=68011b2707b32d33c71e8eee40de1b1d-5886407-images-thumbs&n=13",
  },
];

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Online Users 875/2.452</h1>
        <span>Watch users</span>
      </div>

      <Cards users={users} />
    </div>
  );
}

export default App;
