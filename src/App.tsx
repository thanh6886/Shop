import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { LocalStorageEventTarget } from './utils/auth'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ErrorBoundary from './components/ErrorBoundary'
import { HelmetProvider } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { reset } from './redux/redux'
function App() {
  const dispatch = useDispatch()
  const routeElements = useRouteElements()
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', () => dispatch(reset()))
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', () => dispatch(reset()))
    }
  }, [dispatch])

  return (
    <HelmetProvider>
      <ErrorBoundary>
        {routeElements}
        <ToastContainer />
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </HelmetProvider>
  )
}

export default App
