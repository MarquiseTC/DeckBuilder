using DeckBuilder.Models;

namespace DeckBuilder.Repositories
{
    public interface IUserProfileRepository
    {
        
        UserProfile GetByEmail(string email);
    }
}
