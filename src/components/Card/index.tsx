import { Avatar } from "../Avatar";

export const Card = () => {
  return (
    <li className="rounded-xl h-[300px] border-solid w-[500px]">
      <Avatar src={"https://randomuser.me/api/portraits/women/72.jpg"} />
    </li>
  );
};
