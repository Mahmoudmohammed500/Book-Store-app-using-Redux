import { useDispatch, useSelector } from "react-redux";
import { deletebook } from "../../RTK/bookslice";

function BooksList(props) {
  const { isLoading, books, getbook } = props;
  const { islogedin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (

    <div>
      <h2>Books List</h2>
      {isLoading ? (
        'Loading...'
      ) : (
        <ul className='list-group'>
          {
            books.length > 0 ? (
              books.map((book) => {
                return (
                  <li key={book.id} className='list-group-item d-flex  justify-content-between align-items-center'>
                    <div>{book.title}</div>
                    <div className='btn-group' role='group'>
                      <button type='button' className='btn btn-primary' disabled={!islogedin} 
                onClick={() => getbook(book.id)} >
                        Read
                      </button>
                      <button type='button' className='btn btn-danger' disabled={!islogedin} onClick={() => dispatch(deletebook(book))
                        .unwrap()
                        .then((originalPromiseResult) => {
                          // handle result here
                          console.log(originalPromiseResult);
                        })
                        .catch((rejectedValueOrSerializedError) => {
                          // handle error here
                          console.log(rejectedValueOrSerializedError);
                        })
                      }>
                        Delete
                      </button>
                    </div>
                  </li>
                )
              })
            ) :
              (
                "There is no books available"
              )
          }
        </ul>
      )}
    </div>
  )
}
export default BooksList;