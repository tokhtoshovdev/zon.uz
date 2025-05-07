export const Articles = () => {
  return (
    <div>
      <div className="flex gap-x-10 items-center">
        <h3 className="font-bold text-2xl">Статьи</h3>
        <div className="border border-[#DDDDDD] rounded-xl px-3 py-1.5">
          <h3 className="text-[#1B7DA2] font-bold text-base">Смотреть все</h3>
        </div>
      </div>
      <div className="flex gap-x-3 mt-7">
        <div className="border border-[#DDDDDD] w-[281px] pb-3">
          <img src="./articles.png" alt="" />
          <div>
            <p className="font-bold text-base mt-3 ml-3 text-[#6682A9]">
              13.06.2023
            </p>
            <h4 className="font-bold text-base mt-3 ml-3 text-black">
              Виброметры для двигателей и механизмов
            </h4>
          </div>
        </div>
        <div className="border border-[#DDDDDD] w-[281px] pb-3">
          <img src="./articles1.png" alt="" />
          <div>
            <p className="font-bold text-base mt-3 ml-3 text-[#6682A9]">
              12.06.2023
            </p>
            <h4 className="font-bold text-base mt-3 ml-3 text-black">
              Частотный преобразователь — что такое и для чего он нужен
            </h4>
          </div>
        </div>
        <div className="border border-[#DDDDDD] w-[281px] pb-3">
          <img src="./articles2.png" alt="" />
          <div>
            <p className="font-bold text-base mt-3 ml-3 text-[#6682A9]">
              11.06.2023
            </p>
            <h4 className="font-bold text-base mt-3 ml-3 text-black">
              Зачем нужен такой прибор, как лазерный тахометр?
            </h4>
          </div>
        </div>
        <div className="border border-[#DDDDDD] w-[281px] pb-3">
          <img src="./articles3.png" alt="" />
          <div>
            <p className="font-bold text-base mt-3 ml-3 text-[#6682A9]">
              10.04.2023
            </p>
            <h4 className="font-bold text-base mt-3 ml-3 text-black">
              Люксометр - Измеритель яркости и освещённости
            </h4>
          </div>
        </div>
        <div className="border border-[#DDDDDD] w-[281px] pb-3">
          <img src="./articles4.png" alt="" />
          <div>
            <p className="font-bold text-base mt-3 ml-3 text-[#6682A9]">
              09.04.2023
            </p>
            <h4 className="font-bold text-base mt-3 ml-3 text-black">
              Термометр для измерения температуры объекта
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
