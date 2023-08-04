using DeckBuilder.Models;
using Microsoft.Extensions.Hosting;
using System.Reflection;

namespace DeckBuilder.Repositories
{
    public interface IDeckRepository
    {
        Deck GetDeckById(int id);

        void Add(Deck deck);
        //    void Update(Deck deck);
        void Delete(int id);
        
        public List<Deck> GetAllDecks();

        public List<Deck> GetDeckByUserId(int userProfileId);

       public List<Deck> Search(string criterion, bool sortDescending);
    }
}