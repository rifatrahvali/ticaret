<?php

use App\Http\Controllers\Admin\DashboardController;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

use App\Http\Controllers\Front\CardController;
use App\Http\Controllers\Front\CheckoutController;
use App\Http\Controllers\Front\FrontController;
use App\Http\Controllers\Front\MyOrdersController;
use App\Http\Controllers\Front\ProductController;

use Illuminate\Support\Facades\Route;


Route::get('/',[FrontController::class,'index'])->name('front.index');
Route::get('/urun-listesi',[ProductController::class,'list'])->name('front.urun-listesi');
Route::get('/urun-detay',[ProductController::class,'detail'])->name('front.urun-detay');
Route::get('/sepet',[CardController::class,'card'])->name('front.sepet');
Route::get('/odeme',[CheckoutController::class,'index'])->name('front.odeme');
Route::get('/siparislerim',[MyOrdersController::class,'index'])->name('front.siparislerim');
Route::get('/siparislerim-detay',[MyOrdersController::class,'detail'])->name('front.siparislerim-detay');

Route::get("kayit-ol",[RegisterController::class,'showForm'])->name('register');
Route::post("kayit-ol",[RegisterController::class,'register']);
Route::get("giris",[LoginController::class,'showFrom'])->name('login');
Route::post("giris",[LoginController::class,'login']);

// prefix ön takma isim
// aşağıda yazacağımız linkleri admin'in altında grupla
Route::prefix("admin")->group(function (){
   Route::get("/",[DashboardController::class,'index'])->name('admin.index');
});
