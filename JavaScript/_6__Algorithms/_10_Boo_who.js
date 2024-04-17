function booWho(bool) {
  const boolean = Object.is(bool, false) || Object.is(bool, true);
  return boolean;
}

booWho(null);
