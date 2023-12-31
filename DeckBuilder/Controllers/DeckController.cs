﻿using DeckBuilder.Models;
using DeckBuilder.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System.Reflection;

namespace DeckBuilder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeckController : ControllerBase
    {
        private readonly IDeckRepository _deckRepository;
        private readonly IUsedCardsRepository _usedCardsRepository;
        public DeckController(IDeckRepository deckRepository, IUsedCardsRepository usedCardsRepository)
        {
            _deckRepository = deckRepository;
            _usedCardsRepository = usedCardsRepository;
        }
        
        [HttpGet]
        public IActionResult Get()
        {
            var decks = _deckRepository.GetAllDecks();
            return Ok(decks);
        }

        [HttpGet("{id}")]
        public IActionResult GetDeckById(int id) 
        {
            var deck = _deckRepository.GetDeckById(id);
           

            if (deck == null) 
            { 
            return NotFound();
            
            }
            return Ok(deck);
        }

        [HttpPost]
        public IActionResult Post(Deck deck) 
        { 
            deck.DateCreated = DateTime.Now;
            _deckRepository.Add(deck);
            return CreatedAtAction("Get", new {id = deck.Id}, deck);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id) 
        {
            _usedCardsRepository.Delete(id);
        _deckRepository.Delete(id);
            return NoContent();
        }

        [HttpGet("GetUserDecks/{id}")]
        public IActionResult Get(int id)
        {
            List<Deck> decks = _deckRepository.GetDeckByUserId(id);
            if (decks == null)

            {
                return NotFound();
            }

            return Ok(decks);
        }

        [HttpGet("search")]
        public IActionResult Search(string q, bool sortDesc)
        {
            return Ok(_deckRepository.Search(q, sortDesc));
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Deck deck)
        {
            if (id != deck.Id)
            {
                return BadRequest();
            }

            deck.DateCreated = DateTime.Now;
            _deckRepository.Update(deck);
            return NoContent();
        }

    }

}
