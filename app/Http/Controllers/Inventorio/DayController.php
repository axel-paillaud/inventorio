<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Table;
use App\Models\TableRow;
use App\Http\Controllers\Controller;

class DayController extends Controller
{
    public function show(Request $request, int $year, int $month, int $day)
    {
        $user = $request->user();

        $query = TableRow::where('user_id', $user->id)
        ->whereYear('date', $year)
        ->whereMonth('date', $month)
        ->whereDay('date', $day);

        return Inertia::render('Table/Inventorio', [
            'tables' => Table::where('user_id', $user->id)->get(),
            'rows' => $query->get(),
            'dateType' => 'day',
            'year' => $year,
            'month' => $month,
            'day' => $day,
        ]);
    }
}
