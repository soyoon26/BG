package org.zerock.bgapi.security.handler;

import java.io.IOException; // 입출력 관련 예외처리 클래스
import java.io.PrintWriter; // 출력관련 메서드 제공
import java.util.Map; //java.util은 표준 라이브러리, map은 키-값 의 컬렉션

import org.glassfish.jaxb.core.annotation.OverrideAnnotationOf;
import org.springframework.security.core.AuthenticationException; //인증과정 예외 처리, 주로 사용자 인증 실패
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
//사용자 인증 실패시 실행할 작업 정의, 오류메세지 제공이나 로깅 수행

import com.google.gson.Gson; 
//구글에서 제공 라이브러리,java를 json으로 직렬화하거나 역직렬화

import jakarta.servlet.ServletException; 
//서블릿 발생 예외, 작업 중 오류 처리/서블릿 컨테이너는 예외 발생시키고 ServletException객체를 생성하여 서블릿으로 전달
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;

@Log4j2

public class APILoginFail implements AuthenticationFailureHandler{
    
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException{
        log.info("Login fail ...."+exception);
        Gson gson = new Gson();
    
        
        String jsonStr = gson.toJson(Map.of("error","ERROR_LOGIN"));
        response.setContentType("application/json");
        PrintWriter printWriter = response.getWriter();
        printWriter.println(jsonStr);
        printWriter.close();
    }
}
