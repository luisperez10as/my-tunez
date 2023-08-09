export const loadAlbums = async (artistId) => {
  const albums = [
    {
      id: "1",
      title: "Rock Moderno 1",
      gender:'Rock',
      date: '',
      image: "https://picsum.photos/id/241/200/200",
      tracks: [],
    },
    {
      id: "2",
      title: "Rock Contemporaneo",
      gender:'Rock',
      date: '05-05-2023',
      image: "https://picsum.photos/id/242/200/200",
      tracks: [],
    },
    {
      id: "3",
      title: "Metalero",
      gender:'Rock',
      date: '',
      image: "https://picsum.photos/id/243/200/200",
      tracks: [],
    },
  ];
  return albums;
};
