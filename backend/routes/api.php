<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RestaurantController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/signup', [AuthController::class, 'signup']);

Route::middleware('auth:sanctum')->post('/restaurantregister', [RestaurantController::class, 'register']);


Route::post('/login', [AuthController::class, 'login']);

Route::get('/test', function () {
    return response()->json([
        'message' => 'Backend is working!',
        'status' => 'connected',
        'timestamp' => now()
    ]);
});

