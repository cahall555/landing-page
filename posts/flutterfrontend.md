---
title: 'Building a Flutter Frontend'
date: '2024-05-07'
hero: '/blog/brazilian_spinach.jpg'
excerpt: 'Building the frontend of the Garden Journal application with Flutter. Connecting the frontend to the backend with models.'
---
### Project Status of the Garden Journal Application
A trip to the [Buffalo](https://github.com/gobuffalo/buffalo) repository in github will reveal that this project has been archived and will no longer be maintained. The backend of this application has been built in the Buffalo Go framework. This means the backend will need to be updated at some point to move away from Buffalo. More on that at a future date; I do plan to keep the backend in Go and right now everything is working great. 
																						
I have moved on to building the frontend of the application in Flutter. I have been working on this project for a few weeks, and have made some good progress. The frontend is now working with the backend for most, but not all, CRUD (create, read, update, and delete) functionality. I have a few bugs to work through, for example, when it comes to adding images I am using a multipart form that isn't working quite right. In short the image is saved and working correctly when the entry is created, but updating an entry with an image is not working so well. The end goal is to host this application, and so where and how the image will ultimately be housed is also in the back of my mind when troubleshooting this issue.	

My goal is to make this application available on the web, iOS, and Android. With a first release on Android. I want users to be able to walk around their garden and easily make notes on their phone. Some of these users may also want to sit down at a computer later and to review their notes and/or add more information. I want the experience of transitioning between mobile application and the web to be as seamless as possible, which is why I went with Flutter.

### Connecting the Frontend to the Backend with Models

I have been learning a lot of fun things while implementing to this point. Here is one of those things.

**Buffalo Go MVC to Flutter MVVC**

As discussed in an earlier post Buffalo Go is a MVC (model, view, controller) framework. Flutter is a MVVC (model, view, view controller) framework, and so to get started connecting the two I felt the most logical place to start was with the model. Under my lib folder I created a folder called model. This folder holds separate models to parallel each model in the Buffalo backend. As an example, below is the model for a garden in Go, followed by the model for a garden in Flutter (Flutter uses Dart).

Buffalo Go Model written in Go:

```go 
type Garden struct {
          ID        uuid.UUID `json:"id" db:"id"`
          Name      string    `json:"name" db:"name"`
          Zone      string    `json:"zone" db:"zone"`
          Plants    []Plant   `json:"plants,omitempty" has_many:"plants"`
          CreatedAt time.Time `json:"created_at" db:"created_at"`
          UpdatedAt time.Time `json:"updated_at" db:"updated_at"`
  }
``` 

Flutter Model written in Dart:

```dart
import 'plant.dart';
import 'apis/plant_api.dart';
 
 class Garden {
         final String id;
         final String name;
         final String zone;
  	 final DateTime createdAt;
         final DateTime updatedAt;
         final List<Plant>?plants;
   
          Garden({required this.id, required this.name, required this.zone, required this.createdAt,
	       		required this.updatedAt, this.plants});
  
          factory Garden.fromJson(Map<String, dynamic> json) {
                  return Garden(
                          id: json['id'],
                          name: json['name'],
                          zone: json['zone'],
                          createdAt: DateTime.parse(json['created_at']),
                          updatedAt: DateTime.parse(json['updated_at']),
                          plants: json['plants'] !=null ? (json['plants'] as List).map((i) => 
			       			Plant.fromJson(i)).toList() : null,
                  );
          }
    
          Map<String, dynamic> toJson() {
                  return {
                          'id': id,
                          'name': name,
                          'zone': zone,
                          'created_at': createdAt.toIso8601String(),
                          'updated_at': updatedAt.toIso8601String(),
                          'plants': plants?.map((plant) => plant.toJson()).toList(),
                  };
          }
          
          set name(String newName) {  
                  this.name = newName;
          }
      
          set zone(String newZone) {
                  this.zone = newZone;
          }
  }
```
Configuring these models is at the heart of connecting the front and backend. Both models require typing, and have worked together really well. The only real type challenge I have had is with id. I am using UUID's in Go, and in the Dart model above, you can see I have it represented as a String. Dart does have a [UUID Package](https://pub.dev/packages/uuid), however, when I play with it, it tries to create a new UUID; it doesn't let me use it for typing only. The UUID is created on the backend, and this package re-creating the UUID on the frontend is counterproductive. 

I have found it easy enough to use String to represent UUID's in almost all cases. The one place I have struggled is with Buffalo Go's CSRF (cross-site request forgery) built in middleware. This is still a loose end I need to tie up. Buffalo Go is built primarily for the web and this functionality works great. However, with the mobile app it is my understanding that I should not need it, but I would like to be agnostic and allow users to use this application on the web as well. Dart's String type appears to be especially problematic when trying to use the CSRF middleware, but I could be misdiagnosing the problem. More work to come on this.

I have found the dart model especially easy to work with as it manages the transition of data to and from json through the API. It is easy enough to null items that may not be associated with the object, in this case the plants list can be made nullable with the ? operator. I also like the flexibility provided by the backend in determining what json data I want passed through. If, for example, I don't want to pass updated at data through the API I can remove the 'json:"updated_at"' statement from the Go model and it will not be passed through the API.




