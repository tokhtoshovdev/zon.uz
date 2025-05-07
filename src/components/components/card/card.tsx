import type { Props } from "./type";
import { MdAddShoppingCart } from "react-icons/md";

export const CardCommon = ({
  id,
  image,
  discount,
  likeToggle,
  price,
  title,
  shopping,
  onLike,
  onAddToCart,
}: Props & {
  onLike: (id: number) => void;
  onAddToCart: (id: number) => void;
}) => {
  return (
    <div
      key={id}
      className="bg-white shadow-md relative flex flex-col justify-between hover:shadow-lg transition-all rounded-lg"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-[270px] h-[300px] object-contain mb-4"
        />
        <div
          onClick={() => onLike(id)}
          className="absolute top-4 right-4 text-xl cursor-pointer"
        >
          {likeToggle ? "❤️" : "🤍"}
        </div>

        {discount && (
          <div className="absolute bottom-6 left-1 text-red-500 text-xs font-bold px-2 py-1 rounded">
            -{discount}
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-700 font-medium line-clamp-2 mb-2">
          {title}
        </div>
        <div className="text-lg font-bold text-black mb-2">{price}</div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => onAddToCart(id)}
            className="p-2 flex items-center justify-center border border-[#DDDDDD] rounded-full"
          >
            <MdAddShoppingCart className="text-2xl text-[#1BC5BD]" />
          </button>
          {shopping && (
            <span className="text-xs bg-[#1BC5BD] text-white px-2 py-1 rounded-full ml-2">
              {shopping} ta
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
