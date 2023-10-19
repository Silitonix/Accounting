export class database
{
  static async get(key: string)
  {
    try {
      const raw = await fetch(`${ key }.json`);
      const json = await raw.json();
      return json;
    } catch {
      return null;
    }
  }
}