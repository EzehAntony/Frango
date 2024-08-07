"use client";
import React, { ReactNode, useEffect, useState } from "react";

const Hydration = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted ? (
    <>{children}</>
  ) : (
    <>
      <h3>Loading</h3>
    </>
  );
};

export default Hydration;
