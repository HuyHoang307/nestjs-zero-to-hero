import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductCategoriesModule } from './product-categories/product-categories.module';

@Module({
  imports: [UsersModule, ProductCategoriesModule]
})
export class ModulesModule {}
