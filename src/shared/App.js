import * as React from "react"

import Layout from "./components/Layout"

class App extends React.PureComponent {
  state = {
    message: "Hello, World!"
  }

  showMessage = () => {
    const { message } = this.state
    alert(message)
  }

  render() {
    return (
      <Layout>
        <h1>
          A bare bones React boilerplate, featuring Webpack 4, React, Redux,
          Jest, and Babel 7
        </h1>
        <button type="button" className="button" onClick={this.showMessage}>
          Show me a message
        </button>
      </Layout>
    )
  }
}

export default App
