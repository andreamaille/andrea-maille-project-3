const recipeApp = {};

    // object within recipeApp object 
    recipeApp.recipeSuggestions = {
        meat: [
            {
                name: 'Shredded Chicken and Tomatillo Tacos with Queso Fresco',
                cookTime: 'under-30-minutes',
                image: 'assets/chicken-tacos.jpg',
                ingredients: [
                    "6 tomatillos, husked, washed, and grilled until blackened",
                    "1 serrano, grilled until blackened",
                    "Olive oil",
                    "½ red onion, coarsely chopped",
                    "2 cloves garlic, coarsely chopped",
                    "1 cup chopped fresh cilantro",
                    "1 lime, juiced",
                    "2 Tbsp honey",
                    "1 ½ cups shredded rotisserie chicken",
                    "8 blue corn tortillas",
                    "1 cup crumbled queso fresco"
                ],
                directions: [
                    "Preheat the grill to medium.Add the blackened tomatillos and serrano to a small sauté pan and briefly sauté in a little olive oil on the grates of the grill",
                    "Place the tomatillos, serrano, onion, garlic, cilantro, lime juice, and honey in a blender and blend until smooth.Place the tomatillo mixture in a large sauté pan and place on the grates of the grill.Bring the mixture to a simmer, add the chicken, and heat through.",
                    "Place the tortillas on the grill, and grill for 20 seconds on each side.Spoon the chicken mixture into the tortillas and top with a few tablespoons of queso fresco.Fold the tortillas in half serve immediately."
                ],
                recipeSource:'http://www.foodnetwork.ca/recipe/shredded-chicken-and-tomatillo-tacos-with-queso-fresco/15862/#GKxXxfrf3rCmwGQo.99'
            },
            {
                name: 'Simple Perfect Enchiladas',
                cookTime: 'around-an-hour',
                ingredients:[],
                directions: [],
                recipeSource:''
            },
            {
                name: 'Meat Tacos',
                cookTime: 'long-cook-time'
            }
    
        ],

        vegetarian: [
            {
                name: 'Veggie Pasta',
                cookTime: 'under-30-minutes'
            },
            {
                name: 'Veggie Burgers',
                cookTime: 'around-an-hour'
            },
            {
                name: 'Veggie Tacos',
                cookTime: 'long-cook-time'
            }
        ],

        fish: [
            {
                name: 'Fish Pasta',
                cookTime: 'under-30-minutes'
            },
            {
                name: 'Fish Burgers',
                cookTime:'around-an-hour'
            },
            {
                name: 'Fish Tacos',
                cookTime: 'long-cook-time'
            }
        ]
    };

    recipeApp.displayRecipe = function() {
        $('.submit-form').on('click', function(event){
            event.preventDefault();

            // store the users protein choice
            const protein = $('input[name=protein]:checked').val();
            // store the users cook time choice 
            const cookTime = $('input[name=cook-time]:checked').val();

            // Error Handling 
            let answerAllQuestions = true;
            
            if (protein === undefined || cookTime === undefined){
                console.log(`you didnt answer`);
                answerAllQuestions = false;
                return;
            }

            if (answerAllQuestions === true){
                const preference = recipeApp.recipeSuggestions[protein];
                // stores recipe options based on user input
                const userRecipes = [];
                console.log(userRecipes)
                // loop through user's preferred protein array 
                // looks for cook time that matches preference
                for (let i = 0; i < preference.length; i = i + 1) {
                    // stores 
                    const store = preference[i];
                    // if users cook time matches object cook-time - push that to above variable 
                    if (store.cookTime === cookTime) {
                        userRecipes.push(store)
                    }
                }

                const recipe = userRecipes[0];

                // print to page . . .
                const $name = $(`<h2>${recipe.name}</h2>`);
                const $image = $(`<img>`).attr('src', recipe.image);
                const $recipeSource = $(`<p>Read more about this recipe <a href="${recipe.recipeSource}">here</a></p>`);

                $('.recipe-title').empty();
                $('.recipe-title').append($name);

                $('.recipe-image').empty();
                $('.recipe-image').append($image);

                $('.recipe-credit').empty();
                $('.recipe-credit').append($recipeSource);

                // printing arrays to the page

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
                
                $('.section-recipe-results').removeClass('hide');
            }
            // Creates an array with options for user's preferred protein

            // stores the user recipe that matches user preferences 


        })
    }

    // EMPTY VALUE TO CLEAR

    recipeApp.smoothScroll = function() {
        $('.start-quiz').smoothScroll({
            autoFocus: false,
            easing: 'swing',
            speed: '400',
        });
    },
    
    recipeApp.mainScroll = function() {
        const scrollDown = function (startPoint, EndPoint) {
            $(startPoint).on('click', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $(EndPoint).offset().top - 20
                }, 1000);
            })
        }
        scrollDown(`input[name = "next"]`,`#question-2`);
        scrollDown(`input[name = "next2"]`, `#submitAnswers`);
        scrollDown(`input[name = "submit-form"]`, `#user-recipe-result`);
    },



    recipeApp.init = function(){
        recipeApp.displayRecipe();
        recipeApp.smoothScroll();
        recipeApp.mainScroll();
    }

    $(function() {
        recipeApp.init();
    })
















    //JUST IN CASE!
        // // ! Group these functions with parameters
    // recipeApp.scrollOnRadio = function() {
    //     // on click of an input with the name of "protein", scroll down to the element with an id of #question-2
    //     $('input[name="next"]').on('click', function(event){
    //         event.preventDefault();
    //         $('html, body').animate({
    //             scrollTop: $("#question-2").offset().top - 20
    //         }, 1000);
    //     })
    //     // on click of an input with the name of "cook-time"", scroll down to the element with an id of #submitAnswers
    //     $('input[name="next2"]').on('click', function (event) {
    //         // scrolls to the submit button
    //         event.preventDefault();
    //         $('html, body').animate({
    //             scrollTop: $("#submitAnswers").offset().top - 20
    //         }, 1000);
    //     })

    //     $('input[name="submit-form"]').on('click', function (event) {
    //         // scrolls to the submit button
    //         $('html, body').animate({
    //             scrollTop: $("#user-recipe-result").offset().top - 20
    //         }, 1000);
    //     })
    // }