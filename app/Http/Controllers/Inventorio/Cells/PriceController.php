<?php

namespace App\Http\Controllers\Inventorio\Cells;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TableRow;

class PriceController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'price' => ['required', 'numeric', 'min:0'],
            'row_id' => ['required', 'integer', 'exists:table_rows,id'],
        ]);

        TableRow::where([
            ['user_id', $user->id],
            ['id', $validated['row_id']],
        ])->update(['price'=> $validated['price']]);
    }
}