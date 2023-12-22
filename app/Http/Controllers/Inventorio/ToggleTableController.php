<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use App\Models\Table;
use App\Http\Controllers\Controller;

class ToggleTableController extends Controller
{
    public function update(Request $request, int $id)
    {

        $user = $request->user();

        Table::where([
            ['user_id', $user->id],
            ['id', $id]
        ])->update(['isActive' => $request->input("isActive")]);

    }
}
