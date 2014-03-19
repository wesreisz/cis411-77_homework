using System;
using System.Data.Entity;

namespace PetStore.Models
{
    public class Pet
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DateReceived { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
    }

    public class PetDBContext : DbContext
    {
        public DbSet<Pet> Pets { get; set; }
    }
}