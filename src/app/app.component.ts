import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  give() {
    var a = (<HTMLInputElement>document.getElementById("input")).value;
    if (a === "Andhra Pradesh") {
      var array = ["SGM", "STR"];
      var map =
        "<iframe src=https://www.google.com/maps/d/embed?mid=1kq17ft8lqbz8G4_5-KembPGC5XvG9exX width=500 height=300 ></iframe>";
    } else if (a === "Maharashtra") {
      var array = ["mumbai", "pune"];
      var map =
        "<iframe src=https://www.google.com/maps/d/embed?mid=1eHcjXBxWd6lXtuXT459t7ytfC27w0Ytn width=500 height=300></iframe>";
    } else if (a === "Manipur") {
      var array = ["imphal"];
      var map =
        "<iframe src=https://www.google.com/maps/d/embed?mid=1GA2FBSpjgd35w12J4XchWUA5QdoByR8i width=500 height=300></iframe>";
    } else if (a === "Meghalaya") {
      var array = ["shilong", "cherapunji"];
      var map =
        "<iframe src=https://www.google.com/maps/d/embed?mid=1E3lk-tIs0IE-hInr1bpMZqsQyNfZ-mrx width=500 height=300></iframe>";
    } else if (a === "Mizoram") {
      var array = ["aizwal", "thilejawl"];
      var map =
        "<iframe src=https://www.google.com/maps/d/embed?mid=1d-oFAN5yDg74rvZujbKrmiqtXF5H_ueJ width=500 height=300></iframe>";
    } else if (a === "Nagaland") {
      var array = ["kohima", "dimapur"];
      var map =
        "<iframe src=https://www.google.com/maps/d/embed?mid=1w17t4dZRoFcLF8_vVScuQGYod_p3Jcad width=500 height=300 ></iframe>";
    } else if (a === "Odisha") {
      var array = ["Bhubaneswar", "baripada"];
      var map =
        "<iframe src=https://www.google.com/maps/d/embed?mid=17hlFPBQBaTFuOWZd24Jq1kKQ9Q96HrEs width=500 height=300></iframe>";
    } else if (a === "Punjab") {
      var array = ["Firozpur", "Jalandhar"];
      var map =
        "<iframe src=https://www.google.com/maps/d/embed?mid=1F7aMgvjAitZ8gdFfAJTyYwgSfYSkMvyl width=500 height=300></iframe>";
    } else if (a === "Sikkim") {
      var array = ["gangtok", "pelling"];
      var map =
        "<iframe src=https://www.google.com/maps/d/embed?mid=1zjvfBPuzZ0WEUbVYqgF1Z8UGuZHrIzoK width=500 height=300></iframe>";
    }
    // else if(a==='Arunachal Pradesh')
    // {
    //   var array=['itanagr','ziro'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY width=500 height=300></iframe>";
    // }
    // else if(a==='Assam')
    // {
    //   var array=['Bongaigaon','kajiranja'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY width=500 height=300 ></iframe>";
    // }
    // else if(a==='Bihar')
    // {
    //   var array=['patna','muzaffarpur'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY width=500 height=300></iframe>";
    // }
    // else if(a==='Chhattisgarh')
    // {
    //   var array=['raipur','villai'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY width=500 height=300></iframe>";
    // }

    // else if(a==='Goa')
    // {
    //   var array=['panaji','vascodagama'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY ></iframe>";
    // }
    // else if(a==='Gujarat')
    // {
    //   var array=['Porbandar','Jamnagar','valsad'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY ></iframe>";
    // }
    // else if(a==='Haryana')
    // {
    //   var array=['panipat','gurugram'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY ></iframe>";
    // }
    // else if(a==='Himachal Pradesh')
    // {
    //   var array=['simmla','kulu'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY ></iframe>";
    // }
    // else if(a==='Jammu and Kashmir')
    // {
    //   var array=['Anantnag'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY ></iframe>";
    // }
    // else if(a==='Jharkhand')
    // {
    //   var array=['ranchi','tata'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY ></iframe>";
    // }
    // else if(a==='Karnataka')
    // {
    //   var array=['banaglore','mysore'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY ></iframe>";
    // }
    // else if(a==='Kerala')
    // {
    //   var array=['kochi','tiruantapuram'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY ></iframe>";
    // }
    // else if(a==='Madhya Pradesh')
    // {
    //   var array=['bhopal','indore'];
    //   var map="<iframe src=https://www.google.com/maps/d/embed?mid=1GkX-sYY7kWeMarrFvbN5NJANP0YGQ6bY ></iframe>";
    // }
    else {
      var array = ["invalid state"];
    }
    var string = "";
    var string1 = "";
    for (var i = 0; i < array.length; i++) {
      string = string + "<option>" + array[i] + "</option>";
    }
    string = "<select>" + string + "</select>";
    document.getElementById("output").innerHTML = string;

    for (var i = 0; i < map.length; i++) {
      string1 = string1 + map[i];
    }
    string1 = string1;
    document.getElementById("map").innerHTML = string1;
  }

  posts: any[];
  private url = "https://indian-cities-api-nocbegfhqg.now.sh/cities";
  constructor(private http: HttpClient) {
    this.http.get<any>(this.url).subscribe(data => {
      this.posts = data;
    });
  }
  ngOnInit() {
    window
      .fetch(this.url)
      .then(data => {
        data
          .json()
          .then(item => {
            console.log(item);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  state_list = [
    "Andhra Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Sikkim"
    // "Arunachal Pradesh",
    // "Assam",
    // "Bihar",
    // "Chhattisgarh",
    // "Goa",
    // "Gujarat",
    // "Haryana",
    // "Himachal Pradesh",
    // "Jammu and Kashmir",
    // "Jharkhand",
    // "Karnataka",
    // "Kerala",
    // "Madhya Pradesh"
  ];
}

