/////////////////////////////////
// DB CONNECTION
/////////////////////////////////
const mongoose = require("./dbconn");

/////////////////////////////////
// IMPORT MODELS
/////////////////////////////////

//////////////////////////////////
// DATA TO SEED
//////////////////////////////////
const recipeArr = [
    {
        username: "oatmeal cookies",
        category: "dessert",
        img: "https://www.veganricha.com/wp-content/uploads/2019/09/Tahini-Oatmeal-Cookies-veganricha-7313.jpg",
        description: "Before you begin - Preheat the oven to 350 degrees. Grease Two large cookie sheets.", 
        time: "8 to 12 minutes",
        servings: "40 cookies"   
    },
    {
        username: "carrot-cake thumbprint cookies",
        category: "dessert",
        img: "https://assets.marthastewart.com/styles/wmax-750/d26/carrot-cookie-0014-d112652/carrot-cookie-0014-d112652_horiz.jpg?itok=eIxRN8vA",
        description: "1 stick unsalted melted butter, 1/2 stick room temp butter, 1/3 cup packed light-brown sugar, 1/3 cup granulated sugar, 1 large egg yolk at room temp, 1 cup of all-purpose flour, 1/2 teaspoon ground ginger, 1/2 teaspoon of ground cinnamon, 3/4 teaspoon coarse salt, 3/4 cup old-fashioned rolled oats, 3/4 cup packed finely grated carrots or about 3 large carrots, 1/4 cup golden raisins chopped, 3/4 cup pecans finely chopped, 1/4 cup confectioners' sugar, 2 ounces fresh goat cheese or cream cheese at room temp, 1 1/2 teaspoons apricot jam. Preheat oven to 350 degrees. In a large bowl, whisk together melted butter, brown and granulated sugars, and yolk. In another bowl, whisk together flour, ginger, cinnamon, and salt. Stir flour mixture into butter mixutre to combine. Mix in oats, carrots, and raisins. Cover and refrigerate for 30 minutes. Roll dough into 1 1/2 inch balls and roll the balls in pecans to coat. Space 2 inches apart on parchment-lined baking sheets. Bake for 10 minutes. Remove from the oven and press and indentation into the center of each cookie with the end of a wooden spoon. Bake until golden brown on bottoms, 10 to 12 minutes more. Transfer cookies to a wire rack and let cool. In a bowl, beat the remaining 1/2 stick of butter and confectioners' sugar on medium until smooth. Beat in goat cheese until just combined. Swirl in jam. Fill cneter of each cookie with goat-cheese mixture and serve!",
        time: "1 hour and 45 minutes",
        servings: "40 cookies"   
    }
    
   

]
//////////////////////////////////
// SEED THE DATA
//////////////////////////////////