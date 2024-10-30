package com; // Adjust to your actual package name

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
    // JpaRepository provides methods like deleteById, findAll, etc.
}
