import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "@/components/Header"
import { Home } from "@/pages/home";
import { Donations } from "@/pages/donations"
import { Form } from "@/pages/form";
import { Login } from "@/pages/login";
import { Faq } from "@/pages/faqPage";
import { Profile } from "@/pages/profile";
import { FormApp } from "@/pages/formApp";
import { InfoApp } from "@/pages/infoApp"
import { InfoAss } from "@/pages/infoAss"
import { User } from "@/pages/user"
import { Admin, Associates, Applicants } from "@/pages/admin";

const Root = () => (
    <>
        <Header />
        <Outlet />
    </>
)

const ErrorPage = () => (
    <>
        <h1>Error 404 - Pagina no encontrada</h1>
    </>
)

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/donaciones", element: <Donations /> },
            { path: "/login", element: <Login /> },
            { path: "/profile", element: <Profile /> },
            { path: "/informacion/socios", element: <InfoAss /> },
            { path: "/informacion/aspirantes", element: <InfoApp /> },
            { path: "/faq", element: <Faq /> },
            { path: "/formulario/socios", element: <Form /> },
            { path: "/formulario/aspirantes", element: <FormApp /> },
            { path: "/user", element: <User /> },
            { 
                path: "/admin/", 
                element: <Admin />,
                children: [
                    { path: "", element: <h2>Perfil de admin</h2> },
                    { path: "socios", element: <Associates /> },
                    { path: "aspirantes", element: <Applicants /> },
                ]
            },
        ]
    }
])