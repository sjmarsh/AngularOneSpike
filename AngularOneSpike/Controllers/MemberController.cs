using AngularOneSpike.Data;
using AngularOneSpike.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularOneSpike.Controllers
{
    public class MemberController : ApiController
    {
        private IMemberRepository _memberRepository;

        public MemberController(IMemberRepository memberRepository)
        {
            _memberRepository = memberRepository;
        }
        
        public Member Get(int id)
        {
            return _memberRepository.Retrieve(id);
        }

        public IEnumerable<Member> Get()
        {
            return _memberRepository.List();
        }

        public int Post(Member member)
        {
            return _memberRepository.Create(member);
        }

        public void Put(Member member)
        {
            _memberRepository.Update(member);
        }

        public void Delete(int id)
        {
            _memberRepository.Delete(id);
        }
    }
}
