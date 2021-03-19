import fetch from 'node-fetch';

export default class MapAPI {
  constructor(url) {
    this.baseUrl = url;
  }

  async getMaps(mapId) {
    return await fetch(this.baseUrl);
  }
}
