import { useState, useEffect } from "react";

const cache = new Map();

export default function useGraphAsset(location) {
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    if (location in cache) {
      setAsset(cache[location]);
      return;
    }
    let assetName = location.image || location.video;
    import(`../assets/${assetName}`).then(({ default: url }) => {
      cache[location] = url;
      setAsset(url);
    });
  }, [location]);

  return asset;
}
