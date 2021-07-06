<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function index(){
        $nama = "Muh Zakir Ramadhan";
        return inertia::render('Home', [
            'nama'  => $nama
        ]);
    }

    public function about(){
        return inertia::render('About');
    }
}
