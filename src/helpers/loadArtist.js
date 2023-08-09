export const loadArtists = async () => {
  const artists = [
    {
      id: "1",
      name: "Juan Luis Guerra",
      genders: [1, 2, 3],
      members: [],
      website: "site 1",
      image: "https://picsum.photos/id/237/200/200",
    },
    {
      id: "2",
      name: "Bethoven",
      genders: [],
      members: [],
      website: "www.spotity.com",
      image: "https://picsum.photos/id/238/200/200",
    },
    {
      id: "3",
      name: "Rio Roma",
      genders: [],
      members: [],
      website: "site 3",
      image: "https://picsum.photos/id/239/200/200",
    },
  ];
  return artists;
};
