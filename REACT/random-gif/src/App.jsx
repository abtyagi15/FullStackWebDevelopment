import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="w-full min-h-screen background flex flex-col items-center">
      <h1 className="bg-white w-11/12 text-center text-4xl rounded-lg font-bold mt-[40px] px-10 py-2">RANDOM GIF</h1>
      <div className="flex flex-col w-full">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
