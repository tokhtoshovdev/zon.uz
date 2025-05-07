import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  image: string;
  likeToggle: boolean;
  shopping: boolean;
  price: string;
  discount: string;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      title: "Perforator Bosch GBH 2-26",
      image:
        "https://ikarvon.uz/storage/products/September2023/3gUoztZe9VucA2WILPGx.png",
      likeToggle: false,
      shopping: false,
      price: "1,200,000 UZS",
      discount: "20%",
    },
    {
      id: 2,
      title: "Bolga (500g)",
      image: "https://m.media-amazon.com/images/I/51b5dSSyCwL.jpg",
      likeToggle: false,
      shopping: false,
      price: "80,000 UZS",
      discount: "15%",
    },
    {
      id: 3,
      title: "Tsement M-400 (50kg)",
      image:
        "https://frankfurt.apollo.olxcdn.com/v1/files/qllok5g2rt0h2-UZ/image;s=615x747",
      likeToggle: false,
      shopping: false,
      price: "55,000 UZS",
      discount: "",
    },
    {
      id: 4,
      title: "Sement qorish aralashtirgich",
      image: "https://www.zzzhenheng.com/uploads/index_product_1.png",
      likeToggle: false,
      shopping: false,
      price: "3,500,000 UZS",
      discount: "10%",
    },
    {
      id: 5,
      title: "Elektr dril",
      image: "https://tolsen.com.ph/cdn/shop/products/fd.jpg?v=1740801077",
      likeToggle: false,
      shopping: false,
      price: "700,000 UZS",
      discount: "7%",
    },
    {
      id: 6,
      title: "Metall kesish disk (125mm)",
      image: "https://epacompany.uz/storage/images/large/1/231/1074.webp",
      likeToggle: false,
      shopping: false,
      price: "25,000 UZS",
      discount: "",
    },
    {
      id: 7,
      title: "Shpakat (20kg)",
      image:
        "https://tovar.uz/images/company/3362/tovar/110260/o_1_64dc93d661680.png",
      likeToggle: false,
      shopping: false,
      price: "120,000 UZS",
      discount: "5%",
    },
    {
      id: 8,
      title: "Qurilish suvi (gruntovka)",
      image: "https://www.albus.uz/media/gruntovka.png",
      likeToggle: false,
      shopping: false,
      price: "60,000 UZS",
      discount: "10%",
    },
    {
      id: 11,
      title: "Qurilish ko'zoynagi",
      image:
        "https://srcyrl.workprotool.com/uploads/202236532/safety-goggles-anti-fog00469516347.jpg",
      likeToggle: false,
      shopping: false,
      price: "25,000 UZS",
      discount: "",
    },
    {
      id: 12,
      title: "Level (40cm)",
      image:
        "https://m.media-amazon.com/images/I/71Ru97mLJ7L._AC_UF894,1000_QL80_.jpg",
      likeToggle: false,
      shopping: false,
      price: "35,000 UZS",
      discount: "10%",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.likeToggle = !product.likeToggle;
      }
    },
    toggleShopping: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.shopping = !product.shopping;
      }
    },
  },
});

export const { toggleLike, toggleShopping } = productSlice.actions;
export default productSlice.reducer;
