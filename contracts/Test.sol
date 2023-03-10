// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol"; 
import "hardhat/console.sol";

contract Test {
  AggregatorV3Interface internal priceFeed;

  constructor() {
    priceFeed = AggregatorV3Interface(
      0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
    );
  }

  function getNum() public view returns (uint32) {
    return 8;
  }

  function getLatestPrice() public view returns (int) {
    (
       /* uint80 roundID */,
       int price,
       /*uint startedAt*/,
       /*uint timeStamp*/,
       /*uint80 answeredInRound*/
    ) = priceFeed.latestRoundData();
    return price;
  }

  function oldgetLatestPrice() public view returns (uint32) {
    return 88;
  }
}
