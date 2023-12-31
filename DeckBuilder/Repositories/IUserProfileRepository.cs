﻿using DeckBuilder.Models;

namespace DeckBuilder.Repositories
{
    public interface IUserProfileRepository
    {
        
        public UserProfile GetByEmail(string email);

        void Add(UserProfile userProfile);

        void Update(UserProfile userProfile);
    }
}
