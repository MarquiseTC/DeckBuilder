using DeckBuilder.Models;
using DeckBuilder.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using System.Security.AccessControl;

namespace DeckBuilder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardController : ControllerBase
    {
        private readonly ICardRepository _cardRepository;

        public CardController(ICardRepository cardRepository)
        {
            _cardRepository = cardRepository;
        }

        [HttpGet]
        public IActionResult Get() 
        {
        return Ok(_cardRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var card = _cardRepository.GetById(id);
            if (card == null)
            {
                return NotFound();
            }
            return Ok(card);
        }
        [HttpPost]
        public IActionResult Post(Card card)
        {
            _cardRepository.Add(card);
            return CreatedAtAction("Get", new { id = card.Id }, card);
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id, Card card)
        {
            if (id != card.Id)
            {
                return BadRequest();
            }

            _cardRepository.Update(card);
            return NoContent();
        }

        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _cardRepository.Delete(id);
            return NoContent();
        }
    }
}
