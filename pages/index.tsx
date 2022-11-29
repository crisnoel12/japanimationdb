import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import AnimePoster from '../components/AnimePoster';
import { Montserrat } from '@next/font/google';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';

const montserrat = Montserrat({ subsets: ['latin'] });

const limit = 20;

export default function Home({ initialAnimeList, links, count }: any) {
  const [animeList, setAnimeList] = useState(initialAnimeList);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(animeList.length);
  },[animeList]);

  const loadMore = async () => {
    const response = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${offset}`);
    const data = await response.json();
    setAnimeList([
      ...animeList,
      ...data.data
    ])
  }

  return (
    <>
      <style jsx global>{`
        html, body {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Header />
      <div className="container mx-auto px-4">
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={animeList.length !== count}
            loader={
              <div className="w-full text-center">
                <span key={0} className="loader mx-auto mt-8 mb-8"></span>
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {
                animeList && animeList.map((anime: any, i: number) => (
                  <AnimePoster key={anime.id} anime={anime} />
                ))
              }
            </div>
          </InfiniteScroll>
      </div>
    </>
  )
}

export const getStaticProps = async(context: any) => {
  const response = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=${limit}`);
  const data = await response.json();

  return {
      props: {
          initialAnimeList: data.data,
          links: data.links,
          count: data.meta.count
      }
  }
}
