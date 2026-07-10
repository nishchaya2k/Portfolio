const fs = require('fs')
const path = require('path')

const buildSwPath = path.join(__dirname, '../build/service-worker.js')

if (!fs.existsSync(buildSwPath)) {
  console.warn('service-worker.js not found in build output, skipping version inject')
  process.exit(0)
}

const version = Date.now().toString()
const content = fs.readFileSync(buildSwPath, 'utf8').replace(/__CACHE_VERSION__/g, version)

fs.writeFileSync(buildSwPath, content)
console.log(`Injected service worker cache version: ${version}`)
