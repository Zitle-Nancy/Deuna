interface Avatar {
  src: string;
}

export const Avatar = ({ src }: Avatar) => {
  return (
    <div className="rounded-t-xl bg-gray-100 border-b border-b-gray-300 h-[100px] flex justify-center">
      <img
        className="mt-10 bg-white size-30 rounded-full p-1.5 border border-gray-300"
        src={src}
        alt="Avatar"
      />
    </div>
  );
};
