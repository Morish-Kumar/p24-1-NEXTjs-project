// to extract the concrete value entered in a URL when this page is loaded
import {useRouter} from 'next/router'

// our-domain.com/news/something-important

function DetailPage(){
    const router = useRouter()

    // console.log(router.query.newsId)
     //query property gives us the access to a nested object, we then have the identifier which we chose between  the square bracket as a property name

     const newsId = router.query.newsId
    return <h1>the news detail page</h1>
}
export default DetailPage