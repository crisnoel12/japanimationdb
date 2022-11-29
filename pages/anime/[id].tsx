import React from "react";
import Header from "../../components/Header";
import styles from "../../styles/Overlay.module.css";
import AnimePoster from "../../components/AnimePoster";
import { Permanent_Marker } from "@next/font/google";
import { NextPageContext } from "next";

const permanentMarker = Permanent_Marker({ weight: "400" });

export default function Anime({ anime }: any) {
  const { data } = anime;
  return (
    <>
      <style jsx global>
        {`
          .permanentMarker {
            font-family: ${permanentMarker.style.fontFamily};
          }
        `}
      </style>
      <Header />
      <div className="container mx-auto mb-4 px-10">
        <div
          className={`grid grid-cols-12 ${styles.overlayContainer}`}
          style={{
            backgroundImage:
              data.attributes.coverImage &&
              `url(${data.attributes.coverImage.original})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "250px",
          }}
        >
          <div className={styles.overlayGray}>
            <h1 className={`text-3xl permanentMarker ${styles.overlayContent}`}>
              {data.attributes.titles.en
                ? data.attributes.titles.en
                : data.attributes.titles.en_jp
                ? data.attributes.titles.en_jp
                : data.attributes.titles.jp}
            </h1>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-12`}>
          <AnimePoster anime={data} isSingular />
          <div className="bg-slate-800 col-span-1 md:col-span-9 text-center p-8">
            <h2 className="text-2xl mb-4">Synopsis</h2>
            <p className="whitespace-pre-wrap tracking-wide">
              {data.attributes.synopsis.replace(/(?:\r\n|\r|\n)/g, "\n\n")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const response = await fetch(
    `https://kitsu.io/api/edge/anime/${context.query.id}`
  );
  const anime = await response.json();

  return {
    props: {
      anime,
    },
  };
}
