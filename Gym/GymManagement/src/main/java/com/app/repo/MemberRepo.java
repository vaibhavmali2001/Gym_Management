package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.app.entity.Member;

@Repository
@EnableJpaRepositories
public interface MemberRepo extends JpaRepository<Member,Integer>{

	Member findByEmail(String email);

}
