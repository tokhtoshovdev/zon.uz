import type { RootState } from "@/app/store";
import { CardCommon } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, toggleShopping } from "@/app/productSlice";

export const Product = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();
  return (
    <div className="py-10">
      <h3 className="font-bold text-2xl mb-5">Популярные</h3>
      <div className="flex justify-between flex-wrap gap-3">
        {products.map((product) => (
          <CardCommon
            key={product.id}
            {...product}
            onLike={(id) => dispatch(toggleLike(id))}
            onAddToCart={(id) => dispatch(toggleShopping(id))}
          />
        ))}
      </div>
    </div>
  );
};
