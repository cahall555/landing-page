---
title: 'DateTime in Flutter and Golang'
date: '2024-05-22'
hero: '/blog/blackberry.jpg'
excerpt: 'Working with date and time when sending API data from a Flutter frontend, to a Go backend.'
---

I have been tripped up on date and time before. Understanding how to parse and format any data type is important, and lacking awareness of how a time and/or date value is being parsed or formatted can lead to a lot of frustration. I am no expert, but I think writing down a thought process can help organize ideas, and you, the reader, might have new ideas. In the example below I am taking a date entered by the end user on the frontend, and passing it through the API to the backend. The frontend is written using Flutter, and the backend is in Golang. 


I started getting this error `ERRO[2024-05-21T19:55:08-04:00] parsing time "2024-05-15" as "2006-01-02T15:04:05Z07:00": cannot parse "" as "T" conn=tx-7701757531463426048 db=0s,`. On the frontend I was entering in the date May 15th, 2024. This date was being parsed, as I intended, to '2024-05-15'. For context this represents the date someone planted something. The end user selects a date from a calendar widget, and time isn't a factor. The end user has no control over time. From a data collection standpoint it makes little difference if a person plants something at ten in the morning or ten at night. In reading the [Golang documentation](https://pkg.go.dev/time#Parse) it appeared to me that parsing a dateTime type using the `time.parse(layout, value)` function would allow me to remove time from the date. Here is how I set up parsing the date when received from the frontend API. Note this is not a required field for the end user, hence testing for an empty string.

```Go
   dateStr := c.Request().FormValue("date_planted")
     if dateStr != "" {
         dateOnly := "2006-01-02"   
         parsedDate, err := time.Parse(dateOnly, dateStr)
         if err != nil {
         ¦   log.Println("Error parsing date:", err)
         ¦   return c.Error(400, errors.New("invalid date format"))
         }
         plant.DatePlanted = parsedDate
     }
```
The error above indicates that despite only having a yyyy-MM-dd format; time will still be parsed on the backend. So then I started thinking about the database. I was successful seeding it. I used the `time.Parse(layout, value)` function in my seed file so it makes a good visual. Here is a snippet of the seed file in Go:

```Go
tomatoDatePlanted, _ := time.Parse("2006-01-02", "2024-04-20")
tomatoDateGerminated, _ := time.Parse("2006-01-02", "2024-05-01")

tomato := models.Plant{Name: "Tomato", Germinated: true, DaysToHarvest: 90, 
PlantCount: 20, DatePlanted: tomatoDatePlanted, DateGerminated: tomatoDateGerminated,
GardenID: salsaGarden.ID}
                 err = models.DB.Create(&tomato)
                 if err != nil {
                         panic(err)
                 }
```

This is what the database looks like after it has been seeded. The time on the tomato is zeroed out, while the date is appearing as expected. In this example the date planted and date germinated values were not seeded for the jalapeno, so both the date planted and date germinated are zeroed out.

```sql
                id                   |   name   | plant_count |      date_planted      |    date_germinated     |
--------------------------------------+----------+-------------+------------------------+------------------------
 ce13f611-474d-4e83-b70e-e1d7b54b190d | Tomato   |          20 | 2024-04-20 00:00:00+00 | 2024-05-01 00:00:00+00 
 c258c0c5-e197-4326-a280-d66ef10bc0f2 | Jalapeno |          16 | 0001-01-01 00:00:00+00 | 0001-01-01 00:00:00+00 
```

I kept digging to see if I could find another way of parsing the date, but kept running into the `time.Parse(layout, value)` function. 

### The Dilemma

I could be missing something, but perhaps there isn't a way without hand rolling a date struct to do this in Go. Also, if I'm being pedantic, time and date do go hand in hand. Maybe it's best to keep the time value in the database, in case it is useful in the future. I now start thinking pros and cons. In a sql database the timeDate type takes 8 bytes of storage, and the date type takes about 3 bytes. The difference can add up and could lead to performance issues in the future. Of course, who knows what the future of this project will be, maybe now is not the time to worry about this. I made this pros and cons list. again, it could be incomplete, but ultimately decided, at least for now, to keep the time value and correct the date as it is passed from the frontend to accommodate the needs of the backend. 


| Pros     | Cons    |
| -------- | ------- |
| In a data first app having more information might help with growth in the long run.  | DateTime will take up more storage than the Date type. This could lead to inefficiencies in the future.|
| Using the language standard, and not creating custom structs, can help with long-term maintenance, and enforce best practices especially if the data is not incorrect. | Having an unused time stamp in the database may create confusion when people join the project. Why would it be there if were not going to use it now?|
| The more data provided the more formatting options are available.    |    |

This list could be incomplete, but I decided to keep the time value, and correct the date as it is passed from the frontend to accommodate the needs of the backend. The nice thing about frontend date formatting is that as long as the data is there, the developer has a lot of options when it comes to how to present a date to the end user. The function below is the one I am currently using to format the date on the frontend. I start by guarding against a null date, and then checking to see if it contains a zero value date. The year being zero appears to be a common thread between Go and Dart.  

```dart
  String formatDate(DateTime? date) { 
     if (date == null) {
       return 'date not set';                                        
     }                                                   
     if (DateFormat('y').format(date.toLocal()) == '0') {                 
       return 'date not set';
     }
     final formatter = DateFormat('yMMMMd');
     return formatter.format(date.toLocal());
   }
```

The observation finding the year set to zero can be seen when reviewing the database and API. Empty dates coming from Go look like this:
```json
{
"date_planted":"0001-01-01T00:00:00Z",
"date_germinated":"0001-01-01T00:00:00Z",
}
```

While Dart is interpreting an empty date to look like the json below. The year is set to zero, however, the month and day are set to December 31st. The timestamp is also populated, which is not the case in Go.
```json
{
"date_planted":"0000-12-31T19:35:35-04:24",
"date_germinated":"0000-12-31T19:35:35-04:24",
}
```
Given the concerns above about time, it is worth noting that when a date is populated, the timestamp in Dart changes to zero, which is what I would expect, and more accurately reflects what is happening on the backend.
```json
{
"date_planted":"2024-05-27T00:00:00.000Z",
"date_germinated":"0000-12-31T23:59:35.000Z"
}
```
These discrepancies can create confusion in the long term maintenance of the application. I think a good solution is to write tests and document this behavior.
