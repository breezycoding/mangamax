this app is intended for manga reader consuming api from  https://www.mangaeden.com/

API information
official documentation: https://www.mangaeden.com/api/

image source
https://cdn.mangaeden.com/mangasimg/

Manga List
    url: https://www.mangaeden.com/api/list/[language]/ 
key: value
    0: english
    1: italian
---------------
returned data
key: value
    im: image(string)
    t: title(string)
    i: id(string)
    a: alias(string)
    s: status(int 1 or 2)
    c: category(array of string)
    ld: last chapter date(timestamp)
    h: hits(int)
    total: total page(int)

Manga info and chapters list
    url: https://www.mangaeden.com/api/manga/[manga.id]/ 
    Example: https://www.mangaeden.com/api/manga/4e70e9f6c092255ef7004336/ 
-----------------
returned data
key: value
    aka: titles(array of string)
    aka-alias: titles(array of string)
    alias: title(string)
    artist: artist(string)
    artist_kw: artist split name(array of string[firstName, lastName])
    author: author(string)
    author_kw: author split name(array of string[firstName, lastName])
    autoManga: boolean
    baka: boolean
    categories: category(array of string)
    -----------------
    chapters(array elements)
        [
            chapter number(int),
            chapter's date(timestamp),
            chapter's title(string),
            chapter's ID(string)
        ]
    chapters_len: chapters length 
    created : created at
    description: chapters
    hits: number of hits
    image: image for chapter page
    imageURL: might be null
    language: 0(english) 1(italian)
    last_chapter_date: 
    released: released date
    startsWith: first letter
    status: 
    title: title of anime, might be the same
    title_kw: [array of titles]
    type: 
    updatedKeywords: true or false
    url: url in mangaeden site

Chapter pages
    URL: https://www.mangaeden.com/api/chapter/[chapter.id]/ 
    Example: https://www.mangaeden.com/api/chapter/4e711cb0c09225616d037cc2/ 
--------------
returned data
    chapters(array of elements)
        [
            chapter number(int),
            chapter image(string),
            width(int),
            height(int)
        ]
        
        
        

