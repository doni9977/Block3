const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("DoniToken");

  const token = await Token.deploy(10000);

  await token.waitForDeployment();

  const address = await token.getAddress();

  console.log("TOKEN ADDRESS:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});