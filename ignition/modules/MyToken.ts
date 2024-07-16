import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

module.exports = buildModule("MyTokenModule", (m) => {
  const myToken = m.contract("MyToken", ["MyToken", "MYT"]);
  return { myToken };
});
