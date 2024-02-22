<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use App\Models\Table;
use App\Http\Controllers\Controller;

class ToggleAllTableController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user();

        Table::where([
            ['user_id', $user->id],
        ])->update(['isActive' => 1]);
    }
}
