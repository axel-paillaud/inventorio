<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Table;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TableRowFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $states = ['Unused', 'Second-hand', 'To fix'];

        return [
            'table_id' => Table::inRandomOrder()->first()->id,
            'user_id' => 1,
            'date' => fake()->dateTimeBetween('2019-01-01', '2024-12-31'),
            'name' => fake()->sentence(),
            'state' => $states[array_rand($states)],
            'quantity' => rand(1, 100),
            'price' => (rand(1 * 10000, 10000 * 10000) / 10000),
        ];
    }
}
