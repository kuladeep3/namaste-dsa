# 01. Intro to Linked List

- Linked list is a linear data structure that consists of a sequence of nodes.
- Each node contains a value and a reference to the next node in the sequence.
  ![Linked List](/images/0601_linked_list.jpg)

## Types of Linked Lists

1. **Singly Linked List**: Each node points to the next node.

2. **Doubly Linked List**: Each node points to both the next and previous nodes.

![Doubly Linked List](/images/0601_singly_&_doubly_linked_list.jpg)

## Terminology

- **Head**: The first node in the list.
- **Tail**: The last node in the list.
- **Node**: A data structure that contains a value and references to the next (and previous in Doubly Linked List) nodes.

## Difference between **Linked List** and **Array**:

| Linked List                                                             | Array                             |
| ----------------------------------------------------------------------- | --------------------------------- |
| Linear                                                                  | Linear                            |
| non-contiguous                                                          | contiguous                        |
| Dynamic size (change easily)                                            | Fixed size (can be dynamic)       |
| Node=> value, next                                                      | Array=> value                     |
| Getting element is harder =>O(n)                                        | Getting element is easier => O(1) |
| Insertion/Deletion is easy                                              | Insertion/Deletion is complex     |
| Extra space for each node (One for value and other spaced for pointers) | No extra space for each element   |
