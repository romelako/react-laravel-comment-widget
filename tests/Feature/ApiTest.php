<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiTest extends TestCase
{
    use RefreshDatabase;

    public function testGetRecentComments()
    {
        $this->seed();
        $response = $this->get('/api/get_recent_comments');
        $response->assertStatus(200);
    }

    public function testStoreComment()
    {
        $response = $this->postJson('/api/store_comment', [
            'author_name' => "test",
            'author_email' => "email@email.com",
            'comment' => "test comment"
        ]);

        $response->assertStatus(201);
        $response->assertJson(['id' => true]);
    }

    public function testStoreInvalidComment()
    {
        $response = $this->postJson('/api/store_comment', [
            'author_name' => "test",
            'author_email' => "email@email.com",
        ]);

        $response->assertStatus(422);
    }
}
