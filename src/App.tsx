import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Benefits, Portfolio, AboutAndReviews, Footer } from "./components/Blocks";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./theme/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen font-sans bg-background text-foreground">
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
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
