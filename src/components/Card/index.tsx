import { useEffect, useState } from "react";
import { Avatar } from "../Avatar";
import { UsersProps } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

export const Card = () => {
  const [users, setUsers] = useState<UsersProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  return (
    <li className="rounded-xl h-[300px] border-solid w-[500px]">
      <Avatar src={"https://randomuser.me/api/portraits/women/72.jpg"} />
    </li>
  );
};
