const DetailsListEmployees = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-9 w-full bg-[#E8EEEF] rounded-md px-3 py-5">
          <span className="text-[#005F7E] text-md font-medium">
            Байгууллагын регистр
          </span>
          <span className="text-[#005F7E] text-md font-medium">
            Гэрээний дугаар
          </span>
          <span className="text-[#005F7E] text-md font-medium">
            Байгууллагын нэр
          </span>
          <span className="text-[#005F7E] text-md font-medium">
            Эхлэх огноо
          </span>
          <span className="text-[#005F7E] text-md font-medium">
            Дуусах огноо
          </span>
          <span className="text-[#005F7E] text-md font-medium">
            Нийт үнэлгээ (₮)
          </span>
          <span className="text-[#005F7E] text-md font-medium">
            Нийт хураамж
          </span>
        </div>

        <div className="grid grid-cols-9 w-full px-3 py-5">
          <span className="text-[#424B5A] text-sm font-medium">6785123</span>
          <span className="text-[#424B5A] text-sm font-medium">00000000</span>
          <span className="text-[#424B5A] text-sm font-medium">
            Чойжин Алтекс ХХК
          </span>
          <span className="text-[#424B5A] text-sm font-medium">2023-10-01</span>
          <span className="text-[#424B5A] text-sm font-medium">2023-10-01</span>
          <span className="text-[#424B5A] text-sm font-medium">30,000,000</span>
          <span className="text-[#424B5A] text-sm font-medium">5,000,000</span>
        </div>

        <div className="grid grid-cols-5 w-full bg-[#E8EEEF] rounded-md px-3 py-5">
          <span className="text-[#005F7E] text-md font-medium">
            Excel мэдээлэл
          </span>
          <span className="text-[#005F7E] text-md font-medium">
            Гэрээний мэдээлэл
          </span>
          <span className="text-[#005F7E] text-md font-medium">
            Гэрээний хавсралт
          </span>
        </div>

        <div className="grid grid-cols-5 w-full px-3 py-5">
          <span className="text-[#00A6B4] text-md font-medium underline">
            ajilchid-medeelel.xlsx
          </span>
          <span className="text-[#00A6B4] text-md font-medium underline">
            geree.pdf
          </span>
          <span className="text-[#00A6B4] text-md font-medium underline">
            havsralt.pdf
          </span>
        </div>
      </div>
    </>
  );
};

export default DetailsListEmployees;
