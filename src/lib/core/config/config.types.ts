export interface IConfig {
  get(key: string): any;
}

export interface Prototype {
  ref: string;
  parts: string[];
  extension?: string;
}
