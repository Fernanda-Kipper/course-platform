package com.kipperdev.course_platform_api.config;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableCaching
public class CacheConfig {

    // A configuração padrão do Spring Boot é suficiente pois usa ConcurrentMapCacheManager por padrão
} 