# Script to download company logos
# Run this script from the project root: .\public\images\download-logos.ps1

$ErrorActionPreference = "Continue"
$baseUrl = "https://logos-world.net/wp-content/uploads"

$logos = @{
    "fortis-logo.png" = "$baseUrl/2020/11/Fortis-Logo.png"
    "unilever-logo.png" = "$baseUrl/2020/04/Unilever-Logo.png"
    "usha-logo.png" = "$baseUrl/2020/11/Usha-Logo.png"
    "glenmark-logo.png" = "$baseUrl/2021/08/Glenmark-Logo.png"
    "ongc-logo.png" = "$baseUrl/2021/08/ONGC-Logo.png"
    "tech-mahindra-logo.png" = "$baseUrl/2020/11/Tech-Mahindra-Logo.png"
    "pnb-metlife-logo.png" = "$baseUrl/2021/08/PNB-MetLife-Logo.png"
    "shriram-general-insurance-logo.png" = "$baseUrl/2021/08/Shriram-General-Insurance-Logo.png"
    "bajaj-allianz-logo.png" = "$baseUrl/2021/08/Bajaj-Allianz-Logo.png"
    "abbott-logo.png" = "$baseUrl/2020/04/Abbott-Logo.png"
}

$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    "Accept" = "image/png,image/*;q=0.8,*/*;q=0.5"
}

$outputDir = Join-Path $PSScriptRoot "."
Write-Host "Downloading logos to: $outputDir" -ForegroundColor Cyan

foreach ($file in $logos.Keys) {
    $url = $logos[$file]
    $outputPath = Join-Path $outputDir $file
    
    Write-Host "`nDownloading $file..." -ForegroundColor Yellow
    try {
        $response = Invoke-WebRequest -Uri $url -Headers $headers -OutFile $outputPath -ErrorAction Stop
        Write-Host "✓ Successfully downloaded $file" -ForegroundColor Green
    }
    catch {
        Write-Host "✗ Failed to download $file" -ForegroundColor Red
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
        Write-Host "  You may need to download this manually from: $url" -ForegroundColor Yellow
    }
}

Write-Host "`nDownload process completed!" -ForegroundColor Cyan
Write-Host "If any downloads failed, you can:" -ForegroundColor Yellow
Write-Host "1. Download them manually from the URLs above" -ForegroundColor Yellow
Write-Host "2. Or use a browser extension to download images" -ForegroundColor Yellow

