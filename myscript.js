var imageList = [
    "a.png",
    "b.png",
    "c.png",
    "d.png",
    "e.png",
    "f.png",
    "g.png",
    "h.png",
    "i.png",
    "j.png",
    "k.png",
    "l.png",
    "m.png",
    "n.png",
    "o.png",
    "p.png",
    "q.png",
    "r.png",
    "s.png",
    "t.png",
    "u.png",
    "v.png",
    "w.png",
    "x.png",
    "y.png",
    "z.png",
    "aa.png",
    "ab.png",
    "ac.png",
    "ad.png",
    "ae.png",
    "af.png",
    "ag.png",
    "ah.png",
    "ai.png",
    "aj.png",
    "ak.png",
    "al.png",
    "am.png",
    "an.png",
    "ao.png"
];
var students = [    {
        firstName: "Qiao",
        lastName: "Li",
        path: "100613352"
    },
    {
        firstName: "Alexander",
        lastName: "Church",
        path: "100647761"
    },
    {
        firstName: "Andi",
        lastName: "Marzuki",
        path: "100647909"
    },
    {
        firstName: "Andrew",
        lastName: "Wilson",
        path: "100640522"
    },
    {
        firstName: "Brayden",
        lastName: "Nelson",
        path: "100647769"
    },
    {
        firstName: "Byron",
        lastName: "De La Vega Parra",
        path: "100636304"
    },
    {
        firstName: "Ce",
        lastName: "Liang",
        path: "100643134"
    },
    {
        firstName: "Harley",
        lastName: "McDonald",
        path: "100619600"
    },
    {
        firstName: "Jack",
        lastName: "Butler",
        path: "100647759"
    },
    {
        firstName: "Jack",
        lastName: "Lechte",
        path: "100602974"
    },
    {
        firstName: "Jaspreet",
        lastName: "Kaur",
        path: "100642251"
    },
    {
        firstName: "Jian Ning",
        lastName: "Chan",
        path: "100648942"
    },
    {
        firstName: "Jonathan",
        lastName: "Flavel",
        path: "100647765"
    },
    {
        firstName: "Kongphop",
        lastName: "Rittipan",
        path: "100642781"
    },
    {
        firstName: "Kyle",
        lastName: "Schlemmer",
        path: "100642211"
    },
    {
        firstName: "Michael",
        lastName: "Likopoulos",
        path: "100648206"
    },
    {
        firstName: "Oscar",
        lastName: "Cook",
        path: "100647762"
    },
    {
        firstName: "Reeta",
        lastName: "Prasad",
        path: "100640453"
    },
    {
        firstName: "Rupamjit Kaur",
        lastName: "Bhangu",
        path: "100634321"
    },
    {
        firstName: "Russell",
        lastName: "Gregory",
        path: "100648764"
    },
    {
        firstName: "Samuel",
        lastName: "De Looze",
        path: "100647763"
    },
    {
        firstName: "Sepideh",
        lastName: "Nowzadu",
        path: "100616032"
    },
    {
        firstName: "Sierra",
        lastName: "Cooper",
        path: "100649120"
    },
    {
        firstName: "Soyeong",
        lastName: "Ahn",
        path: "100641537"
    },
    {
        firstName: "Tran Hung Thinh",
        lastName: "Le",
        path: "100587002"
    },
    {
        firstName: "Xiaoxi",
        lastName: "Meng",
        path: "100613094"
    },
    {
        firstName: "Yuanyong",
        lastName: "Yang",
        path: "100649126"
    },
    {
        firstName: "Yun",
        lastName: "Wan",
        path: "100648215"
    }
];

const maxColor = 15;
const maxClip = 10;
const maxImage = imageList.length + 1;
students.forEach((student, index) => {
    student.fullName = `${student.firstName} ${student.lastName}`;
    student.initial = student.fullName.split(' ').reduce((acc, subname) => acc + subname[0], '');
    student.color = `color-${(index % maxColor + 1).toString()}`;
    student.clip = `clip-${(index % maxClip + 1).toString()}`;
    student.image = `${imageList[index % maxImage]}`;
});
var studentList = new StudentList("all-students", students);

/*
var rawData = [
    {
        fullName: "Qiao Li",
        initial: "QL",
        color: "color-1",
        clipStyle: "clip-1",
        path: "0123456"
    },
    {
        fullName: "Alexander Church",
        initial: "AC",
        color: "color-2",
        clipStyle: "clip-2",
        path: "0123456"
    },
    {
        fullName: "Andi Marzuki",
        initial: "AM",
        color: "color-3",
        clipStyle: "clip-3",
        path: "0123456"
    },
    {
        fullName: "Andrew Wilson",
        initial: "AW",
        color: "color-4",
        clipStyle: "clip-4",
        path: "0123456"
    },
    {
        fullName: "Brayden Nelson",
        initial: "BN",
        color: "color-5",
        clipStyle: "clip-5",
        path: "0123456"
    },
    {
        fullName: "Byron De La Vega Parra",
        initial: "BDLVP",
        color: "color-6",
        clipStyle: "clip-6",
        path: "0123456"
    },
    {
        fullName: "Ce Liang",
        initial: "CL",
        color: "color-7",
        clipStyle: "clip-7",
        path: "0123456"
    },
    {
        fullName: "Harley McDonald",
        initial: "HM",
        color: "color-8",
        clipStyle: "clip-8",
        path: "0123456"
    },
    {
        fullName: "Jack Butler",
        initial: "JB",
        color: "color-9",
        clipStyle: "clip-9",
        path: "0123456"
    },
    {
        fullName: "Jack Lechte",
        initial: "JL",
        color: "color-10",
        clipStyle: "clip-10",
        path: "0123456"
    },
    {
        fullName: "Jaspreet Kaur",
        initial: "JK",
        color: "color-11",
        clipStyle: "clip-1",
        path: "0123456"
    },
    {
        fullName: "Jian Ning Chan",
        initial: "JNC",
        color: "color-12",
        clipStyle: "clip-2",
        path: "0123456"
    },
    {
        fullName: "Jonathan Flavel",
        initial: "JF",
        color: "color-13",
        clipStyle: "clip-3",
        path: "0123456"
    },
    {
        fullName: "Kongphop Rittipan",
        initial: "KR",
        color: "color-14",
        clipStyle: "clip-4",
        path: "0123456"
    },
    {
        fullName: "Kyle Schlemmer",
        initial: "KS",
        color: "color-15",
        clipStyle: "clip-5",
        path: "0123456"
    },
    {
        fullName: "Michael Likopoulos",
        initial: "ML",
        color: "color-1",
        clipStyle: "clip-6",
        path: "0123456"
    },
    {
        fullName: "Oscar Cook",
        initial: "OC",
        color: "color-2",
        clipStyle: "clip-7",
        path: "0123456"
    },
    {
        fullName: "Reeta Prasad",
        initial: "RP",
        color: "color-3",
        clipStyle: "clip-8",
        path: "0123456"
    },
    {
        fullName: "Rupamjit Kaur Bhangu",
        initial: "RKB",
        color: "color-4",
        clipStyle: "clip-9",
        path: "0123456"
    },
    {
        fullName: "Russell Gregory",
        initial: "RG",
        color: "color-5",
        clipStyle: "clip-10",
        path: "0123456"
    },
    {
        fullName: "Samuel De Looze",
        initial: "SDL",
        color: "color-6",
        clipStyle: "clip-1",
        path: "0123456"
    },
    {
        fullName: "Sepideh Nowzadu",
        initial: "SN",
        color: "color-7",
        clipStyle: "clip-2",
        path: "0123456"
    },
    {
        fullName: "Sierra Cooperu",
        initial: "SC",
        color: "color-8",
        clipStyle: "clip-3",
        path: "0123456"
    },
    {
        fullName: "Soyeong Ahn",
        initial: "SA",
        color: "color-9",
        clipStyle: "clip-4",
        path: "0123456"
    },
    {
        fullName: "Tran Hung Thinh Le",
        initial: "THTL",
        color: "color-10",
        clipStyle: "clip-5",
        path: "0123456"
    },
    {
        fullName: "Xiaoxi Meng",
        initial: "XM",
        color: "color-11",
        clipStyle: "clip-6",
        path: "0123456"
    }
    ,
    {
        fullName: "Yuanyong Yang",
        initial: "YY",
        color: "color-12",
        clipStyle: "clip-7",
        path: "0123456"
    },
    {
        fullName: "Yun Wan",
        initial: "YW",
        color: "color-13",
        clipStyle: "clip-8",
        path: "0123456"
    }

];
*/