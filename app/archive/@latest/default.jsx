import NewsList from "@/component/news-list";
import { getLatestNews } from "@/lib/news"

export default function LatestNewsPage(){

    const latestNews = getLatestNews();
    return( 
    <>
    <h1>Latest News</h1>
    <NewsList news={latestNews}/>
    </>
    
    )
}