// our-domain.com/
import { Fragment } from "react";
import Link from "next/link";


function HomePage() {
  return (
    <Fragment>
      <h1>the home page</h1>
      <button><Link href="/newspage"> next page</Link></button>
    </Fragment>
  );
}
export default HomePage;
