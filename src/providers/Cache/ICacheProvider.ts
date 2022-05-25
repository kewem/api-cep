export interface ICacheProvider {
  setItemOnCache(key: string, value: Object): boolean;
  getItemOfCache(key: string): Object;
  hasItemOnCache(key: string): boolean
}
