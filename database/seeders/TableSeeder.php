<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Table;

class TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Table::factory()->create([
            'name' => 'Parties cellules',
            'colour' => 'green',
        ]);
        Table::factory()->create(['colour' => 'blue']);
        Table::factory()->create(['colour' => 'red']);
        Table::factory()->create(['colour' => 'orange']);
    }
}
