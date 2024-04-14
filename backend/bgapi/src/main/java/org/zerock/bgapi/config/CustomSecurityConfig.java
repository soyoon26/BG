package org.zerock.bgapi.config; //설정

import java.util.Arrays; //배열 작업 수행 메서드

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain; //보안필터 정의(인증, 권한부여, 인가 등)
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.config.http.SessionCreationPolicy; //세션생성정책 정의
import org.springframework.security.crypto.password.PasswordEncoder; //비밀번호 암호화
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; //BCrypt 비밀번호 해시화
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.zerock.bgapi.security.handler.APILoginSuccess;
//import org.zerock.bgapi.security.filter.JWTCheckFilter;
import org.zerock.bgapi.security.handler.APILoginFail;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2; //로깅지원클래스에 대해 로거 필드 자동 생성

@Configuration
@Log4j2 //로깅 프레임워크 예시)log.info
@RequiredArgsConstructor
public class CustomSecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        log.info("-----------------security config-----------");
        http.cors(httpSecurityCorsConfigurer -> {
            httpSecurityCorsConfigurer.configurationSource(corsConfigurationSource());
        });
        http.sessionManagement(sessionConfig -> sessionConfig.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        //API서버는 무상태 기본, 세션생성하지 않고 세션상태 유지하지 않음
        http.csrf(config -> config.disable());

        http.formLogin(config -> {
            config.loginPage("/api/member/login");
            config.successHandler(new APILoginSuccess());
            config.failureHandler(new APILoginFail());
        });
        //http.addFilterBefore(new JWTCheckFilter(),UsernamePasswordAuthenticationFilter.class); //JWT 체크

        return http.build();
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("HEAD","GET","POST","PUT","DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("Authorization","Cache-Control","Content-Type"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",configuration);
        return source;
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
