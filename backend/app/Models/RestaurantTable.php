<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RestaurantTable extends Model
{
    //Assigning Tables and Primary Key
    protected $table = "restauranttables";
    protected $primaryKey = "table_id";

    protected $fillable = [
        'table_no',
        'capacity',
        'status',
    ];

    public $timestamps = false;

    public function order()
    {
        return $this->hasMany(Order::class, 'table_id', 'table_id');
    }

}
