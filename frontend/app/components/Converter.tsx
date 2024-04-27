"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaRegKeyboard } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";

interface Props {
  showNumbers: boolean;
  setShowNumbers: Dispatch<SetStateAction<boolean>>;
}
function Converter({ setShowNumbers, showNumbers }: Props) {
  const [selectedOption, setSelectedOption] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (showNumbers && gridRef.current) {
      gridRef.current.style.transform = "translateY(0)";
      gridRef.current.style.opacity = "1";
    } else if (!showNumbers && gridRef.current) {
      gridRef.current.style.transform = "translateY(100%)";
      gridRef.current.style.opacity = "0";
    }
  }, [showNumbers]);
  const handleSelectChange = (event: { target: { value: any } }) => {
    setSelectedOption(event.target.value);
  };

  const buttonClickHandler = (number: number) => {
    setInputValue((prevValue) => prevValue + number.toString());
  };
  return (
    <>
      <div className="text-white flex-col w-[90%] justify-evenly   flex">
        <div className="flex justify-between  mb-2 border-b border-neutral-500 text-sm">
          <p className="my-auto">Currency Converter</p>
          <div
            className=" p-4 cursor-pointer "
            onClick={() => {
              setShowNumbers(!showNumbers);
            }}>
            {showNumbers ? <FaRegKeyboard size={30} /> : "123"}
          </div>
        </div>

        <div className=" w-[100%]">
          <form action="">
            <input
              type="text"
              className="number-to-text w-full flex justify-center items-center outline-none mb-6 rounded-xl py-2 px-2"
              placeholder="Paste your token here."
              style={{ background: "#0F0F10" }}
            />
            <div className="flex justify-between py-2 bg-neutral-900 rounded-2xl ">
              <input
                type="number"
                className="bg-transparent number-to-text w-1/2 outline-none  ml-4"
              />

              <select
                style={{ background: "#0F0F10" }}
                id="dropdown"
                value={selectedOption}
                onChange={handleSelectChange}
                className=" py-2 px-2 w-1/2  rounded-2xl outline-none mr-3">
                <option value="">Select...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
            <div className="w-full  flex justify-center   ">
              {" "}
              <div className="bg-neutral-950 p-1 rounded-full">
                {" "}
                <MdCurrencyExchange size={20} />
              </div>
            </div>
            <div className="flex justify-between py-2 bg-neutral-900 rounded-2xl">
              <input
                value={showNumbers ? inputValue : ""}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                type="number"
                tabIndex={0}
                className="number-to-text bg-transparent w-1/2 outline-none py-2 ml-4"
              />

              <select
                style={{ background: "#0F0F10" }}
                id="dropdown"
                value={''}
                onChange={handleSelectChange}
                className=" py-2 px-2 w-1/2  rounded-2xl outline-none  mr-3">
                <option value="">Select...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
          </form>
        </div>

        <div
          ref={gridRef}
          className="bg-white pb-2 rounded-b shadow fixed bottom-0 left-0 right-0 w-[80%] max-w-[1000px] mx-auto transition-all duration-500 ease-in-out"
          style={{ transform: "translateY(100%)", opacity: "0" }}>
          <div className="grid grid-cols-3 self-center w-full gap-1 py-2 px-12">
            {numbers.map((number) => (
              <button
                key={number}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-4 rounded  btn"
                onClick={() => buttonClickHandler(number)}>
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Converter;
