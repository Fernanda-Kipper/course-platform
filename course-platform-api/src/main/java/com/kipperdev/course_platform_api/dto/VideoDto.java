package com.kipperdev.course_platform_api.dto;

public record VideoDto(
    Long id,
    String slug,
    String gumletAssetId,
    String title,
    Integer order
) {} 