Author.create(name: Faker::Book.author, location: Faker::Address.city)

# books_hash = get_books
# books_hash["items"].each do |book|
#     Book.create(title: book["volumeInfo"]["title"],
#                 published_date: book["volumeInfo"]["publishedDate"],
#                 description: book["volumeInfo"]["description"]
#     )
# end

10.times do
    Book.create(title: Faker::Book.title)
end

20.times do 
    AuthorsBook.create(book: Book.all.sample, author: Author.all.sample)
end
