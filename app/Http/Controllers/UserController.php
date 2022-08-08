<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Lang;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserRequest;
use Inertia\Inertia;

class UserController extends Controller
{
    private $path_render;
	private $route_name;
	private $title_index;
	private $title_create;
	private $title_edit;
	private $breadcrumb_index;
	private $breadcrumb_create;
	private $breadcrumb_edit;
	private $success_add;
	private $success_edit;

	public function __construct()
	{
		$this->path_render = "User/";
		$this->route_name = "users.";
		$this->title_index = "Users";
		$this->title_create = "Add {$this->title_index}";
		$this->title_edit = "Edit {$this->title_index}";
		$this->success_add = Lang::get('messages.success_add', ['attribute' => $this->title_index]);
		$this->success_edit = Lang::get('messages.success_update', ['attribute' => $this->title_index]);

		$this->breadcrumb_index = [
			[
				'title' => $this->title_index,
				'url' => null,
				'active' => true
			]
		];
		
		$this->breadcrumb_create = [
			[
				'title' => $this->title_index,
				'url' => route($this->route_name . 'index'),
				'active' => true
			],
			[
				'title' => $this->title_create,
				'url' => null,
				'active' => true
			]
		];
		
		$this->breadcrumb_edit = [
			[
				'title' => $this->title_index,
				'url' => route($this->route_name . 'index'),
				'active' => false
			],
			[
				'title' => $this->title_edit,
				'url' => null,
				'active' => true
			]
		];
	}

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $limit = (int) $request->get('per_page') > 0 ? (int) $request->get('per_page') : 15;
        $page = (int) $request->get('page') > 0 ? (int) $request->get('page') : 1;
        $queries = ['search', 'page'];
        return Inertia::render($this->path_render . 'Index', [
            'models' => User::applyFilters($request->only($queries))
                ->whereRoleIn(['admin', 'author'])
                ->whereEmailNotIn(['udamuri@gmail.com'])
                ->paginateData($limit)
				->appends(request()->query()),
            'add_link' => route($this->route_name . 'create'),
            'route_name' => $this->route_name,
            'title' => $this->title_index,
            'search' => $request->query('search', null),
            'breadcrumb' => $this->breadcrumb_index,
            'filters' => $request->all($queries),
            'start' => $limit * ($page - 1),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render($this->path_render . 'Create', [
			'form_type' => 'add',
			'route_url' => route($this->route_name . 'store'),
            'title' => $this->title_create,
            'role' => generalAdmin(),
            'breadcrumb' => $this->breadcrumb_create,
		]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        User::createWebApp($request->validated());

        return redirect()->route($this->route_name . 'index')->with('success', $this->success_add);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return Inertia::render($this->path_render . 'Create', [
			'form_type' => 'edit',
			'route_url' => route($this->route_name . 'update', $user->id),
			'title' => $this->title_edit,
			'role' => generalAdmin(),
			'breadcrumb' => $this->breadcrumb_edit,
			'model' => $user
		]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, User $user)
    {
        $user->updateWebApp($request->validated());
        return redirect()->route($this->route_name . 'index')->with('success', $this->success_edit);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
