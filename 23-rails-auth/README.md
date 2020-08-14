# README

# Review

- 1. What is a cookie? Why utilize cookies?

A: A small text file (4kb) sent from a server (ex: API) to a client - they get stored in the client browser. They get sent between the client and server with every HTTP request. Used to tell if two requests came from the same computer - allows us to set/keep information about that user.

- Session Management

  - Shopping Cart
  - Game Score
  - Logged In?

- Personalization

  - User Preferences
  - Themes / Other user settings

- Tracking

  - Recording && Analyzing User Behavior

- 2. What is the session hash in Rails?

A: The session hash (technically a type of object) is a wrapper around cookies that makes it easier to set cookies in a client's browser.

Typically you would have to set cookies by setting the 'set-cookie' header when you send a response to a client - but the session hash abstracts that away for you!

- 3. We can use the sessions hash to tell if a user is logged in or not!

- SIDE NOTE: If you store a lot of information in cookies, it will slow down the performance of a website. There are more modern APIs available to store information now such as the Web Storage API (sessionStorage & localStorage), and IndexedDB.

Web Storage API - https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

IndexedDB - https://developer.mozilla.org/en-US/docs/Glossary/IndexedDB

- 4. What is Authentication v Authorization?

# Overview

BCrypt - A library used to secure passwords on back-end of websites. Doesn't store passwords in plain text.

- Why don't we want to store passwords in plain text?

- 1. BCrypt Gem:

** Encryption vs Hashing && Salting **

- Encryption: take a plain english message, turn it into a secret code that can be decoded using a key (encryption key)

- Hashing: take a plain english message, turn it into randomized code that cannot be turned back into english

- Salting: take random environment variables (time, heat of computer, etc) and build a random string - usually this random string is added to a hashed string

* BCrypt utilizes hashing && salting in order to secure passwords \*

---

## How to use BCrypt:

1. Create a User model, with password_digest as the column for a password.

2. Then try to create a user in the console - what do you see?

3. Show them how to use password_confirmation column for sign-up forms (takes care of itself).

4. Rejoice, it isn't so hard to secure passwords!

5. Go under-the-hood with BCrypt..

- How is this Hashed/Salted string created?
  A: BCrypt::Password.create,, ALSO
  custom password= method.

- How can you compare that to a string?
  A: BCrypt overrides the normal '==' method, and compares the pw attempt to the Password object by creating a new Password object from the pw attempt and seeing if they are similar.

- What is the authenticate method?
  A: Returns the object it's being called on, or returns false.

* We can use the #authenticate method to determine whether a user should be allowed to log-in or tell them why their attempt failed \*

- 2. Build Sign Up page:

* 3. Build Sign In page:

- 4.  Authorization:

** solution to error msgs: **

When you're using the flash hash to pass information to a view, make sure to redirect instead of rendering a template.

^^ flash hashes allow you to pass data between actions, not to erb templates directly ^^

- build out way to see if you're logged in, and if you're logged in who you are. Also, if you're not logged in build a way to redirect_to login page.

- build out feature where we cannot see users#index if we're not logged in

- build out way to be able to delete your account - ONLY IF IT'S YOU'RE ACCOUNT!

* 5.  Extended Topics:

* Devise gem

* OAuth

* Web Storage API

* Indexed DB

* Cacheing server-side (Memcached, Redis)

- 6.  Conclusion / Questions:

- used sessions hash to tell if a user is logged in

- used sessions hash to control what a user can see on any given page

- more practice with flash hash
