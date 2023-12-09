import './css/App.css';

import { createHashRouter, RouterProvider, Outlet, useRouteError, useLocation } from 'react-router-dom';

import { Accueil, Faq, Compte, Panier } from './pages';

import { Navbar, Footer } from './tools';

const websiteRouter = createHashRouter([
    {
        path: '',
        element: <Root/>,
        errorElement: <PageError/>,
        children: [
            {
                path: '',
                element: <Accueil/>,
            },
            {
                path: 'faq',
                element: <Faq/>,
            },
            {
                path: 'account',
                element: <Compte/>,
            },
            {
                path: 'cart',
                element: <Panier/>,
            },
        ]
    },
])

function PageError() {
    const error = useRouteError()
    console.log(error)
    return <>
        <main>
            <h1>&#x26A0; Une erreur est survenue &#x26A0;</h1>
        </main>
    </>
}

function Root() {
    const location = useLocation();
    const isAccueilPage = location.pathname === '/';
    const isCartPage = location.pathname === '/cart';
    return <>
        <Navbar bgColor={isAccueilPage ? "black" : "white"} cartPage={isCartPage ? "none" : "initial"}/>
        <Outlet/>
        <Footer></Footer>
    </>
}

export default function App() {
    return <>
        <RouterProvider router={websiteRouter}/>
    </>
}