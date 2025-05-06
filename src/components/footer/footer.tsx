export const Footer = () => {
  return (
    <div className="py-4 flex justify-between items-center">
      <div className="border border-[#E9E9E9] rounded-xl px-4 py-2">
        <h3 className=" font-bold text-base leading-[100%] tracking-[0%] text-[#222222]">
          Контакты
        </h3>
        <h4 className="font-normal text-base leading-[100%] tracking-[0%] text-[#6682A9] mt-4">
          Call-центр
        </h4>
        <h4 className=" font-normal text-base leading-[100%] tracking-[0%] text-[#222222] mt-3 ml-4">
          +998-78 555-35-00
        </h4>
        <h4 className="font-normal text-base leading-[100%] tracking-[0%] text-[#6682A9] mt-4">
          Эл. почта
        </h4>
        <h4 className=" font-normal text-base leading-[100%] tracking-[0%] text-[#222222] mt-3 ml-4">
          info@zon.uz
        </h4>
        <h4 className="font-normal text-base leading-[100%] tracking-[0%] text-[#6682A9] mt-4">
          График работы
        </h4>
        <div className="flex gap-x-[100px] mt-3 ml-4">
          <h3 className="font-normal text-base leading-[100%] tracking-[0%] text-center text-[#22222]">
            В будние
          </h3>
          <h3 className="font-normal text-base leading-[100%] tracking-[0%] text-center text-[#22222]">
            с 09:00 до 18:00
          </h3>
        </div>
        <div className="flex gap-x-[100px] mt-3 ml-4">
          <h3 className="font-normal text-base leading-[100%] tracking-[0%] text-center text-[#22222]">
            Суббота
          </h3>
          <h3 className="font-normal text-base leading-[100%] tracking-[0%] text-center text-[#22222]">
            с 09:00 до 18:00
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="border border-[#E9E9E9] rounded-xl px-[26px] py-[26px]">
          <h2 className=" font-bold text-base leading-[100%] tracking-[0%] text-[#222222]">
            Мы в социальных сетях
          </h2>
          <div className="flex gap-x-[50px] mt-7">
            <img src="./telegram.svg" alt="" />
            <img src="./youtube.svg" alt="" />
            <img src="./instagram.svg" alt="" />
            <img src="./fb.svg" alt="" />
          </div>
        </div>
        <img src="./Border.png" alt="" />
      </div>
      <div className="border border-[#E9E9E9] rounded-xl px-4 py-5 flex flex-col gap-y-2">
        <h3 className=" font-bold text-base leading-[100%] tracking-[0%] text-[#222222]">
          Компания
        </h3>
        <div className="mt-7 flex gap-x-[100px]">
          <a href="" className="text-[#007AA7]">
            О нас
          </a>
          <a href="" className="text-[#007AA7]">
            Продавайте на Zon.uz
          </a>
        </div>
        <div className="mt-3 flex gap-x-[100px]">
          <a href="" className="text-[#007AA7]">
            Реквизиты
          </a>
          <a href="" className="text-[#007AA7]">
            Покупать как юрлицо
          </a>
        </div>
        <a href="" className="text-[#007AA7]">
          Контакты
        </a>
        <a href="" className="text-[#007AA7]">
          Вакансии
        </a>
        <a href="" className="text-[#007AA7]">
          Карта сайта
        </a>
        <a href="" className="text-[#007AA7]">
          Публичная оферта
        </a>
      </div>
      <div className="border border-[#E9E9E9] rounded-xl px-4 py-5 flex flex-col gap-y-2.5">
        <h3 className=" font-bold text-base leading-[100%] tracking-[0%] text-[#222222]">
          Помощь
        </h3>
        <a href="" className="text-[#007AA7] mt-7">
          Вопросы и ответы
        </a>
        <a href="" className="text-[#007AA7]">
          Условия рассрочки
        </a>
        <a href="" className="text-[#007AA7]">
          Способ оптлаты
        </a>
        <a href="" className="text-[#007AA7]">
          Доставка
        </a>
        <a href="" className="text-[#007AA7]">
          Возврат товаров
        </a>
        <a href="" className="text-[#007AA7]">
          Сервисные центры
        </a>
      </div>
    </div>
  );
};
