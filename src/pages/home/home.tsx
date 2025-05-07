import { Articles, Footer, Header } from "@/components";

export const Home = () => {
  return (
    <div className="max-w-[1450px] mx-auto">
      <Header />
      <Articles />
      <Footer />
    </div>
  );
};
