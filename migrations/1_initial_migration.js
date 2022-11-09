const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  console.log(Migrations);
  deployer.deploy(Migrations);
};
