﻿Select d.Id as DeckId,  d.Name,  d.Format,  c.Name as CardName,c.ManaCost, c.cmc, c.Colors, c.CardLimit,
u.Name as UserProfileName


From Deck d
Left join UsedCards uc on d.id = uc.id
Left Join Card c on uc.CardId = c.Id
Left Join UserProfile u on d.UserProfileId = u.Id

Order BY d.DateCreated DESC