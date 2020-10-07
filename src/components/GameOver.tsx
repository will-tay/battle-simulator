import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Button, Fade } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { IRootState } from '../store/rootReducer'
import { resetGame, getGameOver, IGameOver } from '../store/ducks/combat'

interface IGameOverComp {
  gameOver: IGameOver
  resetGame: typeof resetGame
}

interface IGameOverText {
  playerWon: boolean
}

const GameOverlay = styled.div`
  position: fixed;
  top: calc(50% - 100px);
  left: 0;
  right: 0;
  height: 100px;
  width: 100%;
  background-color: #000;
  opacity: 0.6;
  box-shadow: 0 0 82px 120px #000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  flex-direction: column;
`

const Text = styled.p<IGameOverText>`
  font-family: 'OptimusPrincepsSemiBold';
  color: ${({ playerWon }) => playerWon ? 'green' : 'red'};
  user-select: none;
`

export const GameOver: FunctionComponent<IGameOverComp> = ({ gameOver, resetGame }) => (
  <>
    {gameOver.isOver &&
      <Fade
        in={gameOver.isOver}
        timeout={2000}
      >
        <GameOverlay>
          <Text
            playerWon={gameOver.playerWon}
          >
            {gameOver.playerWon ? 'YOU WIN' : 'GAME OVER'}!
          </Text>
          <Fade
            in={gameOver.isOver}
            timeout={4000}
          >
            <Button
              color={gameOver.playerWon ? 'primary' : 'secondary'}
              variant={'contained'}
              onClick={resetGame}
            >
              Play Again
            </Button>
          </Fade>
        </GameOverlay>
      </Fade>
    }
  </>
)

const mapStateToProps = (state: IRootState) => ({
  gameOver: getGameOver(state)
})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  resetGame
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GameOver)
