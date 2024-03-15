<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('table_rows', function (Blueprint $table) {
            $table->id();
            $table->foreignId('table_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id');
            $table->timestamps();
            $table->date('date')->default('2023-01-01');
            $table->string('name')->default('');
            $table->enum('state', ['Unused', 'Second-hand', 'To fix'])->default('unused');
            $table->integer('quantity')->default('0');
            $table->float('price', precision: 53)->default('0.0');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_rows');
    }
};
