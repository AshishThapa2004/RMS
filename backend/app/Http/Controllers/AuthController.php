<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
      $validated = $request->validate([
        'fullName'        => 'required|string|max:100',
        'phone'           => 'required|string|max:15|unique:users,phone',
        'email'           => 'required|string|email|max:255|unique:users,email',
        'password'        => 'required|string|min:8|same:confirmPassword',
        'confirmPassword' => 'required|string',
        'role'            => 'required|in:admin,worker,kitchen',
      ]);

      $user = User::create([
        'name'     => $validated['fullName'],
        'phone'    => $validated['phone'],
        'email'    => $validated['email'],
        'password' => Hash::make($validated['password']),
        'role'     => $validated['role'],
      ]);

      $token = $user->createToken('auth_token')->plainTextToken;

      return response()->json([
            'user'  => $user,
            'token' => $token,
        ], 201);
    }  
    
    

    public function login(Request $request)
    {
        // Validate the request
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Attempt to login
        $credentials = $request->only('email', 'password');
        
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            
            // Create a token for the user (if using Laravel Sanctum)
            $token = $user->createToken('auth_token')->plainTextToken;
            
            return response()->json([
                'message' => 'Login successful',
                'token' => $token,
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ]
            ], 200);
        }

        return response()->json([
            'message' => 'Invalid email or password'
        ], 401);
    }
}
