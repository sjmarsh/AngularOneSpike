using AngularOneSpike.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularOneSpike.Data
{
    public class MemberDbContext : DbContext
    {
        public DbSet<Member> Members { get; set; }
    }
}