import reactLogo from "/react.svg";
import "./index.css";

function App() {
  return (
    <>
      <main className="bg-[#13111C] h-screen w-screen m-auto py-8 text-white">
        <h1 className="flex justify-center items-center gap-3 text-4xl font-bold">
          Taller Practico React{" "}
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </h1>
      </main>
    </>
  );
}

export default App;
