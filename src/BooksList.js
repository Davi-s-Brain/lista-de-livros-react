import { useState } from "react";
import "./styles/BookList.css"

export function BooksList(props) {

  let [name, setName] = useState('')
  let [author, setAuthor] = useState('')
  let [pages, setPages] = useState('')

  let listOfBooks = [
    {
      name: '',
      author: '',
      pages: ''
    }
  ]

  const handleAssignment = e => {
    for (var i = 0; i < pages.length; i++) {
      listOfBooks[i].name = name
      listOfBooks[i].author = author
      listOfBooks[i].pages = pages
      console.log(listOfBooks[i])
      console.log(i)
      return (
        <pre>
          <code>
            {JSON.stringify(listOfBooks[i], null, 2)}
          </code>
        </pre> 
      )
    }
  }

  return (
    <>
      <input 
        type="text" 
        name="book_title" 
        id="book_title" 
        value={name}
        placeholder="Digite o nome do livro"
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="text" 
        name="book_author" 
        id="book_author" 
        value={author}
        placeholder="Digite o nome do autor"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input 
        type="text" 
        name="book_pages" 
        id="book_pages" 
        value={pages}
        placeholder="Digite o número de páginas"
        onChange={(e) => setPages(e.target.value)}
      />
      <button 
        type="submit"  
        onClick={(e) => handleAssignment()}
      >
        Submit
      </button>

      <div>
        {handleAssignment()}
      </div>
    </>
  )
}