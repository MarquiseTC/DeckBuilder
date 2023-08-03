using DeckBuilder.Models;
using DeckBuilder.Utils;

namespace DeckBuilder.Repositories
{
    public class UserProfileRepository: BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }
        
        public UserProfile GetByEmail(string email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand()) 
                {
                    cmd.CommandText = @"
                 SELECT Id, Name, Email, DateCreated
                   FROM UserProfile 
                    Where Email = @email";

                    DbUtils.AddParameter(cmd, "@email", email);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read()) 
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),

                        };
                       
                    } 
                    reader.Close();

                        return userProfile;
                }
            }
        }

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                 INSERT INTO [UserProfile]
                (Name, Email, DateCreated)
                OUTPUT INSERTED.ID 
                VALUES (@Name, @Email, @DateCreated)";

                    DbUtils.AddParameter(cmd, "@Name", userProfile.Name);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@DateCreated", userProfile.DateCreated);

                    userProfile.Id =(int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                 UPDATE UserProfile
                 SET Name = @Name
                    Email = @Email
                WHERE Id = @Id
                ";

                   DbUtils.AddParameter(cmd, "@Name", userProfile.Name);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                   DbUtils.AddParameter(cmd, "@DateCreated", userProfile.DateCreated);

                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
