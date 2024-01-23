import { Icon } from "@iconify/react";
export const IconText = ({ iconName, displayText, active }) => {
  return (
    <div className="flex items-center justify-start cursor-pointer ">
      <div className="px-4 py-2">
        <Icon icon={iconName} color={active ? "white" : "gray"} fontSize={25} />
      </div>
      <div>
        <div className={"text-white text-sm font-semibold hover:text-gray-400"}>
          {displayText}
        </div>
      </div>
    </div>
  );
};
