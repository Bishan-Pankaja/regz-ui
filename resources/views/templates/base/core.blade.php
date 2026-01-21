@extends('templates/wrapper', [
    'css' => ['body' => 'bg-neutral-800'],
])

@section('assets')
    <link rel="stylesheet" href="{{ asset('themes/modone/css/client.css') }}">
@endsection

@section('container')
    <div id="modal-portal"></div>
    <div id="app"></div>
@endsection
