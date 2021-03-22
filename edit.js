class Manga {
    constructor(name, chapter, image) {
        this.name = name;
        this.chapter = chapter;
        this.image = image;
    }
};
let manga = [];
let bachluyenthanhthan = new Manga("Bách luyện thành thần", 714, "images/bachluyenthanhthan.jpg");
let toanchucphapsu = new Manga("Toàn chức pháp sư", 670, "images/toanchucphapsu.jpg");
let tongtaitaithuong = new Manga("Tổng tài tại thượng", 365, "images/tongtaitaithuong.jpg");
let vancokiemthan = new Manga("Vạn cổ kiếm thần", 122, "images/vancokiemthan.jpg");
let voluyendinhphong = new Manga("Võ luyện đỉnh phong", 1044, "images/voluyendinhphong.jpg");
manga = [bachluyenthanhthan, toanchucphapsu, tongtaitaithuong, vancokiemthan, voluyendinhphong];
function showManga() {
    let tbManga = document.getElementById("depute");
    tbManga.innerHTML = "";
    manga.forEach(function(item) {
        tbManga.innerHTML += `<td><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</td>`;
    });
}
showManga();
let mangaUp = new Array();
let daptoaitienha = new Manga("Đạp Toái Tiên Hà", 167, "images/daptoaitienha.jpg");
let thomaysieucap = new Manga("Thợ Máy Siêu Cấp", 6, "images/thomaysieucap.jpg");
let cuocphieuluubian = new Manga("Cuộc Phiêu Lưu Bí Ẩn Phần 7: Steel...", 43, "images/cuocphieuluubianphan7steelballrun.jpg");
let tulakiemton = new Manga("Tu La Kiếm Tôn", 195, "images/tulakiemton.jpg")
let mangaUp1 = [daptoaitienha, thomaysieucap, cuocphieuluubian, tulakiemton];
function showMangaUp1() {
    let tbMangaUp1 = document.getElementById("update1");
    tbMangaUp1.innerHTML = "";
    mangaUp1.forEach(function(item) {
        tbMangaUp1.innerHTML += `<td><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</td>`;
    });
}
showMangaUp1();
mangaUp.push(mangaUp1);
let nhatkiemdocton = new Manga("Nhất Kiếm Độc Tôn", 110, "images/nhatkiemdocton.jpg");
let hokuhokuseinikumotoike = new Manga("Hokuhokusei Nikumo To Ike", 16, "images/hokuhokuseinikumotoike.jpg");
let thereincarnationmagician = new Manga("The Reincarnation Magician Of The...", 45, "images/thereincarnationmagicianoftheinferioreyes.jpg");
let mangaUp2 = [nhatkiemdocton, voluyendinhphong, hokuhokuseinikumotoike, thereincarnationmagician];
function showMangaUp2() {
    let tbMangaUp2 = document.getElementById("update2");
    tbMangaUp2.innerHTML = "";
    mangaUp2.forEach(function(item) {
        tbMangaUp2.innerHTML += `<td><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</td>`;
    });
}
showMangaUp2();
mangaUp.push(mangaUp2);
let negakunvaposichan = new Manga("Nega-kun Và Posi-chan", 21, "images/negakunvaposichan.jpg");
let truyenngandoraemon = new Manga("Truyện Ngắn Doraemon Mới Nhất", 8, "images/truyenngandoraemonmoinhat.jpg");
let phongkhoithuonglam = new Manga("Phong Khởi Thương Lam", 489, "images/phongkhoithuonglam.jpg");
let ngulinhthegioi = new Manga("Ngự Linh Thế Giới", 511, "images/ngulinhthegioi.jpg");
let mangaUp3 = [negakunvaposichan, truyenngandoraemon, phongkhoithuonglam, ngulinhthegioi];
function showMangaUp3() {
    let tbMangaUp3 = document.getElementById("update3");
    tbMangaUp3.innerHTML = "";
    mangaUp3.forEach(function(item) {
        tbMangaUp3.innerHTML += `<td><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</td>`;
    });
}
showMangaUp3();
mangaUp.push(mangaUp3);
let quyenbathienha = new Manga("Quyền Bá Thiên Hạ", 378, "images/quyenbathienha.jpg");
let caithedeton = new Manga("Cái Thế Đế Tôn", 179, "images/caithedeton.jpg");
let hoahongniendai = new Manga("Hỏa Hồng Niên Đại Hắc Cốt Đường", 967, "images/hoahongniendaihaccotduong.jpg");
let chienluyencaotiep = new Manga("Chiến Luyến Cáo Tiệp", 31, "images/chienluyencaotiep.jpg");
let mangaUp4 = [quyenbathienha, caithedeton, hoahongniendai, chienluyencaotiep];
function showMangaUp4() {
    let tbMangaUp4 = document.getElementById("update4");
    tbMangaUp4.innerHTML = "";
    mangaUp4.forEach(function(item) {
        tbMangaUp4.innerHTML += `<td><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</td>`;
    });
}
showMangaUp4();
mangaUp.push(mangaUp4);
let thukycuaalexandros = new Manga("Thư Ký Của Alexandros Đại Đế", 65, "images/thukycuaalexandrosdaide.jpg");
let khongxoasoconnguoiduoc = new Manga("Không Xóa Sổ Con Người Được!!", 2, "images/khongxoasoconnguoiduoc.jpg");
let loop7kaimenoakuyaku = new Manga("Loop 7- Kaime No Akuyaku Reijou wa...", 1, "images/loop7kaimenoakuyakureijouwamototekikokude.jpg");
let chugioimatnhataituyen = new Manga("Chư Giới Mạt Nhân Tại Tuyến", 18, "images/chugioimatnhantaituyen.jpg");
let mangaUp5 = [thukycuaalexandros, khongxoasoconnguoiduoc, loop7kaimenoakuyaku, chugioimatnhataituyen];
function showMangaUp5() {
    let tbMangaUp5 = document.getElementById("update5");
    tbMangaUp5.innerHTML = "";
    mangaUp5.forEach(function(item) {
        tbMangaUp5.innerHTML += `<td><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</td>`;
    });
}
showMangaUp5();
mangaUp.push(mangaUp5);
let thanlongvuongtoa = new Manga("Thần Long Vương Tọa", 49, "images/thanlongvuongtoa.jpg");
let mrblue = new Manga("Mr.Blue", 8, "images/mrblue.jpg");
let koujodenkanokateiyoushi = new Manga("Koujo Denka No Kateiyoushi", 2, "images/koujodenkanokateiyoushi.jpg");
let thanvothienton = new Manga("Thần Võ Thiên Tôn", 299, "images/thanvothienton.jpg");
let mangaUp6 = [thanlongvuongtoa, mrblue, koujodenkanokateiyoushi, thanvothienton];
function showMangaUp6() {
    let tbMangaUp6 = document.getElementById("update6");
    tbMangaUp6.innerHTML = "";
    mangaUp6.forEach(function(item) {
        tbMangaUp6.innerHTML += `<td><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</td>`;
    });
}
showMangaUp6();
mangaUp.push(mangaUp6);
let runwaydewaratte = new Manga("Runway De Waratte", 138, "images/runwaydewaratte.jpg");
let suquyenrucua25d = new Manga("Sự Quyến Rũ Của 2.5D", 30, "images/suquyenrucua25d.jpg");
let thelive = new Manga("The Live", 67, "images/thelive.jpg");
let anhon100 = new Manga("Ẩn Hôn 100%: Chọc Tức Vợ Yêu Mua...", 274, "images/anhon100choctucvoyeumua1tang1.jpg");
let mangaUp7 = [runwaydewaratte, suquyenrucua25d, thelive, anhon100];
function showMangaUp7() {
    let tbMangaUp7 = document.getElementById("update7");
    tbMangaUp7.innerHTML = "";
    mangaUp7.forEach(function(item) {
        tbMangaUp7.innerHTML += `<td><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</td>`;
    });
}
showMangaUp7();
mangaUp.push(mangaUp7);
let toimuontrothanhtieuthu = new Manga("Tôi Muốn Trở Thành Tiểu Thư...", 91, "images/toimuontrothanhtieuthucongtuocphevat.jpg");
let trongbongtoi = new Manga("Trong Bóng Tối", 43, "images/trongbongtoi.jpg");
let tsuyokutenewsaga = new Manga("Tsuyokute New Saga", 83, "images/tsuyokutenewsaga.jpg");
let huyetmanhan = new Manga("Huyết Ma Nhân", 729, "images/huyetmanhan.jpg");
let mangaUp8 = [toimuontrothanhtieuthu, trongbongtoi,tsuyokutenewsaga,huyetmanhan];
function showMangaUp8() {
    let tbMangaUp8 = document.getElementById("update8");
    tbMangaUp8.innerHTML = "";
    mangaUp8.forEach(function(item) {
        tbMangaUp8.innerHTML += `<td><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</td>`;
    });
}
showMangaUp8();
mangaUp.push(mangaUp8);
// function showMangaUp() {
//     let tbMangaUp = document.getElementById("update");
//     tbMangaUp.innerHTML = "";
//     for(let i = 0; i < mangaUp.length; i++) {
//         tbMangaUp.innerHTML += "<tr>"; 
//         mangaUp[i].forEach(function(item1) {
//             tbMangaUp.innerHTML += `<td><img src=${item1.image}><br>${item1.name}<br>Chapter:${item1.chapter}</td>`;
//         });
//         tbMangaUp.innerHTML += "</tr>";
//     }
// }
// showMangaUp();