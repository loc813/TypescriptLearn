class GeometryCalculator {
    circleArea(radius: number): number {
        const pi: number = 3.14;
        return pi * Math.pow(radius,2);
    }

    circlePerimeter(radius: number): number {
        const pi: number = 3.14;
        return 2 * pi * radius;
    }

    triangleArea(base: number, height: number): number {
        return (base * height) / 2;
    }

    trianglePerimeter(a: number, b: number, c: number): number {
        return a + b + c;
    }

    rectangleArea(width: number, height: number): number {
        return width * height;
    }

    rectanglePerimeter(width: number, height: number): number {
        return (width + height) * 2;
    }

    parallelogramArea(base: number, height: number): number {
        return base * height;
    }

    parallelogramPerimeter(a: number, b: number): number {
        return (a + b) * 2;
    }

    rhombusArea(d1: number, d2: number): number {
        return (d1 * d2) / 2;
    }

    rhombusPerimeter(side: number): number {
        return 4 * side;
    }
}

class MainGeometryCalculator {
    private GeoCal: GeometryCalculator;

    constructor(){
        this.GeoCal = new GeometryCalculator();
    }

    bootstrap(): void {
        let loop: boolean = true;
        while(loop){
            console.log("Menu chuc nang:    ");
            console.log("---------------------");
            console.log("1.Tinh dien tich va chu vi hinh tron.");
            console.log("2.Tinh dien tich va chu vi hinh tam giac.");
            console.log("3.Tinh dien tich va chu vi hinh chu nhat.");
            console.log("4.Tinh dien tich va chu vi hinh binh hanh");
            console.log("5.Tinh dien tich va chu vi hinh thoi.");
            console.log("6.Dung chuong trinh.");

            let choice = Number(prompt("Nhap lua chon tu 1 - 6 de thuc hien tinh toan: "));
            switch(choice) {
                case 1: 
                    console.log(`Area: ${this.GeoCal.circleArea(3)} , Perimeter: ${this.GeoCal.circlePerimeter(3)}`);
                    break;
                case 2:
                    console.log(`Area: ${this.GeoCal.triangleArea(4,5)} , Perimeter: ${this.GeoCal.trianglePerimeter(3,4,5)}`);
                    break;
                case 3:
                    console.log(`Area: ${this.GeoCal.rectangleArea(5,8)}, Perimeter: ${this.GeoCal.rectanglePerimeter(5,8)}`);
                    break;
                case 4: 
                    console.log(`Area: ${this.GeoCal.parallelogramArea(6,10)} , Perimeter: ${this.GeoCal.parallelogramPerimeter(6,8)}`);
                    break;
                case 5: 
                    console.log(`Area: ${this.GeoCal.rhombusArea(7,10)} , Perimeter: ${this.GeoCal.rhombusPerimeter(5)}`);
                    break;
                case 6: 
                    break;
                default: 
                     console.log("Khong hop le");
                     break;
            }
        }
    }
}
