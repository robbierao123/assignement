var json = {"a":{
    "resourceType": "Patient",
    "id": "xcda",
    "text": 
      "status generated",
      "div": "\n      \n      <p>Henry Levin the 7th</>\n    \n    </div>"
    },
    "identifier": 
      {
        "use": "usual",
        "type": {
          "coding": [
            {
              "system": "htt://hl7.org/fhir/v2/0203",
              "code": "MR"
            }
          ]
        },
        "system": "urn:oid:2.16.840.1.113883.19.5",
        "value": "12345"
    ,
    "active": true,
    "name": [
      {
        "family": [
          "Levin"
        ],
        "given": [
          "Henry"
        ]
      }
    ],
    "gender": "male",
    "birthDate": "2002-09-24",
    "managingOrganization": {
      "reference": "Organization/2.16.840.1.113883.19.5",
      "display": "University Health Network"
    },
    "conditions": [
      "Diabetes",
      "High blood pressure",
      "Asthma"
    ]
  }}
//   Name of patient:

//   Organization name:
  
//   Gender:
  
//   Number of conditions they have:
  
//   List of all conditions:
  
   
  
//   E.g.
  
   
  
//   Name of patient: Jane Doe
  
//   Organization name: College Hospital
  
//   Gender: Female
  
//   Number of conditions they have: 2
  
//   List of all conditions:
  
//   - Epilepsy
  
//   - Sleep apnea
  
  

 var firstName = json["identifier"]["name"][0]["family"];

 var lastName = json["identifier"]["name"][0][ "given"];

var organizationName = json['identifier']["managingOrganization"]["display"];

var conditions = json["identifier"]["conditions"];

var conditionCount = conditions.length;

var gender = json["identifier"]["gender"];

document.getElementById("name").innerHTML =
  "Name of patient: " + firstName +" "+ lastName;

  document.getElementById("organization").innerHTML =
  "Gender: " +  organizationName;

  document.getElementById("gender").innerHTML =
  "Organization name: " +  gender;


  document.getElementById("conditionCount").innerHTML =
  "Number of conditions they have: " + conditionCount;

  document.getElementById("allCondition").innerHTML =
  "List of all conditions: " + conditions;





console.log(firstName);
console.log(lastName)
console.log(organizationName);
console.table(gender);