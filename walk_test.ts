import { walk } from "https://deno.land/std/fs/walk.ts";

for await (const entry of walk("./coedo")) {
  console.log(entry.name);
}
