<?php

namespace App\Models;

use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class authModel extends Model
{
    public function login($request)
    {

        if ($request->email) {
            $result = DB::table('users')->where([
                [
                    'email', '=', $request->email
                ]
            ])->first();

            if ($result != null) {
                if (Hash::check($request->password, $result->password)) {
                    return $result;
                } else {

                    return 'Wrong account or password';
                }
            } else {
                return 'Wrong account or password';
            }
        }
    }

    public function register($request)
    {
        $result = DB::table('users')->insert(['username' => $request->name, 'phone' => $request->phone, 'email' => $request->email, 'password' => bcrypt($request->password)]);
        return $result;
    }
}