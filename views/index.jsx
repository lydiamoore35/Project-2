const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Create Your Cook">
        <h2>Recipe of the Day</h2>
        <h4></h4>
      </Layout>
    );
  }
}

module.exports = Index;
