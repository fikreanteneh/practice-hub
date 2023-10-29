import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "./layout/Root";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Problem from "./pages/Problem";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import RouteProtection from "./components/RouteProtection";
import Discussion from "./pages/Discussion";
import History from "./pages/History";
import AddProblem from "./pages/AddProblem";


const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>

        <Route path='add' element={<AddProblem />} />

        <Route index element={<LandingPage />} />

        <Route path='problem' element={<Problem />} />
        <Route path='discussion' element={<Discussion />} />

        <Route element={<RouteProtection routeType={"user"} />}>
          <Route path='profile' element={<Profile />} />
          <Route path='history' element={<History />} />
        </Route>

        <Route element={<RouteProtection routeType={""} />}>
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='resetpassword' element={<ResetPassword />} />
        </Route>

      </Route>

      {/* <Route path='*' element={<WrongRoute/>}/> */}


    </>
  )
)


export default Router;