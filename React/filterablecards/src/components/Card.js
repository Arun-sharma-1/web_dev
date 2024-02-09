import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from "react-toastify";

const Card = ({ course, likedcourses, setlikedcourses }) => {
    function clickHandler() {

        if (likedcourses.includes(course.id)) {
            console.log('prev liked');
            //prev liked course
            setlikedcourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("like removed")

        }
        else {
            console.log('prev not  liked');
            if (likedcourses.length === 0) {
                setlikedcourses([course.id]);
            }
            else {
                //non-empty
                setlikedcourses((prev) => [...prev, course.id]);
            }
            toast.success('Toast message')
        }

    }
    function buttonSelector() {
        if (!likedcourses.includes(course.id)) {
            return (<FcLikePlaceholder fontSize="1.75rem" />);
        }
        else {
            return (<FcLike fontSize="1.75rem" />)
        }
    }
    return (
        <div className="w-[300px] bg-red-50 mx-3 aspect-square rounded-md my-5">
            <div className="relative">
                <img className="aspect-[3/2] rounded-md" src={course.image.url}></img>
                <div className="w-[40px] h-[40px] rounded-full absolute right-0 -bottom-[10px] bg-slate-200 text-center grid place-content-center">
                    <button className="w-[100%]"
                        onClick={clickHandler}>
                        {buttonSelector()}
                    </button>
                </div>
            </div>

            <div>
                <p className="font-bold my-2" >{course.title}</p>
                <p>
                    {
                        course.description.length > 100 ? (`${course.description.substr(0, 100)}... `) : (course.description)
                    }
                </p>
            </div>

        </div>
    )
}
export default Card;