const { execSync } = require("child_process")

const arg = process.argv[2] || "shell"

execSync(
  `cross-env NODE_ENV=development WEB_GATEWAY=http://localhost:3002 lerna run start --stream --scope=@buy-my-house/${arg}`,
  {
    stdio: [0, 1, 2]
  }
)
