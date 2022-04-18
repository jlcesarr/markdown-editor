CREATE DATABASE markdown_api;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users(
  id UUID UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS documents(
  id UUID UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL DEFAULT 'new-document.md',
  content VARCHAR,
  user_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS user_documents(
  id UUID UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  document_id UUID NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(document_id) REFERENCES documents(id)
);
