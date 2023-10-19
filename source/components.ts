import { database } from "./database";
import { System } from "./system";
import { Tab } from "./tab";

export class Extention
{
  static async init()
  {
    const list = await database.get("components");
    if (!list) System.error("افزونه", "I can't find extentions !", 0);

    list.forEach(async item => await this.load(item));
  }
  static async load(name:string)
  {
    const ext = await database.get(`components/${ name }`);
    if (!ext) System.error("افزونه", `افزونه "${name}" یافت نشد`, 0);
    new Tab(name);
  }
}