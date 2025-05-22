import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Skills } from "./pages/Skills/Skills";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/projects", element: <Projects /> },
        { path: "/skills", element: <Skills /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ],
  { basename: "/portfolio" }
);
