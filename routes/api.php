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

Route::get('/get_recent_comments', function(Request $request) {
    return Comment::orderBy('created_at', 'desc')
        ->take(5)
        ->get();
});

Route::post('/store_comment', function(Request $request) {
    return Comment::create($request->all());
});
