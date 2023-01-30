<?php

namespace App\Http\Controllers;

use App\Models\TodoList;
use Illuminate\Http\Request;

class todoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TodoList::orderBy('status', 'desc')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        TodoList::create($input);
        $arr = [
            'status' => 'ok',
            'mes' => 'thêm thành công',
            'data' => TodoList::orderBy('status', 'desc')->get()
        ];

        return response($arr);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = TodoList::find($id);
        $arr = [
            'status' => 'ok',
            'mes' => 'tìm kiếm theo id',
            'data' => $data
        ];
        return response($arr);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $todo = TodoList::find($id);
        $todo->status = 3;
        $todo->save();
        $arr = [
            'status' => 'ok',
            'mes' => 'thêm thành công',
            'data' => TodoList::orderBy('status', 'desc')->get()
        ];

        return response($arr);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        TodoList::find($id)->delete();
        $arr = [
            'status' => 'ok',
            'mes' => 'tìm kiếm theo id',
            'data' => TodoList::orderBy('status', 'desc')->get()
        ];
        return response($arr);
    }
    public function deleteAll()
    {
        foreach (TodoList::all() as $todo) {
            $todo->delete();
        }
        $arr = [
            'status' => 'ok',
            'mes' => 'tìm kiếm theo id',
            'data' => []
        ];
        return response($arr);
    }
    public function filler($status)
    {
        $arr = [
            'status' => 'ok',
            'mes' => 'tìm kiếm theo id',
            'data' => TodoList::select()->where('status', '=', $status)->get()
        ];
        return response($arr);
    }
}
