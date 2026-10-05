export const getGeolocation = async (city) => {
  const query = encodeURIComponent(city.trim());
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=en&format=json`;
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error("Geocoding request failed.");
  }

  const data = await result.json();
  const place = data.results?.[0];

  if (!place) {
    throw new Error(`No location found for “${city}”.`);
  }

  return {
    name: place.name,
    country: place.country,
    lat: place.latitude,
    lon: place.longitude,
  };
};
