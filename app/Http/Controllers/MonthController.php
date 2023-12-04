<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Table;
use App\Models\TableRow;

class MonthController extends Controller
{
    public function show(Request $request, int $year, int $month)
    {
        $user = $request->user();

        $query = TableRow::where('user_id', $user->id)
        ->whereYear('date', $year)
        ->whereMonth('date', $month);

        return Inertia::render('Table/Inventorio', [
            'tables' => Table::where('user_id', $user->id)->get(),
            'rows' => $query->get(),
            'dateType' => 'month',
            'year' => $year,
            'month' => $month,
        ]);
    }
}
