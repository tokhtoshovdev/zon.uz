import { Button } from "../ui";

export const Card = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-[#EEEEEE] p-5 rounded-xl w-[265px] h-[180px]">
        <h3 className="font-bold text-lg text-center">Добро пожаловать!</h3>
        <p className="font-normal text-[10.67px] text-center mt-2">
          Войдите, чтобы оставлять отзывы и пользоваться другими функциями
          авторизованных пользователей.
        </p>
        <Button className="w-full mt-3 bg-[#5D78FF]" size={"sm"}>
          Войти в личный кабинет
        </Button>
      </div>
      <img src="./card1.png" alt="" />
      <img src="./card2.png" alt="" />
      <img src="./card3.png" alt="" />
    </div>
  );
};
