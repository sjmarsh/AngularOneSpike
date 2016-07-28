using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularOneSpike.Models
{
    public class Member
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Gender Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public bool IsCurrent { get; set; }
    }
}