import axios from "axios";
import { Texture, TextureLoader } from "three";

class ArgoAPI {
  private cachedTextures: { [url: string]: Texture } = {};

  async getTour(id: string): Promise<Tour.Graph | null> {
    // During development, just grab the first tour.
    try {
      const { data } = await axios.get("/tour");
      const tour = Object.values(data)[0] as Tour.Graph;
      return tour;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  getTexture(url: string) {
    if (url in this.cachedTextures) {
      return this.cachedTextures[url];
    }
    const texture = new TextureLoader().load(url);
    this.cachedTextures[url] = texture;
    return texture;
  }
}
const api = new ArgoAPI();

export default api;
