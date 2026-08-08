import Navbar from "@/components/Navbar";
import FeaturedVideos from "@/components/FeaturedVideos";
import Footer from "@/components/Footer";

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24">
        <FeaturedVideos />
      </div>

      <Footer />
    </main>
  );
}