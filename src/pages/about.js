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
          Hello! I am Zain. You might know me from{' '}
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
          I currently work as a{' '}
          <a href="https://www.linkedin.com/in/zainfathoni/">
            Senior Software Engineer
          </a>{' '}
          at <a href="https://www.ninjavan.co/en-sg/">Ninja Van</a>, previously
          venturing at <a href="https://www.xtremax.com/">Xtremax</a> and{' '}
          <a href="https://www.bukalapak.com/">Bukalapak</a>. I live in
          Singapore{' '}
          <span role="img" aria-label="Singaporean Flag">
            🇸🇬
          </span>
          with my Indonesian{' '}
          <span role="img" aria-label="Indonesian Flag">
            🇮🇩
          </span>
          wife 👰🏻 and two kids 👧🏻👦🏻.
        </p>
        <p>
          To channel my enthusiasm in JavaScript & testing, I co-organize a{' '}
          <a href="https://reactjs.id">ReactJS community in Indonesia</a>. I
          also write some articles in Bahasa Indonesia at{' '}
          <a href="https://medium.com/pejuang-kode">Pejuang Kode</a> Medium
          publication and{' '}
          <a href="https://www.pejuangkode.com">pejuangkode.com</a> website to
          help my fellow Indonesian developers learn.
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
