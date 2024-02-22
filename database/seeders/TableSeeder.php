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
        Table::factory()->create(['name' => 'Consommables', 'color' => 'blue']);
        Table::factory()->create(['name' => 'Outils', 'color' => 'red']);
        Table::factory()->create(['name' => 'Pièces détachées', 'color' => 'orange']);
    }
}
