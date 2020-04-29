<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Comment Widget</title>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="{{ asset('css/style.css')  }}">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    </head>

    <body>
        <div class="container">
            <h3 class="title"><del>Dad Joke</del> Comment Widget</h3>

            <div id="container"></div>
        </div>

        <script src="{{ asset('js/comment-widget-bundle.js')  }}"></script>
    </body>
</html>
