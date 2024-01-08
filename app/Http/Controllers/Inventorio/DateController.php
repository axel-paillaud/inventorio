<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use App\Models\TableRow;
use App\Http\Controllers\Controller;

class DateController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'date' => ['required', 'date_format:Y-m-d'],
            'row_id' => ['required', 'integer', 'exists:table_rows,id'],
        ]);

        TableRow::where([
            ['user_id', $user->id],
            ['id', $validated['row_id']],
        ])->update(['date' => $validated['date']]);
    }
}
