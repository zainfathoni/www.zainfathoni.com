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
          </Link>{' '}
          or my recent contribution at the{' '}
          <a href="https://kawalcovid19.id/tentang-kami">KawalCOVID19</a>{' '}
          community.
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
          To channel my enthusiasm in React, JavaScript, & frontend development
          in general, I co-organize a <a href="https://reactjs.id">ReactJS </a>{' '}
          and a{' '}
          <a href="https://feid.dev">
            Frontend Developer community in Indonesia
          </a>
          . I love sharing my learning journey to the community by giving{' '}
          <a href="/talk">a few talks</a> and writing some articles in Bahasa
          Indonesia at{' '}
          <a href="https://medium.com/pejuang-kode">Pejuang Kode</a> Medium
          publication and{' '}
          <a href="https://www.pejuangkode.com">pejuangkode.com</a> website to
          help my fellow Indonesian developers learn.
        </p>
        <p>
          I have been leading the tech team of{' '}
          <a href="https://kawalcovid19.id">KawalCOVID19</a> community for the
          past few months to disseminate valid information regarding the
          COVID-19 pandemic in Indonesia.
        </p>
        <p>
          Recently, I also gathered a community of Indonesian learners around me
          in a <a href="https://zainf.dev/discord">Discord Server</a>. If you
          have any question for me, come join us at my brand new{' '}
          <a href="https://zainf.dev/discord">
            <strong>Pejuang Kode</strong> Discord Server
          </a>{' '}
          and raise your questions over there! We would love to keep in touch
          with you. 😉
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
