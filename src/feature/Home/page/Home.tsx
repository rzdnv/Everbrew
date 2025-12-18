import { useState } from "react";

// Component
import Navbar from "@/components/Layout/Navbar";
import Hero from "../component/Hero";
import History from "../component/History";
import Gallery from "../component/Gallery";
import Menu from "../component/MenuSection";
import Review from "../component/ReviewsSection";
import Footer from "../component/Footer";

import { ReviewDialog } from "../component/ReviewDialog";
// ------------------

const Home = () => {
  const [openReview, setOpenReview] = useState(false);
  return (
    <main className="font-mono">
      <Navbar />
      <Hero open={() => setOpenReview(true)} />
      <History />
      <Gallery />
      <Menu />
      <Review />
      <Footer />
      <ReviewDialog open={openReview} onOpenChange={setOpenReview} />
    </main>
  );
};

export default Home;
