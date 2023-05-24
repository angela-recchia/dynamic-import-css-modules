"use client";
import dynamic from "next/dynamic";

const Page = () => {

  // this simulates a more complex logic where a big list of component is built
  const Component = dynamic(() => import("../../components/TextBlock"));

  return (
    <div>
      <div>App Router with 'use client'</div>
      <Component />
    </div>
  );
};

export default Page;
