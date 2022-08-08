import AuthUser_24 from "./components/AuthUser_24";
import ParentComponent from "./components/basic-interaction/ParentComponent";
import ContactApp from "./components/contactDemo/ContactApp";
import ProductCart_25 from "./components/ProductCart_25";
import "./styles.css";

export default function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">
          {" "}
          React{" "}
        </a>
      </nav>
      {/* <AuthUser_24/> */}
      {/* <ProductCart_25 /> */}
      {/* <ParentComponent /> */}
      <ContactApp />
    </>
  );
}
