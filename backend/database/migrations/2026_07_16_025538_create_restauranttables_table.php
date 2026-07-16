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
        Schema::create('restauranttables', function (Blueprint $table) {
            $table->id('table_id');
            $table->string('table_no', 10);
            $table->integer('capacity');
            $table->enum('status', ['available','occupied','reserved']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('restauranttables');
    }
};
