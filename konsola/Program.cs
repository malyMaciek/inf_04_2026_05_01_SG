class Program
{
    /*
     * nazwa funkcji: GenerujHaslo
     * opis funkcji: funkcja tworzy liste wszystkich wylosowanych znakow by na koniec wstawic je do zmiennej w losowej kolejnosci jako haslo
     * parametry: brak
     * zwracany typ i opis: string - gotowe wygenerowane haslo spelniajace wymagania
     */
    static string GenerujHaslo()
    {
        Random rand = new Random();
        string maleLiteryLacinskie = "abcdefghijklmnopqrstuvwxyz";
        string wielkieLiteryLacinskie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string literyDiakratyczne = "ąęłńóśżźĄĘŁŃÓŚŻŹ";
        string cyfry = "0123456789";
        string znakiSpecjalne = "!@#$%^&*()_+";

        List<char> wylosowaneZnaki = new List<char>();

        for (int i = 0; i < 3; i++)
        {
            int iloscZnakow = maleLiteryLacinskie.Length;
            int losowyIndeks = rand.Next(0, iloscZnakow);
            char losowyZnak = maleLiteryLacinskie[losowyIndeks];
            wylosowaneZnaki.Add(losowyZnak);
        }

        for (int i = 0; i < 3; i++)
        {
            int iloscZnakow = wielkieLiteryLacinskie.Length;
            int losowyIndeks = rand.Next(0, iloscZnakow);
            char losowyZnak = wielkieLiteryLacinskie[losowyIndeks];
            wylosowaneZnaki.Add(losowyZnak);
        }

        for (int i = 0; i < 2; i++)
        {
            int iloscZnakow = literyDiakratyczne.Length;
            int losowyIndeks = rand.Next(0, iloscZnakow);
            char losowyZnak = literyDiakratyczne[losowyIndeks];
            wylosowaneZnaki.Add(losowyZnak);
        }

        for (int i = 0; i < 2; i++)
        {
            int iloscZnakow = cyfry.Length;
            int losowyIndeks = rand.Next(0, iloscZnakow);
            char losowyZnak = cyfry[losowyIndeks];
            wylosowaneZnaki.Add(losowyZnak);
        }

        for (int i = 0; i < 2; i++)
        {
            int iloscZnakow = znakiSpecjalne.Length;
            int losowyIndeks = rand.Next(0, iloscZnakow);
            char losowyZnak = znakiSpecjalne[losowyIndeks];
            wylosowaneZnaki.Add(losowyZnak);
        }


        string haslo = "";

        while (wylosowaneZnaki.Count > 0)
        {
            int iloscZnakow = wylosowaneZnaki.Count;
            int losowyIndeks = rand.Next(0, iloscZnakow);
            char losowyZnak = wylosowaneZnaki[losowyIndeks];
            haslo = haslo + losowyZnak;
            wylosowaneZnaki.Remove(losowyZnak);
        }

        return haslo;
    }
    static void Main(string[] args)
    {
        Console.WriteLine($"1 wygenerowane haslo: {GenerujHaslo()}");
        Console.WriteLine($"2 wygenerowane haslo: {GenerujHaslo()}");
        Console.WriteLine($"3 wygenerowane haslo: {GenerujHaslo()}");
        Console.WriteLine($"4 wygenerowane haslo: {GenerujHaslo()}");
        Console.WriteLine($"5 wygenerowane haslo: {GenerujHaslo()}");
    }
}