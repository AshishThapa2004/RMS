<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    //Assigning Tables and Primary Key
    protected $table = "orderitems";
    protected $primaryKey = "orderitem_id";

    protected $fillable = [
        'order_id',
        'menuitem_id',
        'item_name_snapshot',
        'quantity',
        'unit_price',
        'total_price',
        'special_note',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'order_id');
    }

    public function menuitem()
    {
        return $this->belongsTo(MenuItem::class, 'menuitem_id', 'menuitem_id');
    }
}
