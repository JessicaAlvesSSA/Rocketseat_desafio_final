export function checkName(name) {
  if (name.length >= 3) {
    return true;
  }
  return false;
}

export function checkEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (regex.test(email)) {
    return true;
  }
  return false;
}

export function checkPass(pass) {
  if (pass.length >= 6) {
    return true;
  }
  return false;
}
