package com.app.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.LoginDto;
import com.app.dto.MemberDto;
import com.app.entity.Member;

public interface MemberService {

	

	List<Member> fetchall();

	Member fetchById(int id);

	boolean updateMember(int id, Member member);

	boolean memberLogin(LoginDto loginDto);

	String memberDelete(int id);

	String newMember(MemberDto dto);

}
