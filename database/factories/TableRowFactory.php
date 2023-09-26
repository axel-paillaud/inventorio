<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
        $states = ['Neuf', 'Occasion', 'A réparer'];

        return [
            'table_id' => 1,
            'date' => fake()->date(),
            'name' => fake()->word(),
            'state' => $states[array_rand($states)],
            'quantity' => rand(1, 300),
            'price' => rand(1, 10000),
        ];
    }
}
