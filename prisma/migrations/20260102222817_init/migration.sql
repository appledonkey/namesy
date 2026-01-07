-- CreateTable
CREATE TABLE "Name" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "normalizedName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "syllables" INTEGER NOT NULL DEFAULT 1,
    "phonetic" TEXT,
    "currentRank" INTEGER NOT NULL DEFAULT 0,
    "trend" TEXT NOT NULL DEFAULT 'stable',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Origin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "NameOrigin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameId" TEXT NOT NULL,
    "originId" TEXT NOT NULL,
    CONSTRAINT "NameOrigin_nameId_fkey" FOREIGN KEY ("nameId") REFERENCES "Name" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "NameOrigin_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Origin" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Meaning" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameId" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "source" TEXT,
    CONSTRAINT "Meaning_nameId_fkey" FOREIGN KEY ("nameId") REFERENCES "Name" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Nickname" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameId" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    CONSTRAINT "Nickname_nameId_fkey" FOREIGN KEY ("nameId") REFERENCES "Name" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AlternateSpelling" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameId" TEXT NOT NULL,
    "spelling" TEXT NOT NULL,
    CONSTRAINT "AlternateSpelling_nameId_fkey" FOREIGN KEY ("nameId") REFERENCES "Name" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PopularityHistory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "rank" INTEGER,
    "count" INTEGER,
    CONSTRAINT "PopularityHistory_nameId_fkey" FOREIGN KEY ("nameId") REFERENCES "Name" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Namesake" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameId" TEXT NOT NULL,
    "personName" TEXT NOT NULL,
    "description" TEXT,
    "birthYear" INTEGER,
    CONSTRAINT "Namesake_nameId_fkey" FOREIGN KEY ("nameId") REFERENCES "Name" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Name_name_key" ON "Name"("name");

-- CreateIndex
CREATE INDEX "Name_normalizedName_idx" ON "Name"("normalizedName");

-- CreateIndex
CREATE INDEX "Name_gender_idx" ON "Name"("gender");

-- CreateIndex
CREATE INDEX "Name_currentRank_idx" ON "Name"("currentRank");

-- CreateIndex
CREATE UNIQUE INDEX "Origin_name_key" ON "Origin"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NameOrigin_nameId_originId_key" ON "NameOrigin"("nameId", "originId");

-- CreateIndex
CREATE INDEX "Meaning_nameId_idx" ON "Meaning"("nameId");

-- CreateIndex
CREATE INDEX "Nickname_nameId_idx" ON "Nickname"("nameId");

-- CreateIndex
CREATE INDEX "AlternateSpelling_nameId_idx" ON "AlternateSpelling"("nameId");

-- CreateIndex
CREATE INDEX "PopularityHistory_year_idx" ON "PopularityHistory"("year");

-- CreateIndex
CREATE UNIQUE INDEX "PopularityHistory_nameId_year_key" ON "PopularityHistory"("nameId", "year");

-- CreateIndex
CREATE INDEX "Namesake_nameId_idx" ON "Namesake"("nameId");
