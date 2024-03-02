import Image from "next/image";
import NavBar from "./components";
import MainPage from "./pages/MainPage/page";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainPage/>
    </>
  );
}
