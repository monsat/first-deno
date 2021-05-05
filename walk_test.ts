import { walk, exists, ensureDir, move } from "https://deno.land/std/fs/mod.ts";

if (!(await exists("./todir"))) {
  ensureDir("./todir")
}

for await (const entry of walk("./coedo")) {
  if (await exists(`./coedo/${entry.name}`)) {
    move(`./coedo/${entry.name}`, `./todir/${entry.name}`)
  } else {
    console.log(entry.name);
  }
}
