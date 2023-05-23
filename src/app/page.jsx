import dynamic from "next/dynamic";



const Page = () => {
  console.log("here");

  return (
    <div>
      <ul>
        <li>
          <a href="/app-router">App Router content</a>
        </li>
        <li>
          <a href="/app-router-client">App Router content with "use client"</a>
        </li>
        <li>
          <a href="/pages-router">Pages Router content</a>
        </li>
      </ul>
    </div>
  );
};

export default Page;
