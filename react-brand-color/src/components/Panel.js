import { useContext, useEffect, useState } from "react";
import MainContext from "../MainContext";

import { GrClose, GrDownload, GrLink } from "react-icons/gr";

function Panel() {
  const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext);
  const [downloadUrl, setDownloadUrl] = useState();
  const [cssMethod, setCssMethod] = useState("css");

  const getLink = () => {
    prompt(
      `Here\'s the URL to share`,
      `http://localhost:3000/collection/${selectedBrands.join(",")}`
    );
  };

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = "";

      if (cssMethod === "css") {
        output += ":root {\n";
        selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          brand.colors.map((color, key) => {
            output += `--${slug}-${key} : #${color}; \n`;
          });
        });
        output += "}";
      } else if (cssMethod === "scss") {
        selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          brand.colors.map((color, key) => {
            output += `\$${slug}-${key} : #${color}; \n`;
          });
        });
      } else if (cssMethod === "less") {
        selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          brand.colors.map((color, key) => {
            output += `@${slug}-${key} : #${color}; \n`;
          });
        });
      }

      //   console.log("output", output);
      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
  }, [selectedBrands, cssMethod]);

  return (
    <div className="download">
      <div className="actions">
        <select onChange={(e) => setCssMethod(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a download={`Brands Collection.${cssMethod}`} href={downloadUrl}>
          <GrDownload />
        </a>
        <button onClick={getLink}>
          <GrLink />
        </button>
      </div>

      <div className="selected" onClick={() => setSelectedBrands([])}>
        <GrClose />
        {selectedBrands.length} brands collected
      </div>
    </div>
  );
}

export default Panel;
