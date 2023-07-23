<?php

namespace Database\Factories;

use App\Models\Location;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $date = fake()->dateTimeBetween('-1 year', 'now');
        return [
            'user_id' => User::inRandomOrder()->first()->id,
            'date' => $date,
            'amount' => fake()->randomFloat(2, 10, 1000),
            'location' => Location::inRandomOrder()->first()->id,
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
