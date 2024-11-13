import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Utility/addDb';
import ReadBook from '../ReadBook/ReadBook';
import WishBook from '../WishBook/WishBook';
const LIstedBOOk = () => {

    const [books,setBooks]=useState([])

    const allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = allBooks.filter(book=>storedReadListInt.includes(book.bookId));
        setBooks(readBookList);
    },[])

    return (
        <div>
            <h3 className="text-3xl font-bold my-8 text-center py-4 bg-gray-100">Books</h3>

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
        books.map(book=><WishBook key={book.bookId} book={book}></WishBook>)
      }
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default LIstedBOOk;