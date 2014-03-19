namespace PetStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class HopingImageWorks : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Pets", "Image", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Pets", "Image");
        }
    }
}
