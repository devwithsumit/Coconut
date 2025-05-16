import { lazy, Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
// import About from './pages/About'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'
import ResMenu from './pages/ResMenu'
import useOnlineStatus from './utils/useOnlineStatus'
import OfflinePage from './pages/OfflinePage'
import Loading from './pages/Loading'

const About = lazy(() => import("./pages/About"));

function App() {
  const online = useOnlineStatus();
  if (!online) {
    return (
      <OfflinePage />
    )
  }
  return (
    <>
      <div className='pt-14 dark:bg-neutral-700'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          } />
          <Route path='/sign' element={<SignIn />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='menu/:id' element={<ResMenu />} />
        </Routes>
      </div>
    </>
  )
}

export default App
