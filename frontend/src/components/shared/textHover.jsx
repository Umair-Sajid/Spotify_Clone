import { Icon } from "@iconify/react";
export const TextHover = ({ iconName, displayText, active }) => {
  return (
    <div className="flex items-center justify-start cursor-pointer ">
      <div className="px-4 py-2">
        <text-color color={active ? "white" : "gray"} fontSize={25} />
      </div>
      <div>
        <div className={"text-gray-500 text-sm font-semibold hover:text-white"}>
          {displayText}
        </div>
      </div>
    </div>
  );
};
