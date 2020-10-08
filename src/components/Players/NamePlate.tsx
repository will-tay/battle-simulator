import React, { FunctionComponent } from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

interface INamePlate {
  playerName: string
}

const NameText = styled(Typography)`
  font-family: 'OptimusPrincepsSemiBold';
`

export const NamePlate: FunctionComponent<INamePlate> = ({ playerName }) => (
  <>
    <NameText
      align={'center'}
      variant={'h2'}
    >
      {playerName}
    </NameText>
  </>
)

export default NamePlate
