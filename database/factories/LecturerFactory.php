<?php
  
  namespace Database\Factories;
  
  use App\Models\Lecturer;
  use Illuminate\Database\Eloquent\Factories\Factory;
  
  /**
   * @extends Factory<Lecturer>
   */
  class LecturerFactory extends Factory
  {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
      return [
        'academic_year' => $this->faker->date('Y')
      ];
    }
  }
