export default function App() {
  return (
    <div className="tix-min-h-screen tix-w-full tix-bg-gradient-to-r tix-from-indigo-500 tix-via-purple-500 tix-to-pink-500 tix-flex tix-items-center tix-justify-center">
      <div className="tix-bg-white/20 tix-w-full tix-backdrop-blur-md tix-rounded-2xl tix-shadow-2xl tix-p-10 tix-text-center tix-text-white">
        <h1 className="tix-text-4xl tix-font-extrabold  tix-mb-4 tix-drop-shadow-lg tix-w-full">
           Tailwind CSS + React 19 + Vite + Prefix
        </h1>

        <button className="tix-px-6 tix-py-3 tix-bg-red-300 focus:tix-border-0 focus:tix-outline-none backdrop: tix-text-indigo-600 tix-font-semibold tix-rounded-xl tix-hover:bg-indigo-100 tix-transition tix-duration-300 tix-shadow-md">
          TEST BTN
        </button>
      </div>
    </div>
  )
}
