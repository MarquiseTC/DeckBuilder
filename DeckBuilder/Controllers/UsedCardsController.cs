using DeckBuilder.Models;
using DeckBuilder.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DeckBuilder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsedCardsController : ControllerBase
    {
        private readonly IUsedCardsRepository _usedCardsRepository;
        public UsedCardsController(IUsedCardsRepository usedCardsRepository)
        {
            _usedCardsRepository = usedCardsRepository;
        }

        [HttpGet("GetUsedCardsByDeckId/{id}")]
        public IActionResult GetByDeckId(int id) 
        { 
        var usedCards = _usedCardsRepository.GetByDeckId(id);
            if (usedCards == null) 
            {
            return NotFound();
            
            }
            return Ok(usedCards);
        
        }
        [HttpGet("{id}")]
        public IActionResult GetByCardId(int id)
        {
            var usedCards = _usedCardsRepository.GetByCardId(id);
           if (usedCards == null)
           {
               return NotFound();

           }
            return Ok(usedCards);

        }
        [HttpPost]
        public IActionResult Post(UsedCards usedCards)
        {
            _usedCardsRepository.Add(usedCards);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteCard(int id)
        {
            _usedCardsRepository.DeleteCard(id);
            return NoContent();
        }

       
    }
}
