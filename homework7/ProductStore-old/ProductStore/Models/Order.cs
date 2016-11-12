﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductStore.Models
{
    public class Order
    {
        public int Id { get; set; }
        [Required]
        public string Customer { get; set; }

        // Navigation property
        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}