CREATE TABLE "note" (
    "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "note_name" TEXT NOT NULL,
    "note_content" TEXT,
    "modified" TIMESTAMPTZ DEFAULT now() NOT NULL,
    "folder_name" INTEGER REFERENCES "folder"(id) ON DELETE CASCADE NOT NULL
);