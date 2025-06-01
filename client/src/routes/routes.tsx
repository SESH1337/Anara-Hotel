import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'

import RoomsPage from '../pages/RoomPage'
import ContactPage from '../pages/ContactPage'
import ServicesPage from '../pages/ServicesPage'
import RoomDetailsPage from '../pages/RoomDetailsPage'

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
  {
    path: '/rooms/:slug',
    element: (
      <Layout>
        <RoomDetailsPage />
      </Layout>
    ),
  },
])
