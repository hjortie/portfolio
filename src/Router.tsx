import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { Skills } from "./components/Skills/Skills";

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
