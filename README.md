# use-scripts

> Create multiple script with Hooks

[![NPM](https://img.shields.io/npm/v/use-scripts.svg)](https://www.npmjs.com/package/use-scripts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-scripts
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-scripts'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [irhamputra](https://github.com/irhamputra)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
