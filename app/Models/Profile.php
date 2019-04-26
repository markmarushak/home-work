<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    public function product()
    {
    	return $this->hasOne(App\Models\Product::class);
    }
}
