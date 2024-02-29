<?php

namespace App\Http\Controllers\Inventorio\Cells;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DateController extends Controller
{
    public function update(Request $request)
    {
        $validated = $request->validate([
            'date' => ['required', 'date_format:Y-m-d'],
            'row_id' => ['required', 'integer', 'exists:table_rows,id'],
        ]);

        $request->user()->rows()->where('id', $validated['row_id'])->update([
            'date' => $validated['date']
        ]);
    }

}
