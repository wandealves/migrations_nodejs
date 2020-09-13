import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateUser1600016590838 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()"
          },
          {
            name: "name",
            type: "varchar(200)"
          },
          {
            name: "profile_id",
            type: "uuid"
          }
        ],
        foreignKeys: [
          {
            name: "providerUser",
            referencedTableName: "profiles",
            referencedColumnNames: ["id"],
            columnNames: ["profile_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
