import { Articles, Card, Footer, Header, ImageSlider } from "@/components";

export const Home = () => {
  return (
    <div className="max-w-[1450px] mx-auto">
      <Header />
      <ImageSlider />
      <Card />
      <Articles />
      <Footer />
    </div>
  );
};
