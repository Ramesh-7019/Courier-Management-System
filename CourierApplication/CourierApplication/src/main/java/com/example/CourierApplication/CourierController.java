package com.example.CourierApplication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/courier")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://courier-frontend-eta.vercel.app"
})
public class CourierController {

    @Autowired
    private CourierService service;

    @PostMapping
    public Courier addCourier(@RequestBody Courier courier) {
        return service.saveCourier(courier);
    }

    @GetMapping
    public List<Courier> getAllCouriers() {
        return service.getAllCouriers();
    }

    @GetMapping("/{id}")
    public Courier getCourier(@PathVariable Integer id) {
        return service.getCourierById(id);
    }

    @PutMapping("/{id}")
    public Courier updateCourier(@PathVariable Integer id,
            @RequestBody Courier courier) {
        return service.updateCourier(id, courier);
    }

    @DeleteMapping("/{id}")
    public String deleteCourier(@PathVariable Integer id) {
        service.deleteCourier(id);
        return "Courier Deleted Successfully";
    }
}