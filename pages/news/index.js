// our-domain.com/next
import { Fragment } from "react";
import Link from 'next/link'

function NewsPage() {
  return (
    <Fragment>
      <h1>the news page</h1>
      <ul>
        <li>
          {/* <a href="./news/nextjs-is-a-great-framework">
            NEXTJS is a great framework 
          </a>  */}
          {/* when we click page is reloaded which means they are requesting new HTML page which take time */}
          <Link href="./news/nextjs-is-a-great-framework">
            NEXTJS is a great framework 
          </Link> 
        </li>
        <li>
          <a href="">Something else</a>
        </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
