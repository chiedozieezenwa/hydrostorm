import { createBrowserRouter } from "react-router-dom";
import { Contact, Home, Services, Support } from "./pages";
import { Signup } from "./pages/signupflow/signup";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'services',
        element: <Services />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/support',
        element: <Support />
    },
    {
        path: '/signup',
        element: <Signup />
    }
])

export default router;