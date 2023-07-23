<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function allLocations()
    {
       return response()->json(Location::get());
    }
}
