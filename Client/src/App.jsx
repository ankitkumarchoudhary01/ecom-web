import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PartnerBrands from "./components/PartnerBrands";
import GovernmentCertified from "./components/GovernmentCertified";

import AccountPage from "./components/pages/AccountPage";
import ProductList from "./components/pages/ProductList";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

function LandingPage() {
  return (
    <>
      <Hero />
      <Categories />
      <PartnerBrands />
      <GovernmentCertified />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/account/*" element={<AccountPage />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;