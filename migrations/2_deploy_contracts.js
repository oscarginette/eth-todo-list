/**
 * When you change the schema of a database you need to do a migration.
 * When you deploy a smartcontract to the blockchain you change the blockchain state
 * You need a migration to change the state 
 */

const TodoList = artifacts.require("./TodoList.sol");

module.exports = function (deployer) {
  deployer.deploy(TodoList);
};
 