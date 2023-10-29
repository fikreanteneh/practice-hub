import { Navigate, Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Spinner from "./Spinner"
import { toast } from "react-toastify"
import { resetAuthFaild } from "../redux";

type RouteProtectionProp = {
  routeType: "" | "user" | "admin"
}

const RouteProtection: React.FC<RouteProtectionProp> = ({ routeType }) => {

  const { authStatus, authError, userRole } = useSelector(state => state.auth)
  const dispatch = useDispatch()


  if (authStatus == "loading") {
    return <Spinner />
  }

  else if (authStatus == "failed") {
    toast.error(authError)
    dispatch(resetAuthFaild())
  }

  const redirect = {
    "": "signin",
    "user": "profile",
    "admin": "admin"
  }

  return userRole == routeType ? <Outlet /> : <Navigate to={`${redirect[userRole]}`} />

}
export default RouteProtection