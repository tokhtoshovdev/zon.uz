import {
  Buy,
  Card,
  Catalog,
  Interrogation,
  Item,
  Location,
  Search,
  Sold,
} from "@/icons";
import { Phone } from "@/icons/phone";
import { Button, Input } from "../ui";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <section>
      <header className="flex flex-col gap-y-3 py-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-12">
            <div className="flex gap-x-2 items-center">
              <Location />
              <h3 className="font-normal text-[13.89px] ">Город</h3>
              <h3 className="font-normal text-[13.67px] leading-[100%] tracking-[0%] underline decoration-solid decoration-[0%]">
                Ташкент
              </h3>
            </div>
            <div className="flex gap-x-2 items-center">
              <Sold />
              <h3 className="font-bold text-sm text-[#5D78FF]">
                Продавайтена Zon.uz
              </h3>
            </div>
            <div className="flex gap-x-2 items-center">
              <Buy />
              <h3 className="font-bold text-sm text-[#5D78FF]">
                Покупать как юрлицо
              </h3>
            </div>
            <h3 className="font-bold text-sm text-[#5D78FF]">Контакты</h3>
          </div>
          <div className="flex gap-x-3 items-center">
            <Phone />
            <h3 className="font-bold text-[15.38px] leading-[100%] tracking-[0%] text-black">
              +998-78 555-35-00
            </h3>
          </div>
        </div>
        <hr />
        <div className="flex py-3 justify-between">
          <a href="">
            <img src="./logo.svg" alt="" />
          </a>
          <Button className="bg-transparent border border-[#011C47] hover:border-[#011C47] hover:bg-transparent">
            <Catalog />
            Каталог
          </Button>
          <form className="flex gap-x-0">
            <Input
              placeholder="Найти товары"
              className="w-[700px] rounded-r-none"
            />
            <Button type="submit" className="bg-[#D1DAE6] rounded-l-none">
              <Search />
            </Button>
          </form>
          <button
            className="flex gap-x-2 items-center"
            onClick={() => navigate("/shop")}
          >
            <Card />
          </button>
          <button>
            <Item />
          </button>
          <button>
            <Interrogation />
          </button>
          <Button className="bg-[#5D78FF]">Войти</Button>
        </div>
      </header>
      <hr />
    </section>
  );
};
