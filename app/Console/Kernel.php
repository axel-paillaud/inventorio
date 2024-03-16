<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Models\User;
use App\Models\Table;
use App\Models\TableRow;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        $schedule->call(function () {

            User::where('id', 1)->delete();

            User::factory()->create([
                'id' => 1,
                'name' => 'Test User',
                'email' => 'test@example.com',
            ]);

            Table::factory()->count(3)->create([
                'user_id' => 1,
            ]);

            TableRow::factory()->count(25)->create([
                'user_id' => 1,
            ]);

        })->hourly();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
