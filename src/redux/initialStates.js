export const ChildBooks = "Çocuk Kitapları";
export const ClassicBooks = "Klasik Kitaplar";
export const Personal = "Kişisel Gelişim Kitapları";
export const Novel = "Roman";
export const HistoryBooks = "Tarih Kitapları";

export const initialBookCategories = [
                                     {name:ChildBooks, link: "child"},
                                     {name:ClassicBooks, link:"classic"},
                                     {name:Personal, link:"personal"},
                                     {name:Novel, link:"novel"},
                                     {name:HistoryBooks, link:"history"}]

export const initialBookList = []

export const childBookList = [
    {name:"Kurt ve Kuzu", summary : "/summaries/fairyTales/kurt_ve_kuzu.txt",
     img:"/img/fairyTales/fairyTale1.jpg"},

    {name:"İki İnatçı Keçi Masalı", summary : "/summaries/fairyTales/iki_inatci_keci_masali.txt", 
    img : "/img/fairyTales/fairyTale2.jpg"},
    
    {name:"Rapunzel", summary : "/summaries/fairyTales/rapunzel.txt",
    img:"/img/fairyTales/fairyTale3.jpg"},

    {name:"Güzel ve Çirkin Masalı", summary : "/summaries/fairyTales/guzel_ve_cirkin.txt",
    img:"/img/fairyTales/fairyTale4.jpg"},

    {name:"Çam Ağacı Masalı", summary : "/summaries/fairyTales/cam_agaci_masali.txt",
    img:"/img/fairyTales/fairyTale5.jpg"},
]

export const classicBookList = [
    {name:"Anna Karenina", summary : "/summaries/classics/Anna Karenina.txt",
     img:"/img/classics/classic1.png"},

    {name:"Yer Altından Notlar", summary : "/summaries/classics/Yer Altından Notlar.txt", 
    img : "/img/classics/classic2.jpg"},
    
    {name:"Genç Werther'in Acıları", summary : "/summaries/classics/Genc Wertherin Acıları.txt",
    img:"/img/classics/classic3.jpeg"},

    {name:"Genç Bir Doktorun Anıları", summary : "/summaries/classics/Genc Bir Doktorun Anıları.txt",
    img:"/img/classics/classic4.png"},

    {name:"Gurur ve Önyargı", summary : "/summaries/classics/Gurur ve Önyargı.txt",
    img:"/img/classics/classic5.jpg"},
]


export const personalBookList = [
    {name:"Rezonans Kanunu", summary : "/summaries/personal/Rezonans Kanunu.txt",
     img:"/img/personal/personal1.jpg"},

    {name:"Seni Yoran Her şeyi Bırak", summary : "/summaries/personal/Seni Yoran Her şeyi Boral.txt", 
    img : "/img/personal/personal2.jpg"},
    
    {name:"Ne Ekersen Onu Biçersin Değil!", summary : "/summaries/personal/Ne Ekersen Onu Biçersin.txt",
    img:"/img/personal/personal3.jpg"},

    {name:"Var mısın?", summary : "/summaries/personal/Var mısın.txt",
    img:"/img/personal/personal4.jpg"},

    {name:"Bilinç Altının Gücü", summary : "/summaries/personal/Bilinç Altının Gücü.txt",
    img:"/img/personal/personal5.jpg"},
]

export const mangaBookList = [

]

export const novelBookList = [
    {name:"Martin Eden", summary : "/summaries/novels/Martin Eden.txt",
     img:"/img/novels/novel1.jpg"},

    {name:"Kürk Mantolu Madonna", summary : "/summaries/novels/Kürk Mantolu Madonna.txt", 
    img : "/img/novels/novel2.jpg"},
    
    {name:"Çavdar Tarlasındaki Çocuklar", summary : "/summaries/novels/Çavdar Tarlasındaki Çocuklar.txt",
    img:"/img/novels/novel3.jpg"},

    {name:"Otomatik Portakal", summary : "/summaries/novels/Otomatik Portakal.txt",
    img:"/img/novels/novel4.jpg"},

    {name:"Yere Yakın Yıldızlara Uzak", summary : "/summaries/novels/Yere Yakın Yıldızlara Uzak.txt",
    img:"/img/novels/novel5.jpg"},
]

export const historyBookList = [
    {name:"Fatih Sultan Mehemmed Han", summary : "/summaries/history/Fatih Sultan Mehemmed Han.txt",
     img:"/img/history/history1.jpg"},

    {name:"Gazi Mustafa Kemal Atatürk", summary : "/summaries/history/Gazi Mustafa Kemal Atatürk.txt", 
    img : "/img/history/history2.jpg"},
    
    {name:"Julius Caesar", summary : "/summaries/history/Julius Caesar.txt",
    img:"/img/history/history3.jpg"},

    {name:"Hayvanlardan Tanrılara - Sapiens", summary : "/summaries/history/Hayvanlardan Tanrılara - Sapiens.txt",
    img:"/img/history/history4.jpg"},

    {name:"Yakın Tarihin Gerçekleri", summary : "/summaries/history/Yakın Tarihin Gerçekleri.txt",
    img:"/img/history/history5.jpg"},
]

export const searchResult = []