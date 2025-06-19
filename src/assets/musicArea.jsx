import ACDCCover from "./images/AC DC.jpg";
import LikedSongs from "./images/liked_songs.jpg";
import Ed_Sheeran from "./images/Divide_cover.png";
import Arijit_Singh_Cover from "./images/Arijit_Singh.jpg";
function MusicArea() {
  return (
    <div className="grid grid-cols-4  w-full h-full bg-gradient-to-b from-indigo-800/50 to-#121212 via-gray-950 rounded-xl p-4  bg-AshBlack text-white m-3">
      <PlaylistCard Name="Liked Songs" Cover={LikedSongs} />
      <PlaylistCard Name="AC /DC" Cover={ACDCCover} />
      <PlaylistCard Name="Ed Sheeran" Cover={Ed_Sheeran} />
      <PlaylistCard Name="Arijit Singh Collection" Cover={Arijit_Singh_Cover} />
    </div>
  );
}
export default MusicArea;

function PlaylistCard(props) {
  return (
    <>
      <div className=" h-65 w-50  p-3 rounded  hover:bg-[#1F1F1F] hover:z-10 ease-in-out duration-500 font-semibold items-center text-center ">
        <div className="rounded w-full h-45  overflow-hidden mb-4 ">
          <img
            className="object-cover object-center inset-0 h-full w-full"
            src={props.Cover}
            alt=""
          />
        </div>
        {props.Name}
      </div>
    </>
  );
}
