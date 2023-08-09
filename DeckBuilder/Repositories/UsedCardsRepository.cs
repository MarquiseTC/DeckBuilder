using DeckBuilder.Models;
using DeckBuilder.Utils;

namespace DeckBuilder.Repositories
{
    public class UsedCardsRepository : BaseRepository, IUsedCardsRepository
    {
        public UsedCardsRepository(IConfiguration configuration) : base(configuration) { }

        public UsedCards GetByDeckId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Select uc.id as UsedCardsId, uc.deckId as UsedCardsDeckId, uc.cardId as UsedCardsCardId,
                       c.id as CardId, d.id as DeckId
                       From UsedCards uc
                       Join Card c on uc.CardId = c.id 
                       Left Join Deck d on uc.Deckid = d.id
                       Where uc.id = @id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    UsedCards usedCards = null;
                    if (reader.Read())
                    {
                        usedCards = new UsedCards()
                        {
                            Id = DbUtils.GetInt(reader, "UsedCardsId"),
                            DeckId = DbUtils.GetInt(reader, "UsedCardsDeckId"),
                            CardId = DbUtils.GetInt(reader, "UsedCardsCardId")
                        };


                    }

                    reader.Close();
                    return usedCards;
                }
            }
        }


        public UsedCards GetByCardId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Select uc.id as UsedCardsId, uc.deckId as UsedCardsDeckId, uc.cardId as UsedCardsCardId,
                       c.id as CardId, d.id as DeckId
                       From UsedCards uc
                       Join Card c on uc.CardId = c.id 
                       Left Join Deck d on uc.Deckid = d.id
                       Where uc.id = @id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    UsedCards usedCards = null;
                    if (reader.Read())
                    {
                        usedCards = new UsedCards()
                        {
                            Id = DbUtils.GetInt(reader, "UsedCardsId"),
                            DeckId = DbUtils.GetInt(reader, "UsedCardsDeckId"),
                            CardId = DbUtils.GetInt(reader, "UsedCardsCardId")
                        };


                    }

                    reader.Close();
                    return usedCards;
                }
            }
        }
        public void Add(UsedCards usedCards)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                     INSERT INTO UsedCards (CardId, DeckId)
                     OUTPUT INSERTED.ID
                      Values( @CardId, @DeckId)";
                    

                    DbUtils.AddParameter(cmd, "@CardId", usedCards.CardId);
                    DbUtils.AddParameter(cmd, "@DeckId", usedCards.DeckId);
                    

                    usedCards.Id = (int)cmd.ExecuteScalar();
                }
            }
        }



    }



}