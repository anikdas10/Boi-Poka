import { IoStarHalfOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Book = ({book}) => {
   
    const {author,bookName,category,image,tags,rating,bookId}=book
    return (
       <Link to={`books/${bookId}`}>
        <div className="flex flex-col space-y-2 border p-4 rounded-md">
            <div className="bg-gray-200 p-8 flex justify-center items-center flex-grow rounded-md">
                <img src={image} className="w-40 rounded-md" alt="" />
            </div>
            <div className="flex gap-3 ">
                <p className="text-[#23BE0A] bg-gray-100 px-2 font-semibold rounded-md">{tags[0]}</p>
                <p className="text-[#23BE0A] bg-gray-100 px-2 font-semibold rounded-md">{tags[1]}</p>
            </div>
            <div className="py-3 border-b border-dashed border-gray-400 ">
                <h2 className="text-2xl font-bold">{bookName}</h2>
                <p>By: {author}</p>
            </div>
            <div className="flex items-center justify-between ">
                <p>
                    {category}
                </p>
                <p className="flex items-center gap-2">
                    {rating}<IoStarHalfOutline />
                </p>
            </div>


        </div>
       </Link>
    );
};

export default Book;