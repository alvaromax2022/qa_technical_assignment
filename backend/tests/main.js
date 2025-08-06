const axios = require('axios');
const { expect } = require('chai'); 


// Describe block for our test suite
describe('Pikachu API Tests', () => {
  let response; // Variable to store the API response

  // Before all tests in this suite, make the GET request
  before(async () => {
    try {
      response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
      console.log('Successfully fetched Pikachu data.');
    } catch (error) {
      console.error('Failed to fetch Pikachu data:', error.message);
      // Re-throw to fail the 'before' hook if the request fails
      throw error;
    }
  });

  // Scenario: Verify Pikachu's details
  it('should verify the number of moves and type for Pikachu', () => {
    // Check if the response data exists
    expect(response.data).to.exist;

    // 1. Verify the number of "moves" the pokemon has 
    const numberOfMoves = response.data.moves.length;
    console.log(`Pikachu has ${numberOfMoves} moves.`);
    expect(numberOfMoves).to.be.above(50, 'Pikachu should have more than 50 moves'); // Example assertion

    // 2. Verify the pokemon "types" is "electric"
    const types = response.data.types;
    let isElectric = false;
    for (const type of types) {
      if (type.type.name === 'electric') {
        isElectric = true;
        break;
      }
    }
    console.log(`Pikachu's types include: ${types.map(t => t.type.name).join(', ')}`);
    expect(isElectric).to.be.true('Pikachu should have "electric" as one of its types');
  });
});