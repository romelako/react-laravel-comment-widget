<?php

use Illuminate\Database\Seeder;
use App\Comment;

class AdditionalCommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $comment = new Comment();
        $comment->author_name = "Lorem Ipsum";
        $comment->author_email = "lorem@ipsum.com";
        $comment->comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor feugiat egestas.";        $comment->save();
    }
}
