import * as React from "react"

import Layout from "../shared/Layout"
import Spinner from "../shared/Spinner"

const withRouteData = loadData => Component => {
  class WithRouteData extends React.Component {
    state = {
      loading: true,
      data: null,
      error: null
    }

    componentDidMount() {
      loadData()
        .then(result => {
          this.setState({ data: result, loading: false })
        })
        .catch(error => {
          this.setState({ data: null, loading: false, error })
        })
    }

    render() {
      const { loading, data, error } = this.state
      if (loading) {
        return (
          <Layout>
            <Spinner />
          </Layout>
        )
      }
      if (!loading && error) {
        return <p>{error}</p>
      }
      return <Component initialData={data} />
    }
  }
  return WithRouteData
}

export default withRouteData
