
import NewsList from "@/component/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

export default function ArchiveNewsPage({params}){
    const filter = params.filter;
    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]
    let links = getAvailableNewsYears()
    let news;
    if(selectedYear && !selectedMonth){
        news = getNewsForYear(selectedYear)
        links =  getAvailableNewsMonths(selectedYear)
    }

    if(selectedYear && selectedMonth){
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links=[]
    }

    let newsContent = <p>No news found for the selected year</p>
    if(news && news.length > 0)
    {
        newsContent = <NewsList news={news}/>
    }
    if(selectedYear && !getAvailableNewsYears().includes(+selectedYear) || 
    selectedMonth && !getAvailableNewsYears(selectedYear).includes(+selectedMonth)){
        throw new Error ('Invalid filter')
    }
   return(
    <>
    <header id="archive-header">
        <h1>News Archive</h1>
        <nav>
            <ul>
                {
                    links.map((link)=>{
                    const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`

                      
                    return (
                        <li key={link}>
                            <Link href={href}>{link}</Link>
                        </li>
                    )})
                }
            </ul>
        </nav>
    </header>
    {newsContent}
    </>
   )
}