import React, { FunctionComponent } from 'react'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import styled from 'styled-components'

interface IHealthBar {
  value: number
}

const HealthBarProgress = styled(CircularProgress)`
  min-height: 100px;
  min-width: 100px;
`

export const HealthBar: FunctionComponent<IHealthBar> = ({ value = 75 }) => (
  <>
    <Box position='relative' display='inline-flex'>
      <HealthBarProgress variant='static' value={value} />
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
        <Typography variant='caption' component='div' color='textSecondary'>{`${Math.round(value)}HP`}</Typography>
      </Box>
    </Box>
  </>
)

export default HealthBar
