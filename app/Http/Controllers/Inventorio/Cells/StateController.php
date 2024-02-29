<?php

namespace App\Http\Controllers\Inventorio\Cells;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StateController extends Controller
{
    public function update(Request $request)
    {
        $validated = $request->validate([
            'state' => ['required', 'in:Neuf,Occasion,A réparer'],
            'row_id' => ['required', 'integer', 'exists:table_rows,id'],
        ]);

        $request->user()->rows()->where('id', $validated['row_id'])->update([
            'state'=> $validated['state']
        ]);
    }
}
