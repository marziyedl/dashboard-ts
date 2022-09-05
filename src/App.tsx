import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "components/layout/Menu";
import TopNav from "components/layout/TopNav";
import AppRoutes from "routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position={"top-right"} theme="colored" autoClose={3000} />
      <div className="min-vh-100 bg-light">
        <TopNav />
        <Menu />
        <section className="ms-5 ps-4  me-4 " style={{ height: "90vh" }}>
        
            <AppRoutes />
          
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
