import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaCaretLeft, FaCaretRight } from 'react-icons/fa'
const Card = ({ objreview }) => {
    const [index, setindex] = useState(0);

    const review = objreview[index];

    console.log(review);
    function leftShiftHandler(event) {
        if (index - 1 < 0) {
            setindex(objreview.length - 1);
        }
        else {
            setindex(index - 1);
        }
        console.log(event?.target);
    }
    function rightShiftHandler() {
        if (index === objreview.length - 1) {
            setindex(0);
        }
        else {
            setindex(index + 1)
        }

    }
    function surpriseHandler() {

       const randIndex = Math.floor(Math.random()*objreview.length)
       setindex(randIndex)
    }
    return (
        <div className="relative w-[85vw] min-h-max  bg-white flex flex-col justify-center items-center">
            <div className="absolute top-[-4rem] md:left-[2rem] rounded-full">
                <img className="overflow-hidden rounded-full w-[100px] h-[100px] md:w-[140px] md:h-[140px]" src={review.image} />
            </div>

            <div className="font-bold text-[18px] mt-16 md:mt-20">
                <p>{review.name}</p>
            </div>

            <div className="text-violet-300 opacity-[80%] capitalize text-[16px]">
                <p>{review.job}</p>
            </div>

            <div className="text-center mx-auto text-violet-400 my-3 z-10">
                <FaQuoteLeft />
            </div>

            <div className="text-[12px] md:text-[18px] ">
                {review.text}
            </div>

            <div className="text-center mx-auto text-violet-400 my-3">
                <FaQuoteRight  />
            </div>

            <div className="flex mx-auto gap-6 cursor-pointer text-4xl text-violet-800">
                <FaCaretLeft onClick={leftShiftHandler} />
                <FaCaretRight onClick={rightShiftHandler} />
            </div>
            <div className="text-white bg-blue-400 hover:bg-blue-300 transition-all flex p-2 rounded flex-shrink-0 mt-4 mb-4 ">

                <button onClick={surpriseHandler}>Surprise Me</button>
            </div>


        </div>
    )
}
export default Card