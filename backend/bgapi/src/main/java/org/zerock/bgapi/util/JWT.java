package org.zerock.bgapi.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys; //JWT 키 생성관리
import lombok.extern.log4j.Log4j2;

import java.time.ZonedDateTime; //시간대 변환 가능
import java.util.*;

import javax.crypto.SecretKey;

@Log4j2
public class JWT {
    private static String key = "98949894989498949894989498949894";
    public static String generateToken(Map<String, Object> valueMap, int min) {
        //토큰 생성, 사용자 정보 담고있을 valueMap과 만료시간은 분으로 정하기
        SecretKey key = null;
        try{
            key = Keys.hmacShaKeyFor(JWT.key.getBytes("UTF-8"));
        } catch(Exception e){ //예외시
            throw new RuntimeException(e.getMessage()); //예외메세지를 래핑하여 던짐
        }
        String jwtStr = Jwts.builder() //JWT생성 빌더 생성
            .setHeader(Map.of("typ","JWT")) //토큰 유형등의 헤더 설정
            .setClaims(valueMap) //클레임 : JWT에 저장되는 정보
            .setIssuedAt(Date.from(ZonedDateTime.now().toInstant())) //토큰발행시간
            .setExpiration(Date.from(ZonedDateTime.now().plusMinutes(min).toInstant())) //토큰만료시간
            .signWith(key) //지정된 키로 토큰 서명
            .compact(); //최종 생성
        return jwtStr;
    }    

    //토큰 검증, 클레임 반환
    public static Map<String, Object> validateToken(String token) {
        Map<String, Object> claim = null;
        try{
            SecretKey key = Keys.hmacShaKeyFor(JWT.key.getBytes("UTF-8"));
            claim = Jwts.parserBuilder() //JWT파서 생성
            .setSigningKey(key) //서명키 설정
            .build()
            .parseClaimsJws(token) //파싱 및 검증, 실패 시 에러
            .getBody(); //JWT의 본문, 즉 클레임이 반환됨
        }catch(MalformedJwtException malformedJWTException){
            throw new JWTException("MalFormed");
        }catch(ExpiredJwtException expiredJwtException){
            throw new JWTException("Expired");
        }catch(InvalidClaimException invalidClaimException){
            throw new JWTException("invalid");
        }catch (JWTException jwtException){
            throw new JWTException("JWTError");
        }catch(Exception e){
            throw new JWTException("Error");
        }
        return claim;
    }
}
