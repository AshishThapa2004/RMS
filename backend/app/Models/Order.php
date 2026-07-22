<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //Assigning Tables and Primary Key
    protected $table = "orders";
    protected $primaryKey = "order_id";

    protected $fillable = [
        'order_no',
        'table_id',
        'table_no_snapshot',
        'user_id',
        'worker_name_snapshot',
        'order_status',
        'sub_total',
        'vat',
        'discount',
        'total_amount',
    ];

    
    public function table()
    {
        return $this->belongsTo(RestaurantTable::class, 'table_id', 'table_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function orderitem()
    {
        return $this->hasMany(OrderItem::class, 'order_id', 'order_id');
    }

    public function payment()
    {
        return $this->hasOne(Payment::class, 'order_id', 'order_id');
    }
}
