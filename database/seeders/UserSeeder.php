<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrayData = [
			[
				'name' => 'Admin',
				'email' => 'admin',
				'password' => Hash::make("admin"),
				'role' => 'admin',
			],
			[
				'name' => 'Author',
				'email' => 'author',
				'password' => Hash::make("author"),
				'role' => 'author',
			],
		];
		
		foreach($arrayData as $value) {
			User::create($value);
		}
    }
}
