using AngularOneSpike.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularOneSpike.Data
{
    public interface IMemberRepository
    {
        int Create(Member member);
        Member Retrieve(int id);
        IEnumerable<Member> List();
        void Update(Member member);
        void Delete(int id);
    }

    public class MemberRepository : IMemberRepository
    {
        private MemberDbContext _dbContext;

        public MemberRepository(MemberDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int Create(Member member)
        {
            _dbContext.Members.Add(member);
            _dbContext.SaveChanges();
            return member.Id;
        }

        public Member Retrieve(int id)
        {
            var member = _dbContext.Members.Find(id);
            if(member != null)
            {
                return member;
            }
            throw new InvalidOperationException(string.Format("Member with id {0} was not found.", id));
        }

        public IEnumerable<Member> List()
        {
            return _dbContext.Members;
        }

        public void Update(Member member)
        {
            var existingMember = Retrieve(member.Id);

            _dbContext.Entry(existingMember).CurrentValues.SetValues(member);
            _dbContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var member = Retrieve(id);

            _dbContext.Members.Remove(member);
            _dbContext.SaveChanges();
        }
    }
}