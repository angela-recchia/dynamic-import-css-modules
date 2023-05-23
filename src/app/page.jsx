import dynamic from "next/dynamic";
// import TextBlock from "../components/TextBlock";

const map = {
  TextBlock: dynamic(() => import("../components/TextBlock")),
};

const Page = () => {
  const c = "TextBlock";
  const Component = map[c];

  return (
    <div>
      <Component />
    </div>
  );
};

export default Page;
