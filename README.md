This repo shows why using window.innerWidth to get the width of the window could result in issues

This issue with using window.innerWidth will only occur if -
  the site has a horizontal scroll bar
  you have media queries with the width of the screen

If you open the site https://adityaanuragi.github.io/window-width-demo (preferably on a mobile device , with rotation enabled) if you simply rotate the phone to landscape and back again to portrait then you'll see the window inner width value is out of sync
You'll also notice the 2 boxes are blue if the screen width is below 400px, however window.innerWidth value is not below 400px

If you have certain logic in JS revolving around width of the screen (with window.innerWidth) with horizontal scrolling and media queries (with width of the screen, you'll run into issues

To resolve this you can simple get the width of the 'html' element and check its width instead ( document.getElementsByTagName("html")[0].clientWidth )
The above method will keep your styles and any logic you have in you JS too be in sync
