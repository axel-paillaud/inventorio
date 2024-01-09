<?php

namespace App\Http\Controllers\Inventorio\Cells;

use Illuminate\Http\Request;
use App\Models\TableRow;
use App\Http\Controllers\Controller;

class QuantityController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'quantity' => ['required', 'integer'],
            'row_id' => ['required', 'integer', 'exists:table_rows,id'],
        ]);

        TableRow::where([
            ['user_id', $user->id],
            ['id', $validated['row_id']],
        ])->update(['quantity' => $validated['quantity']]);
    }
}
