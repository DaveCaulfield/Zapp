# Testing
Testing ensured that the zapp game appearance, responsiveness and funcionality worked as expected. It ensured that the user experience is enjoyable whilst using mobile, tablet, laptop or desktop device and their browser of choice.

## Code Vaildation
- The code for the zapp game has been tested using [W3C HTML Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and [JShint](https://jshint.com/).
-  There were some minor fixes required after validator testing.
- HTML validator returned warnings advising sections lack headings.

![screen shot html warnings](/docs/readme-images/homepage-html-warnings.png)


- This was corrected by using divs as there were no headings to be used in these sections of the game. 

![screen shot html validation](/docs/readme-images/homepage-html-validator.png)


- CSS validator returned no errors.

![screen css validation](/docs/readme-images/css-validator.png)


  Back to [README.md](README.md)


 - Javascript validation tests were carried out with JShint
 - Minor errors including missing semi-colons were flagged and resolved leaving no errors in validation results.
 - There is one warning notification of "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics." 
 - This was researched and will be revisited for future releases as it is currently outside the scope of the JS essentials course and doesn't affect the functionality of the game.
 
  Back to [README.md](README.md)


## Responsiveness Testing
- Responsivness was tested using [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) and [Responsive design checker](https://responsivedesignchecker.com/). 
    - Devices tested using these tools were Moto G4, Galaxy S5, iPhone5, iPhone6/7 iPad, iPad pro, Display < 1200px, Display > 1200px
    - Media queries were added to ensure responsiveness for smalll screens. 
    - Max width was set to ensure site displayed ok on extra large screen and prevent overflow on small screens.
    - After adding media queries the site was found to be responsive for mobile, tablet, laptop and desktop screens.


![respnsive large screen ](/docs/readme-images/responsive-large.png)

![respnsive tablet screen ](/docs/readme-images/responsive-tablet.png)

![respnsive mobile screen ](/docs/readme-images/responsive-small.png)

 Back to [README.md](README.md)


 ## Physical device testing
  - Physical devices used in testing were iPhone6, iPhone11, iPad, Laptop and extra large monitor.
  - Apple devices displayed discrepencies in colour between button and anchor element links even though the same color greenyellow was applied to both.

  ![iphone screen shot ](/docs/readme-images/testing-apple-styling.png)

  - A button feature was implemented to navigate the user to the home page instead of a link.

  ![iphone screen shot ](/docs/readme-images/iphone-buttons.png)
  

## Browser Compatability
- The site was tested using Google Chrome, Microsoft Edge, Mozilla Firefox and Safari web browsers. 
- Testing checked for:
    - Rendering/Appearance
    - Responsiveness
    - Functionality 

Back to [README.md](README.md)


# Known Bugs

## Resolved
- Testing the game uncovered an issue whereby pressing the play button multiple times ran multiple game loops. 
- This caused the timer to countdown at speed due to the extra presses introducing extra game loopcounts.
- The issue was researched and an if statement was applied to the startGame function to only run if there was not a loopcount already running.
- Applying this code worked and the game runs one full game loop at a time despite multiple presses of the play button. 
- The concept of testing for and defending an issue like this came from Dave Horrocks webinar at Code Institute.
- The solution came from watching a video lecture on [itprotv](https://www.itpro.tv/)  

## Resolved
- Testing highlighted that the audio mute feature muted the game music that plays during the game but not the sound effects.
- The code was revisited and ammended to include all audio sound effects in the mute feature.
- Further testing found that the game over music still played after the mute feature was selected.
- The function call for the game over music was moved and an if statement was added to check if mute was enabled.
- These fixes improve the game experience for the user.

    Back to [README.md](README.md)

 ## Resolved
- Testing also highlighted that the timer ran into negative numbers.
- The code was revisited and ammended to include an if statement to contain the count between 45 and 0.
- This improves the game experience for the user.

    Back to [README.md](README.md)


## Unresolved
- The UFO and Aliens flash on screen for 1 second at a time. There is a bug in the game where if a player is fast enough it is possible to click the image and score more than once.
- It is not a very noticeable bug to the user and doesn't detract from the user experience. The game still functions in accordance to the rules.
- This will be revisted in the next release of the game. 


    ## Lighthouse
- [lighthouse](https://developers.google.com/web/tools/lighthouse) was used to test the site for performance, accessibility, best bractices and SEO.

    - Performance - How fast it takes a webpage to load.
    - Accessibility - How accessible a website is (users might need a screen reader).
    - Best Practices - How the site conforms to coding best practices.
    - SEO - Search engine optimisation. How optimised the site is for search engine results.


![Lighthouse screen shot](/docs/readme-images/lighthouse.png)

Back to [README.md](README.md)