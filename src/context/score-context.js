import React from "react"
const ScoreContext = React.createContext()
const scoreReducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      let scoreSum = state.score + 1
      if (typeof window !== `undefined`) {
        const score = Number(window.localStorage.setItem("score", scoreSum))
      }
      return { score:  scoreSum}
    }
    case "reset": {
      return { score: 0 }
    }
    default: {
      throw new Error(`Unhandled action type ${action.type}`)
    }
  }
}
const ScoreProvider = ({ children }) => {
  let localScore = () => {
    if (typeof window !== `undefined`) {
      const score = Number(window.localStorage.getItem("score") || 0)
      return { score }
    }
    // if window is undefined (during the build or when a refresh occurs)
    else {
      return { score: "loading" }
    }
  }

  const [state, dispatch] = React.useReducer(scoreReducer, {score:0}, localScore)

  return (
    <ScoreContext.Provider value={{state, dispatch}}>
      {children}
    </ScoreContext.Provider>
  )
}
const useScore = () => React.useContext(ScoreContext)
export { ScoreProvider, useScore }