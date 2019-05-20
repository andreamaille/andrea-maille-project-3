// Create app namespace to hold all methods
const recipeApp = {};

    // Holds data for possible recipe suggestions
    recipeApp.recipeSuggestions = {
        meat: [
            {
                name: 'Shredded Chicken and Tomatillo Tacos with Queso Fresco',
                cookTime: 'under-30-minutes',
                image: 'assets/chicken-tacos.jpg',
                ingredients: [
                    '6 tomatillos, husked, washed, and grilled until blackened',
                    '1 serrano, grilled until blackened',
                    'Olive oil',
                    '½ red onion, coarsely chopped',
                    '2 cloves garlic, coarsely chopped',
                    '1 cup chopped fresh cilantro',
                    '1 lime, juiced',
                    '2 Tbsp honey',
                    '1 ½ cups shredded rotisserie chicken',
                    '8 blue corn tortillas',
                    '1 cup crumbled queso fresco'
                ],
                directions: [
                    'Preheat the grill to medium.Add the blackened tomatillos and serrano to a small sauté pan and briefly sauté in a little olive oil on the grates of the grill',
                    'Place the tomatillos, serrano, onion, garlic, cilantro, lime juice, and honey in a blender and blend until smooth.Place the tomatillo mixture in a large sauté pan and place on the grates of the grill.Bring the mixture to a simmer, add the chicken, and heat through.',
                    'Place the tortillas on the grill, and grill for 20 seconds on each side.Spoon the chicken mixture into the tortillas and top with a few tablespoons of queso fresco.Fold the tortillas in half serve immediately.'
                ],
                recipeSource:'http://www.foodnetwork.ca/recipe/shredded-chicken-and-tomatillo-tacos-with-queso-fresco/15862/#GKxXxfrf3rCmwGQo.99'
            },
            {
                name: 'Simple Perfect Enchiladas',
                cookTime: 'around-an-hour',
                image: 'assets/enchiladas.jpg',
                ingredients:[
                    '2 tablespoons canola oil',
                    '2 tablespoons all-purpose flour',
                    'One 28-ounce can enchilada or Mexican red sauce',
                    '2 cups chicken broth',
                    '1 teaspoon salt',
                    '1/2 teaspoon black pepper',
                    '1 pound ground beef',
                    '1 medium onion, finely chopped',
                    'Canola oil, for frying',
                    '10 to 14 corn tortillas',
                    'Two 4-ounce cans diced green chilies',
                    '1 cup chopped green onions',
                    '1/2 cup chopped black olives',
                    '3 cups grated sharp Cheddar cheese',
                    'Cilantro, for garnish'
                ],
                directions: [
                    'In a saucepan over medium-low heat, combine the canola oil and flour. Whisk together and allow to bubble for 1 minute. Pour in the red sauce, chicken broth, salt and pepper. Bring to a boil. Reduce the heat and simmer while you prepare the other ingredients.',
                    'While the sauce is simmering, brown the ground beef with the onions in a large skillet over medium-high heat. Drain the fat, add the salt and stir to combine. Turn off the heat and set aside.',
                    'In a small skillet over medium heat, heat some canola oil. Lightly fry the tortillas just until soft. Do not crisp. Drain on a paper towel-lined plate. Repeat until all the tortillas have been fried.',
                    'Preheat the oven to 350 degrees F.',
                    'Spread 1/2 cup of the sauce in the bottom of a 9- by 13-inch baking dish. Next, one at a time, dip each tortilla into the sauce. Set the sauce-soaked tortilla on a plate. Place on some of the meat mixture, chilies, green onions and black olives. Top with a generous portion of grated Cheddar. Roll up the tortilla to contain the filling inside.',
                    'Place the tortilla seam side down in the baking dish. Repeat with the rest of the tortillas and pour the remaining sauce over the top. End with a generous sprinkling of cheese and any other bits of chiles, green onions or olives you have left over from the filling.',
                    'Bake the enchiladas for 20 minutes, or until bubbly. Sprinkle chopped cilantro over the top and serve.'
                ],
                recipeSource:'https://www.foodnetwork.com/recipes/ree-drummond/simple-perfect-enchiladas-recipe0-2043114'
            },
            {
                name: 'Beef Pho',
                cookTime: 'long-cook-time',
                image:'assets/beef-pho.jpg',
                ingredients:[
                    '3 pounds beef bones (preferable beef knuckle bones)',
                    '2 pounds oxtail, cut 1-inch thick',
                    '1 1/2 pounds beef chuck',
                    'Kosher salt',
                    '1 large unpeeled yellow onion, cut in half lengthwise through the root',
                    '8 ounces unpeeled ginger, cut in half lengthwise',
                    '1/4 cup fish sauce',
                    '4 whole cloves',
                    '4 whole star anise pods',
                    '1 cinnamon stick',
                    '1 teaspoon whole black peppercorns',
                    '1 ounce yellow rock sugar or 2 tablespoons granulated sugar',
                    'One 8-ounce package dried rice vermicelli',
                    '1 pound thinly sliced eye of round beef',
                    '1/4 cup chopped fresh cilantro',
                    '1/4 cup thinly sliced onion',
                    '1/2 cup bean sprouts',
                    '1/2 cup Thai basil leaves',
                    '2 limes, cut into wedges',
                    'Sriracha or sambal hot sauce',
                    'Hoisin sauce, for serving'
                ],
                directions:[
                    'Put the beef bones, oxtail, beef chuck and 1 tablespoon salt in a large pot and add cold water to cover by 2 inches. Bring to a boil over high heat and boil vigorously until the surface of the water is foamy, about 10 minutes. Drain the bones and meat in a colander (discarding the liquid) and rinse well with cold water. Clean the inside of the pot, put the blanched bones and meat back into it and add enough cold water to cover by 2 inches. Bring to a boil over high heat then reduce to medium-low and simmer for 15 minutes, skimming and discarding any foam that rises to the surface.',
                    'Meanwhile char the onion and ginger over an open flame until well blackened on both sides. (Alternatively you may place them on a foil-lined baking sheet and broil on high, turning once, until well charred, about 10 minutes.) Add the onion, ginger, fish sauce, cloves, star anise, cinnamon, black peppercorns and rock sugar to the pot and continue to simmer. Skim the surface of the soup often to remove the fat and foam that rises. If necessary, add water during cooking to keep the bones submerged. Cook until a paring knife pierces the chuck easily and comes out with little resistance and the oxtail meat pulls easily away from the bone, 3 1/2 to 4 hours.',
                    'Remove the meat and bones from the pot with a slotted spoon or spider to a rimmed baking sheet. Discard the larger bones and let the chuck and oxtail cool enough to handle, 10 minutes. Meanwhile pour the broth through a fine-mesh strainer into a clean pot and keep hot over medium-low heat. (You should have about 12 cups of broth.) Put the rice noodles into a large bowl and cover with hot water. Let the noodles soak until soft, 10 to 15 minutes, then drain and divide between 6 serving bowls.',
                    'Pick the oxtail meat from the bones and divide it between the bowls. Thinly slice the beef chuck across the grain of the meat and divide it between the bowls. Divide the sliced eye of round between the bowls and then ladle the hot broth over. Top with the cilantro and onion and serve with the bean sprouts, basil, lime, sriracha and hoisin on the side.'
                ],
                recipeSource:'https://www.foodnetwork.com/recipes/food-network-kitchen/beef-pho-3630582'
            }
        ],

        vegetarian: [
            {
                name: 'Three Bean Chili',
                cookTime: 'under-30-minutes',
                image: 'assets/chili.jpg',
                ingredients: [
                    '2 tablespoons (2 turns around the pan) olive or vegetable oil',
                    '1 medium yellow skinned onion, chopped',
                    '1 large red pepper, seeded and chopped',
                    '1 large green pepper, seeded and chopped',
                    '1 large jalapeno pepper, seeded and chopped',
                    '4 cloves garlic, crushed and chopped',
                    '1 cup pale beer or vegetable stock/broth',
                    '1 (32- ounce) can crushed tomatoes',
                    '1 (14-ounce) can black beans',
                    '1 (14-ounce) can dark red kidney beans',
                    '1 tablespoon ground cumin',
                    '2 tablespoons chili powder',
                    '1 tablespoon cayenne hot pepper sauce, several drops',
                    '1 teaspoon coarse salt',
                    '1 cup spicy vegetarian refried beans',
                    '8 ounces (2 cups shredded) spicy Monterey Jack or smoked cheddar',
                    'Chopped scallions, whites and greens',
                    'Diced fresh seeded plum tomato',
                    'Blue and red corn tortilla chips or black bean tortilla chips, for dipping'
                ],
                directions: [
                    'Over moderate heat, add oil to a deep pot and combine onion, peppers, and garlic. Saute for 3 to 5 minutes to soften vegetables. Deglaze pan with beer or broth, add tomatoes, black beans, red kidney beans, and stirring to combine.',
                    'Season chili with cumin, chili powder, hot sauce, and salt. Thicken chili by stirring in refried beans. Simmer over low heat about 5 to 10 minutes longer, then serve up bowls of chili and top with shredded cheese, scallions, and tomatoes. Place bowls on charger plates piled with assorted tortilla chips.'
                ],
                recipeSource: 'https://www.foodnetwork.com/recipes/rachael-ray/veg-head-three-bean-chili-recipe-1940118'
            },
            {
                name: 'Vegetarian Pot Pie',
                cookTime: 'around-an-hour',
                image: 'assets/vegetarian-pot-pie.jpg',
                ingredients: [
                    '1 tablespoon unsalted butter',
                    '2 small heads fennel, finely chopped (about 3 cups)',
                    '1/2 medium yellow onion, finely chopped',
                    '2 medium carrots, peeled and finely chopped (about 2/3 cup)',
                    '12 ounces white button mushrooms, sliced (about 5 cups)',
                    '1 small russet potato, peeled and diced small (about 2 1/2 cups)',
                    '1/4 cup all-purpose flour',
                    '1 cup low-sodium mushroom broth',
                    '1 cup whole milk',
                    '1 cup frozen baby green peas',
                    '1/4 cup thinly sliced fresh chives',
                    '1/4 cup parsley',
                    '1 tablespoon white vinegar',
                    '1 large egg yolk',
                    '7 ounces store-bought puff pastry or pie dough, defrosted if frozen'
                ],
                directions: [
                    'Heat the oven to 400 degrees F and arrange a rack in the middle.',
                    'Melt butter over medium heat in a 3- to 4-quart Dutch oven or heavy bottomed saucepan. When it foams, add fennel, onions, and carrots, and cook until just soft and onions are translucent, about 2 minutes. Add mushrooms and potato, season well with salt and freshly ground black pepper, and stir to coat. Cook, stirring rarely, until mushrooms have let off water and are shrunken, about 6 minutes.',
                    'Sprinkle flour over vegetables, stir to coat, and cook until raw flavor is gone, about 1 to 2 minutes. Carefully add broth and milk, stirring constantly until mixture is smooth. Bring to a simmer over medium heat and cook until slightly thickened, about 5 minutes.',
                    'Remove from heat, add peas, herbs, and vinegar, and stir to coat. Season well with salt and freshly ground black pepper. Turn filling into an 8 by 8-inch baking dish.',
                    'Whisk egg together with 2 teaspoons water and a pinch of salt until evenly mixed. Set aside.',
                    'With kitchen shears, cut dough to fit over the baking dish. Place dough over filling and tuck into the edges of the dish. Brush dough with egg wash and cut slits in the top to vent. Place on a baking sheet and bake until crust is golden brown and mixture is bubbling, about 25 to 30 minutes. Let sit at least 5 minutes before serving.'
                ],
                recipeSource: 'https://www.foodnetwork.com/recipes/aida-mollenkamp/vegetarian-pot-pie-recipe-1945008'
            },
            {
                name: 'Brie and Broccoli Quiche',
                cookTime: 'long-cook-time',
                image: 'assets/vegetarian-pot-pie.jpg',
                ingredients: [
                    '4 yellow onions, sliced',
                    '4 tablespoons (1/2 stick) salted butter',
                    'Kosher salt and freshly ground black pepper',
                    '1 cup chopped broccoli',
                    '1 pie crust, homemade or store-bought, recipe follows',
                    'All-purpose flour, for rolling',
                    '8 ounces Brie',
                    '1 1/2 cups half-and-half',
                    '8 large eggs',
                    '1 tablespoon finely chopped chives',
                    '3 cups all-purpose flour',
                    '3/4 cup vegetable shortening',
                    '1 1/2 sticks (12 tablespoons) salted butter',
                    '1 large egg',
                    '5 tablespoons cold water',
                    '1 tablespoon white vinegar',
                    '1 teaspoon kosher salt'
                ],
                directions: [
                    'Fry the onions in the butter in a large skillet over medium-low heat, stirring occasionally, until the onions are deep golden brown, 15 to 20 minutes (maybe longer). Set aside to cool.',
                    'Preheat the oven to 400 degrees F.',
                    'Bring a pot of water to a boil and salt generously; prepare an ice water bath. Blanch the broccoli in the boiling water for 1 minute, then remove it to the bowl of ice water to stop the cooking and set the color. Remove it from the water to drain.',
                    'Roll out the pie crust on a floured surface and press into a deep fluted tart pan with a removable bottom (or a deep-dish pie pan). Lay the onions over the base of the crust, then lay the brocolli pieces on top of the onions. Chop the Brie and lay that in the crust too.',
                    'Whip the half-and-half, eggs and some salt and pepper in a large bowl, then pour it into the crust. Sprinkle the chives on top.',
                    'Place the pan on a rimmed baking sheet, cover lightly with aluminum foil and bake for 40 to 45 minutes. Remove the foil and continue baking until the quiche is set and the crust is golden brown, another 10 to 15 minutes. (The quiche will still seem slightly loose, but will continue to set once removed from the oven.) Let the quiche sit for 10 to 15 minutes, then, if using a tart pan, remove the quiche from the pan. Cut into slices with a sharp serrated knife and serve.',
                    'Put the flour in a large bowl. With a pastry cutter, gradually work the shortening and butter into the flour until it resembles coarse meal, 3 to 4 minutes. In a small bowl, beat the egg with a fork and pour it into the flour mixture. Add the cold water, white vinegar and salt. Stir gently to combine.',
                    'Form the dough into 2 evenly sized balls and place each ball into a gallon food storage bag. Using a rolling pin, slightly flatten each ball of dough (to about 1/2 inch thick) to make rolling easier later. Seal the bags and place them in the freezer until you need them. (If you will be using them immediately, it\'s still a good idea to put them in the freezer for 15 to 20 minutes to chill.) When you are ready to use the dough to make a crust, remove from the freezer and allow to thaw for 15 minutes.'
                ],
                recipeSource: 'https://www.foodnetwork.com/recipes/ree-drummond/brie-and-broccoli-quiche-3334485'
            }
        ],

        fish: [
            {
                name: 'Coconut-Curry Mussels',
                cookTime: 'under-30-minutes',
                image: 'assets/coconut-mussels.jpg',
                ingredients: [
                    '2 stalks lemongrass',
                    '4 tablespoons vegetable oil',
                    '2 medium red onions, thinly sliced',
                    '6 cloves garlic, thinly sliced',
                    '6 tablespoons chopped peeled ginger',
                    '1/4 cup green curry paste',
                    '2 15-ounce cans coconut milk',
                    '4 tablespoons fish sauce',
                    '6 pounds mussels, scrubbed and debearded',
                    '4 limes, halved',
                    '1 cup chopped fresh cilantro',
                    'Crusty bread, for serving (optional)'
                ],
                directions: [
                    'Trim the lemongrass, leaving 6 inches at the root end; discard the tops. Smash the stalks with the flat side of a knife and cut into 1-inch pieces.',
                    'Heat 2 tablespoons vegetable oil in each of 2 large pots over medium-high heat. Add 1 sliced onion to each and cook, stirring, until soft, about 5 minutes. Add half each of the garlic, lemongrass, ginger and curry paste to each pot and cook, stirring, until golden, about 2 minutes.',
                    'Add 1 can coconut milk, 2 tablespoons fish sauce and 1/4 cup water to each pot and bring to a simmer. Divide the mussels between the pots; cover and cook, stirring occasionally, until the mussels open, about 8 minutes. (Discard any that do not open.) Add the juice of 2 limes to each pot, then add the lime halves. Stir 1/2 cup cilantro into each. Serve with bread, if desired.'
                ],
                recipeSource: 'https://www.foodnetwork.com/recipes/food-network-kitchen/coconut-curry-mussels-recipe-1973842'
            },
            {
                name: 'Seafood Paella',
                cookTime:'around-an-hour',
                image: 'assets/seafood-paella.jpg',
                ingredients: [
                    '1/2 teaspoon saffron threads',
                    '1 tablespoon lemon juice',
                    '1 pound large shrimp (21/25 count), peeled and deveined, tail on',
                    '2 teaspoons smoked paprika',
                    'Kosher salt and freshly ground black pepper',
                    '1/4 cup olive oil',
                    '3 roasted red peppers, cut into small dice',
                    '1 yellow onion, cut into small dice',
                    '1/2 cup chopped fresh parsley',
                    '1 bay leaf',
                    '4 cloves garlic, minced',
                    '1 teaspoon cumin',
                    '3 cups paella rice',
                    '1 cup dry white wine',
                    'One 28-ounce can diced tomatoes',
                    '4 cups chicken stock, warm',
                    '12 littleneck clams, scrubbed',
                    '12 mussels, cleaned',
                    '3 lobster tails, halved lengthwise',
                    '1/2 cup frozen sweet peas, thawed',
                    'Lemon wedges, for serving'
                ],
                directions: [
                    'Preheat the oven to 400 degrees F.',
                    'Combine the saffron and lemon juice in a small bowl and crush the threads with the back of a spoon until the mixture turns bright yellow. Let sit for 5 minutes.',
                    'Toss the shrimp with 1 teaspoon of the smoked paprika, 1 teaspoon salt and 1/2 teaspoon pepper. Set aside.',
                    'Heat the olive oil in a Dutch oven over medium-high heat. When hot, add the roasted peppers, onion, parsley and bay leaf. Saute until the onion is translucent, 5 to 8 minutes. Add the garlic, cumin and the remaining 1 teaspoon smoked paprika; saute until fragrant, 30 seconds. Add the rice and toast until slightly browned, 2 to 3 minutes.',
                    'Pour in the wine, scrapping up any browned bits from the bottom of the pan. Cook, stirring, until the wine is fully absorbed. Pour in the tomatoes, stock, saffron mixture, 1 teaspoon salt and 1/2 teaspoon pepper; stir until combined. Bring to a simmer, then nestle the clams into the rice. Cover and let simmer for 5 minutes. Add the mussels, shrimp and lobster. Cover and transfer to the oven for 25 to 30 minutes, until the clams and mussels are opened.',
                    'Place the pot back on the stovetop over medium-high heat. Add the peas. Cook until the bottom of the rice forms a crust, about 5 minutes. Serve the paella with lemon wedges.'
                ],
                recipeSource: 'https://www.foodnetwork.com/recipes/seafood-paella-3589723'
            },
            {
                name: 'Salmon with Brown Sugar and Mustard Glaze',
                cookTime: 'long-cook-time',
                image: 'assets/salmon.jpg',
                ingredients: [
                    '3 tablespoons light brown sugar',
                    '1 tablespoon honey',
                    '2 tablespoons butter',
                    '1/4 cup Dijon mustard',
                    '2 tablespoons soy sauce',
                    '2 tablespoons olive oil',
                    '1 tablespoon finely grated ginger',
                    'Vegetable oil',
                    'Salt and freshly ground black pepper',
                    '8 salmon fillets, 6 ounces each'
                ],
                directions: [
                    'On the side burner, melt the brown sugar, honey and butter in a small saute pan over medium-high heat. Remove from the heat and whisk in the mustard, soy sauce, olive oil and ginger. Let cool.',
                    'Preheat grill to medium heat. Brush salmon with vegetable oil and season with salt and pepper to taste. Place the salmon skin side down on the grill. Coat the flesh of the salmon fillets with the brown sugar mixture. Grill for 6 to 8 minutes to medium doneness, turning once after 5 to 6 minutes.'
                ],
                recipeSource: 'https://www.foodnetwork.com/recipes/bobby-flay/salmon-with-brown-sugar-and-mustard-glaze-recipe-1926380'
            }
        ]
    };

    // Generates recipe based on user input
    recipeApp.displayRecipe = function() {
        $('.submit-form').on('click', function(event){
            // prevents default behaviour of submit button
            event.preventDefault();

            // stores user protein choice
            const protein = $('input[name=protein]:checked').val();

            // stores user cook time choice 
            const cookTime = $('input[name=cook-time]:checked').val();


            // If user does not complete form correctly, prints error message to page
            let answerAllQuestions = true;
            
            if (protein === undefined || cookTime === undefined){
                answerAllQuestions = false;
                $('.section--user-results, .error-message').removeClass('hide');
                $('.recipe-title, .recipe-aside, .recipe-details, .restart-quiz,.skip-link').addClass('hide');
            }

            // binds restart button to click event in order to reload quiz and take user back to first question 
            $('.restart').click(function () {
                location.hash = '#question-protein';
                location.reload(true);
            }); 
            
            // If user completes form correctly, prints recipe to page
            if (answerAllQuestions === true){
                // stores recipe that matches user's selection
                const userRecipes = [];

                // stores user's preferred protein option
                const preference = recipeApp.recipeSuggestions[protein];

                // loops through selected protein array and stores cook time that matches user's selection
                for (let i = 0; i < preference.length; i = i + 1) {
                    const store = preference[i];
                    if (store.cookTime === cookTime) {
                        userRecipes.push(store)
                    }
                }
                
                // Stores first recipe in userRecipes array - there will be only one possible recipe that will match user's preferences
                const recipe = userRecipes[0];

                // Prints to page, the recipe details that are stored in recipe array
                const $name = $(`<h2>${recipe.name}</h2>`);
                // these images are purely decorative so no alt text is needed.
                const $image = $(`<img class='result-recipe-image'>`).attr('src', recipe.image);
                
                const $recipeSource = $(`<p><a href="${recipe.recipeSource}" class="read-more">Read more about this recipe</a></p>`);

                // Clears any recipe details that may have been printed to the page previously before appending new recipe details
                $('.recipe-title, .recipe-image, .recipe-credit, .list-ingredients, .recipe-directions').empty();

                $('.recipe-title').append($name);
                $('.recipe-image').append($image);
                $('.recipe-credit').append($recipeSource);

                const recipeIngredients = recipe.ingredients;
                recipeIngredients.forEach(ingredient => {
                    const $ingredient = $(`<li>${ingredient}</li>`);
                    $('.list-ingredients').append($ingredient);
                })

                const recipeDirections = recipe.directions;
                recipeDirections.forEach(direction => {
                    const $direction = $(`<li>${direction}</li>`);
                    $('.recipe-directions').append($direction);
                })
                
                // show section that contains recipe details
                $('.section--user-results').removeClass('hide');
            }
        })
    }

    recipeApp.smoothScroll = function() {
        $('.start-quiz').smoothScroll({
            autoFocus: false,
            easing: 'swing',
            speed: '400',
        });
    },
    
    // on click of buttons, page scrolls to specific id
    recipeApp.mainScroll = function() {
        const scrollDown = function (startPoint, EndPoint) {
            $(startPoint).on('click', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $(EndPoint).offset().top - 20
                }, 1000);
            })
        }
        scrollDown(`input[name = "next-1"]`,`#question-2`);
        scrollDown(`input[name = "next-2"]`, `#submitAnswers`);
        scrollDown(`input[name = "submit-form"]`, `#user-results`);
    },

    recipeApp.init = function(){
        recipeApp.displayRecipe();
        recipeApp.smoothScroll();
        recipeApp.mainScroll();
    }
    
    $(function() {
        recipeApp.init();
    })
