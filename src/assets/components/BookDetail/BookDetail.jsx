
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utility/addDb";
import { addToStoreWishList } from "../Utility/addWDB";

const BookDetail = () => {
    const {bookId}=useParams();

    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book=>book.bookId === id);
    const {image,bookName,author,category,review,tags,totalPages,publisher,yearOfPublishing,rating}=book;

    const handleMArkAsRead=(id)=>{
        addToStoredReadList(id);
    };

    const handleWishList = (id)=>{
        addToStoreWishList(id)
    }
    return (
        <div className="flex flex-col md:flex-row  items-center justify-center  gap-8 my-10">
           
            <div className="bg-gray-200 p-8 flex justify-center items-center flex-grow rounded-md w-full md:w-1/2">
                <img src={image} className=" rounded-md w-52 md:w-full" alt="" />
            </div>


           <div className="md:w-1/2">
             <div className="py-3 border-b border-dashed border-gray-400 ">
                <h2 className="text-2xl font-bold">{bookName}</h2>
                <p>By: {author}</p>

            </div>

            <div className="py-4 border-b border-dashed border-gray-400">
                <p>
                    {category}
                </p>
            </div>

            <div className="py-4">
                <p><span className="text-lg font-bold">Review:</span>{review}</p>
            </div>

            <div className="flex gap-3 border-b py-4 border-dashed border-gray-400">
                <span className="font-bold">Tag:</span>
                 <p className="text-[#23BE0A] bg-gray-100 px-2 font-semibold rounded-md">#{tags[0]}</p>
                <p className="text-[#23BE0A] bg-gray-100 px-2 font-semibold rounded-md">#{tags[1]}</p>
            </div>

            <div className="text-lg font-medium space-y-3 py-4  flex-grow">
                <h5>Number of Pages: <span className="font-bold">{totalPages}</span ></h5>
                <h5>Publisher: <span className="font-bold">{publisher}</span></h5>
                <h5>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></h5>
                <h5>Rating: <span className="font-bold">{rating}</span></h5>
            </div>
            <div className="space-x-3 py-4">
                <button onClick={()=>handleMArkAsRead(bookId)} className="font-bold px-4 py-2 border-2 border-gray-500 rounded-lg">Read</button>
                <button onClick={()=>handleWishList(bookId)} className="bg-[#50B1C9] text-white px-4 py-2 rounded-lg font-bold">Wishlist</button>
            </div>
           </div>
        </div>
    );
};

export default BookDetail;