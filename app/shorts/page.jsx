import Navbar from "@/components/Navbar";
import LatestShorts from "@/components/LatestShorts";
import Footer from "@/components/Footer";

export default function ShortsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24">
        <LatestShorts />
      </div>

      <Footer />
    </main>
  );
}