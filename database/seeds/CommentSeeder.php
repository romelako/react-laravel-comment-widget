<?php

use Illuminate\Database\Seeder;
use App\Comment;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // everything inserted gets the same time so manually specify date
        $date = new \DateTime();

        $comment = new Comment();
        $comment->author_name = "Brian";
        $comment->author_email = "brian@dadjokes.com";
        $comment->comment = "Today, my son asked \"Can I have a book mark?\" and I burst into tears. 11 years old and he still doesn't know my name is Brian.";
        $comment->created_at = $date->modify("+1 second");
        $comment->save();

        $comment = new Comment();
        $comment->author_name = "No Direction Fan";
        $comment->author_email = "nodirectionfan@dadjokes.com";
        $comment->comment = "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right.";
        $comment->created_at = $date->modify("+1 second");
        $comment->save();

        $comment = new Comment();
        $comment->author_name = "Jesse Pinkman";
        $comment->author_email = "jesse@dadjokes.com";
        $comment->comment = "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!";
        $comment->created_at = $date->modify("+1 second");
        $comment->save();

        $comment = new Comment();
        $comment->author_name = "Ronald McDonald";
        $comment->author_email = "ronaldmcdonald@dadjokes.com";
        $comment->comment = "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.";
        $comment->created_at = $date->modify("+1 second");
        $comment->save();

        $comment = new Comment();
        $comment->author_name = "Stewie Griffin";
        $comment->author_email = "stewiegriffin@dadjokes.com";
        $comment->comment = "If a child refuses to sleep during nap time, are they guilty of resisting a rest?";
        $comment->created_at = $date->modify("+1 second");
        $comment->save();
    }
}
