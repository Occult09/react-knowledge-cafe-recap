import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <main className='mx-auto container'>
      <Header></Header>
      <div className='md:flex mx-5 p-4'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </main>
  )
}

export default App
