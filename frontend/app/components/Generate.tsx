
import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";

interface Token {
  show: boolean;
}

interface NumsProps {
  showNumbers: boolean;
}

function CopyToClipboardNotification({ show }: Token) {
  return (
    <div
      style={{ display: show ? "block" : "none" }}
      className="fixed top-32 left-0 w-full h-[20px]  flex justify-center items-center  bg-opacity-50">
      <div className=" p-4 rounded shadow flex justify-center items-center h-full">
        <p className="text-white text-sm">Token copied to clipboard!</p>
      </div>
    </div>
  );
}

function Generate({ showNumbers }: NumsProps) {
  const [generateToken, setGenerateToken] = useState(false);
  const [token, setToken] = useState<number | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const tokenRef = useRef<HTMLParagraphElement>(null);
  const tokenSpanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let randomToken: number;
    if (generateToken) {
      randomToken =
        Math.floor(Math.random() * (4999 - 4999999 + 1)) + 1599332249999;
      setToken(randomToken);
      console.log(randomToken);
    }
  }, [generateToken]);

  const generateTokenHandler = () => {
    setGenerateToken(!generateToken);
  };

  const copyTokenToClipboard = () => {
    const tokenText = tokenSpanRef.current?.innerText;
    if (typeof tokenText === "string") {
      navigator.clipboard
        .writeText(tokenText)
        .then(() => {
          setShowNotification(true);
          tokenSpanRef!.current!.innerText = "Copied!";
          setTimeout(() => {
            setShowNotification(false);
            tokenSpanRef.current!.innerText = "Copy Token.";
            setGenerateToken(false);
          }, 4000);
        })
        .catch((error) => {
          console.error("Failed to copy token to clipboard:", error);
        });
    } else {
      console.error("Token text is undefined or null");
    }
  };

  console.log(" ----", token);

  useEffect(() => {
    if (generateToken) {
      gsap.fromTo(
        tokenRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, [generateToken]);

  return (
    <div className="flex  border-neutral-500 flex-col w-[80%]  text-xl text-white relative top-30">
      <p ref={tokenRef} className="text-center text-sm">
        {generateToken
          ? "Proceed to use token to use this service"
          : "Generate your token to access this service"}
        .
      </p>
      <button
        className={`${
          generateToken ? "bg-green-600 text-white" : "bg-yellow-500 text-white"
        }  text-sm rounded-lg mx-auto py-2 mt-4 px-6 w-fit outline-none `}
        onClick={generateTokenHandler}>
        {generateToken ? "Token Generated!" : "Generate Token."}
      </button>

      {generateToken && (
        <p className="text-center mt-4 hover:cursor-pointer">
          <span
            ref={tokenSpanRef}
            onClick={copyTokenToClipboard}
            className="bg-white py-2 px-3 text-sm text-black rounded-md">
            {token}
          </span>
        </p>
      )}

      <CopyToClipboardNotification show={showNotification} />
    </div>
  );
}

export default Generate;
