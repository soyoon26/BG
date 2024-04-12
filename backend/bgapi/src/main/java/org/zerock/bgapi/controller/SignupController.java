package org.zerock.bgapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller; // 변경
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody; // 추가
import org.zerock.bgapi.domain.Member;
import org.zerock.bgapi.domain.MemberRole;
import org.zerock.bgapi.dto.MemberDTO;
import org.zerock.bgapi.repository.MemberRepository;
import java.util.Map;

@Controller // 변경
@RequestMapping("/api")
public class SignupController {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    @ResponseBody // 추가
    public ResponseEntity<String> signup(@RequestBody MemberDTO request) {
        String email = request.getEmail();
        String password = request.getPw();
        String nickname = request.getNickname();

        // 회원 객체 생성
        Member member = Member.builder()
                .email(email)
                .pw(passwordEncoder.encode(password))
                .nickname(nickname)
                .build();

        // 회원 역할 설정
        member.addRole(MemberRole.USER);

        // 회원 정보 저장
        memberRepository.save(member);

        return ResponseEntity.status(HttpStatus.CREATED).body("회원가입이 완료되었습니다.");
    }
}
