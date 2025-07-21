import { MoveDown } from 'lucide-react';

export default function DownloadBtn() {
  return (
    <>
      <button className="group relative flex cursor-pointer overflow-hidden rounded-4xl bg-gray-800 px-4 py-0.5 font-semibold text-white">
        <span className="absolute top-0 right-6 h-full w-full origin-right scale-100 transform rounded-3xl bg-red-600 transition-transform duration-500 group-hover:scale-0"></span>
        <span className="relative z-10 mr-0.5 text-xl">Resume</span>
        <div className="Z-11 relative mt-1 ml-0.5 animate-bounce rounded-4xl bg-green-600 p-2 text-white">
          <MoveDown size={15} strokeWidth={5} />
        </div>
      </button>
    </>
  );
}
