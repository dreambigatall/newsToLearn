import Link from 'next/link';

import { DUMMY_NEWS } from '@/dummy';
import NewsList from '@/component/news-list';

export default function NewsPage() {
  return (
    <>
     
       <NewsList news={DUMMY_NEWS}/>
       
    </>
  );
}