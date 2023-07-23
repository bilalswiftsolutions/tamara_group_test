<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function allUsers(Request $request)
    {
        $date = $request->input('date');
        $location = $request->input('location');

        $users = User::withCount(['transactions' => function ($query) use ($date, $location) {
            if (!empty($date)) {
                $query->where('date', '=', date('Y-m-d', strtotime($date)));
            }
            if ($location) {
                $query->where('location', '=', $location);
            }
        }])->get();
        return response()->json($users);
    }
}
