export const renderTitle = (titles: any) => {
  return titles.en ? titles.en : titles.en_jp ? titles.en_jp : titles.jp;
};
