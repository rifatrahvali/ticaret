<?php

namespace App\Providers;

use App\Events\UserRegisterEvent;
use App\Listeners\UserRegisterListener;
use App\Models\User;
use App\Observers\UserObserver;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    protected $listen = [
        //hangi event dilenecek
        UserRegisterEvent::class => [
            // eventin listenerı
            // birden fazla listener dinleyebilir
            // bir kaset : event
            // kaseti : bir veya birden fazla kişi dinleyebilir
            UserRegisterListener::class
        ]
    ];

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // observer 2
        // User modelini observe et - UserObserve Class'ı ile
        //User::observe(UserObserver::class);
    }
}
