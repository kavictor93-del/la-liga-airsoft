-- Tabela de Perfis (Operadores)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  team TEXT,
  xp INTEGER DEFAULT 0,
  level TEXT DEFAULT 'Recruta',
  role TEXT DEFAULT 'player' CHECK (role IN ('player', 'organizer', 'admin')),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Eventos (Missões)
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organizer_id UUID REFERENCES auth.users ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  location TEXT,
  price DECIMAL(10,2),
  max_slots INTEGER,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Inscrições
CREATE TABLE registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID REFERENCES events ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  UNIQUE(event_id, user_id)
);

-- RLS (Row Level Security) - Regras Básicas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone." ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile." ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile." ON profiles FOR UPDATE USING (auth.uid() = id);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Events are viewable by everyone." ON events FOR SELECT USING (true);
CREATE POLICY "Organizers can insert events." ON events FOR INSERT WITH CHECK (auth.role() = 'authenticated');

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own registrations." ON registrations FOR SELECT USING (auth.uid() = user_id);
