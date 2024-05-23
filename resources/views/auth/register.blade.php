@extends("layouts.auth.auth")
@section("title","KAYIT")
@push("css") @endpush
@section("body")
    <div class="auth-form-wrapper px-4 py-5">
        <a href="#" class="noble-ui-logo d-block mb-2">Ticaret<span>APP</span></a>
        <h5 class="text-muted fw-normal mb-4">Hesap Oluştur.</h5>
        <form class="forms-sample" action="{{ route('register') }}" METHOD="POST" id="registerFrom">
            @csrf
            <!-- post isteği yapıldığında inputların içerisindeki bilgiler name ile gönderilir. -->
            <!-- csrf token verileri gönderdiğimizde verinin güvenliğini sağlar -->

            <!-- backend ile toplu hata gösterimi -->
            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <div class="mb-3">
                <label for="name" class="form-label">İsim Soyisim</label>
                <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ old('name') }}">
                @error('name')
                    <div class="invalid-feedback d-block"> {{ $message }}</div>
                @enderror
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" class="form-control @error('email') is-invalid @enderror" id="email" name="email" value="{{ old('email') }}">
                @error('email')
                <div class="invalid-feedback d-block"> {{ $message }}</div>
                @enderror
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Parola</label>
                <input type="password" class="form-control @error('password') is-invalid @enderror" id="password"  name="password">
                @error('password')
                <div class="invalid-feedback d-block"> {{ $message }}</div>
                @enderror
            </div>
            <div class="mb-3">
                <label for="password_confirmation" class="form-label">Parola (Doğrula)</label>
                <input type="password" class="form-control @error('password_confirmation') is-invalid @enderror" id="password_confirmation" name="password_confirmation">
                @error('password_confirmation')
                <div class="invalid-feedback d-block"> {{ $message }}</div>
                @enderror
            </div>
            <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input" id="authCheck" name="remember">
                <label class="form-check-label" for="authCheck">Beni Hatırla</label>

            </div>
            <div>
                <a href="javascript:void(0)" class="btn btn-primary text-white me-2 mb-2 mb-md-0" id="btnRegister">
                    Kayıt Ol
                </a>
                <button type="button" class="btn btn-outline-primary btn-icon-text mb-2 mb-md-0">
                    <i class="mdi mdi-google"></i> Google Hesabı ile kayıt
                </button>
            </div>
            <a href="{{ route('login') }}" class="d-block mt-3 text-muted">Hesabın var mı? Giriş sayfası.</a>
        </form>
    </div>
@endsection
@push("js")
    <script src="{{ asset('assets/js/auth/register.js') }}"></script>
@endpush
