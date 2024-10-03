  async function main() {
  //fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")
  //deploy contract
  const token = await Token.deploy('Boom token', 'BMTK', '10000000')
  gasPrice: ethers.utils.parseUnits('5', 'gwei'),
  await token.deployed()
  console.log(`Token Deployed to: ${token.address}`)
}

  main() 
  .then(() => process.exit(0))
  .catch((error) => {
  console.error("this didnt work", error);
  process.exit(1);
});
