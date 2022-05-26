import Cache from "node-cache";
import { ICacheProvider } from "../ICacheProvider";

class CacheProvider implements ICacheProvider {
  private cache = new Cache();
  private ttl = 300;

  public setItemOnCache(key: string, value: Object) {
    return this.cache.set(key, value, this.ttl);
  }

  public getItemOfCache(key: string) {
    return this.cache.get(key);
  }

  public hasItemOnCache(key: string) {
    return this.cache.has(key);
  }
}

export const cacheProvider = new CacheProvider();
