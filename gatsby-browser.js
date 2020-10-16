//  and gatsby-ssr.js
const React = require('react')
const { ScoreProvider } = require('./src/context/score-context')

exports.wrapRootElement = ({ element }) => {
  return (
    <ScoreProvider>
      {element}
    </ScoreProvider>
  )
}