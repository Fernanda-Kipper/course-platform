package com.kipperdev.course_platform_api.repository;

import com.kipperdev.course_platform_api.domain.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
    Optional<Video> findByCourse_SlugAndSlug(String courseSlug, String videoSlug);
} 