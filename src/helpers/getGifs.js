export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZEpJ4CFlEozub6YJXcu3EEzc87jQwPJ3&q=${category}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    return gifs;
  };