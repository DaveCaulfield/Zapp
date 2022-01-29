# Testing
Testing ensured that the zapp game appearance, responsiveness and funcionality worked as expected. It ensures that the user experience is enjoyable whilst using mobile, tablet laptop or desktop device and their browser of choice.

## Code Vaildation
- The code for the zapp game has been tested using [W3C HTML Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and [JShint}](https://jshint.com/).
-  There were some minor fixes required after validator testing.
- HTML validator returned warnings regargding sections lack headings.

![screen shot html warnings](/docs/readme-images/homepage-html-warnings.png)


- This was corrected by using divs as there were no headings to be used in these sections. 

![screen shot html validation](/docs/readme-images/homepage-html-validator.png)


- CSS validator returned no errors.

![screen css validation](/docs/readme-images/css-validator.png)

 Back to [README.md](README.md)





## Responsiveness Testing
- Responsivness was tested using [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) and [Responsive design checker](https://responsivedesignchecker.com/). 
    - Devices tested using these tools were Moto G4, Galaxy S5, iPhone5, iPhone6/7 iPad, iPad pro,Display <1200px, Display >1200px
    - Media queries were added to ensure responsiveness for smalll screens. 
    - Max width was set to ensure site displayed ok on extra large screen.
    - After adding media queries the site was found to be responsive for mobile, tabllet, laptop and desktop screens.


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
- Issues were detected with Safari ios and Mozilla Firefox - see Known bugs section for details. 
- After issues were fixed the rendering, responsiveness and all functionality was found to work as expected.

Back to [README.md](README.md)