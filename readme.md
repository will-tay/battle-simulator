# RPG Battle Simulator

In this game you (The Player) are fighting some kind of monster. Both characters begin with 100
health points. The two health values are represented as a circular health bar on the screen.
The UI consists of an “Attack!” button. When you click this, the following sequence happens:
1. Two dice are rolled for The Player
2. Two dice are rolled for The Monster
All dice are 6-sided. For each roll pick a random number between 1 and 6. The results of all 4 rolls are displayed.
3. Whoever scores the lowest total will take damage and lose health points. The amount of health they
lose will be the difference between the two rolls. So: if the player rolls a 2 and a 3, and the monster rolls
a 4 and a 5, the player will take (4+5)-(3+2) = 4 damage.
4. Now the player can attack again when they like.

If The Player loses all their health the game stops and “Game Over” is displayed in large red text.
If the monster loses all their health the game ends and “You Win” is displayed in large green text.

## Installation

1. ```npm install```
2. ```npm run start-dev```

Runs a local dev server on port 8890 by default.

# Code style

I use standardjs as my styleguide

### Built with

- React
- Typescript
- Redux
- Redux Saga
- Styled Components
