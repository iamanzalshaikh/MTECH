# =============================================
# CAD TECH - Admin Panel Verification Script
# Run: .\scripts\check-admin.ps1
# =============================================

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  M-Tech Admin Panel Setup Checker   " -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check .env file
Write-Host "[1] Checking .env file..." -ForegroundColor Yellow
$envFile = ".env"
if (Test-Path $envFile) {
    Write-Host "    .env file found." -ForegroundColor Green
    $envContent = Get-Content $envFile
    $hasUser = $envContent | Where-Object { $_ -match "^ADMIN_USERNAME=" }
    $hasPass = $envContent | Where-Object { $_ -match "^ADMIN_PASSWORD=" }
    $hasDb   = $envContent | Where-Object { $_ -match "^DATABASE_URL=" }

    if ($hasUser) { Write-Host "    ADMIN_USERNAME is set." -ForegroundColor Green }
    else          { Write-Host "    ADMIN_USERNAME is MISSING! Add it to .env" -ForegroundColor Red }

    if ($hasPass) { Write-Host "    ADMIN_PASSWORD is set." -ForegroundColor Green }
    else          { Write-Host "    ADMIN_PASSWORD is MISSING! Add it to .env" -ForegroundColor Red }

    if ($hasDb)   { Write-Host "    DATABASE_URL   is set." -ForegroundColor Green }
    else          { Write-Host "    DATABASE_URL   is MISSING! Add it to .env" -ForegroundColor Red }
} else {
    Write-Host "    .env file NOT found! Create it from .env.example" -ForegroundColor Red
}

Write-Host ""

# Step 2: Check if dev server is reachable
Write-Host "[2] Checking if local dev server is running..." -ForegroundColor Yellow
$devUrl = "http://localhost:3000/api/admin/login"
try {
    $body    = '{"username":"admin","password":"admin123"}'
    $headers = @{ "Content-Type" = "application/json" }
    $resp    = Invoke-RestMethod -Uri $devUrl -Method POST -Body $body -Headers $headers -ErrorAction Stop
    Write-Host "    Login API responded OK! Admin login works locally." -ForegroundColor Green
} catch {
    $status = $_.Exception.Response.StatusCode.value__
    if ($status -eq 401) {
        Write-Host "    Server running but credentials REJECTED (wrong username/password in .env)" -ForegroundColor Red
    } elseif ($null -eq $status) {
        Write-Host "    Dev server not running. Start it with: npm run dev" -ForegroundColor DarkYellow
        Write-Host "    (Skip this check if testing deployed URL)" -ForegroundColor DarkYellow
    } else {
        Write-Host "    Server error: HTTP $status" -ForegroundColor Red
    }
}

Write-Host ""

# Step 3: Print credentials summary
Write-Host "[3] Current Admin Credentials:" -ForegroundColor Yellow
if ($envContent) {
    $username = ($envContent | Where-Object { $_ -match "^ADMIN_USERNAME=" }) -replace "^ADMIN_USERNAME=",""
    $password = ($envContent | Where-Object { $_ -match "^ADMIN_PASSWORD=" }) -replace "^ADMIN_PASSWORD=",""
    Write-Host "    Username : $username" -ForegroundColor White
    Write-Host "    Password : $password" -ForegroundColor White
}

Write-Host ""
Write-Host "[4] Admin Panel URLs:" -ForegroundColor Yellow
Write-Host "    Local      -> http://localhost:3000/admin" -ForegroundColor Cyan
Write-Host "    Production -> https://YOUR-DOMAIN.com/admin" -ForegroundColor Cyan
Write-Host "    (Replace YOUR-DOMAIN with your actual deployed domain)" -ForegroundColor DarkGray

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  Done! Open /admin in your browser  " -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""
