describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should determine whether a set contains a list of specified values', function() {
    set.add('Mel Gibson');
    set.add('Carly Rae Jepsen');
    set.add('Snoop Dogg');
    set.add('Lady Gaga');
    expect(set.contains('Mel Gibson', 'Carly Rae Jepsen', 'Snoop Dogg', 'Lady Gaga')).to.equal(true);
    expect(set.contains('Mel Gibson', 'Carly Rae Jepsen', 'Snoop Dogg', 'Lady Gaga', 'Simon Cowell')).to.equal(false);
  });

});
