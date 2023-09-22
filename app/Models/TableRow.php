<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belongsTo;

class TableRow extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function table(): belongsTo
    {
        return $this->belongsTo(Table::class);
    }
}
