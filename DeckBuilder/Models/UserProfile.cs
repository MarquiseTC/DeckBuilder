using System.ComponentModel.DataAnnotations;

namespace DeckBuilder.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }

        public DateTime DateCreated { get; set; }
    }
}
