package com.kipperdev.course_platform_api.dto;

import java.util.List;

public record CourseDto(
    Long id,
    String slug,
    String title,
    String description,
    List<VideoDto> videos
) {} 