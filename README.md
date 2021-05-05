# First Deno

## Install Command

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Update .zshrc

```sh
export DENO_INSTALL="/Users/ktanaka/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```

### Logs

```sh
$ curl -fsSL https://deno.land/x/install/install.sh | sh
######################################################################## 100.0%##=O#- #                                                                      
Archive:  /Users/ktanaka/.deno/bin/deno.zip
  inflating: /Users/ktanaka/.deno/bin/deno  
Deno was installed successfully to /Users/ktanaka/.deno/bin/deno
Manually add the directory to your $HOME/.zshrc (or similar)
  export DENO_INSTALL="/Users/ktanaka/.deno"
  export PATH="$DENO_INSTALL/bin:$PATH"
Run '/Users/ktanaka/.deno/bin/deno --help' to get started
```

## Sample Usage

### ./walk_sample.ts

```sh
$ deno run --allow-read walk_test.ts
```

```sh
$ deno run --allow-read --unstable --allow-write walk_test.ts
```
