import { lazy, Suspense, useEffect, } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'
import ResMenu from './pages/ResMenu'
import useOnlineStatus from './utils/useOnlineStatus'
import OfflinePage from './pages/OfflinePage'
import Loading from './pages/Loading'
import { useDispatch } from 'react-redux'
import { loadData } from './redux/actions/restaurantActions'
import { useLocationContext } from './context/LocationContext'
import { ProfileProvider } from './context/ProfileContext'
import { UserContextProvider } from './context/UserContext'
import Footer from './components/Footer'

const About = lazy(() => import("./pages/About"));

function App() {
  const online = useOnlineStatus();
  const dispatch = useDispatch();

  if (!online) {
    return (
      <OfflinePage />
    )
  }

  const { setLocation } = useLocationContext();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLocation({ lat, lng });
        dispatch(loadData({ lat, lng }));
      },
      (error) => {
        console.error("Location access denied:", error);
        dispatch(loadData());
      },
    )
  }, [])

  return (
    <div className='pt-14 dark:bg-neutral-700'>
      <ProfileProvider>
        <UserContextProvider>
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
          <Footer />
        </UserContextProvider>
      </ProfileProvider>

    </div>
  )
}

export default App
