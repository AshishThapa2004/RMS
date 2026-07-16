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
        Schema::create('orderitems', function (Blueprint $table) {
            $table->id('orderitem_id');
            $table->foreignId('order_id')
                ->constrained(
                    table:'orders',
                    column:'order_id'
                )
                ->cascadeOnDelete();
            $table->foreignId('menuitems_id')
                ->nullable()
                ->constrained(
                    table:'menuitems',
                    column:'menuitems_id'
                )
                ->nullOnDelete;
            $table->string('item_name_snapshot', 100);
            $table->unsignedInteger('quantity');
            $table->decimal('unit_price', 10, 2);
            $table->decimal('total_price', 10, 2);
            $table->text('special_note')
                ->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orderitems');
    }
};
