import { MdOutlineAutoGraph } from "react-icons/md";

export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="bg-primary p-1 rounded-2xl">
        <MdOutlineAutoGraph color="white" size={20} />
      </span>
      <h1 className="text-xl">Employee Performance Dashboard</h1>
    </div>
  );
}
