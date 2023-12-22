<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ToggleAllTableController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user();
        dd("hello, world");
    }
}
