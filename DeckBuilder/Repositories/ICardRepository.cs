using DeckBuilder.Models;
using Microsoft.Extensions.Hosting;

namespace DeckBuilder.Repositories
{
    public interface ICardRepository
    {
        List<Card> GetAll();
       

        public Card GetById(int id);
       

        void Add(Card card);
        void Delete(int id);
        void Update(Card card);
    }
}
