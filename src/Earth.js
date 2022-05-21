import React, { useRef, useState, useEffect, useCallback } from "react";
import Globe from "react-globe.gl";
import { useNavigate } from "react-router-dom";

export default function Earth(props) {
  const globeEl = useRef();
  const navigate = useNavigate();
  const [countries, setCountries] = useState({ features: [] });
  const [hover, setHover] = useState();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
      });
  }, []);

  const hoverHandler = useCallback((polygon) => {
    setHover(polygon !== null ? polygon.properties.ISO_A3 : null);
  }, []);

  const clickHandler = useCallback((e) => {
    if (e.type !== "Feature") return;
    navigate(`country/${e.properties.NAME}`);
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="/earthmap.jpg"
      polygonsData={countries.features}
      polygonAltitude={0.01}
      polygonCapColor={(d) =>
        d.properties.ISO_A3 === hover
          ? "rgba(255, 255,255, 0.3)"
          : "rgba(255, 255,255, 0)"
      }
      polygonSideColor={() => "rgba(255, 255, 255, 0)"}
      onPolygonHover={hoverHandler}
      onPolygonClick={clickHandler}
    />
  );
}
