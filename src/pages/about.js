import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Container from 'components/Container'
import Layout from 'components/Layout'
import Link from 'components/Link'

export default ({ data: { site } }) => {
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-bottom: auto;
        `}
      >
        <h1>About Me</h1>
        <p>
          You might know me from{' '}
          <Link
            to="/talk/jsconf-asia-2019"
            aria-label="My JSConf Asia 2019 talk"
          >
            my talk
          </Link>{' '}
          at{' '}
          <Link
            to="https://2019.jsconf.asia#program"
            aria-label="JSConf Asia 2019 program"
          >
            JSConf Asia 2019
          </Link>
          .
        </p>
        <p>
          To help my fellow Indonesian developers learn, I write some articles
          in Bahasa Indonesia at{' '}
          <a href="https://medium.com/pejuang-kode">a Medium publication</a> and{' '}
          <a href="https://www.pejuangkode.com">another website</a>.
        </p>
        <p>
          Any question? You might reach me out through{' '}
          <a href="https://t.me/zainfathoni">Telegram</a>.<br />I would love to
          keep in touch with you. 😉
        </p>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
