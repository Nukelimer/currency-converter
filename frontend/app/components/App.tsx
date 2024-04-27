'use client'

import { useState } from "react";
import Converter from "./Converter"
import Generate from "./Generate"


function App() {
  const [showNumbers, setShowNumbers] = useState(false);

  return (
      <div className="flex flex-col  max-w-[1000px] w-full justify-center items-center">
          <Generate showNumbers={showNumbers } />
      <section className="flex justify-center  bg-neutral-800  w-[80%]  h-[48vh] shadow-neutral-300  rounded-xl mt-12">
        <Converter setShowNumbers={setShowNumbers}  showNumbers={showNumbers } />
      </section>
      </div>
  )
}

export default App
