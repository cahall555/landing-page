---
title: 'Testing Models with Buffalo Go'
date: '2024-02-28'
hero: '/blog/cilantro.jpg'
excerpt: 'Creating tests using Buffalo Go.'
---

In the last article we talked about setting up models, but what about testing them? Test driven development (TDD) is a great way to ensure an application is working as expected now, and for the life of the application. When a developer runs the command 'buffalo pop g model [model_name]' a test file is automatically generated, so this is a great excuse to write tests.

### Model Suite
As mentioned above, creating a model using the buffalo CLI creates a test file, this file starts with a test that is designed to fail. This serves as a reminder to write appropriate tests for models. 
The code block below creates a garden entry and assigns it as a pointer to a variable called 'g'. ValidateAndCreate(g) creates a database entry and validates fields being created. Verrs holds validation errors. The test 'ms.False(verrs.HasAny(), "This message will return if there are any validation errors.")' checks to see if there are any validation errors. 
Another important task that needs to happen when a new garden is added to the database is a unique uuid should be generated automatically. The test 'ms.NotNil( g.ID, "This message will return if no id was generated.")' checks to ensure the id field on the newly created garden is not nil, meaning the auto generate did not happen. 

```go
//garden_test.go
 func (ms *ModelSuite) Test_Garden() {
         g := &Garden{
                 Name: "Salsa Garden",
                 Zone: "13",
          }
        
         ms.Equal(g.GardenZone(), "Salsa Garden is in zone 13")
 
         db := ms.DB
         verrs, err := db.ValidateAndCreate(g)
         if err != nil {
                 panic(err)
         }
  
         ms.NotNil(g.ID, "Garden id is generated when saved to database")
         ms.False(verrs.HasAny(), "All fields must be completed")
}
```

### Testing Relationships

After testing to ensure that objects are successfully added to the database I want to test relationships. The test below demonstrates how that can be done. 
First context is needed, plants belong to gardens in a one-to-many association and tags relate to plants in a many-to-many relationship. To start we build up the garden as with the previous example. Next a plant is added and associated with the garden, and then tags are created. Just as with our garden example the plant and tags are created and tested for a successful uuid. 
The plantsTag table contains the relationship between plants and tags. This table contains a unique uuid for each relationship, and the uuid's of the plant and tag. The creation of the relationship uuid is tested at the end of the code block below.
It is worth noting that this is different from the one-to-many relationship case between the plant and garden. Here we only need to add the already generated garden uuid to the plant object, making our testing process distinctly different.

```go
//Testing tag association with plants
 func (ms *ModelSuite) Test_PlantsTag() {
         g := &Garden{
                 Name: "Salsa Garden",
                 Zone: "13",
         }
 
         db := ms.DB
         _, err := db.ValidateAndCreate(g)
         if err != nil {
                 panic(err)
         }
 
         ms.NotNil(g.ID, "Garden id is generated when saved to database")
 
         p := &Plant{
                 Name:          "Tomato",
                 Germinated:    true,
                 DaysToHarvest: 90,
                 GardenID:      g.ID,
         }
 
         _, err = db.ValidateAndCreate(p)
         if err != nil {
                 panic(err)
         }
 
         ms.Equal(p.PlantName(), "Tomato")
         ms.NotEqual(uuid.Nil, p.ID, "Plant id is created when saving to database")
 
         t1 := &Tag{
                 Name: "anual",
         }
 
         t2 := &Tag{
                 Name: "fruit",
         }
 
         verrs, err := db.ValidateAndCreate(t1)
         if err != nil {
                 panic(err)
         }
 
         ms.NotEqual(uuid.Nil, t1.ID, "Tag id is created when saving to database")
         ms.False(verrs.HasAny(), "No errors when creating tag")
         ms.Equal(t1.TagName(), "anual")

         pt := &PlantsTag{
                 PlantID: p.ID,
                 TagID:   t1.ID,
         }
 
         verrs, err = db.ValidateAndCreate(pt)
         if err != nil {
                 panic(err)
         }
 
         ms.NotEqual(uuid.Nil, pt.ID, "PlantsTag id is created when saving to database")
         ms.False(verrs.HasAny(), "No errors when creating PlantsTag")

}
```
