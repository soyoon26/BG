package org.zerock.bgapi.domain;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "guestbook")
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GuestBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //고유한 PK, 자동 생성 
    private Long no;
    private String title;
    private String content;
    private String writer;
    private LocalDate date;

    public void changeContent(String content){
        this.content = content;
    }

}
