// src/App.tsx
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits, Portfolio, AboutAndReviews, Footer } from './components/Blocks';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Portfolio />
        <AboutAndReviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
