<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Table;


class TableController extends Controller
{
    public function create(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => ['required', 'max:255'],
            'color' => ['required', 'max:255']
        ]);

        $user->tables()->create([
            'isActive' => true,
            'name' => $validated['name'],
            'color' => $validated['color'],
        ]);

    }

    public function show(Request $request)
    {
        $user = $request->user();

        $tables = self::getTables($user)->with('tableRows')->get();

        return Inertia::render('Table/Inventorio', [
            'tables' => $tables,
            'dateType' => 'always',
        ]);
    }

    public function showYear
    (
        Request $request,
        string $year,
    )
    {
        $user = $request->user();

        $tables = self::getTables($user)->with([
            'tableRows' => function ($query) use ($year) {
                $query->whereYear('date', $year);
            }
        ])->get();

        return Inertia::render('Table/Inventorio', [
            'tables' => $tables,
            'dateType' => 'year',
            'year' => intval($year),
        ]);
    }

    public function showMonth
    (
        Request $request,
        string $year,
        string $month,
    )
    {
        $user = $request->user();

        $tables = self::getTables($user)->with([
            'tableRows' => function ($query) use ($year, $month) {
                $query->whereYear('date', $year)
                ->whereMonth('date', $month);
            }
        ])->get();

        return Inertia::render('Table/Inventorio', [
            'tables' => $tables,
            'dateType' => 'month',
            'year' => intval($year),
            'month' => intval($month),
        ]);
    }

    public function showDay
    (
        Request $request,
        string $year,
        string $month,
        string $day,
    )
    {
        $user = $request->user();

        $tables = self::getTables($user)->with([
            'tableRows' => function ($query) use ($year, $month, $day) {
                $query->whereYear('date', $year)
                ->whereMonth('date', $month)
                ->whereDay('date', $day);
            }
        ])->get();

        return Inertia::render('Table/Inventorio', [
            'tables' => $tables,
            'dateType' => 'day',
            'year' => intval($year),
            'month' => intval($month),
            'day' => intval($day),
        ]);
    }

    private function getTables($user)
    {
        return Table::where('user_id', $user->id);
    }
}
