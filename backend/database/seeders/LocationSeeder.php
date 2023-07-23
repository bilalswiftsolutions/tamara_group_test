<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Location;
use App\Models\User;

class LocationSeeder extends Seeder
{
    public function run()
    {
        Location::factory()->count(1000)->create();
    }
}
