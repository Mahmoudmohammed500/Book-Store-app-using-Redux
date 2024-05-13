import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertbook } from "../RTK/bookslice";

function AddForm() {
  const title = useRef("");
  const price = useRef(null);
  const description = useRef("");
   const dispatch = useDispatch();
   const {islogedin}  = useSelector((state) => state.auth);
 const FormSubmit = (e) => {
  e.preventDefault();
  const data = {
       title:title.current.value,
       price:price.current.value,
       description:description.current.value,
  };
  dispatch(insertbook(data));
  title.current.value="";
  price.current.value=null;
  description.current.value="";
 }

    return (
        <div className='row'>
        <div className='col-6 offset-3 mt-3'>
          <h2>Insert Book</h2>
          <form onSubmit={FormSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input type='text' className='form-control' id='title' required ref={title} disabled={!islogedin} />
            </div>
            <div className='form-group'>
              <label htmlFor='price'>Price</label>
              <input type='number' className='form-control' id='price' required ref={price} disabled={!islogedin} />
            </div>
            <div className='form-group'>
              <label htmlFor='Description'>Description</label>
              <textarea
                className='form-control'
                id='Description'
                rows='3'
                required
                ref={description}
                disabled={!islogedin}
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary mt-3' disabled={!islogedin}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
}
export default AddForm;