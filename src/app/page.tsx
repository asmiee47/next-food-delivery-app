import FrontPage from "./components/frontPage";
import Navbar from "./components/navBarFolder/navBar";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <FrontPage />
      </div>
    </main>
  );
}
