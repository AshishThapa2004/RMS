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
        Schema::create('orders', function (Blueprint $table) {
            $table->id('order_id');
            $table->string('order_no', 20);
            $table->foreignId('table_id')
                ->nullable()
                ->constrained(
                    table: 'restauranttables',
                    column: 'table_id'
                )
                ->nullOnDelete();
            $table->string('table_no_snapshot', 10);
            $table->foreignId('user_id')
                ->nullable()
                ->constrained(
                    table: 'users',
                    column: 'user_id'
                )
                ->nullOnDelete();
            $table->string('worker_name_snapshot', 100);
            $table->enum('order_status', ['pending',
            'completed', 'cancelled'])->default('pending');
            $table->decimal('sub_total', 10, 2)
                ->default(0.00);
            $table->decimal('vat', 10, 2)
                ->nullable();
            $table->decimal('discount', 10, 2)
                ->default(0.00);
            $table->decimal('total_amount', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
