<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    //Assigning Tables and Primary Key
    protected $table = "menuitems";
    protected $primaryKey = "menuitem_id";

    protected $fillable = [
        'category',
        'item_name',
        'description',
        'price',
    ];

    public $timestamps = false;

    public function orderitems()
{
    return $this->hasMany(OrderItem::class, 'menuitem_id', 'menuitem_id');
}
}
