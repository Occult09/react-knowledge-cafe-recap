import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time)

    // remove item from bookmark
    const remaining = bookmarks.filter(bookmark => bookmark.id != id)
    setBookmarks(remaining)
  }

  return (
    <main className='mx-auto container max-w-7xl'>
      <Header></Header>
      <div className='md:flex mx-5 p-4 gap-15'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </main>
  )
}

export default App
