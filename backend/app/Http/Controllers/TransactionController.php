<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function getFilteredTransactions(Request $request)
    {
        $date = $request->input('date');
        $location = $request->input('location');

        $query = Transaction::query();

        if ($date) {
            $query->whereDate('date', $date);
        }

        if ($location) {
            $query->where('location', $location);
        }

        $transactions = $query->get();

        return response()->json($transactions);
    }
}
