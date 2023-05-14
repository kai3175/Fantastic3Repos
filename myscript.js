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
        "path": "10080000",
        "lastName": "Kussay",
        "firstName": "Teacher"
    },
    {
      "path": "10010000",
      "lastName": "FName",
      "firstName": "LName"
    },
    {
      "path": "10020000",
      "lastName": "FName",
      "firstName": "LName"
    },
    {
      "path": "10030000",
      "lastName": "FName",
      "firstName": "LName"
    },
    {
      "path": "10040000",
      "lastName": "FName",
      "firstName": "LName"
    },
    {
      "path": "10050000",
      "lastName": "FName",
      "firstName": "LName"
    },
    {
      "path": "10060000",
      "lastName": "FName",
      "firstName": "LName"
    },
    {
      "path": "10070000",
      "lastName": "FName",
      "firstName": "LName"
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
