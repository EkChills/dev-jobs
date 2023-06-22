import React from "react";

interface Props {
  id: string;
  name: string;
  labelText: string;
  value: string;
  placeHolderText: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputRow = ({
  id,
  name,
  labelText,
  value,
  placeHolderText,
  className = "w-full p-4 rounded-xl focus:outline-double focus:outline-[#071292] bg-transparent border border-1 border-[#5964E0] ",
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-[.85rem] font-semibold ">
        {labelText}
      </label>
      <input
        className={className}
        type="text"
        required
        name={name}
        placeholder={placeHolderText}
        value={value}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};

export default InputRow;
