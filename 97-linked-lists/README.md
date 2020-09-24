# Linked Lists

What is a Linked List? 

- *"a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next."*

A linked list is made up of a *head* (or root) and a bunch of *nodes*. Instead of each node pointing to a place in memory, the node **only knows about its next neighbor.** If we are at the end of the list, the node's "next" will be `null`. Here's a visual example:

![Linked list](Linkedlist.png)

In terms of code, today we will build this out using the same approach as we did with the utility class. We will build two classes: a Linked List class, and a Node class. 

Once that's complete, we will decide what other functionality our linked list class might want to have, and maybe take a crack at building those as well. 