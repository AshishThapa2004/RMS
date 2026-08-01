<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'restaurantName' => 'required|string|max:100',
            'address'        => 'required|string|max:100',
            'phone_no'          => 'required|string|max:15',
        ]);

        $restaurant = $request->user()->restaurants()->create([
            'restaurant_name' => $validated['restaurantName'],
            'address'         => $validated['address'],
            'phone_no'        => $validated['phone_no'],
        ]);

        return response()->json([
            'restaurant' => $restaurant,
        ], 201);
    }
}
