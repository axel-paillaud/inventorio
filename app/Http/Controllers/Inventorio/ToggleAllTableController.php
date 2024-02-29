<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ToggleAllTableController extends Controller
{
    public function update(Request $request)
    {
        $request->user()->tables()->update(['isActive' => 1]);
    }
}
