<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Table;


class TableController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user();

        $tables = self::getTables($user);

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

        $tables = self::getTables($user);

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

        $tables = self::getTables($user);

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

        $tables = self::getTables($user);

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
        return Table::where('user_id', $user->id)->get();
    }
}
