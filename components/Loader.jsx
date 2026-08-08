"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-content">

          <div className="loader-crescent">
            ☪
          </div>

          <h1>ILM STUDIO</h1>

          <p>Loading Islamic Knowledge...</p>

          <div className="loader-bar">
            <div className="loader-fill"></div>
          </div>

        </div>
      </div>
    );
  }

  return children;
}