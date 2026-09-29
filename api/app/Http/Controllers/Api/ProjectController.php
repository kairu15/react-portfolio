<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    /**
     * GET /api/projects
     *
     * Public read-only list of portfolio projects, ordered by sort_order.
     * Featured (capstone) projects sort first because the seeder assigns
     * them the lowest sort_order values.
     */
    public function index(): JsonResponse
    {
        $projects = Project::query()
            ->orderBy('sort_order')
            ->get();

        return response()->json([
            'data' => $projects,
        ]);
    }
}
