<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Inventorio\ToggleTableController;
use App\Http\Controllers\Inventorio\ToggleAllTableController;
use App\Http\Controllers\Inventorio\YearController;
use App\Http\Controllers\Inventorio\MonthController;
use App\Http\Controllers\Inventorio\DayController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
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

Route::get('/inventorio', function (Request $request) {
    $user = $request->user();

    return Inertia::render('Table/Inventorio', [
        'tables' => Table::where('user_id', $user->id)->get(),
        'rows' => TableRow::where('user_id', $user->id)->get(),
        'dateType' => 'always'
    ]);
})->middleware(['auth', 'verified'])->name('inventorio');

Route::post('/inventorio/filter/{id}', [ToggleTableController::class, 'update'])
    ->middleware(['auth', 'verified']);

Route::post('/inventorio/filters', [ToggleAllTableController::class, 'update'])
    ->middleware(['auth', 'verified']);

Route::get('/inventorio/year/{year}', [YearController::class, 'show'])
    ->middleware(['auth', 'verified'])->name('date.year');

Route::get('/inventorio/month/{year}/{month}', [MonthController::class, 'show'])
    ->middleware(['auth', 'verified'])->name('date.month');

Route::get('/inventorio/day/{year}/{month}/{day}', [DayController::class, 'show'])
    ->middleware(['auth', 'verified'])->name('date.day');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
