import spotify_logo from "..//assets/spotify_logo/logo.png";
import { IconText } from "../components/shared/iconText.jsx";
import { Icon } from "@iconify/react";
import { TextHover } from "../components/shared/textHover.jsx";
import SingleSongCard from "../components/shared/SingleSongCard.jsx";
import { Link } from "react-router-dom";

import axiosInstance from "../utils/axios.jsx";
import { useEffect, useState } from "react";

const songData = [
  {
    thumbnail: "/src/assets/piano.jpg",
    name: "Curtains",
    artist: "Ed tern",
  },
];

export const MyMusic = () => {
  const [songData, setSongData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axiosInstance.get("/song/mysongs");
      setSongData(response.data);
    };
  });

  const submitSong = async () => {
    const data = { name, thumbnail, track: playlistUrl };
    const response = await axiosInstance.post("/song/create", data);
    if (response.err) {
      alert("could not created song");
    }
    alert("successfully upload!");
    navigate("/homeIn");
  };

  return (
    <div className="h-full w-full flex">
      <div className="h-full w-1/5  bg-black flex flex-col justify-between pb-8 pl-4">
        <div>
          <div className="logoDiv p-5">
            <img
              src={spotify_logo}
              alt="logo"
              width={120}
              className="hover:cursor-pointer hover:filter hover:brightness-150 transition-all duration-300 object-contain "
            />
          </div>

          <div className="">
            <Link to={"/homeIn"}>
              <IconText
                iconName={"ant-design:home-filled"}
                displayText={"Home"}
              />
            </Link>

            <IconText iconName={"tdesign:search"} displayText={"Search"} />

            {/* <IconText
              iconName={"fluent:library-16-regular"}
              displayText={"library"}
            /> */}
            <IconText
              iconName={"mdi:music-box"}
              displayText={"My Music"}
              active
            />
          </div>
          <div className="pt-10">
            <IconText
              iconName={"zondicons:add-solid"}
              displayText={"Create Playlist"}
            />
            {/* <IconText iconName={"bxs:heart"} displayText={"Liked Songs"} /> */}
          </div>
        </div>
        <div className="btn border border-gray-200 rounded-full text-white w-1/3 flex px-2 py-1 items-center justify-center hover:border-gray-400 cursor-pointer">
          <Icon icon="mingcute:earth-2-line" />
          <div className="ml-2 font-semibold">English</div>
        </div>
      </div>

      {/* topbr */}
      <div className="w-full bg-gray-900 overflow-auto">
        <div className="nav w-full h-16 bg-black bg-opacity-50 flex items-center justify-end">
          <div className="w-1/2  flex h-full">
            <div className="w-2/3 flex  justify-around items-center">
              <TextHover displayText={"Premium"} />
              <TextHover displayText={"Support"} />
              {/* <TextHover displayText={"Download"} /> */}
              <div className="h-1/2 border-r border-white"></div>
            </div>
            <div className="w-1/3 flex justify-around h-full items-center">
              <Link to={"/uploadSong"}>
                <TextHover displayText={"Upload Song"} />
              </Link>
              <div className=" bg-white h-1/2 px-4 flex items-center justify-center rounded-full font-semibold cursor-pointer hover:bg-gray-500">
                AC
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0 overflow-auto">
          <div className="text-white font-semibold text-lg pb-4 pl-2">
            My Song
          </div>
          <div className="space-y-3 overflow-auto">{<SingleSongCard />}</div>
        </div>
      </div>
    </div>
  );
};
