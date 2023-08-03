using DeckBuilder.Models;
using DeckBuilder.Utils;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using static DeckBuilder.Repositories.DeckRepository;

namespace DeckBuilder.Repositories
{
    public class DeckRepository : BaseRepository, IDeckRepository
    {

        public DeckRepository(IConfiguration configuration) : base(configuration) { }
        
        public Deck GetDeckById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Select d.Id as DeckId, d.Name, d.UserProfileId as DeckUserProfileId, 
                d.Format,c.Id as CardId, c.Name as CardName, c.cmc, c.Colors,c.ManaCost, c.CardLimit,
                u.Name as UserProfileName,u.email,
                d.DateCreated as DeckDateCreated

                From Deck d
                Left join UsedCards uc on d.id = uc.Deckid
                Left Join Card c on uc.CardId = c.Id
                Left Join UserProfile u on d.UserProfileId = u.Id
                Where d.Id = @id
                Order BY d.DateCreated DESC";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    Deck deck = null;
                    if (reader.Read())
                    {
                        deck = new Deck()
                        {
                            Id = DbUtils.GetInt(reader, "DeckId"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Format = DbUtils.GetString(reader, "Format"),
                            DateCreated = DbUtils.GetDateTime(reader, "DeckDateCreated"),
                            UserProfileId = DbUtils.GetInt(reader, "DeckUserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "DeckUserProfileId"),
                                Name = DbUtils.GetString(reader, "UserProfileName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                DateCreated = DbUtils.GetDateTime(reader, "DeckDateCreated"),

                            },
                            Cards = new List<Card>()
                        };
                    }
                    if (DbUtils.IsNotDbNull(reader, "CardId"))
                    {
                        deck.Cards.Add(new Card()
                        {
                            Id = DbUtils.GetInt(reader, "CardId"),
                            Name = DbUtils.GetString(reader, "CardName"),
                            CMC = DbUtils.GetInt(reader, "CMC"),
                            ManaCost = DbUtils.GetString(reader, "ManaCost"),
                            Colors = DbUtils.GetString(reader, "Colors"),
                            CardLimit = DbUtils.GetInt(reader, "CardLimit"),
                        });
                    }

                           
                        reader.Close();
                        return deck;
                            
                };
                
            }
        }
        public void Add(Deck deck)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand()) 
                {
                    cmd.CommandText = @"
                    INSERT INTO Deck (Name, Format, DateCreated)
                    OUTPUT INSERTED.ID 
                    VALUES (@name, @format, @dateCreated)";
                    //DbUtils.AddParameter(cmd, "@userProfileId", deck.UserProfileId);
                    DbUtils.AddParameter(cmd, "@name", deck.Name);
                    DbUtils.AddParameter(cmd, "@format", deck.Format);
                    DbUtils.AddParameter(cmd, "@dateCreated", deck.DateCreated);

                    deck.Id = (int)cmd.ExecuteScalar();
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
                    cmd.CommandText = "DELETE FROM Deck WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery(); ;
                }
            }
        }
                //This is the formatting seeing all decks with all the cards that they contain
        public List<Deck> GetAllDecks()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Select d.Id as DeckId, d.Name, d.UserProfileId as DeckUserProfileId, 
                d.Format,c.Id as CardId, c.Name as CardName, c.cmc, c.Colors,c.ManaCost, c.CardLimit,
                u.Name as UserProfileName,u.email,
                d.DateCreated as DeckDateCreated

                From Deck d
                Left join UsedCards uc on d.id = uc.Deckid
                Left Join Card c on uc.CardId = c.Id
                Left Join UserProfile u on d.UserProfileId = u.Id
                
                ";


                    var reader = cmd.ExecuteReader();

                    var decks = new List<Deck>();
                    var cards = new List<Card>();
                    while (reader.Read())
                    {

                        var userProfileId = DbUtils.GetInt(reader, "DeckUserProfileId");
                        var existingDeck = decks.FirstOrDefault(d => d.Id == userProfileId);
                        if (existingDeck == null)
                        {
                            existingDeck = new Deck()
                            {
                                Id = DbUtils.GetInt(reader, "DeckId"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Format = DbUtils.GetString(reader, "Format"),
                                DateCreated = DbUtils.GetDateTime(reader, "DeckDateCreated"),
                                UserProfileId = DbUtils.GetInt(reader, "DeckUserProfileId"),
                                UserProfile = new UserProfile()
                                {

                                    Id = DbUtils.GetInt(reader, "DeckUserProfileId"),
                                    Name = DbUtils.GetString(reader, "UserProfileName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    DateCreated = DbUtils.GetDateTime(reader, "DeckDateCreated")
                                },
                                Cards = new List<Card>()
                            };
                            decks.Add(existingDeck);
                        }
                        var cardId = DbUtils.GetInt(reader, "CardId");
                        var existingCard = existingDeck.Cards.FirstOrDefault(c => c.Id == cardId);

                        if (existingCard == null)
                        {

                            existingCard = new Card()
                            {
                                Id = DbUtils.GetInt(reader, "CardId"),
                                Name = DbUtils.GetString(reader, "CardName"),
                                CMC = DbUtils.GetInt(reader, "CMC"),
                                ManaCost = DbUtils.GetString(reader, "ManaCost"),
                                Colors = DbUtils.GetString(reader, "Colors"),
                                CardLimit = DbUtils.GetInt(reader, "CardLimit")
                            };
                            existingDeck.Cards.Add(existingCard);
                        } 
                        
                    }
                        reader.Close();
                        return decks;
                    }

                                    
                }
            }
        }
    }



