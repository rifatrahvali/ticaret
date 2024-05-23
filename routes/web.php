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

// FRONT
Route::get('/',[FrontController::class,'index'])->name('front.index');
Route::get('/urun-listesi',[ProductController::class,'list'])->name('front.urun-listesi');
Route::get('/urun-detay',[ProductController::class,'detail'])->name('front.urun-detay');
Route::get('/sepet',[CardController::class,'card'])->name('front.sepet');
Route::get('/odeme',[CheckoutController::class,'index'])->name('front.odeme');
Route::get('/siparislerim',[MyOrdersController::class,'index'])->name('front.siparislerim');
Route::get('/siparislerim-detay',[MyOrdersController::class,'detail'])->name('front.siparislerim-detay');


// REGISTER
// middleware gruplaması - tek tek yazmamak için
Route::middleware('throttle:registration')->group(function (){
    Route::get("kayit-ol",[RegisterController::class,'showForm'])->name('register');
    Route::post("kayit-ol",[RegisterController::class,'register']);
});

Route::get('/dogrula/{token}',[RegisterController::class,'verify'])->name('verify');

//->middleware('throttle:registration'); throttle ile birlikle verirsek bizim oluşturduğumuz limitserviceprovider'ı beraber kullanırız.
// LOGIN
Route::get("giris",[LoginController::class,'showFrom'])->name('login')->middleware('throttle:5,60');
// throttle varsayılan olarak kullanımı : 60 dakikada 5 istek atılabilir.
Route::post("giris",[LoginController::class,'login']);

// ADMIN
// prefix ön takma isim aşağıda yazacağımız linkleri admin'in altında grupla
Route::prefix("admin")->group(function (){
   Route::get("/",[DashboardController::class,'index'])->name('admin.index');
});
