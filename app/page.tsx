import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center w-full px-4">
        <Hero />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
