function SectionCard({ children }) {
  return (
    <div className="flex w-5/6 bg-red-400 rounded-md justify-around shadow-lg p-2 my-5">
      {children}
    </div>
  );
}

export default SectionCard;
