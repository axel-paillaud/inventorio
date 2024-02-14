<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Inventorio\TableController;
use App\Http\Controllers\Inventorio\ToggleTableController;
use App\Http\Controllers\Inventorio\ToggleAllTableController;
use App\Http\Controllers\Inventorio\YearController;
use App\Http\Controllers\Inventorio\MonthController;
use App\Http\Controllers\Inventorio\DayController;
use App\Http\Controllers\Inventorio\RowController;
use App\Http\Controllers\Inventorio\Cells\DateController;
use App\Http\Controllers\Inventorio\Cells\NameController;
use App\Http\Controllers\Inventorio\Cells\StateController;
use App\Http\Controllers\Inventorio\Cells\QuantityController;
use App\Http\Controllers\Inventorio\Cells\PriceController;
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

Route::middleware('auth')->group(function() {
    Route::get('/inventorio', [TableController::class, 'show'])
    ->name('inventorio');

    Route::get('/inventorio/year/{year}', [TableController::class, 'showYear'])
    ->name('inventorio.year');

    Route::get('/inventorio/month/{year}/{month}', [TableController::class, 'showMonth'])
    ->name('inventorio.month');

    Route::get('/inventorio/day/{year}/{month}/{day}', [TableController::class, 'showDay'])
    ->name('inventorio.day');
});

Route::get('/inventorio/api/{tableId}/{year?}/{month?}/{day?}', [RowController::class, 'show'])
->middleware('auth');

Route::post('/inventorio/api/create', [RowController::class, 'create'])
    ->middleware(['auth', 'verified']);

Route::post('/inventorio/filter/{id}', [ToggleTableController::class, 'update'])
    ->middleware(['auth', 'verified']);

Route::post('/inventorio/filters', [ToggleAllTableController::class, 'update'])
    ->middleware(['auth', 'verified']);

Route::middleware('auth', 'verified')->group(function() {
    Route::post('/inventorio/cells/date', [DateController::class, 'update']);
    Route::post('/inventorio/cells/name', [NameController::class, 'update']);
    Route::post('/inventorio/cells/state', [StateController::class, 'update']);
    Route::post('/inventorio/cells/quantity', [QuantityController::class, 'update']);
    Route::post('/inventorio/cells/price', [PriceController::class, 'update']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
