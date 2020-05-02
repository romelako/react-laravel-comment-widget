<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Comment;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/get_recent_comments', function() {
    return Comment::orderBy('created_at', 'desc')
        ->take(config('app.recent_comment_count'))
        ->get();
});

Route::post('/store_comment', function(Request $request) {
    $request->validate([
        'author_name' => 'bail|required|regex:/^[A-Za-z\s]+$/',
        'author_email' => 'bail|required|email',
        'comment' => 'required'
    ], [
        'author_name.required' => "Please specify an author name",
        'author_name.regex' => "Author name can only contain letters and spaces",
        'author_email.required' => "Please specify an author email",
        'author_email.email' => "Please enter a valid email",
        'comment.required' => "Please enter a comment"
    ]);

    return Comment::create($request->all());
});
