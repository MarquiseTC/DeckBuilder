Select d.Id as DeckId,  d.Name, d.UserProfileId as DeckUserProfileId, d.Format, c.id as CardId, c.Name as CardName,c.ManaCost, c.cmc, c.Colors, c.CardLimit,
u.Name as UserProfileName,u.email,
d.DateCreated as DeckDateCreated

From Deck d
Left join UsedCards uc on d.id = uc.id
Left Join Card c on uc.CardId = c.Id
Left Join UserProfile u on d.UserProfileId = u.Id
where d.Id = UserProfileId
Order BY d.DateCreated DESC