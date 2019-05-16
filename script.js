const recipeApp = {};

    // object within recipeApp object 
    recipeApp.recipeSuggestions = {
        meat: [
            {
                name: 'Meat Pasta',
                cookTime: 'under-30-minutes'
            },
            {
                name: 'Meat Burgers',
                cookTime: 'around-an-hour'
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
            
            // Creates an array with options for user's preferred protein
            const preference = recipeApp.recipeSuggestions[protein];
            // console.log(preference)
        
            // stores recipe options based on user input
            const userRecipes = [];
        
            // loop through user's preferred protein array 
            // looks for cook time that matches preference
            for (let i = 0; i <preference.length; i = i + 1) {
                // stores 
                const store = preference[i];
                // if users cook time matches object cook-time - push that to above variable 
                if (store.cookTime === cookTime) {
                    userRecipes.push(store)
                }
            }
            // prints result to page
            $('.results').html(`<h2>${userRecipes[0].name}</h2>`)
        })
    }

    recipeApp.smoothScroll = function() {
        $('a').smoothScroll({
            autoFocus: false,
            easing: 'swing',
            speed: '400',
        });
    }
    
    // ! Group these functions with parameters
    recipeApp.scrollOnRadio = function() {
        // on click of an input with the name of "protein", scroll down to the element with an id of #question-2
        $('input[name="protein"]').on('click', function(event){
            $('html, body').animate({
                scrollTop: $("#question-2").offset().top - 20
            }, 1000);
        })
        // on click of an input with the name of "cook-time"", scroll down to the element with an id of #submitAnswers
        $('input[name="cook-time"]').on('click', function (event) {
            // scrolls to the submit button
            $('html, body').animate({
                scrollTop: $("#submitAnswers").offset().top - 20
            }, 1000);
        })

        $('input[name="submit-form"]').on('click', function (event) {
            // scrolls to the submit button
            $('html, body').animate({
                scrollTop: $("#results").offset().top - 20
            }, 1000);
        })
    }

    recipeApp.init = function(){
        recipeApp.displayRecipe();
        recipeApp.smoothScroll();
        recipeApp.scrollOnRadio();
    }

    $(function() {
        recipeApp.init();
    })

