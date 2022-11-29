import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Home } from "@/pages/home";
import { Donations } from "@/pages/donations";
import { Form } from "@/pages/form";
import { Login, loader as loaderLogin } from "@/pages/login";
import { Faq } from "@/pages/faqPage";
import { Profile, loader as loaderProfile } from "@/pages/profile";
import { FormApp } from "@/pages/formApp";
import { InfoApp } from "@/pages/infoApp";
import { InfoAss } from "@/pages/infoAss";
import { User, loader as loaderUser } from "@/pages/user";
import { Admin, loader as loaderAdmin } from "@/pages/admin";
import { Associates, loader as loaderAssociates, action as actionAssociates } from "@/pages/admin/associates";
import { Applicants, loader as loaderApplicants } from "@/pages/admin/applicants";
import { 
  Payments, 
  loader as loaderPayments,
  action as actionPayments
} from "@/pages/admin/payments";

const Root = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const ErrorPage = () => (
  <>
    <h1>Error 404 - Pagina no encontrada</h1>
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/donaciones", element: <Donations /> },
      { path: "/login", element: <Login />, loader: loaderLogin  },
      { path: "/profile", element: <Profile />, loader: loaderProfile },
      { path: "/informacion/socios", element: <InfoAss /> },
      { path: "/informacion/aspirantes", element: <InfoApp /> },
      { path: "/faq", element: <Faq /> },
      { path: "/formulario/socios", element: <Form /> },
      { path: "/formulario/aspirantes", element: <FormApp /> },
      { path: "/user", element: <User />, loader: loaderUser },
      {
        path: "/admin/",
        element: <Admin />,
        loader: loaderAdmin,
        children: [
          { path: "", element: <h2>Perfil de admin</h2> },
          { path: "socios", element: <Associates />, loader: loaderAssociates, action: actionAssociates },
          { path: "aspirantes", element: <Applicants />, loader: loaderApplicants },
          { path: "pagos", element: <Payments />, loader: loaderPayments, action: actionPayments }
        ],
      },
    ],
  },
]);
