import React, { FunctionComponent } from 'react'
import { Box, CircularProgress, Fade, Typography } from '@material-ui/core'
import styled from 'styled-components'

import { skullImg } from '../../assets'

interface IHealthBar {
  value: number
}

const HealthBarProgress = styled(CircularProgress)`
  min-height: 100px;
  min-width: 100px;
`

const DeathImage = styled.img`
  max-width: 100%;
`

export const HealthBar: FunctionComponent<IHealthBar> = ({ value }) => {
  const isDead = value <= 0
  return (
    <>
      <Box position='relative' display='inline-flex'>
        <HealthBarProgress variant='static' value={isDead ? 0 : value} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position='absolute'
          display='flex'
          alignItems='center'
          justifyContent='center'
          >
          { isDead
            ? <Fade
              in={isDead}
              timeout={2000}
              ><DeathImage src={skullImg} /></Fade>
            : <Typography variant='caption' component='div' color='textSecondary'>{`${Math.round(value)}HP`}</Typography>
          }
        </Box>
      </Box>
    </>
  )
}

export default HealthBar
