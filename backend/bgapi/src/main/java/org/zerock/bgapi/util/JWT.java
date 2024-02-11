package org.zerock.bgapi.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys; //JWT 키 생성관리
import lombok.extern.log4j.Log4j2;

import java.time.ZonedDateTime; //시간대 변환 가능
import java.util.*;

import javax.crypto.SecretKey;

@Log4j2
public class JWT {
    private static String key = "123456789012345678901234567890";
    public static String generateToken(Map<String, Object> valueMap, int min) {
        SecretKey key = null;
        try{
            key = Keys.hmacShaKeyFor(JWT.key.getBytes("UTF-8"));
        } catch(Exception e){
            throw new RuntimeException(e.getMessage());
        }
        String jwtStr = Jwts.builder()
            .setHeader(Map.of("typ","JWT"))
            .setClaims(valueMap)
            .setIssuedAt(Date.from(ZonedDateTime.now().toInstant()))
            .setExpiration(Date.from(ZonedDateTime.now().plusMinutes(min).toInstant()))
            .signWith(key)
            .compact();
        return jwtStr;
    }    

    public static Map<String, Object> validateToken(String token) {
        Map<String, Object> claim = null;
        try{
            SecretKey key = Keys.hmacShaKeyFor(JWT.key.getBytes("UTF-8"));
            claim = Jwts.parserBuilder()
            .setSigningKey(key)
            .build()
            .parseClaimsJws(token) //파싱 및 검증, 실패 시 에러
            .getBody();
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
