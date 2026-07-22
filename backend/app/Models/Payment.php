<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    //Assigning Tables and Primary Key
    protected $table = "payments";
    protected $primaryKey = "payment_id";

    protected $fillable = [
        'order_id',
        'payment_method',
        'amount',
        'payment_status',
        'received_by',
        'received_at',
        'remarks',
    ];

    public $timestamps = false;

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'order_id');
    }
}
