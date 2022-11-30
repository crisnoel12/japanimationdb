import React from "react";
import styles from "../styles/Overlay.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { renderTitle, renderDate } from "../helpers/index";

interface PROPS {
  anime: any;
  isSingular?: boolean;
}

export default function AnimePoster({ anime, isSingular }: PROPS) {
  const router = useRouter();
  const animeTitle = renderTitle(anime.attributes.titles);

  const display = () => {
    if (isSingular) {
      return (
        <div className="bg-slate-800 col-span-1 md:col-span-3 md:border-r-2 md:border-slate-700">
          <div className={styles.overlayContainer}>
            <Image
              width={110}
              height={156}
              alt={`${animeTitle}'s poster image`}
              className="m-auto mt-4"
              src={`${anime.attributes.posterImage.tiny}`}
            />
          </div>
          <div className="mt-2 p-4">
            <h4 className="text-2xl font-medium mb-2">{animeTitle}</h4>
            <div className="border-t-[2px] border-slate-700">
              <p className="capitalize mt-2 mb-2">
                Type:{" "}
                <span className="rounded bg-neutral-900 text-amber-500 text-sm p-1">
                  {" "}
                  {anime.attributes.showType}
                </span>
              </p>
              <p className="mt-2 mb-2">
                Rating:{" "}
                <span className="rounded bg-neutral-900 text-amber-500 text-sm p-1">
                  {" "}
                  {anime.attributes.ageRating}
                </span>
              </p>
              {renderDate(anime)}
            </div>
            <div className="border-t-[2px] border-slate-700 mt-4">
              <button
                className="mt-4"
                onClick={() => router.back()}
              >{`← Back`}</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-slate-800">
        <div className={`w-full h-96 ${styles.overlayContainer}`}>
          <Image
            fill
            sizes="(max-width: 1200px) 50vw,
              100vw"
            alt={`${animeTitle}'s poster image`}
            src={`${anime.attributes.posterImage.small}`}
          />
          <div className={styles.overlay}>
            <Link
              href={`/anime/${anime.id}`}
              className={`rounded bg-neutral-900 text-amber-500 text-sm text-center p-2 w-1/2 ${styles.overlayContent}`}
            >
              Synopsis
            </Link>
          </div>
        </div>
        <div className="mt-4 p-4">
          <h4 className="text-2xl font-medium mb-2">{animeTitle}</h4>
          <div className="border-t-[2px] border-slate-700">
            <p className="capitalize mt-2 mb-2">
              Type:{" "}
              <span className="rounded bg-neutral-900 text-amber-500 text-sm p-1">
                {" "}
                {anime.attributes.showType}
              </span>
            </p>
            <p className="mt-2 mb-2">
              Rating:{" "}
              <span className="rounded bg-neutral-900 text-amber-500 text-sm p-1">
                {" "}
                {anime.attributes.ageRating}
              </span>
            </p>
            {renderDate(anime)}
          </div>
        </div>
      </div>
    );
  };
  return display();
}
