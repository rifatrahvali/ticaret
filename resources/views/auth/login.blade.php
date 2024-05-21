@extends("layouts.auth.auth")
@section("title","KAYIT")
@push("css") @endpush
@section("body")
    <div class="auth-form-wrapper px-4 py-5">
        <a href="#" class="noble-ui-logo d-block mb-2">Ticaret<span>APP</span></a>
        <h5 class="text-muted fw-normal mb-4">Giriş Ekranı</h5>
        <form class="forms-sample" action="{{ route('login') }}" METHOD="POST">
            <div class="mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="email" placeholder="E-mail" name="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Parola</label>
                <input type="password" class="form-control" id="password" placeholder="Parola" name="password">
            </div>
            <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input" id="authCheck" name="remember">
                <label class="form-check-label" for="authCheck">
                    Beni Hatırla
                </label>
            </div>
            <div>
                <a href="javascript:void(0)" class="btn btn-primary text-white me-2 mb-2 mb-md-0" id="Login">Giriş</a>
                <button type="button" class="btn btn-outline-primary btn-icon-text mb-2 mb-md-0">
                    <i class="mdi mdi-google"></i>
                    Google Hesabı ile Giriş
                </button>
            </div>
            <a href="{{ route('register') }}" class="d-block mt-3 text-muted">Hesabınız yok mu? Kayıt ol sayfası.</a>
        </form>
    </div>
@endsection
@push("js") @endpush
