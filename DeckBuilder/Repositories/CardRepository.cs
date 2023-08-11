using DeckBuilder.Models;
using DeckBuilder.Utils;
using Newtonsoft.Json;
using RestSharp;

namespace DeckBuilder.Repositories
{
    public class CardRepository : BaseRepository, ICardRepository
    {
        public CardRepository(IConfiguration configuration) : base(configuration) { }
        
            public List<Card> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd  = conn.CreateCommand()) 
                {
                    cmd.CommandText = @"
                   SELECT Id, Name, ManaCost, CMC, Colors, Image
                    From Card";

                    var reader = cmd.ExecuteReader();
                    var cards = new List<Card>();
                    while (reader.Read()) 
                    {
                        cards.Add(new Card()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            ManaCost = DbUtils.GetString(reader, "ManaCost"),
                            CMC = DbUtils.GetInt(reader, "CMC"),
                            Colors = DbUtils.GetString(reader, "Colors"),
                            Image = DbUtils.GetString(reader, "Image"),
                        });
                    
                    }
                    reader.Close();
                    return cards;
                }
            }
        }
            
        public Card GetById(int id) 
        {
        using (var conn = Connection) 
            {
            conn.Open ();
                using (var cmd = conn.CreateCommand()) 
                {
                    cmd.CommandText = @"
                   SELECT Id, Name, ManaCost, CMC, Colors, Image
                    From Card
                    Where Id = @Id";

                    DbUtils.AddParameter(cmd, "Id", id);
                    var reader = cmd.ExecuteReader();

                    Card card = null;
                    while(reader.Read())
                    {
                        card = new Card()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            ManaCost = DbUtils.GetString(reader, "ManaCost"),
                            CMC = DbUtils.GetInt(reader, "CMC"),
                            Colors = DbUtils.GetString(reader, "Colors"),
                            Image = DbUtils.GetString(reader, "Image"),

                        };

                    }
                    reader.Close ();
                    return card;

                }
            
            }
        }
        
        public void Add(Card card)
        {
            using (var conn = Connection) 
            {
            conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                     INSERT INTO CARD (Name, ManaCost, CMC, Colors, Image)
                     OUTPUT INSERTED.ID
                    VALUES(@Name, @ManaCost, @CMC, @Colors,@Image)";

                    DbUtils.AddParameter (cmd, "@Name", card.Name);
                    DbUtils.AddParameter(cmd, "@ManaCost", card.ManaCost);
                    DbUtils.AddParameter(cmd, "@CMC", card.CMC);
                    DbUtils.AddParameter(cmd, "@Colors", card.Colors);
                    DbUtils.AddParameter(cmd, "@Image", card.Image);
                    

                    card.Id = (int)cmd.ExecuteScalar ();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Card WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Update(Card card) 
        {
        using (var conn = Connection) 
        { 
            conn.Open ();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE Card
                    SET Name = @Name,
                        ManaCost = @ManaCost,
                        CMC = @CMC,
                        Colors = @Colors
                        Image = @Image
                        
                        Where Id = @Id";
                    DbUtils.AddParameter(cmd, "@Name", card.Name);
                    DbUtils.AddParameter(cmd, "@ManaCost", card.ManaCost);
                    DbUtils.AddParameter(cmd, "@CMC", card.CMC);
                    DbUtils.AddParameter(cmd, "@Colors", card.Colors);
                    DbUtils.AddParameter(cmd, "@Image", card.Image);

                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
