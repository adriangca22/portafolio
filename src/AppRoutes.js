import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import App from "./App";
import ViewPdf from "./components/ViewPdf/ViewPdf";
import TawkToChat from "./components/TawkToChat"; // Importa el componente

export const AppRoutes = () => {
  const FnRoutes = () => {
    const routes = useRoutes([
      { path: "/", element: (
        <>
          <App />
          <TawkToChat /> {/* Agrega el chat solo en la ruta "/" */}
        </>
      ) },
      { path: "/pdf", element: <ViewPdf /> },
    ]);
    return routes;
  };

  return (
    <Router>
      <FnRoutes />
    </Router>
  );
};

export default AppRoutes;