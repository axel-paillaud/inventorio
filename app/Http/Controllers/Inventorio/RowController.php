<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Table;
use App\Models\TableRow;

class RowController extends Controller
{
   public function index(Request $request)
    {
        $user = $request->user;

        return Inertia::render('Table/Inventorio', [
            'tables' => Table::where('user_id', $user->id)->get(),
            'rows' => TableRow::where('user_id', $user->id)->get(),
            'dateType' => 'always'
        ]);
    }

    public function create(Request $request)
    {
        $user = $request->user();

        $row = new TableRow([
            'table_id' => $request->table_id,
            'user_id' => $user->id,
        ]);

        $row->save();
        $row->refresh();

        return to_route('inventorio');
    }
}
