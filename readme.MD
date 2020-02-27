# Deno Examples to get started.

## Installing Deno

### On Mac os

```
  brew install deno
```

### Linux
```
  curl -fsSL https://deno.land/x/install/install.sh | sh
```

### Windows
```
  choco install deno
```
#### For Installing chocolately in windows https://chocolatey.org/docs/installation


## Examples

```
  deno simple_example.ts
```

```
  deno --allow-net single_server.ts
```

```
  deno --allow-read deno_cat.ts
```

```
  deno --allow-write --allow-read deno_rev_cat.ts
```


```
  deno --allow-read --allow-net querying-permission.ts
```

```
  deno --allow-net DenoEchoServer.ts
```
