<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use App\Models\Table;
use App\Models\TableRow;

class RowController extends Controller
{
    public function create(Request $request)
    {
        $user = $request->user();

        $row = new TableRow([
            'table_id' => $request->table_id,
            'user_id' => $user->id,
        ]);

        $row->save();
        $row->refresh();

        // return to_route('inventorio');
        return redirect()->back();
    }
}
