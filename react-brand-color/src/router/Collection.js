import { useParams, Link } from "react-router-dom";
import MainContext from "../MainContext";
import Brand from "../components/Brand";
import Panel from "../components/Panel";
import { useContext, useEffect } from "react";
import { GrLinkPrevious } from "react-icons/gr";

function Collection() {
  let { slugs } = useParams();
  const { brands, setSelectedBrands, selectedBrands } = useContext(MainContext);

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
  };

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, []);

  return (
    <main className="content">
      <header className="header">
        <Link to="/" onClick={clearSelectedBrands}>
          <a className="back_btn">
            <GrLinkPrevious /> All Brands
          </a>
        </Link>
        {selectedBrands.length !== 0 && <Panel />}
      </header>
      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return <Brand brand={brand} key={brand.slug} />;
        })}
      </section>
    </main>
  );
}

export default Collection;
