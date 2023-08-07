namespace DeckBuilder.Repositories
{
    public class UsedCardsRepository: BaseRepository, IUsedCardsRepository
    {
        public UsedCardsRepository(IConfiguration configuration) : base(configuration) { }
}
}
