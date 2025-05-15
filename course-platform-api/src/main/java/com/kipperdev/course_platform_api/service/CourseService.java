package com.kipperdev.course_platform_api.service;

import com.kipperdev.course_platform_api.dto.CourseDto;
import com.kipperdev.course_platform_api.dto.VideoDto;

import java.util.List;

public interface CourseService {
    List<CourseDto> findAll();
    CourseDto findBySlug(String slug);
    VideoDto findVideo(String courseSlug, String videoSlug);
} 