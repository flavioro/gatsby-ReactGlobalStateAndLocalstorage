import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { useScore } from "../context/score-context"

const IndexPage = () => {
  let { state, dispatch } = useScore();
  return (
    <Layout>
      <button onClick={() => dispatch({ type: "increment" })}>
          + 1
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>RESET</button><br />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <p>Score is: {state.score}</p>
      <p>Indestructible Score is: {localStorage.getItem("score")}</p>
    </Layout>
  )
}

export default IndexPage
