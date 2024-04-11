package org.zerock.bgapi.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.bgapi.domain.Member;
import org.zerock.bgapi.domain.MemberRole;
import org.zerock.bgapi.repository.MemberRepository;

@RestController
@RequestMapping("/api")
public class SignUpController {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody Member member) {
        // 회원 객체 생성
        Member newMember = Member.builder()
                .email(member.getEmail())
                .pw(passwordEncoder.encode(member.getPw()))
                .nickname(member.getNickname())
                .build();

        // 회원 역할 설정
        newMember.addRole(MemberRole.USER);

        // 회원 정보 저장
        memberRepository.save(newMember);

        return new ResponseEntity<>("회원가입이 완료되었습니다.", HttpStatus.CREATED);
    }
}



    

