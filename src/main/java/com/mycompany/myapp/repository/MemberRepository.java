package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Member entity.
 */
public interface MemberRepository extends JpaRepository<Member,Long>{

}
