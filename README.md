# `@dicether/eslint-config`

> Dicether [Eslint](https://eslint.org) config.

## Usage

**Install**:

```bash
$ npm install --dev @dicether/eslint-config
```

**Edit `eslint.config.mjs`**:

```ts
  // ...
import dicetherEsLint from "@dicether/eslint-config";
import {config} from "typescript-eslint";

export default config(
    dicetherEsLint,
    {
        //...
    }
);
```

