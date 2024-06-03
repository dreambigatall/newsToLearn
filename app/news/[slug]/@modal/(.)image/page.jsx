'use client'
import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy';
import { useRouter } from 'next/router';

export default function InterceptedImagePage({ params }) {
  const routers = useRouter()
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <>
    <h1>hi</h1>
      <div className="modal-backdrop" onClick={routers.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}