"use client";

import React, { useState } from "react";

const ShareLink = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };
  // can't work on Server side because it might lead to re rendering of the page

  return (
    <button
      className="border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
      onClick={handleClick}
    >
      {clicked ? "Link Copied!" : "Share link"}
    </button>
  );
};

export default ShareLink;
