import dynamic from "next/dynamic";

export default function Pages() {
  // this simulates a more complex logic where a big list of component is built
  const Component = dynamic(() => import("../src/components/TextBlock"));

  return (
  <>
    <div>Pages Router</div>
    <Component />
  </>);
}