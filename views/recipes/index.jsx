const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {recipes} = this.props
    return (
      <Layout title="My Recipes">
        <h1> My Recipes </h1>
        <a href="/recipe/new">
          <button>New Recipe</button></a>
        {recipes.map((recipe) => (
          <h3>{recipe.recipe}</h3>))}
      </Layout>
    );
  }
}

module.exports = Index;
