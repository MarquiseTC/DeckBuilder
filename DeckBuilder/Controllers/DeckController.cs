using DeckBuilder.Models;
using DeckBuilder.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DeckBuilder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeckController : ControllerBase
    {
        private readonly IDeckRepository _deckRepository;
        public DeckController(IDeckRepository deckRepository)
        {
            _deckRepository = deckRepository;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id) 
        {
            var deck = _deckRepository.GetDeckById(id);
            deck.DateCreated = DateTime.Now;  


            if (deck == null) 
            { 
            return NotFound();
            
            }
            return Ok(deck);
        }
    }
}
