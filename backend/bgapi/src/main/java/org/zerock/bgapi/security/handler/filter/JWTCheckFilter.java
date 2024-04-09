package org.zerock.bgapi.security.handler.filter;
import java.io.IOException;

import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;

@Log4j2

public class JWTCheckFilter extends OncePerRequestFilter{
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws jakarta.servlet.ServletException {
        String path = request.getRequestURI();
        log.info("check uri........." + path);
        return false;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,HttpServletResponse response, FilterChain filterChain) throws ServerException, IOException {
        log.info("--------------");
        log.info("--------------");
        log.info("--------------");
        filterChain.doFilter(request, response); 

    }
}
