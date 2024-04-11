package org.zerock.bgapi.security.handler.filter;
import java.io.IOException;

import org.glassfish.jaxb.core.annotation.OverrideAnnotationOf;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;

@Log4j2

public class JWTCheckFilter extends OncePerRequestFilter{
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }
    String path = request.getRequestURI();
    log.info("check uri........" + path);

    if (path.startsWith("/api/cards/View/")) { //조회 경로
        return true;
    }
        return false;
    }
    //@Override
    //protected boolean shouldNotFilter(HttpServletRequest request) throws jakarta.servlet.ServletException {
     //   String path = request.getRequestURI();
      //  log.info("check uri........." + path);
       // return false;
    //}

    @Override
    protected void doFilterInternal(HttpServletRequest request,HttpServletResponse response, FilterChain filterChain) throws ServerException, IOException {
        log.info("--------------");
        log.info("--------------");
        log.info("--------------");
        filterChain.doFilter(request, response); 

    }


}
