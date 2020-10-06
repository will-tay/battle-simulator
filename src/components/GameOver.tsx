import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Fade } from '@material-ui/core'

interface IGameOver {
  isOver: boolean
  text: string
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
`

const Text = styled.p`
  font-family: 'OptimusPrincepsSemiBold';
  color: red;
  user-select: none;
`

export const GameOver: FunctionComponent<IGameOver> = ({ isOver, text }) => (
  <>
    <Fade
      in={isOver}
      timeout={1000}
    >
      <GameOverlay>
        <Text>{text}</Text>
      </GameOverlay>
    </Fade>
  </>
)

export default GameOver
