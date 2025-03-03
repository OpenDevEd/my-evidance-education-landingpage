import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { SiteCarousel } from "./components/SiteCarousel";
import { sites, relatedSites } from "./data/sites";

function App() {
  return (
    <Layout>
      <main className="flex flex-col items-center">
        <Hero />
        <div className="max-w-7xl w-full">
          <SiteCarousel title="Our sites" sites={sites} />
        </div>
        <div className="mt-12 max-w-7xl w-full">
          <SiteCarousel title="Related sites" sites={relatedSites} />
        </div>
      </main>
    </Layout>
  );
}

export default App;
