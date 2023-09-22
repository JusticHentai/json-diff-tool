'use client'

import { Button, Typography } from '@mui/material'
import Head from 'next/head'
import DiffIde from '../components/DiffIDE'
import { flex, flexCenter, rootContainer } from '../style'
import right from '../style/right'

const { container, child } = flex({
  direction: 'column',
  childFlex: [1, 9],
})

function Home() {
  return (
    <>
      <Head>
        <title>render-diff</title>
      </Head>
      <div css={[container, rootContainer]}>
        <div
          css={[
            {
              height: '50px',
            },
            flexCenter(['justifyContent']),
          ]}
        >
          <Typography
            variant="h6"
            css={{
              color: '#121315',
              position: 'absolute',
              left: 0,
            }}
          >
            文件夹路径 / 文件名
          </Typography>
          <Button
            variant="contained"
            css={[
              right(),
              {
                backgroundColor: '#121315',
              },
            ]}
          >
            保存
          </Button>
        </div>
        <div css={[child[1], flexCenter()]}>
          <DiffIde />
        </div>
        <div css={child[2]} />
      </div>
    </>
  )
}

export default Home
