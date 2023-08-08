using DeckBuilder.Models;

namespace DeckBuilder.Repositories
{
    public class UsedCardsRepository: BaseRepository, IUsedCardsRepository
    {
        public UsedCardsRepository(IConfiguration configuration) : base(configuration) { }

        //public UsedCards GetByDeckId(int deckId)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand()) 
        //        {
        //            cmd.CommandText = @"Select uc.id as UsedCardsId, uc.deckId as UsedCardsDeckId, uc.cardid as UsedCardsCardId
        //                c.id as CardId, d.id as DeckId
        //                From UsedCards us
        //                left join Card c on uc.CardId as c.id 
        //                left join Deck d on uc.Deckid as d.id
        //                Where uc.id = @id";
                
        //        }
        //    }
        //}
}
}
