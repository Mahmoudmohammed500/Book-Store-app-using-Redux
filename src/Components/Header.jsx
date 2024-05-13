import { useDispatch, useSelector } from "react-redux";
import { LogOnOut } from "../RTK/authslice";
function Header() {
    const {error}  = useSelector((state) => state.books);
    const {islogedin}  = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    return (
        <>
            {
                error && (
                    <div class="alert alert-danger mb-0 text-center" role="alert">
                        {error}
                    </div>
                )
            }
            <nav className='navbar navbar-dark bg-dark'>
                <div className="container">
                    <h1 className='navbar-brand mb-0 h1'>Books Store</h1>
                    <button className='btn btn-outline-primary' type='submit' onClick={() => dispatch(LogOnOut())}>
                    {islogedin ? "Log Out" : "Log In"}
                    </button>
                </div>
            </nav>
        </>
    )
}
export default Header;