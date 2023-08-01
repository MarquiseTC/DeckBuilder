namespace DeckBuilder.Models
{
    public class Deck
    {
        public int Id { get; set; }

        public int UserProfileId { get; set; }
        public UserProfile? UserProfile { get; set; }

        public string Name { get; set; }

        public string Format { get; set; }


        public DateTime DateCreated { get; set; }


       public List<Card> Cards { get; set;} = new List<Card>();


    }
}
