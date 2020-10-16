import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { useScore } from "../context/score-context"

const SecondPage = () => {
  const {state, dispatch} = useScore()
  return (
<Layout>
  <h1>Hi from the second page</h1>
  <p>Welcome to page 2</p>
  <p>Score: {state.score}</p>
  <Link to="/">Go back to the homepage</Link>
</Layout>
  )
}

export default SecondPage
