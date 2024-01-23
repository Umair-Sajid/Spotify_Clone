import spotify_logo from "..//assets/spotify_logo/logo.png";
import { IconText } from "../components/shared/iconText.jsx";
import { Icon } from "@iconify/react";
import { TextHover } from "../components/shared/textHover.jsx";
import { Link } from "react-router-dom";

export const LoggedInHome = () => {
  const focusCradsData = [
    {
      title: "Deep focus",
      description: "This is peaceful music to relax your mind.",
      imgUrl: spotify_logo,
    },
    {
      title: "Peaceful piano",
      description: "Keep calm and enjoy music with us.",
      imgUrl: "/src/assets/piano.jpg",
    },
    {
      title: "Beats and think",
      description: "Focus with deep techno house",
      imgUrl: "/src/assets/book.jpg",
    },
    {
      title: "Focus flow",
      description: "Focus with soft study",
      imgUrl: "/src/assets/label.jpg",
    },
    {
      title: "Instrumental",
      description: "Up to instrumental study",
      imgUrl: "/src/assets/ss.jpg",
    },
  ];
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
            <IconText
              iconName={"ant-design:home-filled"}
              displayText={"Home"}
              active
            />

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
          <PlayListView titleText="Focus" cardsData={focusCradsData} />
          <PlayListView
            titleText="Spotify Playlist "
            cardsData={focusCradsData}
          />
          <PlayListView
            titleText="Song of Pakistan"
            cardsData={focusCradsData}
          />
        </div>
      </div>
    </div>
  );
};

const PlayListView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-4 ">{titleText}</div>
      <div className="w-full flex justify-between space-x-4">
        {cardsData.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
            />
          );
        })}
        {/* <Card
          
          className="w-full h-32 object-cover"
        />

        <Card
          
          className="w-full h-32 object-cover"
        />
        <Card
          
          className="w-full h-32 object-cover"
        />
        <Card
         
          className="w-full h-32 object-cover"
        />

        <Card
          
          className="w-full h-32 object-cover"
        /> */}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/6 p-4 rounded-lg">
      <div className="pb-4 pt-2">
        <img
          className="w-full rounded-md"
          src={imgUrl}
          alt="Label image Loading..."
        />
      </div>
      <div className="text-white  font-semibold py-3">{title}</div>

      <div className="text-gray-400 text-sm ">{description}</div>
    </div>
  );
};
