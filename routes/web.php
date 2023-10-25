<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Models\Table;
use App\Models\TableRow;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/inventorio', function () {
    $user = Auth::user();

    return Inertia::render('Table/Inventorio', [
        'tables' => Table::where('user_id', $user->id)->get(),
        'rows' => TableRow::where('user_id', $user->id)->get(),
    ]);
})->middleware(['auth', 'verified'])->name('inventorio');

Route::get('/inventorio/{grade}/{year}/{month?}/{day?}',
    function (string $grade, int $year, ?int $month = null, ?int $day = null) {
        $user = Auth::user();

        if (!$month) $month = '%%';
        if (!$day) $day = '%%';

        $month = str_pad($month, 2, '0', STR_PAD_LEFT);
        $day = str_pad($day, 2, '0', STR_PAD_LEFT);

        return Inertia::render('Table/Inventorio', [
            'tables' => Table::where('user_id', $user->id)->get(),
            'rows' => TableRow::where('user_id', $user->id)
                // ->where('date', 'like', $year . '-' . $month . '-' . $day)
                ->whereYear('date', $year)
                ->get(),
        ]);
})->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
