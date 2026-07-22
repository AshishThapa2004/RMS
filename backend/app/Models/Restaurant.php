<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $table = "restaurants";
    protected $primaryKey = "ordrestaurant_ider_id";

    protected $fillable = [
        'user_id',
        'restaurant_name',
        'address',
        'phone_no',
        'logo_name',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
