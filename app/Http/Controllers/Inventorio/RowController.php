<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TableRow;

class RowController extends Controller
{
    public function create(Request $request)
    {
        $validated = $request->validate([
            'table_id' => 'required|numeric|exists:tables,id',
            'date' => 'date_format:Y-m-d',
        ]);

        $row = $request->user()->rows()->create([
            'table_id' => $validated['table_id'],
            'date' => $validated['date'],
        ]);

        $row->refresh();

        return response()->json($row);
    }

    public function show
    (
        Request $request,
        int $tableId,
        ?int $year = null,
        ?int $month = null,
        ?int $day = null
    )
    {
        $user = $request->user();

        $query = TableRow::where('user_id', $user->id)
        ->where('table_id', $tableId);

        if ($year)
        {
            $query->whereYear('date', $year);
            if ($month)
            {
                $query->whereMonth('date', $month);
                if ($day)
                {
                    $query->whereDay('date', $day);
                }
            }
        }

        $rows = $query->get();

        return response()->json($rows);
    }

    public function delete(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'row_id' => 'required|numeric|exists:table_rows,id',
        ]);

        $user->rows()->where('id', $validated['row_id'])->delete();

        return response()->json($validated['row_id']);
    }
}
