using DeckBuilder.Models;
using DeckBuilder.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    }
}
