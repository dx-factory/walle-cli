export interface IConfig {
  get(key: string): any;
}

export interface Part {
  name: string;
  extension: string;
}

export interface Prototype {
  name: string;
  parts: Part["name"][];
}
