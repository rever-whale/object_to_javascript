// 초대장
class Invitation {
  constructor (when) {
    this.when = when
  }
}

// 티켓
class Ticket {
  constructor (fee) {
    this.fee = fee
  }

  getFee () {
    return this.fee
  }
}

// 가방
class Bag {
  constructor (invitation, amount = 0) {
    this.invitation = invitation
    this.ticket = null
    this.amount = amount
  }

  hasInvitation () {
    return !!this.invitation
  }

  hasTicket () {
    return !!this.ticket
  }

  setTicket (ticket) {
    this.ticket = ticket
  }

  minusAmount (amount) {
    this.amount = amount
  }

  plusAmount (amount) {
    this.amount = amount
  }
}

// 관람객
class Audience {
  constructor (bag) {
    this.bag = bag
  }

  getBag () {
    return this.bag
  }
}

// 매표소
class TicketOffice {
  constructor (amount, tickets = []) {
    this.amount = amount
    this.tickets = tickets
  }

  getTicket () {
    return this.tickets.splice(0, 1)[0];
  }

  minusAmount (amount) {
    this.amount -= amount
  }

  plusAmount (amount) {
    this.amount += amount
  }
}

// 판매원
class TicketSeller {
  constructor (ticketOffice) {
    this.ticketOffice = ticketOffice
  }

  getTicketOffice () {
    return this.ticketOffice
  }
}

// 소극장
class Theater {
  constructor (ticketSeller) {
    this.ticketSeller = ticketSeller
  }

  enter (audience) {
    let ticket

    if (audience.getBag().hasInvitation()) {
      ticket = this.ticketSeller.getTicketOffice().getTicket()
      audience.getBag().setTicket(ticket)
    } else {
      ticket = this.ticketSeller.getTicketOffice().getTicket()
      audience.getBag().minusAmount(ticket.getFee())
      this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee())
      audience.getBag().setTicket(ticket)
    }
  }
}