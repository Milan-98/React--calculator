import { useState } from "react"
export default function App() {
 
 const [data,setData] = useState([]); 

  const handleClick = (e) => {

    let button = e.target.textContent;

    if(button==="C")
    {
      document.querySelector(".Answer").textContent="0";
      setData([]);
    }
    else if(button==="←")
    {
       data.pop();
       let newData = data;
       setData(
        [...newData]
       )
     
    }
    else if(button==="=")
    {
      let AnsString = data.join("");
      let Ans =eval(AnsString)
      if(typeof Ans==="number")
      {

      
      setData([]);
      document.querySelector(".Answer").textContent= Ans;
      }
      else {
        setData([]);
        document.querySelector(".Answer").textContent="NaN";
      }
    }
    else if(button==="+/-")
    {
      if(data[0].includes("-"))
      {
        data.shift();
        setData(
        [...data]
        )
       
      }
      else{
        setData(
          [ "-",
            ...data
          ]
        )
      }
    }
    else{
      setData([
        ...data,
        button
      ]
      )
      
    }
    
  }

  return (
    <div className={`h-screen bg-[#f78d6c] grid place-items-center`}>

    <ul className={`w-80 h-[30rem] bg-slate-300 grid grid-cols-4 border-2 border-gray-300 cursor-pointer`} onClick={handleClick}>
     <li className="Terminal bg-[#333a4d] col-span-4 text-white flex justify-end items-center text-xl pr-2 overflow-x-hidden">{data}</li>
     <li className="Answer bg-[#333a4d] col-span-4 font-semibold text-4xl text-white flex justify-end items-end pb-1 pr-2 overflow-x-hidden">0</li>

     <li className="bg-[#cccccc]  grid place-items-center font-semibold text-gray-500 text-xl">C</li>
     <li className="bg-[#cccccc]  grid place-items-center font-semibold text-gray-500 text-xl">+/-</li>
     <li className="bg-[#cccccc]  grid place-items-center font-semibold text-gray-500 text-xl">%</li>
     <li className="bg-[#fea170]  grid place-items-center font-semibold text-gray-500 text-xl">/</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-light text-gray-500 text-xl">7</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-light text-gray-500 text-xl">8</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-light text-gray-500 text-xl">9</li>
     <li className="bg-[#fea170]  grid place-items-center font-semibold text-gray-500 text-xl">*</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-light text-gray-500 text-xl">4</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-light text-gray-500 text-xl">5</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-light text-gray-500 text-xl">6</li>
     <li className="bg-[#fea170]  grid place-items-center font-semibold text-gray-500 text-xl">-</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-light text-gray-500 text-xl">1</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-light text-gray-500 text-xl">2</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-light text-gray-500 text-xl">3</li>
     <li className="bg-[#fea170]  grid place-items-center font-semibold text-gray-500 text-xl">+</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-light text-gray-500 text-xl">0</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-semibold text-gray-500 text-xl">.</li>
     <li className="bg-[#f0f0f0]  grid place-items-center font-semibold text-gray-500 text-xl">←</li>
     <li className="bg-[#f78d6c]  grid place-items-center font-semibold text-gray-500 text-xl">=</li>

    </ul>
    </div>
  )
}