using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcMovie.Models
{
    public class MvcMovieContext : DbContext
    {
           
        public MvcMovieContext() : base("name=MvcMovieContext")
        {
        }

        public System.Data.Entity.DbSet<MvcMovie.Models.Movie> Movies { get; set; }
    
    }
}
