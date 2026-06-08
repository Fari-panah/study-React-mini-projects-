import Book from "./Book"
import './index.css'
import {books} from './books'



const BookList= () => {
  
    return(
        <section className="book-style">
            
           {books.map((book, index) =>  <Book key={book.id} {...book} number={index}/>
            )}
        </section>
    )
}
  
export default BookList
