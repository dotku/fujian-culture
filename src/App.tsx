import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { FeaturedGrid } from "./components/FeaturedGrid";
import { NewsSection } from "./components/NewsSection";
import { CulturalEvents } from "./components/CulturalEvents";
import { DigitalLibrary } from "./components/DigitalLibrary";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />

      <main className="container mx-auto px-4 py-8">
        <FeaturedGrid />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NewsSection />
          <CulturalEvents />
          <DigitalLibrary />
          <Chatbot />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
