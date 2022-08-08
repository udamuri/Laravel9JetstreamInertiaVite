<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class Post extends Model
{
    use HasFactory;

	/**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'title',
        'content',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [];

	public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

	public function getFormattedCreatedAtAttribute($value)
    {
        return Carbon::parse($this->created_at)->format('d M Y H:i:s');
    }
        
    public function getFormattedUpdatedAtAttribute($value)
    {
        return Carbon::parse($this->updated_at)->format('d M Y H:i:s');
    }

    public function scopeWhereSearch($query, $search)
    {
        foreach (explode(' ', $search) as $term) {
            $query->where('posts.title', 'LIKE', '%'.$term.'%')
                ->orWhere('posts.content', 'LIKE', '%'.$term.'%');
        }
    }
    
    public function scopeApplyFilters($query, array $filters)
    {
        $filters = collect($filters);
        if ($filters->get('search')) {
            $query->whereSearch($filters->get('search'));
        }
    }

    public function scopePaginateData($query, $limit)
    {
        if ($limit == 'all') {
            return collect(['data' => $query->get()]);
        }

        return $query->paginate($limit);
    }

	public static function createWebApp($request) {        
        $data = $request;
		$data['user_id'] = Auth::id();
        $user = self::create($data);
		$user->fresh();

        return $user;
    }

    public function updateWebApp($request) {
        $data = $request;
		
        if($this->update($data)) {
			
		}

        return $this;
    }
}
