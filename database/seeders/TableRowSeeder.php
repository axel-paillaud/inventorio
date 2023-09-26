<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TableRow;

class TableRowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TableRow::factory(10)->create();
    }
}
