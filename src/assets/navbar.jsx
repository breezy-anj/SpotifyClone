import spotify from "./images/spotify-xxl.png";
import home from "./images/home-7-xxl.png";
import people from "./images/conference-xl.png";
import bell from "./images/bell-2-xxl.png";
import search from "./images/search-12-64.png";
import browse from "./images/7124073_shopping_bag_icon.png";
import pfp from "./images/pfp.jpeg";

function Navbar() {
  return (
    <>
      <div className=" fixed flex  items-center text-white top-0 p-3 h-20  w-full ">
        <img className="size-11 ml-3 " src={spotify} alt="" />

        <div className=" flex items-center gap-4 ml-auto mr-auto">
          <div className=" bg-[#1F1F1F] rounded-full max-w-max p-3">
            <img className="size-8" src={home} alt="Home" />
          </div>
          <div className="text-xl text-[#b3b3ae] rounded-full h-15 pr-4 w-125 min-w-min bg-[#1F1F1F] flex items-center ">
            <img className="size-6 m-3" src={search} alt="Search" />
            What do you want to hear?
            <img className="size-8 ml-auto" src={browse} alt="Browse" />
          </div>
        </div>

        <div className=" flex gap-7 right-0 items-center ">
          <img className="size-5" src={bell} alt="Notifications" />

          <img className="size-5" src={people} alt="Friends" />

          <div className="flex items-center justify-center rounded-full size-15 bg-[#1F1F1F]">
            <img className="size-10 rounded-full" src={pfp} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
