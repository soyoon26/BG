package org.zerock.bgapi.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.*;

@Entity //데이터베이스 테이블과 매핑되는 엔티티
@Builder //객체 생성
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString (exclude = "memberRoleList")

public class Member {
    @Id //필드를 테이블 기본키로 사용함
    private String email;
    private String pw;
    private String nickname;
    private boolean social;

    @ElementCollection(fetch = FetchType.LAZY) //지연로딩, 필요할 때만 해당컬렉션 가져옴
    @Builder.Default //빌더사용 객체생성시 기본값 지정
    private List<MemberRole> memberRoleList = new ArrayList<>();

    public void addRole(MemberRole memberRole){ //회원 권한 추가
        memberRoleList.add(memberRole); 
    }
    public void clearRole(){ //회원 권한 목록 비우기
        memberRoleList.clear();
    }
    public void changeNickname(String nickname){
        this.nickname = nickname;
    }
    public void changePw(String pw){
        this.pw = pw;
    } 
    public void changeSocial(boolean social){ //소셜회원여부변경
        this.social = social;
    }
}
