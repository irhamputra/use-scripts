# useScripts

fork from [`useScript`](https://usehooks.com/useScript/) but with enhancing for creating multiple Script tag

[![NPM](https://img.shields.io/npm/v/use-scripts.svg)](https://www.npmjs.com/package/use-scripts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-scripts
```

## Usage

```tsx
import * as React from 'react'

import { useScripts } from 'use-scripts'

const Example = () => {
  const status = useScripts(['script_1.js', 'https://example.com/script-external.js']);
  
  return (
    <div>
      {status === "ready" && 'do something'}
      {status === "load" && 'do something'}
      {status === "error" && 'do something'}
      {status === "idle" && 'do something'}
    </div>
  )
}
```

## License

MIT © [irhamputra](https://github.com/irhamputra)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
