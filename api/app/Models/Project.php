<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'description',
        'stack',
        'repo_url',
        'live_url',
        'featured',
        'sort_order',
    ];

    protected $casts = [
        'stack' => 'array',
        'featured' => 'boolean',
    ];
}
