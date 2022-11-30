import moment from "moment";

export const renderTitle = (titles: any) => {
  return titles.en ? titles.en : titles.en_jp ? titles.en_jp : titles.jp;
};

export const renderDate = (anime: any) => {
  if (anime.attributes.showType === "movie") {
    return (
      <>
        <p className="mt-2 mb-2">
          Released:{" "}
          <span className="rounded bg-green-500 text-sm p-1">
            {moment(anime.attributes.startDate).format("MMMM Do, YYYY")}
          </span>
        </p>
      </>
    );
  }
  return (
    <>
      <p className="mt-2 mb-2">
        From:{" "}
        <span className="rounded bg-green-500 text-sm p-1">
          {moment(anime.attributes.startDate).format("MMMM Do, YYYY")}
        </span>
      </p>
      <p className="mt-2">
        To:{" "}
        <span className="rounded bg-red-500 text-sm p-1">
          {moment(anime.attributes.endDate).format("MMMM Do, YYYY")}
        </span>
      </p>
    </>
  );
};
