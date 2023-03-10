import { Outlet, Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

export default function Layout() {
  return (
<div class="flex flex-col h-screen">
  <header class=""><NavBar /></header>
  <main class="bg-green-500 flex-grow"><Outlet /></main>
  <footer class=""><Footer /></footer>
</div>

  )
};