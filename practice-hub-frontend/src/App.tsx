import { RouterProvider } from 'react-router-dom';
import Router from './Routers';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux';
import { auth } from './config/firebase';


function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, async (user) => {
    let role = "";
    if (user) {
      const idToken = await user?.getIdTokenResult();
      role = idToken?.claims.role;
    }
    dispatch(setCurrentUser({ user, role }))
  })

  const [theme, setTheme] = useState("dark");

  const lightTheme = {
    type: "light",
    change: () => setTheme("dark")
  }
  const darkTheme = {
    type: "dark",
    change: () => setTheme("light")
  }

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <div className={`${theme == "dark" ? "bg-black" : "bg-white"}`}>
        <RouterProvider router={Router} />
      </div>
    </ThemeProvider>
  )
}

export default App
