function MemberFactory() {
  // Function expression
  this.createMember = function (name, type) {
    let member;

    // testing the type of membersdhip
    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;

  }
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '$50';
}

const StandardMembership = function (name) {
  this.name = name;
  this.cost = '$100';
}

const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$200';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('James Bond', 'simple'));
members.push(factory.createMember('Janet Bond', 'standard'));
members.push(factory.createMember('Jen Bond', 'standard'));
members.push(factory.createMember('Joseph Bond', 'super'));

// console.log(members);

members.forEach(function (member) {
  member.define();
});