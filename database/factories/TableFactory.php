<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TableFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $colours = [
            'red', 'orange', 'green', 'blue', 'violet', 'rose', 'amber',
            'lime', 'cyan', 'fuchsia',
        ];

        shuffle($colours);

        return [
            'user_id' => 1,
            'name' => fake()->word() . ' ' . fake()->word(),
            'color' => array_pop($colours),
            'isActive' => 1,
        ];
    }
}
