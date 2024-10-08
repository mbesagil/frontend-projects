import { useState } from "react";
import Search from "./Search";
import Brand from "./Brand";
import Panel from "./Panel";

import MainContext from "../MainContext";
import { useContext } from "react";

function Content(props) {
  const { brands, selectedBrands } = useContext(MainContext);

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length !== 0 && <Panel />}
      </header>

      <section className="brands">
        {brands.map((brand) => (
          <Brand brand={brand} key={brand.slug} />
        ))}
      </section>
    </main>
  );
}

export default Content;
