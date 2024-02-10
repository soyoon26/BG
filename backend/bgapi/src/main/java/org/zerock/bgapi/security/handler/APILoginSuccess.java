package org.zerock.bgapi.security.handler;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.zerock.bgapi.dto.MemberDTO;

import com.google.gson.Gson;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;

@Log4j2
public class APILoginSuccess implements 
AuthenticationSuccessHandler{
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        log.info("---------------------------------");
        log.info(authentication);
        log.info("---------------------------------");

        MemberDTO memberDTO = (MemberDTO)authentication.getPrincipal();
        Map<String,Object> claims = memberDTO.getClaims();

        claims.put("accessToken","");
        claims.put("refreshToken","");
        Gson gson = new Gson();

        String jsonStr = gson.toJson(claims);

        response.setContentType("application/json; charset=UTF-8");
        PrintWriter printWriter = response.getWriter();
        printWriter.println(jsonStr);
        printWriter.close();
    } 
}



