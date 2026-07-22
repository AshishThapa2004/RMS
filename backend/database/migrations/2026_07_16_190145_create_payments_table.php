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
        Schema::create('payments', function (Blueprint $table) {
            $table->id('payment_id');
            $table->foreignId('order_id')
                ->constrained(
                    table: 'orders',
                    column: 'order_id'
                )
                ->restrictOnDelete();
            $table->enum('payment_method', ['cash', 'online']);
            $table->decimal('amount', 10, 2);
            $table->enum('payment_status', ['pending', 'paid']);
            $table->string('received_by', 100);
            $table->timestamp('received_at');
            $table->text('remarks')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
