namespace DeckBuilder.Models
{
    public class Card
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string ManaCost { get; set; }

        public int CMC { get; set; }

        public string Colors { get; set; }

        public int CardLimit { get; set; }

        
    }

    
}
