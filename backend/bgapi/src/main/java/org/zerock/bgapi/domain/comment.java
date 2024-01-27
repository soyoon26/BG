package org.zerock.bgapi.domain;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tbl_comment")
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //고유한 PK
    private Long tno;
    private String title;
    private String writer;
    private boolean complete;
    private LocalDate dueDate;
}
