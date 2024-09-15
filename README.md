# Alpalog

Just a wrapper around console.log that I can reuse in my projects

## Installation

npm:

```
npm install alpalog
```

pnpm:

```
pnpm install alpalog
```

yarn

```
yarn add alpalog
```

## Usage

```javascript
import alpalog from 'alpalog'

alpalog.info('Hello, World!')
```

### Methods

- `alpalog.info`

Shows a regular console log

- `alpalog.whisper`

Shows a console log with a grayed out color

- `alpalog.warn`

Shows a console log with a yellow color

- `alpalog.error`

Shows a console log with a red color

- `alpalog.success`

Shows a console log with a green color

- `alpalog.json`

Shows a console log with a beautified JSON.stringify
