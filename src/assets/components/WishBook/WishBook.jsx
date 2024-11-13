import { CiLocationOn} from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

const WishBook = ({book}) => {
    const {image,bookName,author,category,tags,totalPages,publisher,yearOfPublishing,rating}=book;
    return (
         <div className="flex gap-4 my-4 border-2 p-6 rounded-md ">
            <div className="bg-gray-200 p-8 rounded-lg"><img src={image} className="w-32" alt="" /></div>
            <div>
                <div className="py-3  ">
                <h2 className="text-2xl font-bold">{bookName}</h2>
                <p>By: {author}</p>
            </div>

            
            <div className="flex gap-3 py-4 ">
                <span className="font-bold">Tag:</span>
                 <p className="text-[#23BE0A] bg-gray-100 px-2 font-semibold rounded-md">#{tags[0]}</p>
                <p className="text-[#23BE0A] bg-gray-100 px-2 font-semibold rounded-md">#{tags[1]}</p>
                <p className="flex items-center text-lg font-medium gap-1"><CiLocationOn />Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
            </div>
            <div className="flex gap-8 border-b py-4 border-dashed border-gray-400">
                 <h5 className="flex items-center gap-1"><FaUserFriends /> Publisher: <span className="font-bold">{publisher}</span></h5>
                 <h5 className="flex items-center gap-1"><MdContactPage /> Page {totalPages}</h5>
            </div>

            <div className="flex items-center gap-3 my-4">
                <p className="px-4 py-1 bg-[#328EFF26] rounded-full font-semibold text-lg">Category: {category}</p>
                <p className="px-4 py-1 bg-[#FFAC3326] rounded-full font-semibold text-lg text-[#FFAC33]">Rating: {rating}</p>
                <p className="px-4 py-1 bg-[#23BE0A] rounded-full font-semibold text-lg text-white">View Details</p>
            </div>
            </div>
        </div>
    );
};

export default WishBook;