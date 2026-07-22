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
        Schema::create('restaurants', function (Blueprint $table) {
            $table->id('restaurant_id');
            $table->foreignId('user_id')
                ->constrained(
                   table: 'users',
                   column: 'user_id' 
                )
                ->cascadeOnDelete();
            $table->string('restaurant_name', 100);
            $table->string('address', 100);
            $table->string('phone_no', 100);
            $table->string('logo_name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('restaurants');
    }
};
