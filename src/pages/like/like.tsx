import { useSelector } from "react-redux";
import { Footer, Header } from "@/components";
import type { RootState } from "@/app/store";

export const Like = () => {
  const likedProducts = useSelector((state: RootState) =>
    state.product.products.filter((p) => p.likeToggle)
  );

  return (
    <div className="max-w-[1450px] mx-auto">
      <Header />
      <div className="flex justify-start items-center my-5">
        <h1 className="text-3xl">Liked Products</h1>
      </div>
      {likedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
          {likedProducts.map((product) => (
            <div
              key={product.id}
              className="border p-3 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain"
              />
              <h2 className="mt-2 font-semibold text-lg">{product.title}</h2>
              <p className="text-sm text-gray-600">{product.price}</p>
              {product.discount && (
                <p className="text-red-600 text-sm">
                  Discount: {product.discount}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 my-10">
          Siz hali hech narsani yoqtirmadingiz 🤷‍♂️
        </p>
      )}
      <Footer />
    </div>
  );
};
