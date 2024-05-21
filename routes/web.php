<?php

use App\Http\Controllers\FrontController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\MyOrdersController;
use Illuminate\Support\Facades\Route;


Route::get('/',[FrontController::class,'index'])->name('front.index');
Route::get('/urun-listesi',[ProductController::class,'list'])->name('front.urun-listesi');
Route::get('/urun-detay',[ProductController::class,'detail'])->name('front.urun-detay');
Route::get('/sepet',[CardController::class,'card'])->name('front.sepet');
Route::get('/odeme',[CheckoutController::class,'index'])->name('front.odeme');
Route::get('/siparislerim',[MyOrdersController::class,'index'])->name('front.siparislerim');
Route::get('/siparislerim-detay',[MyOrdersController::class,'detail'])->name('front.siparislerim-detay');
