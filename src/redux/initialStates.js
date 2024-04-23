export const ChildBooks = "Çocuk Kitapları";
export const ClassicBooks = "Klasik Kitaplar";
export const Personal = "Kişisel Gelişim Kitapları";
export const Manga = "Manga";
export const Novel = "Roman";
export const HistoryBooks = "Tarih Kitapları";

export const initialBookCategories = [
                                     {name:ChildBooks, link: "child"},
                                     {name:ClassicBooks, link:"classic"},
                                     {name:Personal, link:"personal"},
                                     {name:Manga, link:"manga"}, 
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

]

export const historyBookList = [

]