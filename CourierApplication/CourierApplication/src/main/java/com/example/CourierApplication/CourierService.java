package com.example.CourierApplication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourierService {

    @Autowired
    private CourierRepository repository;

    public Courier saveCourier(Courier courier) {
        return repository.save(courier);
    }

    public List<Courier> getAllCouriers() {
        return repository.findAll();
    }

    public Courier getCourierById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public Courier updateCourier(Integer id, Courier courier) {

        Courier existing = repository.findById(id).orElse(null);

        if (existing != null) {
            existing.setSenderName(courier.getSenderName());
            existing.setReceiverName(courier.getReceiverName());
            existing.setDestination(courier.getDestination());

            return repository.save(existing);
        }

        return null;
    }

    public void deleteCourier(Integer id) {
        repository.deleteById(id);
    }

}