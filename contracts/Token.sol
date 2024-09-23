pragma solidity ^0.8.19;

import "hardhat/console.sol";

contract Token{
	// token name
	string public name;
	// token symbol
	string public symbol;
	// decimals
	uint256 public decimals = 18;
	// total supply
	uint256 public totalSupply;
	
	constructor(string memory _name, string memory _symbol, uint256 _totalSupply){
		name = _name;
		symbol = _symbol;
		totalSupply = _totalSupply * (10**decimals);
	}

}
