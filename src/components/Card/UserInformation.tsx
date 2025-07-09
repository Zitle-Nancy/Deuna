import { UserInformationProps } from "./types";

export const UserInformation = ({
  dataUser: { userName, email, address, phoneNumber },
}: {
  dataUser: UserInformationProps;
}) => {
  return (
    <div className="rounded-b-xl bg-white h-[200px]">
      <p>
        <span>Name:</span>
        <span>{userName}</span>
      </p>
      <p>
        <span>Email:</span>
        <span>{email}</span>
      </p>
      <p>
        <span>Address:</span>
        <span>{address}</span>
      </p>
      <p>
        <span>Phone Number:</span>
        <span>{phoneNumber}</span>
      </p>
    </div>
  );
};
