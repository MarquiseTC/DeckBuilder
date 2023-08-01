using DeckBuilder.Models;

namespace DeckBuilder.Repositories
{
    public interface IDeckRepository
    {
        Deck GetDeckById(int id);

        //    void Add(Deck deck);
        //    void Update(Deck deck);
        //    void Delete(int id);
        //
    }
}