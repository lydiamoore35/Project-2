const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Kids Cook">
        <h2>Recipe of the Day</h2>
      </Layout>
    );
  }
}

module.exports = Index;
