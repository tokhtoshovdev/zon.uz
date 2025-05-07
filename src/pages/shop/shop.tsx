import { toggleLike, toggleShopping } from "@/app/productSlice";
import type { RootState } from "@/app/store";
import { CardCommon, Footer, Header } from "@/components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Shop = () => {
  const dispatch = useDispatch();

  const shoppingItems = useSelector((state: RootState) =>
    state.product.products.filter((item) => item.shopping === true)
  );

  return (
    <div className="max-w-[1450px] mx-auto">
      <Header />
      <div className="flex justify-start items-center my-5">
        <h1 className="text-3xl font-bold">Shopping</h1>
      </div>

      {shoppingItems.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
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
        <p className="text-center text-gray-500 text-lg my-10">
          Savatcha hozircha bo‘sh.
        </p>
      )}

      <Footer />
    </div>
  );
};
