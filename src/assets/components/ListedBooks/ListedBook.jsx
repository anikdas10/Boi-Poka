import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Utility/addDb';
import ReadBook from '../ReadBook/ReadBook';
import WishBook from '../WishBook/WishBook';
import { getWishList } from '../Utility/addWDB';
const LIstedBOOk = () => {

    const [books,setBooks]=useState([]);

    const [wishBooks,setWishBooks]=useState([]);

    const [sort , setSort]=useState([]);

    const allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = allBooks.filter(book=>storedReadListInt.includes(book.bookId));
        setBooks(readBookList);
    },[])

    useEffect(()=>{
        const storedWishList = getWishList();
        const storedWishListInt = storedWishList.map(id=>parseInt(id));
        const wishBookLIst = allBooks.filter(book=>storedWishListInt.includes(book.bookId));
        setWishBooks(wishBookLIst);
    },[])

    const handleSort =sortType=>{
        setSort(sortType);
        if(sortType === 'No of Pages'){
          const sortedReadList = [...books].sort((a,b)=>a.totalPages - b.totalPages) ;
          const sortedWishList = [...wishBooks].sort((a,b)=>a.totalPages - b.totalPages)
          setBooks(sortedReadList) ;
          setWishBooks(sortedWishList);
        }
        if(sortType === "Ratings"){
            const sortedList = [...books].sort((a,b)=>a.rating - b.rating)
            setBooks(sortedList);
            const sortedWishList = [...wishBooks].sort((a,b)=>a.rating - b.rating);
            setWishBooks(sortedWishList)
        }
        if(sortType === 'Publisher year'){
           const sortedList = [...books].sort((a,b)=>a.yearOfPublishing - b.yearOfPublishing)
            setBooks(sortedList);
            const sortedWishList = [...wishBooks].sort((a,b)=>a.yearOfPublishing - b.yearOfPublishing);
            setWishBooks(sortedWishList)
        }
    }
    return (
        <div>
            <h3 className="text-3xl font-bold my-8 text-center py-4 bg-gray-100">Books</h3>

           <div className='text-center'>
             <div className="dropdown ">
  <div tabIndex={0} role="button" className="btn m-1">{sort?`Sort By ${sort}` : 'Sort By'}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleSort('Ratings')}><a>Ratings</a></li>
    <li  onClick={()=>handleSort('No of Pages')}><a>Number of Pages</a></li>
    <li  onClick={()=>handleSort('Publisher year')}><a>
Publisher year</a></li>
  </ul>
            </div>
           </div>

            <Tabs>
    <TabList>
      <Tab >Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      {
        books.map(book=><ReadBook key={book.bookId} book={book}></ReadBook>)
      }
    </TabPanel>
    <TabPanel>
      {
        wishBooks.map(book=><WishBook key={book.bookId} book={book}></WishBook>)
      }
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default LIstedBOOk;