<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/signup', [AuthController::class, 'signup']);
<<<<<<< HEAD

Route::post('/login', [AuthController::class, 'login']);

Route::get('/test', function () {
    return response()->json([
        'message' => 'Backend is working!',
        'status' => 'connected',
        'timestamp' => now()
    ]);
});
=======
>>>>>>> 06102841ea2b962999f61401620de325df59beed
