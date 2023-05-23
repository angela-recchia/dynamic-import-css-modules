import dynamic from "next/dynamic";
// import TextBlock from "../components/TextBlock";

const Page = () => {
  const Component = dynamic(() => import("../../components/TextBlock"));
  console.log("here");

  return (
    <div>
      <div>App Router</div>
      <Component />
    </div>
  );
};

export default Page;
