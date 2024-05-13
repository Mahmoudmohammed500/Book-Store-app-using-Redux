function BookInfo(props) {
  const { info } = props;
  return (
    <>
      <h2>Book Details</h2>
      {
        Object.keys(info).length > 0 ? (
          <div>
            <p className='fw-bold'>Title: {info.title} </p>
            <p className='fst-italic'>Insertd By: {info.username}</p>
            <p className='fw-light'>Description: {info.description}</p>
            <p className='fst-italic'>Price: {info.price}</p>
          </div>
        )
          :
          (
            <div className='alert alert-secondary' role='alert'>
              There is no books selected yet. Please select!
            </div>
          )
      }
    </>
  )
}
export default BookInfo;