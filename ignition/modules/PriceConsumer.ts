import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

module.exports = buildModule("PriceConsumerModule", (m) => {
  const priceConsumer = m.contract("PriceConsumer", [
    "0x694AA1769357215DE4FAC081bf1f309aDC325306",
  ]);
  return { priceConsumer };
});
