# js-template

## Updating Dependencies

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.

## Structure

Dependencies are stored in [`package.json`](package.json).

Do not configure `grunt` packages directly in the
[`Gruntfile.js`](Gruntfile.js). Instead, store configurations in the
[`grunt`](grunt) directory. You won't need a top-level key, since that's
generated by the `Gruntfile.js` based on the filename of the configuration
object stored in the `grunt` directory.

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/index.js`](assets/scripts/index.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should store styles in [`assets/styles`](assets/styles).

## Tasks

Developers should run these often!

-   `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
-   `grunt reformat`: reformats all your code in a standard style
-   `grunt serve`: generates bundles, watches, and livereloads
-   `grunt test`: runs any automated tests, depends on `grunt build`
-   `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## User stories

-   A <role>, when <condition>, can <action>, which will <effect>
-   A user, when visiting the page, can log in, which will render the game board
-   A user, when signing up, can provide a username and password, which will
    save the user
-   A user, when looking at the gameboard, can click a square, which will mark
    the square and save the move.
-   A user, when linking three squares with the user's designated shape, will
    win the game.
-   The losing player, when a winning move is made, will play first in the next
    game
    winning situations
      0,0; 0,1; 0,2 top row
      1,0; 1,1; 1,2 middle row
      2,0; 2,1, 2,2 bottom row

      0,0; 1,0; 2,0 left column
      0,1; 1,1; 2,1 middle column
      0,2; 1,2; 2,2 right column

      0,0; 1,1; 2,2 topleft-bottomright
      0,2; 1,1; 2,0 topright-bottomleft

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
