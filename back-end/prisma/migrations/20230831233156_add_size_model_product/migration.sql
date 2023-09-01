/*
  Warnings:

  - Added the required column `size` to the `sizes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sizes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "size" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "sizes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_sizes" ("createdAt", "id", "productId", "updatedAt") SELECT "createdAt", "id", "productId", "updatedAt" FROM "sizes";
DROP TABLE "sizes";
ALTER TABLE "new_sizes" RENAME TO "sizes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
