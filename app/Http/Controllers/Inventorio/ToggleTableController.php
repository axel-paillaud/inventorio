<?php

namespace App\Http\Controllers\Inventorio;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Validation\Rule;

class ToggleTableController extends Controller
{
    public function update(Request $request)
    {
        $validated = $request->validate([
            'isActive' => 'required|boolean',
            'id' => 'required|exists:tables',
        ]);

        $request->user()->tables()->where('id', $validated['id'])->update([
            'isActive' => $validated['isActive']
        ]);
    }
}
