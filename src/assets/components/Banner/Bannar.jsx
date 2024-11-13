import image from '../../images/books.jpg'

const Bannar = () => {
    return (
        <div className='flex items-center gap-4 bg-gray-200 p-8 rounded my-8'>
           <div className='w-1/2 space-y-4'><h1 className='text-4xl font-bold '>Books to freshen up <br /> your bookshelf</h1>
           <button className='text-lg font-bold text-white bg-[#23BE0A] px-3 py-2 rounded-lg '>View The List</button>
            </div> 
           <div className='w-1/2'>
            <img src={image} className='rounded-md' alt="" /></div>
        </div>
    );
};

export default Bannar;