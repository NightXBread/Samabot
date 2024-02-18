import 'dotenv/config';
import { getRPSChoices } from './game.mjs';
import { capitalize, InstallGlobalCommands } from './utils.mjs';

// Get the game choices from game.js
function createCommandChoices() {
  const choices = getRPSChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
};

// Command containing options
const CHALLENGE_COMMAND = {
  name: 'challenge',
  description: 'Challenge a player to Rock, Paper, Scissors',
  type: 1,
  options: createCommandChoices(),
};

// Install global commands
InstallGlobalCommands([TEST_COMMAND, CHALLENGE_COMMAND]);