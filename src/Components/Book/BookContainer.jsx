import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import styles from '../Book/book.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchbooks } from "../../RTK/bookslice";
function BookContainer() {
    const {isLoading , books} = useSelector((state)=> state.books );
    const dispatch = useDispatch();
    const [selectedbook ,setselectedbook] = useState({});
    const getbook = (id) => {
           const selectedbook = books.find((book) => book.id === id ) ;
           setselectedbook((prev) => {return {...prev , ...selectedbook}} );
    };
useEffect(()=> {
    dispatch(fetchbooks());
},[])
    return (
        <>
            <hr className='my-5' />
            <div className='row'>
                <div className='col'>
                    <BooksList isLoading={isLoading} books={books} getbook={getbook} />
                </div>
                <div className='col'>
                    <div className={styles.sideline}>
                        <BookInfo info={selectedbook} />
                    </div>
                </div>
            </div>
            <br></br>
        </>
    )
}
export default BookContainer;