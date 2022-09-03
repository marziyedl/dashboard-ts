import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "components/common/Loading";
import { AddSensor, EditSensor, Home } from "./Elemnts";

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addSensor" element={<AddSensor />} />
        <Route path="/editSensor/:id" element={<EditSensor />} />
        <Route path="*" element={<Home />} />
        
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
