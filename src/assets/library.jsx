import MusicArea from "./musicArea";
import libraryIcon from "./images/library.png"
import plusIconnnn from "./images/plus.png"
import rightArrowIcon from "./images/next.png"
import LinkinPark from "./images/LinkinPark.jpg"
import ArijitSingh from "./images/Arijit_Singh.jpg"
import LikedSongs from "./images/liked_songs.jpg"
import edSheeran from "./images/Divide_cover.png"
function Library() {
  return (
    <>
      <div className="min-w-1/4  min-h-full  rounded-xl p-3 bg-AshBlack text-white ml-3 mt-3 mb-3 overflow-hidden ">

        <div className="flex w-full h-10 p-1 ">
          <div className="flex gap-2  font-bold items-center text-xl h-10 text-[#A7A7A7]">
            <img className="size-7" src={libraryIcon} alt="" />
            Your Library
          </div>

          <div className="flex items-center ml-auto  h-10 w-max gap-3">
            <img className="size-5" src={plusIconnnn} alt="" />
            <img className="size-6" src={rightArrowIcon} alt="" />
          </div>
        </div>


        <div className=" w-full h-full mt-3 overflow-scroll">
          <Playlist name="Liked Songs" cover={LikedSongs} />
          <Playlist name="Linkin Park" cover={LinkinPark} />
          <Playlist name="Arjit Singh Collection" cover={ArijitSingh} />
          <Playlist name="Ed Sheeran" cover={edSheeran} />


        </div>
      </div>
    </>
  );
}

export default Library;


function Playlist(props) {
  return (
    <div className=" hover:bg-[#232323] duration-200  gap-2 text-xl p-3   flex items-center  h-20 w-full  rounded">

      <img className=" rounded size-14" src={props.cover} alt="" />
      {props.name}
    </div>
  )
}

