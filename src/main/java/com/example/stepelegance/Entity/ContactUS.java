package com.example.stepelegance.Entity;

import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.validation.constraints.Email;
import lombok.*;
import org.aspectj.lang.annotation.RequiredTypes;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="contactUs")
public class ContactUS {
    @Id
    @SequenceGenerator(name="contactus_seq_gen", sequenceName ="contactus_seq_gen", allocationSize = 1)
    @GeneratedValue(generator = "contactus_seq_gen", strategy = GenerationType.IDENTITY)
    private Integer contactUsId;

    @Column(name="fullName", nullable = false)
    private String FullName;

    @Email
    @Column(name="email")
    private String Email;

    @Column(name = "subject")
    private String Subject;

    @Column(name="message")
    private String Message;
}
