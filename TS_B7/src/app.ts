class Person {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}


abstract class Room {
     roomId: number;
     type: string;
     pricePerNight: number;
     isAvailable: boolean;

    constructor(roomId: number, type: string, pricePerNight: number, isAvailable: boolean) {
        this.roomId = roomId;
        this.type = type;
        this.pricePerNight = pricePerNight;
        this.isAvailable = isAvailable;
    }

    bookRoom(): void {
        this.isAvailable = false;
    }

    releaseRoom(): void {
        this.isAvailable = true;
    }

    abstract calculateCost(nights: number): number;

    abstract getAdditionServices(): string;

    abstract applyDiscount(discountRate: number): number;

    abstract getCancellationPolicy(): string;
}

class StandardRoom extends Room {
    constructor(roomId: number, type: string,  isAvailable: boolean) {
        super(roomId, type, 350, isAvailable);
    }

    override calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }

    override getAdditionServices(): string {
        return "Khong co dich vu bo sung";
    }

    override applyDiscount(discountRate: number): number {
        return this.pricePerNight * discountRate;
    }

    override getCancellationPolicy(): string {
        return "Huy phong truoc 1 ngay hoan lai 100%";
    }
  
}


class DeluxeRoom extends Room {
    constructor(roomId: number, type: string,  isAvailable: boolean) {
        super(roomId, type, 600 , isAvailable);
    }


    override calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }

    override getAdditionServices(): string {
        return "Dich vu bo sung: Bua sang";
    }

    override applyDiscount(discountRate: number): number {
        return this.pricePerNight * discountRate;
    }

    override getCancellationPolicy(): string {
        return "Huy phong truoc 2 ngay hoan lai 50%";
    }
 
}

class SuiteRoom extends Room {
    constructor(roomId: number, type: string,  isAvailable: boolean) {
        super(roomId, type, 1000 , isAvailable);
    }

    override calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }

    override getAdditionServices(): string {
        return "Dich vu bo sung: dich vu Spa , minibar";
    }

    override applyDiscount(discountRate: number): number {
        return this.pricePerNight * discountRate;
    }

    override getCancellationPolicy(): string {
        return "Khong hoan lai tien neu huy!!!";
    }
}

class Booking {
     bookingId: number;
     customer: Person;
     room: Room;
     nights: number;
     totalCost: number;

    constructor(bookingId: number , customer: Person , room: Room , nights: number , totalCost: number){
        this.bookingId = bookingId;
        this.customer = customer;
        this.room = room;
        this.nights = nights;
        this.totalCost = totalCost;
    }

    getDetails(){
        return {
            bookingId: this.bookingId,
            customer: this.customer.getDetails(),
            room: this.room,
            nights: this.nights,
            totalCost: this.totalCost
        }
    }
}


class HotelManager {
    protected rooms: Room[];
    protected bookings: Booking[];
    protected customers: Person[];

    constructor(rooms: Room[], bookings: Booking[], customers: Person[]) {
        this.rooms = rooms;
        this.bookings = bookings;
        this.customers = customers;
    }

    addRoom(type: string, pricePerNight: number){
        const roomId = this.rooms.length + 1;
        let room: Room | null = null;
        if(type === "Standard"){
            room = new StandardRoom(roomId, type, true);
        } else if(type === "Deluxe"){
            room = new DeluxeRoom(roomId, type, true);
        } else if(type === "Suite"){
            room = new SuiteRoom(roomId, type, true);
        }


        if (room) {
            this.rooms.push(room);
        } else {
            throw new Error("Invalid room type");
        }
    }

    addCustomer(name: string , email: string, phone: string): Person {
        let id = this.customers.length + 1;
        let customer = new Person(id , name , email , phone);
        this.customers.push(customer);
        return customer;
    }

    bookRoom(customerId: number , roomId: number , nights: number): Booking {
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
        let booking = new Booking(bookingId , customer , room , nights , totalCost);
        this.bookings.push(booking);
        return booking;
    }

    releaseRoom(roomId: number): void {
       const room = this.rooms.find(room => room.roomId === roomId);
       if(room){
           room.releaseRoom();
       }
    }

    listAvailableRooms(): void {
        const availableRooms = this.rooms.filter(room => room.isAvailable);
        availableRooms.forEach(room => {
            console.log(room);
        });
    }

    listBookingByCustomer(customerId: number): void {
        const cus = this.customers.find(cus => cus.id === customerId);
        if(cus){
            const booking = this.bookings.filter(booking => booking.customer.id === customerId);
            booking.forEach(booking => {
                console.log(booking.getDetails());
            });
        }
    }

    calculateTotalRevenue(): number {
        return this.bookings.reduce((total, booking) => total + booking.totalCost, 0);
    }

    getRoomTypesCount(): void {
       
    }

    applyDiscountToRoom(roomId: number, discountRate: number): void {
        const room = this.rooms.find(room => room.roomId === roomId);
        if(room){
            room.applyDiscount(discountRate);
        }
    }

    getRoomServices(roomId: number): void {
        const room = this.rooms.find(room => room.roomId === roomId);
        if(room){
            room.getAdditionServices();
        }
    }

    getCancellationPolicy(roomId: number): void {
        const room = this.rooms.find(room => room.roomId === roomId);
        if(room){
            room.getCancellationPolicy();
        }
    }
}

class Main {
    private hotelManager: HotelManager;

    constructor(hotelManager: HotelManager) {
        this.hotelManager = hotelManager;
    }

    run(): void {
        let loop: boolean = true;
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
            
            let option: number = Number(prompt("Nhap lua chon cua ban: "));
            
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


