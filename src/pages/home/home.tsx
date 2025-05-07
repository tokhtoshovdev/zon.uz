import { Articles, Footer, Header, ImageSlider } from "@/components";

export const Home = () => {
  return (
    <div className="max-w-[1450px] mx-auto">
      <Header />
      <ImageSlider />
      <Articles />
      <Footer />
    </div>
  );
};
