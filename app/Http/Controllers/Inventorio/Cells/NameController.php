<?php

namespace App\Http\Controllers\Inventorio\Cells;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NameController extends Controller
{
    public function update(Request $request)
    {
        if (!$request['name']) {$request['name'] = '';};

        $validated = $request->validate([
            'name' => ['max:255', 'string'],
            'row_id' => ['required', 'integer', 'exists:table_rows,id'],
        ]);

        $request->user()->rows()->where('id', $validated['row_id'])->update([
            'name'=> $validated['name']
        ]);
    }
}
