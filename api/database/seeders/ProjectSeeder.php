<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::query()->delete();

        Project::create([
            'title' => 'Geo-Tagging of Livestock and Poultry Dispersal and Re-Dispersal',
            'description' => 'Capstone system for the Bayawan City Veterinary Office: maps livestock and poultry dispersal transactions with geo-tagged records, allowing field technicians to log, track and re-disperse animals with location data.',
            'stack' => ['Django REST Framework', 'React', 'PostgreSQL', 'Leaflet'],
            'repo_url' => 'https://github.com/kairu15',
            'live_url' => null,
            'featured' => true,
            'sort_order' => 1,
        ]);

        Project::create([
            'title' => 'Portfolio Site (This One)',
            'description' => 'A Bauhaus-styled single-page portfolio. Laravel API serving projects and contact submissions, React + Vite + Tailwind on the front.',
            'stack' => ['Laravel', 'React', 'Vite', 'Tailwind CSS'],
            'repo_url' => 'https://github.com/kairu15',
            'live_url' => null,
            'featured' => false,
            'sort_order' => 2,
        ]);

        Project::create([
            'title' => 'More Coming Soon',
            'description' => 'Placeholder slot for the next build. Watch this space.',
            'stack' => ['TBD'],
            'repo_url' => null,
            'live_url' => null,
            'featured' => false,
            'sort_order' => 3,
        ]);
    }
}
