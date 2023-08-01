Select d.Id as DeckId,  d.Name, d.Format, c.Name as CardName, c.cmc, c.Colors, c.CardLimit,
u.Name as UserProfileName,u.email,u.DateCreated as UserDateCreated,
d.DateCreated as DeckDateCreated

From Deck d
Left join UsedCards uc on d.Card = uc.id
Left Join Card c on uc.id = c.Id
Left Join UserProfile u on d.UserProfileId = u.Id
And d.Id = u.id
Order BY d.DateCreated DESC