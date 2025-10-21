import React from "react";
import { useNavigation } from "react-router";
import logo from "../../../assets/logo.png"
function PageLoader() {
  const navigation = useNavigation();
  if (navigation.state !== "loading") return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col
    items-center justify-center bg-gray-100 z-50">
      <div className="loader w-20 h-20
       border-gray-200 rounded-full animate-spin">
        <img src={logo} alt="" />
       </div>
       <div className="text-4xl font-semibold">
        Loading Please Wait
       </div>
       <div className="font-medium text-2xl">AppDeck Will Serve Your Request Soonn</div>
    </div>
  );
}

export default PageLoader;
