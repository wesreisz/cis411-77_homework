namespace PetStore.Migrations
{
    using PetStore.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<PetDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(PetDBContext context)
        {
            context.Pets.AddOrUpdate(i => i.Name,
                new Pet 
                { 
                    Name = "German Shephard",
                    Description = "I'm a German Shephard",
                    DateReceived = new DateTime(2014, 1, 1),
                    Quantity = 1,
                    Price = 129.99,
                    Image = "http://static.ebayclassifieds.com/static/1403140613/img/category_info//pets/dogs-puppies/german-shepherd.jpg"
                },
                new Pet
                {
                    Name = "Bulldog",
                    Description = "I'm a bulldog",
                    DateReceived = new DateTime(2014, 1, 2),
                    Quantity = 1,
                    Price = 99.99,
                    Image = "http://upload.wikimedia.org/wikipedia/commons/1/13/Clyde_The_Bulldog.jpg"
                },
                new Pet
                {
                    Name = "Cat",
                    Description = "I'm the only cat in this pet store. Please rescue me away from this place!",
                    DateReceived = new DateTime(2013, 12, 5),
                    Quantity = 1,
                    Price = 49.99,
                    Image = "http://www.petfinder.com/wp-content/uploads/2012/11/99059361-choose-cat-litter-632x475.jpg"
                }
            );
            
        }
    }
}
