"use strict";
class Person {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}
class Room {
    constructor(roomId, type, pricePerNight, isAvailable) {
        this.roomId = roomId;
        this.type = type;
        this.pricePerNight = pricePerNight;
        this.isAvailable = isAvailable;
    }
    bookRoom() {
        this.isAvailable = false;
    }
    releaseRoom() {
        this.isAvailable = true;
    }
}
class StandardRoom extends Room {
    constructor(roomId, type, isAvailable) {
        super(roomId, type, 350, isAvailable);
    }
    calculateCost(nights) {
        return this.pricePerNight * nights;
    }
    getAdditionServices() {
        return "Khong co dich vu bo sung";
    }
    applyDiscount(discountRate) {
        return this.pricePerNight * discountRate;
    }
    getCancellationPolicy() {
        return "Huy phong truoc 1 ngay hoan lai 100%";
    }
}
class DeluxeRoom extends Room {
    constructor(roomId, type, isAvailable) {
        super(roomId, type, 600, isAvailable);
    }
    calculateCost(nights) {
        return this.pricePerNight * nights;
    }
    getAdditionServices() {
        return "Dich vu bo sung: Bua sang";
    }
    applyDiscount(discountRate) {
        return this.pricePerNight * discountRate;
    }
    getCancellationPolicy() {
        return "Huy phong truoc 2 ngay hoan lai 50%";
    }
}
class SuiteRoom extends Room {
    constructor(roomId, type, isAvailable) {
        super(roomId, type, 1000, isAvailable);
    }
    calculateCost(nights) {
        return this.pricePerNight * nights;
    }
    getAdditionServices() {
        return "Dich vu bo sung: dich vu Spa , minibar";
    }
    applyDiscount(discountRate) {
        return this.pricePerNight * discountRate;
    }
    getCancellationPolicy() {
        return "Khong hoan lai tien neu huy!!!";
    }
}
class Booking {
    constructor(bookingId, customer, room, nights, totalCost) {
        this.bookingId = bookingId;
        this.customer = customer;
        this.room = room;
        this.nights = nights;
        this.totalCost = totalCost;
    }
    getDetails() {
        return {
            bookingId: this.bookingId,
            customer: this.customer.getDetails(),
            room: this.room,
            nights: this.nights,
            totalCost: this.totalCost
        };
    }
}
class HotelManager {
    constructor(rooms, bookings, customers) {
        this.rooms = rooms;
        this.bookings = bookings;
        this.customers = customers;
    }
    addRoom(type, pricePerNight) {
        const roomId = this.rooms.length + 1;
        let room = null;
        if (type === "Standard") {
            room = new StandardRoom(roomId, type, true);
        }
        else if (type === "Deluxe") {
            room = new DeluxeRoom(roomId, type, true);
        }
        else if (type === "Suite") {
            room = new SuiteRoom(roomId, type, true);
        }
        if (room) {
            this.rooms.push(room);
        }
        else {
            throw new Error("Invalid room type");
        }
    }
    addCustomer(name, email, phone) {
        let id = this.customers.length + 1;
        let customer = new Person(id, name, email, phone);
        this.customers.push(customer);
        return customer;
    }
    bookRoom(customerId, roomId, nights) {
        let customer = this.customers.find(customer => customer.id === customerId);
        if (!customer) {
            throw new Error("Customer not found");
        }
        let room = this.rooms.find(room => room.roomId === roomId);
        if (!room) {
            throw new Error("Room not found");
        }
        let totalCost = room.calculateCost(nights);
        let bookingId = this.bookings.length + 1;
        let booking = new Booking(bookingId, customer, room, nights, totalCost);
        this.bookings.push(booking);
        return booking;
    }
    releaseRoom(roomId) {
        const room = this.rooms.find(room => room.roomId === roomId);
        if (room) {
            room.releaseRoom();
        }
    }
    listAvailableRooms() {
        const availableRooms = this.rooms.filter(room => room.isAvailable);
        availableRooms.forEach(room => {
            console.log(room);
        });
    }
    listBookingByCustomer(customerId) {
        const cus = this.customers.find(cus => cus.id === customerId);
        if (cus) {
            const booking = this.bookings.filter(booking => booking.customer.id === customerId);
            booking.forEach(booking => {
                console.log(booking.getDetails());
            });
        }
    }
    calculateTotalRevenue() {
        return this.bookings.reduce((total, booking) => total + booking.totalCost, 0);
    }
    getRoomTypesCount() {
    }
    applyDiscountToRoom(roomId, discountRate) {
        const room = this.rooms.find(room => room.roomId === roomId);
        if (room) {
            room.applyDiscount(discountRate);
        }
    }
    getRoomServices(roomId) {
        const room = this.rooms.find(room => room.roomId === roomId);
        if (room) {
            room.getAdditionServices();
        }
    }
    getCancellationPolicy(roomId) {
        const room = this.rooms.find(room => room.roomId === roomId);
        if (room) {
            room.getCancellationPolicy();
        }
    }
}
class Main {
    constructor(hotelManager) {
        this.hotelManager = hotelManager;
    }
    run() {
        let loop = true;
        while (loop) {
            console.log("Menu chuc nang: ");
            console.log("===================================");
            console.log("1. Them khach hang");
            console.log("2. Them phong");
            console.log("3. Dat phong");
            console.log("4. Tra phong");
            console.log("5. Danh sach phong trong");
            console.log("6. Danh sach phong da dat");
            console.log("7. Tinh tong doanh thu");
            console.log("8. Thong ke so luong phong theo loai");
            console.log("9. Ap dung chinh sach giam gia cho phong");
            console.log("10. Hien thi dich vu bo sung cua phong");
            console.log("11. Hien thi chinh sach huy phong");
            console.log("12. Thoat chuong trinh");
            console.log("===================================");
            let option = Number(prompt("Nhap lua chon cua ban: "));
            switch (option) {
                case 1:
                    const name = String(prompt("Nhap ten khach hang: "));
                    const email = String(prompt("Nhap email: "));
                    const phone = String(prompt("Nhap so dien thoai: "));
                    this.hotelManager.addCustomer(name, email, phone);
                    break;
                case 2:
                    const type = String(prompt("Nhap loai phong: "));
                    const pricePerNight = Number(prompt("Nhap gia phong moi dem: "));
                    this.hotelManager.addRoom(type, pricePerNight);
                    break;
                case 3:
                    const customerId = Number(prompt("Nhap ma khach hang: "));
                    const roomId = Number(prompt("Nhap ma phong: "));
                    const nights = Number(prompt("Nhap so dem: "));
                    this.hotelManager.bookRoom(customerId, roomId, nights);
                    break;
                case 4:
                    const roomId1 = Number(prompt("Nhap ma phong: "));
                    this.hotelManager.releaseRoom(roomId1);
                    break;
                case 5:
                    this.hotelManager.listAvailableRooms();
                    break;
                case 6:
                    const customerId1 = Number(prompt("Nhap ma khach hang: "));
                    this.hotelManager.listBookingByCustomer(customerId1);
                    break;
                case 7:
                    console.log(`Tong doanh thu: ${this.hotelManager.calculateTotalRevenue()}`);
                    break;
                case 8:
                    this.hotelManager.getRoomTypesCount();
                    break;
                case 9:
                    const roomId2 = Number(prompt("Nhap ma phong: "));
                    const discountRate = Number(prompt("Nhap ty le giam gia: "));
                    this.hotelManager.applyDiscountToRoom(roomId2, discountRate);
                    break;
                case 10:
                    const roomId3 = Number(prompt("Nhap ma phong: "));
                    this.hotelManager.getRoomServices(roomId3);
                    break;
                case 11:
                    const roomId4 = Number(prompt("Nhap ma phong: "));
                    this.hotelManager.getCancellationPolicy(roomId4);
                    break;
                case 12:
                    loop = false;
                    break;
                default:
                    console.log("Lua chon khong hop le. Vui long chon lai!");
                    break;
            }
        }
    }
}
new Main(new HotelManager([], [], [])).run();
