import { toggleLike, toggleShopping } from "@/app/productSlice";
import type { RootState } from "@/app/store";
import { CardCommon, Footer, Header } from "@/components";
import { useSelector, useDispatch } from "react-redux";

export const Shop = () => {
  const dispatch = useDispatch();

  const shoppingItems = useSelector((state: RootState) =>
    state.product.products.filter((item) => item.shopping === true)
  );

  const itemCount = shoppingItems.length;

  return (
    <div className="max-w-[1450px] mx-auto px-4">
      <Header />

      <div className="flex justify-between items-center my-6">
        <h1 className="text-3xl font-bold text-gray-800">Savatcha</h1>
        <div className="bg-[#1BC5BD] text-white px-4 py-2 rounded-full text-sm font-medium">
          Jami: {itemCount} ta mahsulot
        </div>
      </div>

      {itemCount > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {shoppingItems.map((product) => (
            <CardCommon
              key={product.id}
              {...product}
              onLike={(id) => dispatch(toggleLike(id))}
              onAddToCart={(id) => dispatch(toggleShopping(id))}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg my-20">
          🛒 Savatchangiz hozircha bo‘sh. Mahsulot qo‘shing!
        </div>
      )}

      <Footer />
    </div>
  );
};
