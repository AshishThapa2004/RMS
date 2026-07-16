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

}
