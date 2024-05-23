<?php

namespace App\Providers;

use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
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
        //
        RateLimiter::for('registration',function ($job) {
            // ipli kişi saatte 5 kayıt için istek atabilir.
           return Limit::perHour(5)->by($job->ip());
        });
        // ipli kişi saatte 10 giriş için istek atabilir.
        RateLimiter::for('login',function ($job) {
            // ipli kişi saatte 5 istek atabilir.
            return Limit::perHour(10)->by($job->ip());
        });
        // ipli kişi saatte 100 sayfa yenilemesi için istek atabilir.
        RateLimiter::for('high-traffic-page',function ($job) {
            return Limit::perHour(100)->by($job->ip());
        });
    }
}
