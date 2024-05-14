---
title: 'Using Controllers with GO and Dart'
date: '2024-05-14'
hero: '/blog/longevityspinach.jpg'
excerpt: 'Exploring how a controller written in GO might connect to a Flutter frontend.'
---
We have discussed models, the first part of the MVC (model view controller) framework, in [previous articles](https://courtney.elsner.dev/posts/flutterfrontend). Controllers are where actions, and API calls happen. In order to display and manipulate data in our Flutter application we will need to create controllers on the front and backend that work together.

### Creating a controller for a GO backend

Below is an example of a GO controller. This particular controller was created using the Buffalo framework, which uses the [pop](https://pkg.go.dev/github.com/gobuffalo/pop/v6#section-readme) package. This package is used to interact with the database, and aids in the development of CRUD (create, read, update, delete) operations. At the top of this application 'tx' is being declared as a variable to aid in the database connection. The garden model is being assigned to the 'garden' variable. The tx.All function is called to retrieve all the gardens from the database. The garden variable is then set to the context, and returned as a JSON object. In this case we will be returning all gardens that exist in the database, which will ultimately allow us to print all gardens on the frontend.

It is worth noting that the return statement will pass a 200 status code, along with the garden JSON object. Status codes are something a developer has complete control over, and can be used to indicate the success or failure of an API call. Status codes can help with error handling and troubleshooting issues between the frontend and backend, understanding how they work can be beneficial.

```GO
 func GardensIndex(c buffalo.Context) error {
         tx := c.Value("tx").(*pop.Connection)
         garden := models.Gardens{}
         err := tx.All(&garden)  
         if err != nil {
                 log.Println("Gardens not found: ", err)
 }
 
         c.Set("garden", garden)
         return c.Render(http.StatusOK, r.JSON(garden))
}
```
Mapping the controller to the route is done in the app.go file. The GET method is being used to retrieve information. Other methods that aid in CRUD functionality are POST, PUT and DELETE. The GardensIndex function discussed above, is being called to retrieve the gardens from the database. Here is the line of code that makes this possible in app.go:

```GO
app.GET("/gardens", GardensIndex)
```

### Creating a controller for a Flutter frontend

The work done in GO sets us up for success on the frontend. The controller in the frontend will be responsible for making the API call to the backend. The function below is written in Dart, and returns a list of the gardens it receives through the API as JSON. The variable 'response' will hold the response of that API call. The uri is mapped to the gardens endpoint in app.go discussed above. The 'apiUrl' variable is mapped to the base uri, and the '+' symbol allows us to concatenate any ending uri component to make the appropriate API call. By using response.statusCode we can determine if the GO request completed successfully. Upon a successful completion the JSON data is decoded and returned as a list of gardens. If the request fails, an exception is thrown.

Parsed garden data can be used by the view to display data to an end user.

```Dart
Future<List<Garden>> fetchGardenApi() async {
   final response = await http.get(Uri.parse(apiUrl + 'gardens/'));
  
   if (response.statusCode == 200) {
     try {
       final List<dynamic> data = json.decode(response.body);
  
       return data.map<Garden>((json) => Garden.fromJson(json)).toList();
     } on FormatException catch (e) {
       print('The response was not JSON. $e');
       throw Exception('Failed to decode JSON data: $e');
     }
   } else {
     print('Request failed with status: ${response.statusCode}.');
     throw Exception('Request failed with status: ${response.statusCode}.');
   }
 }
```

This example describes the relationship between front and backend controllers using GET requests. The same principles can be applied to POST, PUT and DELETE requests, to complete CRUD operations.
