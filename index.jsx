import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route, 
    } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, {loader as vansLoader} from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Login from "./pages/Login"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans, { loader as hostVansLoader} from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
// import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import AuthRequired from "./components/AuthRequired"
import Error from "./components/Error"

import "./server"
const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />}  errorElement={<Error />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route 
          path="vans" 
          element={<Vans />} 
          loader={vansLoader}/>
          <Route path="vans/:id" element={<VanDetail />} />
          <Route
            path="login"
            element={<Login />}
          />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index
                     element={<Dashboard />}
                     loader={async () => {
                      return null
                     }} />
              <Route path="income"
                     element={<Income />}
                     loader={async () => {
                      return null
                     }} />
              <Route path="reviews"
                     element={<Reviews />}
                     loader={async () => {
                      return null
                     }} />
              <Route path="vans"
                     element={<HostVans />}
                     loader={hostVansLoader}
                     />
              <Route path="vans/:id"
                     element={<HostVanDetail />}
                     loader={async () => {
                      return null
                     }}>
                <Route index element={<HostVanInfo />}
                loader={async () => {
                  return null
                }} />
                <Route path="pricing"
                       element={<HostVanPricing />}
                       loader={async () => {
                        return null
                       }} />
                <Route path="photos"
                       element={<HostVanPhotos />}
                       loader={async () => {
                        return null
                       }} />
              </Route>
            </Route>
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
      </Route>

))
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);