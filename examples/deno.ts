import { createApp } from "../mod.ts";

const _cli = createApp({
  name: "deno",
  version: Deno.version.deno,
  description: "A secure JavaScript and TypeScript runtime",
  authors: ["ry", "lucacasonato", "bartlomieju", "piscisaureus"],
});
