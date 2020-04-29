<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class HomeTest extends TestCase
{
    public function testHomepage()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
        $response->assertSeeText("Comment Widget");
    }
}
