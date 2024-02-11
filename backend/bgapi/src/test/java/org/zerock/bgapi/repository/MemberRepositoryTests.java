package org.zerock.bgapi.repository;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.zerock.bgapi.domain.Member;
import org.zerock.bgapi.domain.MemberRole;

@SpringBootTest //스프링부트 애플리케이션 테스트
@Log4j2
public class MemberRepositoryTests {
    @Autowired 
    private MemberRepository memberRepository;

    @Autowired //스프링에 의존성 주입 요청(프로그램에 필요한 객체를 스프링프레임워크에 요청하여 받는 것)
    //스프링이 필요한 객체를 찾아 필요한 곳에 주입하는 것
    private PasswordEncoder passwordEncoder;

    @Test
    public void testInsertMember(){ //회원 데이터를 데이터베이스에 추가하는 메서드
        for (int i =0; i < 10; i++) {
            Member member = Member.builder()
                .email("user"+i+"@aaa.com")
                .pw(passwordEncoder.encode("9894"))
                .nickname("USER"+i)
                .build();
            member.addRole(MemberRole.USER);

            if(i>=5){
                member.addRole(MemberRole.MANAGER);
            }
            if(i>=8){
                member.addRole(MemberRole.ADMIN);
            }
        memberRepository.save(member); //데이터베이스에 저장
        }
    }
    @Test
    public void testRead(){
        String email = "user9@aaa.com";
        Member member = memberRepository.getWithRoles(email);
        log.info("-------------");
        log.info(member);
    }   
}