/* 
     App6 - Book Store APP =>  
                       Used Skills on this app
                       {
                         * HTML , CSS , Bootsrab and JS
                         * React.js framework
                         * React Hooks
                         * sweetalert2 library to show alert when delete any post
                         * json server for making API
                         * React Router for Routing
                         * Redux and Redux toolkit for making glopal states
                       }
*/
import AddForm from './Components/AddForm';
import BookContainer from './Components/Book/BookContainer';
import Header from './Components/Header';
function App() {
  return (
<> 
<Header />
<div className='container'>
<AddForm />
<BookContainer />
</div>
</>
  );
}

export default App;
