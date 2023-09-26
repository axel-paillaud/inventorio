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
        $states = ['Neuf', 'Occasion', 'A réparer'];

        return [
            'table_id' => Table::inRandomOrder()->first()->id,
            'date' => fake()->date(),
            'name' => fake()->sentence(),
            'state' => $states[array_rand($states)],
            'quantity' => rand(1, 100),
            'price' => (rand(1 * 10000, 10000 * 10000) / 10000),
        ];
    }
}
