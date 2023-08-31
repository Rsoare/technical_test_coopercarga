import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDecimal, IsString, ValidateNested } from 'class-validator';

export class CreateProductDto {
   @IsString()
   @ApiProperty({
      description: 'Nome do produto',
      default: 'Camiseta do Brasil',
      type: String,
   })
   name: string;

   @IsString()
   @ApiProperty({
      description: 'Url da imagem do produto',
      default: 'https://imgnike-a.akamaihd.net/1300x1300/0228340L.jpg',
      type: String,
   })
   image_url: string;

   @IsString()
   @ApiProperty({
      description: 'Tipo do produto',
      default: 'Camiseta',
      type: String,
   })
   type: string;

   @IsDecimal()
   @ApiProperty({
      description: 'Preço do produto',
      default: 349.99,
      type: Number,
   })
   price: number;

   @IsString()
   @ApiProperty({
      description: 'Marca do produto',
      default: 'Nike',
      type: String,
   })
   seller: string;

   @IsString()
   @ApiProperty({
      description: 'Esporte do produto',
      default: 'Corrida',
      type: String,
   })
   sport: string;

   @IsString()
   @ApiProperty({
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      default: 'Corrida',
      type: String,
   })
   details: string;
}
