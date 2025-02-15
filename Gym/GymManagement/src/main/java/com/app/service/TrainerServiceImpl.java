package com.app.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Trainer;
import com.app.repo.TrainerRepo;

@Service
public class TrainerServiceImpl implements TrainerService{
	
	@Autowired
	private TrainerRepo trainerRepo;

	@Override
	public List<Trainer> fetchall() {
		return trainerRepo.findAll();
	}

	
	
	
	
}
