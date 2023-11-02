# Rspec: Domain specific language
  # Ruby Gem: package manager for Ruby

# requires the rspec tools
require 'rspec'
# require the file that contains the Ruby code
require_relative 'book.rb'



# describe("greeter", () => {
#   it("returns a generic greeting", () => {
#     expect(greeter()).toEqual("Hello, LEARN student!")
#   })
# })

describe 'Book' do 
  it 'has to be real' do 
    expect{ Book.new }.to_not raise_error
  end

  it 'has a title' do 
    # Arrange - inputs, targets
    my_book = Book.new

    # Act - calling methods
    my_book.title = 'Cat in the Hat'

    # Assert - outcome
    expect(my_book.title).to be_a String
    expect(my_book.title).to eq 'Cat in the Hat'
  end

  it 'has an author' do 
    my_book = Book.new
    expect(my_book.author).to eq 'anonymous'
    expect(my_book.author).to be_a String 
    cat = Book.new 'Dr. Seuss'
    expect(cat.author).to eq 'Dr. Seuss'
  end

  it 'can report the current page' do 
    my_book = Book.new
    expect(my_book.page).to eq 1 
    expect(my_book.page).to be_a Integer
  end

  it 'can read pages' do 
    my_book = Book.new
    expect{ my_book.read 10 }.to change{ my_book.page }.from(1).to(11)
  end
end