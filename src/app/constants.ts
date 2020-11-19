export class Constants {
    static DEVELOPMENT_SERVER = 'http://localhost/apis-tracker/';
    static PRODUCTION_SERVER = 'http://dev-help.herokuapp.com//apis-tracker/';
    static STAGING_SERVER = 'http://dev-help.herokuapp.com//test_apis-tracker/';
    static USER = [{
        "name": "Dr.Nishant clicnicaian",
        "clinic": "Kids Care Clinic",
        "image": "name.png"
    },{
        "name": "Dr.Nishant clicnicaian",
        "clinic": "Kids Care Clinic",
        "image": "name.png"
    }];
    static tableTabs = {
        types: {
            "queueCount": "06",
            "earlierCount": "02",
            "waitlistCount": "05",
            "noShowCount": 0
        },
        data: [
            {
                "orderID": 1,
                "user": {
                    "name": "varun",
                    "imagePath": "sdsd.png",
                    "gender": "male",
                    "age": 24
                },
                "contact": 9999999999,
                "appointmentTime": 9999999999999,
                "time": 9999999999999,
                "type": 'vitals'
            },{
                "orderID": 2,
                "user": {
                    "name": "JohnWick",
                    "imagePath": "sdsd.png",
                    "gender": "male",
                    "age": 24
                },
                "contact": 9999999999,
                "appointmentTime": 9999999999999,
                "time": 9999999999999,
                "type": 'vitals'
            }
        ]
    };
}