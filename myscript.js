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
var students =
[
    {
        "path": "100613352",
        "lastName": "Li",
        "firstName": "Qiao"
    },
    {
      "path": "100654914",
      "lastName": "Poile",
      "firstName": "Aidan"
    },
    {
      "path": "100647761",
      "lastName": "Church",
      "firstName": "Alexander"
    },
    {
      "path": "100640522",
      "lastName": "Wilson",
      "firstName": "Andrew"
    },
    {
      "path": "100259303",
      "lastName": "Pongrac",
      "firstName": "Christopher"
    },
    {
      "path": "100628690",
      "lastName": "Yabon",
      "firstName": "Denz John Anthony"
    },
    {
      "path": "100656162",
      "lastName": "Singh",
      "firstName": "Harshdeep"
    },
    {
      "path": "100656660",
      "lastName": "Selek",
      "firstName": "Ibrahim"
    },
    {
      "path": "100656651",
      "lastName": "Juniper",
      "firstName": "Jesselyn"
    },
    {
      "path": "100655470",
      "lastName": "Wolf",
      "firstName": "Jessica"
    },
    {
      "path": "100655651",
      "lastName": "Mostanovski",
      "firstName": "Jovan"
    },
    {
      "path": "100642781",
      "lastName": "Rittipan",
      "firstName": "Kongphop"
    },
    {
      "path": "100654907",
      "lastName": "Bruce",
      "firstName": "Matthew"
    },
    {
      "path": "100656656",
      "lastName": "Palamara",
      "firstName": "Matthew"
    },
    {
      "path": "100655501",
      "lastName": "Le",
      "firstName": "Mi"
    },
    {
      "path": "100656505",
      "lastName": "Gunawan",
      "firstName": "Muhammad"
    },
    {
      "path": "100656652",
      "lastName": "Kaviani Arani",
      "firstName": "Nima"
    },
    {
      "path": "100640453",
      "lastName": "Prasad",
      "firstName": "Reeta"
    },
    {
      "path": "100587002",
      "lastName": "Le",
      "firstName": "Tran Hung Thinh"
    },
    {
      "path": "100633202",
      "lastName": "Christophersen",
      "firstName": "William"
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
