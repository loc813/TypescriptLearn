class CD {
    public id: number;
    public title: string;
    public artist: string;
    public year: number;

    constructor(id: number , title: string , artist: string, year: number){
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.year = year;
    }
}

class CDStoreManager {
    private cds: CD[];

    constructor(){
        this.cds = [];
    }

    addCD(title: string , artist: string , year: number){
        const id = this.cds.length + 1;
        let newCD = new CD(id,title,artist,year);
        this.cds.push(newCD);
        console.log("Them CD thanh cong");
    }

    listCDs():void{
        this.cds.forEach(cd => {
            console.log(`CD: ${cd.id}, Title: ${cd.title} , Artist: ${cd.artist} , Year: ${cd.year}`);
        })
    }

    removeCD(id: number): void{
        const index = this.cds.findIndex(cd => cd.id === id);
        if(index !== -1){
            this.cds.splice(index, 1);
            console.log("Xoa CD khoi danh sach thanh cong");
        }else{
            console.log("Khong tim thay CD co ma Id nay!!");
        }
    }

    searchCD(title: string):void {
        const Cd = this.cds.find(cd => cd.title === title);
        if(Cd){
            console.log(`Id: ${Cd.id} , Title: ${Cd.title}, Artist: ${Cd.artist} , Year: ${Cd.year}`);
        }else {
            console.log("Khong tim thay CD co tieu de tren");
        }
    }
}

class MainCDManager {
    private CDStoreMag: CDStoreManager;

    constructor(){
        this.CDStoreMag = new CDStoreManager();
    }

    run():void {
        let loop: boolean = true; 
        while(loop){
            console.log("Menu chuc nang: ");
            console.log("======================");
            console.log("1.Them CD vao cua hang");
            console.log("2.Hien thi danh sach CD");
            console.log("3.Xoa CD theo ma CD");
            console.log("4.Tim kiem CD theo ten");
            console.log("5.Dung chuong trinh");
            console.log("======================");

            let choice = Number(prompt("Nhap lua chon chay truong chinh 1-5: "));
            switch(choice){
                case 1: 
                    let Title = String(prompt("Nhap ten dia CD muon them vao: "));
                    let Artist = String(prompt("Nhap ten nhac si: "));
                    let Year = Number(prompt("Nhap nam phat hanh cua dia CD: "));
                    this.CDStoreMag.addCD(Title, Artist, Year);
                    break;
                case 2:
                    this.CDStoreMag.listCDs();
                    break;
                case 3: 
                    let index = Number(prompt("Nhap ma CD muon xoa: "));
                    this.CDStoreMag.removeCD(index);
                    break;
                case 4: 
                    let titleCD = String(prompt("Nhap ten cua dia CD muon tim: "));
                    this.CDStoreMag.searchCD(titleCD);
                    break;
                case 5:
                    break;
                default:
                    console.log("Khong hop le");
                    break;
            }
        }
    }
}