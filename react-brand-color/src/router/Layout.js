import { useEffect, useState } from "react";
import MainContext from "../MainContext";
import BrandsData from "../fakeData/brandColor.json";

import Sidebar from "../components/Sidebar";
import Copied from "../components/Copied";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const brandsArray = [];

  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) => brand.title.toLowerCase().includes(search))
    );
  }, [search]);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  };
  return (
    <MainContext.Provider value={data}>
      {copied && <Copied color={copied} />}
      <Sidebar></Sidebar>

      <Outlet />
    </MainContext.Provider>
  );
};

export default Layout;
