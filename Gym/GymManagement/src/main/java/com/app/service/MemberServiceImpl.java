package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.LoginDto;
import com.app.dto.MemberDto;
import com.app.entity.Member;
import com.app.repo.MemberRepo;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	private MemberRepo memberRepo;
	 

	@Override
	public List<Member> fetchall() {
		return memberRepo.findAll();
	}

	@Override
	public Member fetchById(int id) {
		return memberRepo.findById(id).orElseThrow(()->new RuntimeException("Member Not Found"));
	}

	@Override
	public boolean updateMember(int id, Member member) {
		Member existingMember=memberRepo.findById(id).orElse(null);
		if(existingMember!=null) {
			existingMember.setName(member.getName());
			existingMember.setAge(member.getAge());
			existingMember.setContact(member.getContact());
			existingMember.setEmail(member.getEmail());
			existingMember.setProfilePic(member.getProfilePic());
			existingMember.setAdharNumber(member.getAdharNumber());
			memberRepo.save(existingMember);
			return true;
		}
		return false;
	}

	@Override
	public boolean memberLogin(LoginDto loginDto) {
		Member member1=memberRepo.findByEmail(loginDto.getEmail());
		if(member1!=null) {
			String password1=loginDto.getPassword();
			String password2=member1.getPassword();
			if(password1.equals(password2)) {
				return true;
			}else {
				return false;
			}
		}else {
			return false;
		}
		
	}

	@Override
	public String memberDelete(int id) {
		memberRepo.deleteById(id);
		return "Member Deleted Successfully";
	}

	@Override
	public String newMember(MemberDto dto) {
		Member member=new Member(dto.getId(),
								dto.getName(),
								dto.getAge(),
								dto.getContact(),
								dto.getEmail(),
								dto.getProfilePic(),
								dto.getAdharNumber(),
								dto.getPassword());
		memberRepo.save(member);
		return "Success";
	}


	
	
	
	
	
	
}
