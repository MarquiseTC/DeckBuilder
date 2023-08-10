using DeckBuilder.Models;

namespace DeckBuilder.Repositories
{
    public interface IUsedCardsRepository
    {
        public UsedCards GetByDeckId(int id);

        public UsedCards GetByCardId(int id);

        public void Add(UsedCards usedCards);

        void Delete(int id);

        void DeleteCard(int id);
    }
}
