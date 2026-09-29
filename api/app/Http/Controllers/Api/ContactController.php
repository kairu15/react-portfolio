<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * POST /api/contact
     *
     * Validates and persists a contact-form submission.
     * Returns a 201 with a success message; validation errors are
     * returned by Laravel as 422 with field-level errors.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:2', 'max:100'],
            'email' => ['required', 'email', 'max:255'],
            'message' => ['required', 'string', 'min:10', 'max:5000'],
        ]);

        Message::create($validated);

        return response()->json([
            'message' => 'Thanks for reaching out — I will get back to you soon.',
        ], 201);
    }
}
