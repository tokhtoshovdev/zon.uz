import { PRODUCT } from "@/constants";
import { CardCommon } from "../components";

export const Product = () => {
  return (
    <div className="py-10">
      <h3 className="font-bold text-2xl mb-5">Популярные</h3>
      <div className="flex justify-between flex-wrap gap-3">
        {PRODUCT.map((item) => (
          <CardCommon
            id={item.id}
            image={item.image}
            discount={item.discount}
            title={item.title}
            price={item.price}
            likeToggle={item.likeToggle}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};
