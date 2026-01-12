import React from "react";
import { useLocation, Routes } from "react-router-dom";

type RouteTransitionProps = {
  children: React.ReactNode;
};

export default function RouteTransition({ children }: RouteTransitionProps) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>{children}</Routes>
    </div>
  );
}
