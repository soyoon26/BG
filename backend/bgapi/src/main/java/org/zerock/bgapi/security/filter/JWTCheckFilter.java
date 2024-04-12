package org.zerock.bgapi.security.filter;
import java.io.IOException;


import java.io.PrintWriter;
import java.util.Map;

//import org.glassfish.jaxb.core.annotation.OverrideAnnotationOf;
import org.springframework.web.filter.OncePerRequestFilter;
import org.zerock.bgapi.util.JWT;

import com.google.gson.Gson;


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


    protected void doFilterInternal(HttpServletRequest request,HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.info("--------------JWTCheckFilter");
        
        String authHeaderStr = request.getHeader("Authorization");

        try {
            String accessToken = authHeaderStr.substring(7);
            Map<String,Object> claims = JWT.validateToken(accessToken);

            log.info("JWT claims: " + claims);

            filterChain.doFilter(request, response);

        } catch(Exception e) {
            log.info("JWT Check Error......");
            log.info(e.getMessage());

            Gson gson = new Gson();
            String msg = gson.toJson(Map.of("error", "ERROR_ACCESS_TOKEN"));

            response.setContentType("application/json");
            PrintWriter printWriter = response.getWriter();
            printWriter.println(msg);
            printWriter.close();
        }

        filterChain.doFilter(request, response); 

    }


}
