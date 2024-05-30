<?php
  
  namespace Database\Factories;
  
  use App\Models\User;
  use Illuminate\Database\Eloquent\Factories\Factory;
  use Illuminate\Support\Facades\Hash;
  
  /**
   * @extends Factory<User>
   */
  class UserFactory extends Factory
  {
    /**
     * The current password being used by the factory.
     */
    
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
      $gender = $this->faker->randomElement(['male', 'female']);
      $full_name = $this->faker->name($gender);
//      $gender = $gender === 'male' ? 'Laki-laki' : 'Perempuan';
      
      return [
        'full_name' => $this->faker->name,
        'id_number' => $this->faker->randomNumber(5, true) . $this->faker->randomNumber(5, true),
        'avatar' => $this->faker->imageUrl(640, 480, $full_name, false,),
        'phone_number' => $this->faker->phoneNumber,
//        'role' => 'student',
        'email' => strtolower(str_replace(' ', '.', $full_name)) . '@mbti.id',
        'password' => Hash::make(strtolower(str_replace(' ', '.', $full_name)) . '@mbti.id'),
      ];
    }
    
    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
      return $this->state(fn(array $attributes) => [
        'email_verified_at' => null,
      ]);
    }
  }
