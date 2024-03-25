package com.ssafy.stocker.company.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class CompanyReadEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cr_id")
    private Long crId ;

    private String email ;

    @Column(name = "company_code")
    private String companyCode;
}

