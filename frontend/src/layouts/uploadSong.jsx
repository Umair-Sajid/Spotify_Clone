import spotify_logo from "..//assets/spotify_logo/logo.png";
import { IconText } from "../components/shared/iconText.jsx";
import { Icon } from "@iconify/react";
import { TextHover } from "../components/shared/textHover.jsx";
import { InputText } from "../components/shared/TextInput.jsx";
import CloudinaryUpload from "../components/shared/cloudinaryUpload.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios.jsx";
import { Link } from "react-router-dom";

export const UploadSong = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [uploadedSongFileName, setUploadedSongFileName] = useState("");
  const navigate = useNavigate();

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
            <Link to={"/mymusic"}>
              <IconText iconName={"mdi:music-box"} displayText={"My Music"} />
            </Link>
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
              <TextHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white"></div>
            </div>
            <div className="w-1/3 flex justify-around h-full items-center">
              <TextHover displayText={"Upload Song"} />
              <div className=" bg-white h-1/2 px-4 flex items-center justify-center rounded-full font-semibold cursor-pointer hover:bg-gray-500">
                AC
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0 overflow-auto">
          <div className="text-2xl font-semibold mb-5 text-white mt-3 ">
            Upload your Music
          </div>
          <div className="w=2/3 flex space-x-3">
            <div className="w-1/2">
              <InputText
                label="Name"
                labelClassName={"text-white"}
                placeholder="Song Name"
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-1/2">
              <InputText
                label="Thumbnail"
                labelClassName={"text-white"}
                placeholder="thumbnail"
                value={thumbnail}
                setValue={setThumbnail}
              />
            </div>
          </div>
          <div className="py-4">
            {uploadedSongFileName ? (
              <div className="bg-white rounded-full p-3 w-1/3">
                {uploadedSongFileName.substring(0, 30)}...
              </div>
            ) : (
              <CloudinaryUpload
                setUrl={setPlaylistUrl}
                setName={setUploadedSongFileName}
              />
            )}
          </div>
          <div
            className="bg-app-green text-black w-40 flex items-center p-2 rounded-full cursor-pointer justify-center font-semibold"
            onClick={submitSong}
          >
            Submit Song
          </div>
        </div>
      </div>
    </div>
  );
};
