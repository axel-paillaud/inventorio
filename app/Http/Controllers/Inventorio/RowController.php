<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TableRow;

class RowController extends Controller
{
    public function create(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'table_id' => 'required|numeric|exists:tables,id',
            'date' => 'date_format:Y-m-d',
        ]);

        $row = new TableRow([
            'table_id' => $validated['table_id'],
            'user_id' => $user->id,
            'date' => $validated['date'],
        ]);

        $row->save();
        $row->refresh();

        // return to_route('inventorio');
        return redirect()->back();
    }
}
