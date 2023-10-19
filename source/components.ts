import { database } from "./database";
import { System } from "./system";
import { Tab } from "./tab";

export class Extention
{
  static async init()
  {
    const list = await database.get("components");
    if (!list || list.length == 0) {
      System.error("Extention", "I can't find extentions !", 0);
    }

    list.forEach(item => {
      new Tab(item);
    });
  }
}