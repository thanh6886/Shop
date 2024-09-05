import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Carousel from 'src/components/Carousel/Carousel'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
}
