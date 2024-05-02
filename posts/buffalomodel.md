---
title: 'Modeling an app using Buffalo Go'
date: '2024-02-07'
hero: '/blog/spinach.jpg'
excerpt: 'Modeling a database using Buffalo Go.'
---

### Use Case
I have made attempts over the years to garden and have never felt successful. My challenge is not unique, my mother-in-law is a master gardener and tells me that no one is really a master gardener. Gardening takes time, patience, and experience. None of these can be acquired overnight, however, data can enhance this experience. Creating a gardening journal that allows users to track and document their gardening data in a meaningful way may provide insights that increase yield and an overall feeling of success in the garden.

### Set up
To start I created the model below to built out an initial garden structure. A garden can have many plants, but a plant can only belong to one garden. Thus the garden, plant relationship will be one to many.
Users will likely want to organize and manage their plants in different ways. Tags are intended to help with sorting, filtering and grouping. The application will come with standard tags, and users will be able to create their own tags. Plants can have many tags and tags can belong to many plants. The plant_tags table will help manage this many to many relationship.

![garden database](/blog/garden_db.png)

### One-to-Many

Buffalo Go has a file structure that includes models. Models are built in structs, which allow developers to declare and type fields. UUID's will be used to ensure uniqueness of id's. Fields containing 'db:' in the json structure will have database fields. In the example below those that do not include 'db:' have tags to, `has_many` and `belongs_to` which establish the relationship structs have to each other. These are transient fields that do not exist in the database. Because plants belong to gardens the plant struct holds the unique UUID for garden_ID. The Buffalo Go documentation does a good job of describing this One-to-Many relationship.


```go
//Gardens can have many plants
type Garden struct {
         ID        uuid.UUID `json:"id" db:"id"`
         Name      string    `json:"name" db:"name"`
         Zone      string    `json:"zone" db:"zone"`
         Plants    []Plant   `json:"plants,omitempty" has_many:"plants"`
//fields removed for brevity. 
}

//Many plants belong to a single garden
type Plant struct {  
         ID            uuid.UUID `json:"id" db:"id"`
         Name          string    `json:"name" db:"name"`
         Germinated    bool      `json:"germinated" db:"germinated"`
         DaysToHarvest int       `json:"days_to_harvest" db:"days_to_harvest"`
         GardenID      uuid.UUID `json: db:"garden_id"`
         Garden        *Garden   `json: "Garden,omitempty" belongs_to:"garden"`
 }

```

Buffalo Go uses Fizz to create database table migrations. Below are my Fizz files for the gardens and plants tables. As mentioned above plants is not a field in the gardens migrations table. However, because plants belong to a garden there is a foreign key field for the garden_id field in the plants table.

```go
create_table("gardens") {
         t.Column("id", "uuid", {primary: true})
         t.Column("name", "string", {})
         t.Column("zone", "string", {})    
         t.Timestamps()
}

create_table("plants") { 
         t.Column("id", "uuid", {primary: true})
         t.Column("name", "string", {})
         t.Column("germinated", "bool", {})
         t.Column("days_to_harvest", "integer", {})
         t.Column("garden_id", "uuid", {})
         t.ForeignKey("garden_id", {"gardens": ["id"]})
         t.Timestamps()
}

```

### Many-to-Many 

To setup the many to many relationship between plants and tags we will need to create three tables and include three structs. I added a PlantTags many_to_many relationship tag to the plant struct, as well as a similar RelatedPlants `many_to_many` relationship tag to the tag struct. The PlantsTag struct is where plant and tag table id's are held to connect a plant and a tag using plant and tag UUID's, this pattern is seen above with the plant and garden relationship.

```go
//Updated plant struct to include tags many-to-many relationship
type Plant struct {
         ID            uuid.UUID `json:"id" db:"id"`
         Name          string    `json:"name" db:"name"`
         Germinated    bool      `json:"germinated" db:"germinated"`
         DaysToHarvest int       `json:"days_to_harvest" db:"days_to_harvest"`
         GardenID      uuid.UUID `json: db:"garden_id"`
         Garden        *Garden   `json:"Garden,omitempty" belongs_to:"garden"`
         PlantTags     Tags    `many_to_many:"plants_tags"`
//fields removed for brevity.
}

//Tag struct also includes many-to-many relationship
type Tag struct {  
         ID            uuid.UUID `json:"id" db:"id"`
         Name          string    `json:"name" db:"name"`
         RelatedPlants Plants    `many_to_many:"plants_tags"` 
}

//Plant tags join struct. Note belongs_to tags with pointers
 type PlantsTag struct {
         ID        uuid.UUID `json:"id" db:"id"`
         PlantID   uuid.UUID `db:"plant_id"`
         Plant     *Plant    `belongs_to:"plants"`
         TagID     uuid.UUID `db:"tag_id"`
         Tag       *Tag      `belongs_to:"tags"`
}
```

As with the one-to-many relationship Fizz migration files were also created.

```go
// See above for plants, no changes were made.

//tags table
create_table("tags") {
         t.Column("id", "uuid", {primary: true})
         t.Column("name", "string", {})
         t.Timestamps()                    
}

//plants_tags table
create_table("plants_tags") {
         t.Column("id", "uuid", {primary: true})
         t.Column("plant_id", "uuid", {})
         t.Column("tag_id", "uuid", {})    
         t.ForeignKey("plant_id", {"plants": ["id"] })
         t.ForeignKey("tag_id", {"tags": ["id"] })
         t.Timestamps()
}
```



