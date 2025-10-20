class Serie {
    constructor(id, nombre, canal, temporadas, sinopsis, pagina, poster) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.sinopsis = sinopsis;
        this.pagina = pagina;
        this.poster = poster;
    }
}
export const series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "A chemistry teacher turned meth producer.", "https://www.amc.com", ""),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "A woman in prison.", "https://www.netflix.com", ""),
    new Serie(3, "Game of Thrones", "HBO", 8, "Fantasy drama series.", "https://www.hbo.com", ""),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Nerds and science humor.", "https://www.cbs.com", ""),
    new Serie(5, "Stranger Things", "Netflix", 4, "Kids face supernatural threats in the 80s.", "https://www.netflix.com", ""),
    new Serie(6, "The Walking Dead", "AMC", 11, "Zombie apocalypse survival story.", "https://www.amc.com", ""),
    new Serie(7, "Better Call Saul", "AMC", 6, "Prequel to Breaking Bad following lawyer Saul Goodman.", "https://www.amc.com", ""),
    new Serie(8, "Friends", "NBC", 10, "Six friends navigate life and love in New York.", "https://www.nbc.com", ""),
    new Serie(9, "The Office", "NBC", 9, "Mockumentary about office employees.", "https://www.nbc.com", ""),
    new Serie(10, "Sherlock", "BBC", 4, "Modern adaptation of Sherlock Holmes.", "https://www.bbc.co.uk", ""),
    new Serie(11, "House of Cards", "Netflix", 6, "Political drama about power and manipulation.", "https://www.netflix.com", ""),
    new Serie(12, "How I Met Your Mother", "CBS", 9, "A father recounts his past love life to his kids.", "https://www.cbs.com", ""),
    new Serie(13, "Lost", "ABC", 6, "Survivors of a plane crash on a mysterious island.", "https://abc.com", ""),
    new Serie(14, "Dexter", "Showtime", 8, "A forensic analyst who is secretly a serial killer.", "https://www.sho.com", ""),
    new Serie(15, "Peaky Blinders", "BBC", 6, "A gangster family in postwar Birmingham.", "https://www.bbc.co.uk", ""),
    new Serie(16, "The Witcher", "Netflix", 3, "Monster hunter struggles to find his place in a cruel world.", "https://www.netflix.com", ""),
    new Serie(17, "Dark", "Netflix", 3, "German sci-fi thriller about time travel.", "https://www.netflix.com", ""),
    new Serie(18, "Narcos", "Netflix", 3, "Story of drug cartels in Colombia.", "https://www.netflix.com", ""),
    new Serie(19, "Black Mirror", "Netflix", 6, "Anthology exploring technology and society.", "https://www.netflix.com", ""),
    new Serie(20, "The Crown", "Netflix", 6, "Chronicles the reign of Queen Elizabeth II.", "https://www.netflix.com", ""),
    new Serie(21, "Westworld", "HBO", 4, "Futuristic park where robots become sentient.", "https://www.hbo.com", ""),
    new Serie(22, "Euphoria", "HBO", 2, "Teens navigate love and addiction.", "https://www.hbo.com", ""),
    new Serie(23, "True Detective", "HBO", 4, "Anthology of crime investigations.", "https://www.hbo.com", ""),
    new Serie(24, "Ozark", "Netflix", 4, "Family launders money for a drug cartel.", "https://www.netflix.com", ""),
    new Serie(25, "The Boys", "Amazon Prime", 4, "Vigilantes fight corrupt superheroes.", "https://www.amazon.com", ""),
    new Serie(26, "Invincible", "Amazon Prime", 2, "Animated superhero show with shocking twists.", "https://www.amazon.com", ""),
    new Serie(27, "The Expanse", "Amazon Prime", 6, "Sci-fi series set in a colonized solar system.", "https://www.amazon.com", ""),
    new Serie(28, "Mr. Robot", "USA Network", 4, "Hacker targets corrupt corporations.", "https://www.usanetwork.com", ""),
    new Serie(29, "Vikings", "History Channel", 6, "Legendary tales of Ragnar Lothbrok.", "https://www.history.com", ""),
    new Serie(30, "The Mandalorian", "Disney+", 3, "A lone bounty hunter in the Star Wars universe.", "https://www.disneyplus.com", ""),
    new Serie(31, "Loki", "Disney+", 2, "God of Mischief faces the multiverse.", "https://www.disneyplus.com", ""),
    new Serie(32, "WandaVision", "Disney+", 1, "A blend of sitcom and Marvel mystery.", "https://www.disneyplus.com", ""),
    new Serie(33, "The Simpsons", "FOX", 35, "Animated satire about a middle-class family.", "https://www.fox.com", ""),
    new Serie(34, "Family Guy", "FOX", 22, "Animated comedy about the Griffin family.", "https://www.fox.com", ""),
    new Serie(35, "Rick and Morty", "Adult Swim", 7, "Mad scientist and grandson go on adventures.", "https://www.adultswim.com", ""),
    new Serie(36, "Brooklyn Nine-Nine", "NBC", 8, "Comedy about detectives in Brooklyn.", "https://www.nbc.com", ""),
    new Serie(37, "Modern Family", "ABC", 11, "Mockumentary about a diverse family.", "https://abc.com", ""),
    new Serie(38, "The Umbrella Academy", "Netflix", 4, "Adopted superheroes reunite to save the world.", "https://www.netflix.com", ""),
    new Serie(39, "Mindhunter", "Netflix", 2, "FBI agents study serial killers.", "https://www.netflix.com", ""),
    new Serie(40, "Money Heist", "Netflix", 5, "Criminals execute a master heist in Spain.", "https://www.netflix.com", ""),
    new Serie(41, "Lucifer", "Netflix", 6, "The Devil helps the LAPD solve crimes.", "https://www.netflix.com", ""),
    new Serie(42, "Suits", "USA Network", 9, "A brilliant college dropout works at a law firm.", "https://www.usanetwork.com", ""),
    new Serie(43, "House", "FOX", 8, "Brilliant doctor solves complex medical cases.", "https://www.fox.com", ""),
    new Serie(44, "Supernatural", "CW", 15, "Two brothers hunt monsters and demons.", "https://www.cwtv.com", ""),
    new Serie(45, "Arrow", "CW", 8, "Vigilante archer fights crime in Star City.", "https://www.cwtv.com", ""),
    new Serie(46, "The Flash", "CW", 9, "Super-speed hero protects Central City.", "https://www.cwtv.com", ""),
    new Serie(47, "Smallville", "CW", 10, "The story of young Clark Kent before Superman.", "https://www.cwtv.com", ""),
    new Serie(48, "The 100", "CW", 7, "Post-apocalyptic survival drama.", "https://www.cwtv.com", ""),
    new Serie(49, "Prison Break", "FOX", 5, "A man plans to free his brother from prison.", "https://www.fox.com", ""),
    new Serie(50, "Breaking Bad: The Sequel", "AMC", 1, "Imaginary sequel to the hit series.", "https://www.amc.com", "")
];
