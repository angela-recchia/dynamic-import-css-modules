import dynamic from "next/dynamic";
import TextBlock from "../src/components/TextBlock";


export default function Pages() {
  const Component = dynamic(() => import("../src/components/TextBlock"));

  return (
  <>
    <div>Pages Router</div>
    <Component />
  </>);
}