![Laravel](https://github.com/romelako/react-laravel-comment-widget/workflows/Laravel/badge.svg)

# React/Laravel Comment Widget

## Overview
This is my version of the comment widget built using React and Laravel. This project was incredibly fun because I got to learn Laravel after using Symfony for years.

## Setup
1. Clone the repository.
2. Install composer dependencies.
   * I have already transpiled the .jsx code into comment-widget-bundle.js so there is no need to install the npm dependencies.
3. Create your .env file and make sure `ASSETS_URL` is in there.
4. Set up your database of choice.
5. Run the migrations with `php artisan migrate`
6. Seed the database with `php artisan db:seed`.
7. Create an application encryption key with `php artisan key:generate`
8. Run the development server with `php artisan serve`.
9. Navigate to the homepage.

## Notes
* I opted to use the built-in development server for ease. For more advanced projects I would usually use Docker.
* The React app can be found in `/resources/js/comment_widget`. Since I typically write multiple React apps within a single application, I like to separate them into bundles. 
* I wrote functional tests which can be found in `/tests/Feature`.
* If you wish to test the "refresh every 30s" requirement, you can load the page, then enter `php artisan db:seed --class=AdditionalCommentSeeder` to seed an additional comment.

## Assumptions
* I wasn't sure if "The comment list at the top is refreshed to show the latest at the top." meant that I should just prepend the newly-created comment to the list of comments (total of 6 comments) or just refresh and make sure that the comment is on top (5 comments). I implemented the latter. However, I would just append to my `state` variable the values of the input field before clearing it to implement the former.
* ~~I forewent doing validation on the back-end as I did validation on the front-end. If there was a use-case where developers can hit the API or for some reason we don't want to use front-end validation, I would perform the validation on the backend and return the errors in the response.~~
   * **EDIT:** I decided that using Laravel's built-in validation methods would be more robust and would cover more use cases, making it more scalable.
* I assumed an author name can only contain letters and spaces.
* I used a short regex for the email validation for brevity.





