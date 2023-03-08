function transferMoney(senderAccount, recipientAccount, amount) {
    // Check if sender has enough balance
    if (senderAccount.balance >= amount) {
      // Subtract amount from sender's account
      senderAccount.balance -= amount;
      // Add amount to recipient's account
      recipientAccount.balance += amount;
      return true;
    } else {
      return false;
    }
  }
  