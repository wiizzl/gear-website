import './css/App.css';

import { createHashRouter, RouterProvider, Outlet, useRouteError} from 'react-router-dom';

import { Accueil, Faq, Compte, Panier } from './pages';

import { Navbar } from './tools';

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
    return <>
        <Navbar/>
        <Outlet/>
    </>
}

export default function App() {
    return <>
        <RouterProvider router={websiteRouter}/>
    </>
}