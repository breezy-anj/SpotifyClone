import "./App.css";
import Navbar from "./assets/navbar";
import MusicArea from "./assets/musicArea.jsx";
import Library from "./assets/library.jsx";
import MediaPlayback from "./assets/mediaPlayback.jsx";
function App() {
  return (
    <>
      <div className="flex  w-full  h-screen text-white">
        <Navbar />
        <div className="flex fixed w-full bottom-25 top-20 text-white">
          <Library />
          <MusicArea />
        </div>
        <MediaPlayback />
      </div>
    </>
  );
}

export default App;
