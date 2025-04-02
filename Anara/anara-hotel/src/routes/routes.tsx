import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import GalleryPage from '../pages/GalleryPage'
import RoomsPage from '../pages/RoomsPage'
import ContactPage from '../pages/ContactPage'
import ServicesPage from '../pages/ServicesPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: '/gallery',
    element: (
      <Layout>
        <GalleryPage />
      </Layout>
    ),
  },
  {
    path: '/rooms',
    element: (
      <Layout>
        <RoomsPage />
      </Layout>
    ),
  },
  {
    path: '/services',
    element: (
      <Layout>
        <ServicesPage />
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    ),
  },
])
