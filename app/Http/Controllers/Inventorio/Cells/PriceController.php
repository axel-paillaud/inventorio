<?php

namespace App\Http\Controllers\Inventorio\Cells;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PriceController extends Controller
{
    public function update(Request $request)
    {
        $validated = $request->validate([
            'price' => ['required', 'numeric', 'min:0'],
            'row_id' => ['required', 'integer', 'exists:table_rows,id'],
        ]);

        $request->user()->rows()->where('id', $validated['row_id'])->update([
            'price'=> $validated['price']
        ]);
    }
}
