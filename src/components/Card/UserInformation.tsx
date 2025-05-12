import { UserInformationProps } from "./types";

export const UserInformation = ({
  userName,
  email,
  address,
  phoneNumber,
}: UserInformationProps) => {
  return (
    <div className="rounded-b-xl bg-white h-[200px]">
      <p>
        <span>Nombre:</span>
        <span>{userName}</span>
      </p>
      <p>
        <span>Email:</span>
        <span>{email}</span>
      </p>
      <p>
        <span>Dirreción:</span>
        <span>{address}</span>
      </p>
      <p>
        <span>Número telefónico:</span>
        <span>{phoneNumber}</span>
      </p>
    </div>
  );
};
