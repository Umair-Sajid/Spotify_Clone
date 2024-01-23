const SingleSongCard = ({ info }) => {
  return (
    <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm">
      <div
        className="w-12 h-12 bg-cover bg-center"
        style={{
          backgroundImage: `url("${info.thumbnail}")`,
        }}
      ></div>

      <div className="flex w-full">
        <div className="text-white flex justify-center  flex-col pl-4 w-5/6 hover:cursor-pointer hover:underline">
          <div>{info.name}</div>
          <div className="text-xs text-gray-400 cursor-pointer ">
            {info.artist.firstName}
          </div>
        </div>
        <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
          <div>3:44</div>
          {/* <div className="text-gray-400 bg-white flex items-center justify-center pl-3">
            ...
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SingleSongCard;
