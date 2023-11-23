export const loadPosts = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

  const promisesArray = [postsResponse, photosResponse];

  const [posts, photos] = await Promise.all(promisesArray);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postsJson.map((post, id) => {
    return { ...post, cover: photosJson[id].url };
  });

  return postsAndPhotos;
};
