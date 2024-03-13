<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;


class TableController extends Controller
{
    public function create(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => ['required', 'max:255', 'string'],
            'color' => ['required', 'max:255', 'string']
        ]);

        $user->tables()->create([
            'isActive' => true,
            'name' => $validated['name'],
            'color' => $validated['color'],
        ]);

    }

    public function delete(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'id' => ['exists:tables'],
        ]);

        $user->tables()->where('id', $validated['id'])->delete();
    }

    public function show(Request $request)
    {
        $tables = $request->user()->tables()->with('tableRows')->get();

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
        $tables = $request->user()->tables()->with([
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
        $tables = $request->user()->tables()->with([
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
        $tables = $request->user()->tables()->with([
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
}
