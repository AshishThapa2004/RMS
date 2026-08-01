<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QRcode extends Model
{
    //Assigning Tables and Primary Key
    protected $table = "qrcodes";
    protected $primaryKey = "qrcode_id";

    protected $fillable = [
        'payment_name',
        'qr_image_name',
        'account_name',
        'account_number',
    ];
    
    public $timestamps = false;

}
