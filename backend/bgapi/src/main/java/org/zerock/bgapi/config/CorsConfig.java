package org.zerock.bgapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*"); // 허용할 도메인 설정 (모든 도메인)
        config.addAllowedHeader("*"); // 허용할 헤더 설정
        config.addAllowedMethod("*"); // 허용할 HTTP 메서드 설정 (GET, POST, 등)
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
