import { useQuery } from '@apollo/client';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';
import { useState } from 'react';

function AddBook() {
    const [book, setBook] = useState({name:'', genre:'', authorId:''});
    // const [book, setBook] = useState(0);

    console.log(book)

    const { loading, error, data } = useQuery(getAuthorsQuery);
    function displayAuthors(){
        if(loading){
            return(<option disabled>Loading Authors...</option>)
        }
        else{
            return data.authors.map(author => {
                return (<option key = {author.id} value = {author.id}>{author.name}</option>)
            })
        }
    };
    
    function submitForm(e){
        e.preventDefault();
        addBookMutation
        console.log(book);

    }

    return (
        <form id="add-book" onSubmit = {submitForm}>
            <div className="field">
                <label>
                    Book name:
                </label>
                <input type = "text" onChange = {e => {setBook(prev => Object.assign(prev, {name: e.target.value}))}} />
            </div>
            <div className="field">
                <label>
                    Genre:
                </label>
                <input type = "text" onChange = {e => {setBook(prev => Object.assign(prev, {genre: e.target.value}))}}/>
            </div>
            <div className="field">
                <label>
                    Author:
                </label>
                <select onChange = {e => {setBook(prev => Object.assign(prev, {authorId: e.target.value}))}}>
                    <option>Select Author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    );
  }
  
  export default AddBook;