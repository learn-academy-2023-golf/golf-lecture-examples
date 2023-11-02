# requires the rspec tools
require 'rspec'
# require the file that contains the Ruby code
require_relative 'book.rb'

describe 'Library' do 
  it 'has to be real' do 
    expect{ Library.new }.to_not raise_error
  end

  it 'has an array of books' do 
    cat = Book.new 
    green_eggs = Book.new 
    my_library = Library.new 
    my_library.add_books cat 
    my_library.add_books green_eggs
    expect(my_library.book_collection).to be_a Array
    expect(my_library.book_collection).not_to be_empty 
    expect(my_library.book_collection).to contain_exactly(cat, green_eggs)
  end
end