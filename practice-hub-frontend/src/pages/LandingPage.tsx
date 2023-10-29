import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


const LandingPage = () => {

    const { authStatus } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    function signOut() {
        dispatch({type: "SIGNOUT"})
    }

    return (
        <>
            <div>LandingPage</div>
            {authStatus == "authenticated" && <button onClick={signOut}>SignOut</button>}
        </>
    )
}

export default LandingPage