<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ProjectController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes (public, read-only + contact submission)
|--------------------------------------------------------------------------
|
| Portfolio endpoints consumed by the React SPA (Vite dev server or the
| deployed frontend). No authentication in v1.
|
| TODO: When an admin dashboard is added to manage projects, install
| Laravel Sanctum and protect write endpoints like so:
|
|   Route::middleware('auth:sanctum')->group(function () {
|       Route::post('/projects', [ProjectController::class, 'store']);
|       Route::put('/projects/{project}', [ProjectController::class, 'update']);
|       Route::delete('/projects/{project}', [ProjectController::class, 'destroy']);
|       Route::get('/messages', [ContactController::class, 'index']);
|   });
|
*/

Route::get('/projects', [ProjectController::class, 'index']);

// Throttled to blunt simple spam bots (5 submissions per minute per IP).
Route::post('/contact', [ContactController::class, 'store'])
    ->middleware('throttle:5,1');
