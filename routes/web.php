<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Inventorio\TableController;
use App\Http\Controllers\Inventorio\ToggleTableController;
use App\Http\Controllers\Inventorio\ToggleAllTableController;
use App\Http\Controllers\Inventorio\RowController;
use App\Http\Controllers\Inventorio\Cells\DateController;
use App\Http\Controllers\Inventorio\Cells\NameController;
use App\Http\Controllers\Inventorio\Cells\StateController;
use App\Http\Controllers\Inventorio\Cells\QuantityController;
use App\Http\Controllers\Inventorio\Cells\PriceController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Http\Request;

// Change the locale
Route::post('locale', function(Request $request) {
    $validated = $request->validate([
        'language' => ['required'],
    ]);

    App::setLocale($validated['language']);

    session()->put('locale', $validated['language']);

    return redirect()->back();
})->name('locale');

Route::middleware('auth')->group(function() {
    Route::get('/', [TableController::class, 'show'])
    ->name('inventorio');

    Route::get('/year/{year}', [TableController::class, 'showYear'])
    ->name('inventorio.year');

    Route::get('/month/{year}/{month}', [TableController::class, 'showMonth'])
    ->name('inventorio.month');

    Route::get('/day/{year}/{month}/{day}', [TableController::class, 'showDay'])
    ->name('inventorio.day');
});

Route::get('/inventorio/api/{tableId}/{year?}/{month?}/{day?}', [RowController::class, 'show'])
->middleware('auth');

Route::post('/inventorio/api/row/create', [RowController::class, 'create'])
    ->middleware(['auth', 'verified'])->name('row.create');

Route::post('/inventorio/api/row/delete', [RowController::class, 'delete'])
    ->middleware(['auth', 'verified'])->name('row.delete');

Route::post('/inventorio/api/table/create', [TableController::class, 'create'])
    ->middleware(['auth', 'verified'])->name('table.create');

Route::post('/inventorio/api/table/delete', [TableController::class, 'delete'])
    ->middleware(['auth', 'verified'])->name('table.destroy');

Route::post('/inventorio/toggle', [ToggleTableController::class, 'update'])
    ->middleware(['auth', 'verified'])->name('table.toggle');

Route::post('/inventorio/toggles', [ToggleAllTableController::class, 'update'])
    ->middleware(['auth', 'verified'])->name('table.togglesAll');

Route::middleware('auth', 'verified')->group(function() {
    Route::post('/inventorio/cells/date', [DateController::class, 'update'])->name('cell.date.update');
    Route::post('/inventorio/cells/name', [NameController::class, 'update'])->name('cell.name.update');
    Route::post('/inventorio/cells/state', [StateController::class, 'update'])->name('cell.state.update');
    Route::post('/inventorio/cells/quantity', [QuantityController::class, 'update'])->name('cell.quantity.update');
    Route::post('/inventorio/cells/price', [PriceController::class, 'update'])->name('cell.price.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
