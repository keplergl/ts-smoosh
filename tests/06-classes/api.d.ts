import MapInfo from './map-info';

declare class MapAPI {
  /**
   * Base URL that this API calls out to.
   */
  baseUrl: string;

  /**
   * Attempts to retrieve all the maps that the user has access to.
   * @return A promise that resolves to an array of retrieved maps.
   */
  getMaps(mapId: string): Promise<MapInfo[]>;
}

export = MapAPI;
