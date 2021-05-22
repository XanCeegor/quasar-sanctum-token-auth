<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            // 'device_name' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'errors' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken("device_name")->plainTextToken;
        return response([
            "user" => $user,
            "token" => $token
        ], 200);
    }

    public function logout(Request $request)
    {
        try {
            PersonalAccessToken::findToken($request->bearerToken())->delete();

            return response("success", 200);
        } catch (\Exception $e) {
            return response(['errors' => $e->getMessage()], 500);
        }
    }
}
