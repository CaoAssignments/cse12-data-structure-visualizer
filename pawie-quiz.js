// Daily quiz and joke banks. They are sent to the browser, so the answers can be read by anyone who looks,
// which is acceptable for a low-stakes practice quiz.
window.PawieQuiz = {
 "PA_SCHEDULE": {
  "ArrayList": {
   "start": "2026-10-09",
   "due": "2026-10-15"
  },
  "LinkedList": {
   "start": "2026-10-16",
   "due": "2026-10-22"
  },
  "Iterator": {
   "start": "2026-10-23",
   "due": "2026-10-29"
  }
 },
 "QUIZ_DAYS": {
  "ArrayList": [
   [
    {
     "q": "What are the two instance variables of MyArrayList?",
     "opt": [
      "data and size",
      "head and tail",
      "front and rear"
     ],
     "ans": 0,
     "why": "data is the Object array that holds the elements, and size counts how many of them are valid."
    },
    {
     "q": "What does new MyArrayList() create?",
     "opt": [
      "An empty list with capacity 5",
      "An empty list with capacity 0",
      "A list of five nulls whose size is 5"
     ],
     "ans": 0,
     "why": "The no-arg constructor allocates data with the default length 5 and sets size to 0."
    },
    {
     "q": "What happens with new MyArrayList(-1)?",
     "opt": [
      "It throws IllegalArgumentException",
      "It falls back to the default capacity",
      "It throws IndexOutOfBoundsException"
     ],
     "ans": 0,
     "why": "A capacity strictly less than 0 is invalid. A capacity of 0 is allowed."
    },
    {
     "q": "What does new MyArrayList(E[] arr) do when arr is null?",
     "opt": [
      "It acts like the no-arg constructor, with capacity 5",
      "It throws NullPointerException",
      "It creates a list with capacity 0"
     ],
     "ans": 0,
     "why": "The write-up says a null array falls back to the no-arg behavior, so you get an empty list with the default capacity of 5."
    },
    {
     "q": "How is capacity different from size?",
     "opt": [
      "Capacity is the length of data, and size counts the valid elements",
      "They are always equal",
      "Capacity counts the valid elements, and size is the length of data"
     ],
     "ans": 0,
     "why": "Capacity is data.length, the number of slots that exist. Size is how many of them hold valid elements."
    }
   ],
   [
    {
     "q": "A list is {1,2,3}. You call add(2, 4). What is the result?",
     "opt": [
      "{1,2,4,3}",
      "{1,2,3,4}",
      "{1,4,2,3}"
     ],
     "ans": 0,
     "why": "Everything from index 2 shifts one slot right, then 4 goes into slot 2."
    },
    {
     "q": "The size is 3. Which indexes are legal for add(index, e)?",
     "opt": [
      "0 to 3, inclusive",
      "0 to 2, inclusive",
      "1 to 3, inclusive"
     ],
     "ans": 0,
     "why": "add may insert right after the last element, so size itself is allowed. Below 0 or above size throws IndexOutOfBoundsException."
    },
    {
     "q": "append(e) behaves like which call?",
     "opt": [
      "add(size, e)",
      "add(0, e)",
      "set(size, e)"
     ],
     "ans": 0,
     "why": "Appending is adding at index size, so it follows all of add's rules, including growing when the array is full."
    },
    {
     "q": "The array is full and you call add(1, e). What happens first?",
     "opt": [
      "The capacity is expanded following the rules of expandCapacity",
      "IndexOutOfBoundsException is thrown",
      "The last element is dropped"
     ],
     "ans": 0,
     "why": "add must make room before it inserts, and the write-up says to update the capacity according to expandCapacity."
    },
    {
     "q": "The list is empty and you append 4. What is the list afterwards?",
     "opt": [
      "The list is {4} and its size is 1",
      "The list stays empty until you call add",
      "It throws IndexOutOfBoundsException because the list is empty"
     ],
     "ans": 0,
     "why": "The write-up example says that appending 4 to an empty list gives {4}."
    }
   ],
   [
    {
     "q": "The size is 3. Which indexes does get(i) accept?",
     "opt": [
      "0 to 2",
      "0 to 3",
      "1 to 3"
     ],
     "ans": 0,
     "why": "get reads an existing element, so the index must be at least 0 and strictly less than size. Otherwise it throws IndexOutOfBoundsException."
    },
    {
     "q": "The list is {1,2,3}. What does set(1, 4) return?",
     "opt": [
      "2",
      "4",
      "1"
     ],
     "ans": 0,
     "why": "set returns the element it overwrote. It returns 2 and the list becomes {1,4,3}."
    },
    {
     "q": "After remove, what must happen to the old last slot in data?",
     "opt": [
      "It is set to null",
      "It keeps a copy of the last element",
      "The array shrinks by one slot"
     ],
     "ans": 0,
     "why": "Only valid elements may be non-null. Removing never shrinks the array, so the freed slot is cleared to null."
    },
    {
     "q": "The list is {1,2,3}. What does remove(1) return, and what is the list afterwards?",
     "opt": [
      "It returns 2 and the list is {1,3}",
      "It returns 1 and the list is {2,3}",
      "It returns 3 and the list is {1,2}"
     ],
     "ans": 0,
     "why": "remove returns the element that was at the index, and the elements after it shift left to close the gap."
    },
    {
     "q": "The list is {1,2,3}. What does get(3) do?",
     "opt": [
      "It throws IndexOutOfBoundsException",
      "It returns null",
      "It returns 3"
     ],
     "ans": 0,
     "why": "get accepts indexes from 0 up to size - 1. Index 3 is equal to the size, so it is out of bounds."
    }
   ],
   [
    {
     "q": "The capacity is 3 and requiredCapacity is 4. What is the capacity after expandCapacity(4)?",
     "opt": [
      "6",
      "4",
      "7"
     ],
     "ans": 0,
     "why": "Doubling 3 gives 6, which is already enough, so the capacity is 6."
    },
    {
     "q": "The capacity is 3 and requiredCapacity is 18. What happens?",
     "opt": [
      "The capacity becomes 18",
      "The capacity becomes 6",
      "It throws IllegalArgumentException"
     ],
     "ans": 0,
     "why": "Doubling gives 6, which is still too small, so the capacity is set to requiredCapacity."
    },
    {
     "q": "When does expandCapacity throw IllegalArgumentException?",
     "opt": [
      "requiredCapacity is strictly less than the current capacity",
      "requiredCapacity equals the current capacity",
      "The list is empty"
     ],
     "ans": 0,
     "why": "Asking for less room than you already have is invalid. Equal is allowed, and it still doubles."
    },
    {
     "q": "The capacity is 0 and requiredCapacity is 11. What is the capacity afterwards?",
     "opt": [
      "11",
      "5",
      "10"
     ],
     "ans": 0,
     "why": "A capacity of 0 is reset to the default of 5. That is still less than 11, so the capacity is set to 11."
    },
    {
     "q": "What must expandCapacity preserve?",
     "opt": [
      "The size and every element at the same index",
      "Only the size",
      "Only the first element"
     ],
     "ans": 0,
     "why": "The write-up says the elements before and after the expansion must be at the same indices, and the size does not change."
    }
   ],
   [
    {
     "q": "data is [3, 1, null, 5, null, null, null] and size is 5. Is the null at index 4 a valid element?",
     "opt": [
      "Yes, because its index is below size",
      "No, because it is null",
      "No, because the capacity is 7"
     ],
     "ans": 0,
     "why": "Only size decides what is valid. A null below size is a real element, while indexes 5 and 6 are free slots."
    },
    {
     "q": "A list has capacity 5 and holds 2 elements. What do size() and getCapacity() return?",
     "opt": [
      "2 and 5",
      "5 and 2",
      "2 and 2"
     ],
     "ans": 0,
     "why": "size counts valid elements. getCapacity is the length of the underlying array."
    },
    {
     "q": "Which constructor makes a list that is already full?",
     "opt": [
      "MyArrayList(E[] arr)",
      "MyArrayList()",
      "MyArrayList(int capacity)"
     ],
     "ans": 0,
     "why": "The array constructor copies arr, so capacity and size both equal arr.length."
    },
    {
     "q": "A list has size 6 and capacity 7. You call append(null). What is the size afterwards?",
     "opt": [
      "7, because null is a valid element",
      "6, because null is ignored",
      "It throws NullPointerException"
     ],
     "ans": 0,
     "why": "In MyArrayList a null can be a valid element, so appending it grows the size like any other value."
    },
    {
     "q": "How does MyArrayList tell a valid null from an empty slot?",
     "opt": [
      "By comparing the index with size",
      "By checking whether the slot is null",
      "By keeping a second array of booleans"
     ],
     "ans": 0,
     "why": "Every unused slot is null, so only the size variable says which slots are valid."
    }
   ],
   [
    {
     "q": "A hidden test calls add at an out-of-bounds index. What should it expect?",
     "opt": [
      "IndexOutOfBoundsException",
      "IllegalArgumentException",
      "NullPointerException"
     ],
     "ans": 0,
     "why": "Bad indexes in add, get, set and remove all throw IndexOutOfBoundsException."
    },
    {
     "q": "Why write a test that appends to a full list?",
     "opt": [
      "It forces the expandCapacity code to run",
      "It checks null handling",
      "It tests the no-arg constructor"
     ],
     "ans": 0,
     "why": "A full list is the only way append triggers growth, so it is a classic place for bugs."
    },
    {
     "q": "After a call to get(i), what should a good test check?",
     "opt": [
      "Size, capacity and every element are unchanged",
      "Only the returned value",
      "That the capacity doubled"
     ],
     "ans": 0,
     "why": "get only reads, so nothing about the list is allowed to change."
    },
    {
     "q": "Which of these should a test of append on a non-empty list check?",
     "opt": [
      "The new element at the end, the old elements unchanged, and the size",
      "Only that no exception is thrown",
      "Only that the capacity is 5"
     ],
     "ans": 0,
     "why": "The write-up asks that the element is inserted at the end while the existing elements are preserved, and that size and capacity are updated where applicable."
    },
    {
     "q": "A test for expandCapacity first puts elements in the list. Why?",
     "opt": [
      "To confirm they stay at the same indices after the expansion",
      "Because expandCapacity does not work on an empty list",
      "Because capacity only changes when the size is above 0"
     ],
     "ans": 0,
     "why": "An empty list cannot show whether elements survive the copy, so the test needs some elements to check."
    }
   ],
   [
    {
     "q": "What does doing moveTargetToEnd in place forbid?",
     "opt": [
      "Creating new arrays or lists with new",
      "Calling remove",
      "Calling append"
     ],
     "ans": 0,
     "why": "In place means you reuse the list you were given and do not build a temporary copy."
    },
    {
     "q": "After you remove a match at index i, what should the index do?",
     "opt": [
      "Stay at i",
      "Move to i + 1",
      "Go back to 0"
     ],
     "ans": 0,
     "why": "The next element slid left into slot i, so it still needs to be checked."
    },
    {
     "q": "What should moveTargetToEnd throw when nums is null?",
     "opt": [
      "NullPointerException",
      "IllegalArgumentException",
      "IndexOutOfBoundsException"
     ],
     "ans": 0,
     "why": "The write-up says a null list throws NullPointerException."
    },
    {
     "q": "nums holds {1, 3, 2, 3, 4}. What does moveTargetToEnd(nums, 3) leave?",
     "opt": [
      "{1, 2, 4, 3, 3}",
      "{3, 3, 1, 2, 4}",
      "{1, 2, 4}"
     ],
     "ans": 0,
     "why": "Both 3s move to the back and every other element keeps its order. This matches the first example in the write-up."
    },
    {
     "q": "After moveTargetToEnd, what happens to the size of nums?",
     "opt": [
      "It does not change",
      "It drops by the number of targets",
      "It grows by the number of targets"
     ],
     "ans": 0,
     "why": "The targets are moved, not removed, so the size stays the same."
    }
   ]
  ],
  "LinkedList": [
   [
    {
     "q": "What are the instance variables of MyLinkedList?",
     "opt": [
      "head, tail and size",
      "data and size",
      "front, rear and capacity"
     ],
     "ans": 0,
     "why": "head and tail are the sentinel nodes at the two ends, and size counts the real nodes between them."
    },
    {
     "q": "What does new MyLinkedList() create?",
     "opt": [
      "head and tail linked to each other, with size 0",
      "head and tail both null, with size 0",
      "One node that holds null, with size 1"
     ],
     "ans": 0,
     "why": "The sentinels exist from the start, so head.next is tail and tail.prev is head. The list is empty because sentinels do not hold data."
    },
    {
     "q": "Does size count the sentinel nodes?",
     "opt": [
      "No, only the nodes that hold data",
      "Yes, it counts head and tail too",
      "Only head, because it sits at index 0"
     ],
     "ans": 0,
     "why": "size does not include the sentinels. Index 0 refers to the first node after head."
    },
    {
     "q": "Where does index 0 live in a MyLinkedList?",
     "opt": [
      "In the first node after head",
      "In the head sentinel",
      "In the tail sentinel"
     ],
     "ans": 0,
     "why": "Sentinel nodes have no index numbers. Index 0 is the first node that is not a sentinel."
    },
    {
     "q": "Which of these does the write-up require?",
     "opt": [
      "Sentinel head and tail nodes",
      "Importing java.util.LinkedList to help",
      "Making head, tail and size private"
     ],
     "ans": 0,
     "why": "You must use sentinel head and tail nodes. The built-in LinkedList is forbidden, and the instance variables keep the default access."
    }
   ],
   [
    {
     "q": "The list is head <-> a <-> tail. What does add(0, b) produce?",
     "opt": [
      "head <-> b <-> a <-> tail",
      "head <-> a <-> b <-> tail",
      "head <-> b <-> tail"
     ],
     "ans": 0,
     "why": "Index 0 means right after head, so b goes in front of a."
    },
    {
     "q": "The list has 3 elements. Which indexes are legal for add(index, e)?",
     "opt": [
      "0 to 3, inclusive",
      "0 to 2, inclusive",
      "1 to 3, inclusive"
     ],
     "ans": 0,
     "why": "You may insert right before tail, so size itself is allowed. An index below 0 or above size throws IndexOutOfBoundsException."
    },
    {
     "q": "What does add(null) do?",
     "opt": [
      "It throws NullPointerException",
      "It adds a node that holds null",
      "It does nothing and returns false"
     ],
     "ans": 0,
     "why": "This list never accepts null, unlike Java's built-in LinkedList. A successful add(E) always returns true."
    },
    {
     "q": "The list is head <-> a <-> b <-> tail. You call add(1, x). Which node comes right before x?",
     "opt": [
      "a",
      "b",
      "head"
     ],
     "ans": 0,
     "why": "Index 1 is the slot between a and b, so the new node goes after a."
    },
    {
     "q": "What does add(e) return?",
     "opt": [
      "true, always",
      "false when the list was empty",
      "The new size"
     ],
     "ans": 0,
     "why": "The write-up says the boolean add presumably always returns true, because the method definition comes from AbstractList."
    }
   ],
   [
    {
     "q": "The size is 3. Which indexes does get(i) accept?",
     "opt": [
      "0 to 2",
      "0 to 3",
      "1 to 3"
     ],
     "ans": 0,
     "why": "get reads an existing node, so the index must be at least 0 and less than size. Otherwise it throws IndexOutOfBoundsException."
    },
    {
     "q": "The list is a, b, c. What does set(1, x) return?",
     "opt": [
      "b",
      "x",
      "a"
     ],
     "ans": 0,
     "why": "set returns the element that was stored before. It returns b and the list becomes a, x, c."
    },
    {
     "q": "You call remove(1) on the list a, b, c. What changes?",
     "opt": [
      "a and c are linked to each other and size drops by 1",
      "Only head.next changes",
      "Only size changes"
     ],
     "ans": 0,
     "why": "The neighbors of the removed node must point at each other. The removed data is returned."
    },
    {
     "q": "What does remove(0) return on the list a, b, c?",
     "opt": [
      "a",
      "head",
      "b"
     ],
     "ans": 0,
     "why": "remove returns the data of the node it removes, and index 0 is the first real node, a."
    },
    {
     "q": "The size is 3 and you call set(5, x) with a non-null x. What happens?",
     "opt": [
      "It throws IndexOutOfBoundsException",
      "It throws NullPointerException",
      "The list grows to include index 5"
     ],
     "ans": 0,
     "why": "set accepts indexes from 0 up to size - 1, so index 5 is out of bounds."
    }
   ],
   [
    {
     "q": "What does clear() do?",
     "opt": [
      "It removes every non-sentinel node and leaves head <-> tail",
      "It sets head and tail to null",
      "It removes the sentinels too"
     ],
     "ans": 0,
     "why": "The sentinels stay for the whole life of the list, so an empty list is head <-> tail with size 0."
    },
    {
     "q": "What does isEmpty() check?",
     "opt": [
      "Whether there are no data nodes, so size is 0",
      "Whether head is null",
      "Whether head.next is null"
     ],
     "ans": 0,
     "why": "Even an empty list has both sentinels, so the answer depends on the number of data nodes."
    },
    {
     "q": "A list has exactly one element. What does remove(0) do?",
     "opt": [
      "It returns that element and leaves head <-> tail",
      "It throws IndexOutOfBoundsException",
      "It returns null and changes nothing"
     ],
     "ans": 0,
     "why": "Index 0 is valid when size is 1. After the removal, head and tail point at each other again."
    },
    {
     "q": "A list holds 3 elements. What does size() return after clear()?",
     "opt": [
      "0",
      "3",
      "1"
     ],
     "ans": 0,
     "why": "clear removes every non-sentinel node and resets the size to 0."
    },
    {
     "q": "What does isEmpty() return right after clear() on a non-empty list?",
     "opt": [
      "true",
      "false",
      "It throws an exception"
     ],
     "ans": 0,
     "why": "After clear the list holds no data nodes, so its size is 0 and isEmpty is true."
    }
   ],
   [
    {
     "q": "What does the helper getNth(index) return?",
     "opt": [
      "The Node at that index, not its data",
      "The data stored at that index",
      "The index of a given node"
     ],
     "ans": 0,
     "why": "get can call getNth and then read the data. Other methods reuse it to find where to link."
    },
    {
     "q": "The size is 3. What does getNth(3) do?",
     "opt": [
      "It throws IndexOutOfBoundsException",
      "It returns tail",
      "It returns null"
     ],
     "ans": 0,
     "why": "Sentinels have no index. A valid index is at least 0 and less than size."
    },
    {
     "q": "What does set(1, null) do on a list with 3 elements?",
     "opt": [
      "It throws NullPointerException",
      "It stores null at index 1",
      "It throws IndexOutOfBoundsException"
     ],
     "ans": 0,
     "why": "null data is never allowed, whether you add or set. Index 1 is valid here, so the null is the problem."
    },
    {
     "q": "Which methods use getNth(index) to find their node?",
     "opt": [
      "get, set and remove",
      "Only get",
      "Only add"
     ],
     "ans": 0,
     "why": "get, set and remove all start by asking getNth for the node at the index."
    },
    {
     "q": "The size is 3. What does getNth(-1) do?",
     "opt": [
      "It throws IndexOutOfBoundsException",
      "It returns head",
      "It returns null"
     ],
     "ans": 0,
     "why": "getNth throws IndexOutOfBoundsException when the index is below 0 or at least the size."
    }
   ],
   [
    {
     "q": "What does the write-up say about the test headers in MyLinkedListCustomTester.java?",
     "opt": [
      "Do not change them",
      "Rename them to match your tests",
      "Delete the ones you do not need"
     ],
     "ans": 0,
     "why": "The autograder looks for those exact headers. You only fill in the bodies."
    },
    {
     "q": "How are your JUnit tests graded?",
     "opt": [
      "They must pass on a good implementation and fail on bad ones",
      "They must pass on every implementation",
      "They only need to compile"
     ],
     "ans": 0,
     "why": "A test that fails on a good implementation is wrong, and one that passes on a bad implementation is too weak. You earn 2 points for each bad implementation your test fails."
    },
    {
     "q": "A call such as add(-1, null) breaks two rules at once. What must your test do?",
     "opt": [
      "Assert that all the possible exceptions are thrown",
      "Assert only NullPointerException",
      "Skip this case"
     ],
     "ans": 0,
     "why": "A correct implementation may check the rules in any order, so your test must be written to accept every exception it could raise."
    },
    {
     "q": "How many points do you earn for each bad implementation that your test fails?",
     "opt": [
      "2 points",
      "1 point",
      "5 points"
     ],
     "ans": 0,
     "why": "The write-up gives 2 points for every bad implementation your test fails, as long as it also passes on the good one."
    },
    {
     "q": "Your test fails on a good implementation. What does that tell you?",
     "opt": [
      "The test is written incorrectly",
      "The good implementation is wrong",
      "The test still earns full credit"
     ],
     "ans": 0,
     "why": "A correct test must pass on a good implementation, so a failure there means the test itself has a mistake."
    }
   ],
   [
    {
     "q": "What does mergeLists expect as input?",
     "opt": [
      "Two lists that are each sorted in ascending order",
      "Two lists in any order",
      "One list that holds two lists"
     ],
     "ans": 0,
     "why": "left and right are already sorted, and the result must be a new sorted MyLinkedList."
    },
    {
     "q": "left is 1, 2, 2 and right is 2, 3, 4. What does mergeLists return?",
     "opt": [
      "1, 2, 2, 2, 3, 4",
      "1, 2, 3, 4",
      "1, 2, 2, 3, 4"
     ],
     "ans": 0,
     "why": "Duplicates are kept, so all six elements appear in sorted order."
    },
    {
     "q": "Which of these would give you 0 points for MyAlgorithm?",
     "opt": [
      "Referencing head, tail or size",
      "Calling get(i)",
      "Creating a new MyLinkedList"
     ],
     "ans": 0,
     "why": "The write-up forbids head, tail and size in this problem, but you may use any MyLinkedList method."
    },
    {
     "q": "May mergeLists call methods of MyLinkedList?",
     "opt": [
      "Yes, any method, but it must not use head, tail or the size field",
      "No, it may only call add",
      "Yes, but only get"
     ],
     "ans": 0,
     "why": "The write-up says to feel free to use any MyLinkedList method, and gives 0 points if you reference head, tail or size directly."
    },
    {
     "q": "What does mergeLists throw when left is null?",
     "opt": [
      "NullPointerException",
      "IllegalArgumentException",
      "IndexOutOfBoundsException"
     ],
     "ans": 0,
     "why": "The write-up says mergeLists throws a NullPointerException when left or right is null."
    }
   ]
  ],
  "Iterator": [
   [
    {
     "q": "Where does the cursor of a ListIterator sit?",
     "opt": [
      "Between two nodes",
      "On a node",
      "Always at the head"
     ],
     "ans": 0,
     "why": "The cursor sits in the gap between two nodes, so it always has a node on its left and a node on its right. Either one may be a sentinel."
    },
    {
     "q": "A MyLinkedList holds 3 elements. How many positions can its iterator's cursor be in?",
     "opt": [
      "3",
      "4",
      "5"
     ],
     "ans": 1,
     "why": "One before the first element, one between each pair, and one after the last. That is size + 1 positions in total."
    },
    {
     "q": "How many parameters does the MyListIterator constructor take?",
     "opt": [
      "One: the list",
      "Two: head and tail",
      "None"
     ],
     "ans": 2,
     "why": "MyListIterator is an inner class of MyLinkedList, so it already sees the head of the list it belongs to. The constructor only sets the starting fields."
    },
    {
     "q": "Right after the constructor runs, what are left, right and idx?",
     "opt": [
      "left is head, right is the first node, idx is 0",
      "left is the first node, right is the second node, idx is 1",
      "left is tail, right is head, idx is size"
     ],
     "ans": 0,
     "why": "A fresh iterator starts at the very front, so left is the head sentinel, right is head.getNext() and idx is 0. canRemoveOrSet starts as false."
    },
    {
     "q": "How does code outside the list get an iterator?",
     "opt": [
      "new ListIterator()",
      "list.listIterator()",
      "new MyListIterator()"
     ],
     "ans": 1,
     "why": "ListIterator is an interface, so it cannot be created with new. MyListIterator is an inner class that belongs to one list. The list methods listIterator() and iterator() just return new MyListIterator()."
    }
   ],
   [
    {
     "q": "When does hasNext() return true?",
     "opt": [
      "When the list is not empty",
      "When the cursor is at the start",
      "When an element node comes after the cursor"
     ],
     "ans": 2,
     "why": "hasNext() is true when going forward from the cursor reaches an element node. The tail sentinel is not an element."
    },
    {
     "q": "What does next() do?",
     "opt": [
      "Returns the element on the right and moves the cursor right by one node",
      "Returns the element on the left and moves the cursor left by one node",
      "Returns the size of the list and leaves the cursor where it is"
     ],
     "ans": 0,
     "why": "next() returns the element of the node on the right of the cursor, then the cursor steps past that node."
    },
    {
     "q": "What happens when next() is called at the end of the list?",
     "opt": [
      "It returns null",
      "It throws NoSuchElementException",
      "It wraps around to the first element"
     ],
     "ans": 1,
     "why": "At the end, right is the tail sentinel, so there is no element to return and the call must throw NoSuchElementException."
    },
    {
     "q": "After a successful next(), how does idx change?",
     "opt": [
      "It goes down by 1",
      "It stays the same",
      "It goes up by 1"
     ],
     "ans": 2,
     "why": "idx is the index of the node next() would return, so moving past one node adds 1."
    },
    {
     "q": "previous() is called when idx is 3. What is returned and what is idx afterwards?",
     "opt": [
      "The element at index 2, and idx becomes 2",
      "The element at index 3, and idx becomes 4",
      "The element at index 3, and idx becomes 2"
     ],
     "ans": 0,
     "why": "previous() returns the node on the left of the cursor, which is index idx - 1, and the cursor moves back one node, so idx goes down to 2."
    }
   ],
   [
    {
     "q": "The cursor is at the end of a list of size 4. What does nextIndex() return?",
     "opt": [
      "3",
      "4",
      "-1"
     ],
     "ans": 1,
     "why": "nextIndex() is the index next() would return, and at the end of the list that is the size."
    },
    {
     "q": "The cursor is at the start of the list. What does previousIndex() return?",
     "opt": [
      "0",
      "It throws NoSuchElementException",
      "-1"
     ],
     "ans": 2,
     "why": "There is no node on the left, so previousIndex() returns -1 and does not throw."
    },
    {
     "q": "Where does add(e) put the new element?",
     "opt": [
      "Right before the element that next() would return",
      "At the end of the list",
      "At the head of the list"
     ],
     "ans": 0,
     "why": "add inserts at the cursor, so the new node goes between left and right, right before the element next() would return."
    },
    {
     "q": "Right after add(e), what does previous() return?",
     "opt": [
      "The element that was before the new one",
      "The newly added element",
      "It throws IllegalStateException"
     ],
     "ans": 1,
     "why": "add leaves the cursor just after the new node, so the new node is on the left and previous() returns it."
    },
    {
     "q": "add(e) is called when idx is 2. What is idx afterwards?",
     "opt": [
      "2",
      "1",
      "3"
     ],
     "ans": 2,
     "why": "The cursor moves past the new node, so idx goes up by 1 and the size goes up by 1."
    }
   ],
   [
    {
     "q": "What is canRemoveOrSet for?",
     "opt": [
      "It says whether remove() and set() may be called right now",
      "It says whether the list is empty",
      "It says which way the iterator last moved"
     ],
     "ans": 0,
     "why": "It is false at the start and after add or remove, and true after next or previous."
    },
    {
     "q": "After next(), which node does set(e) change?",
     "opt": [
      "The node on the right of the cursor",
      "The node on the left of the cursor",
      "The first node of the list"
     ],
     "ans": 1,
     "why": "next() returned the node it just passed, and that node is now on the left of the cursor."
    },
    {
     "q": "After previous(), which node does remove() delete?",
     "opt": [
      "The node on the left of the cursor",
      "The tail sentinel",
      "The node on the right of the cursor"
     ],
     "ans": 2,
     "why": "previous() returned the node it just passed going backward, and that node is now on the right of the cursor."
    },
    {
     "q": "Why does the iterator keep the forward field?",
     "opt": [
      "To remember which side the last returned node is on, for set and remove",
      "To count how many nodes were visited",
      "To decide when hasNext() is true"
     ],
     "ans": 0,
     "why": "forward is true after next() and false after previous(), so set and remove know whether to act on left or right."
    },
    {
     "q": "After remove() finishes, what is canRemoveOrSet?",
     "opt": [
      "true",
      "false",
      "It keeps its old value"
     ],
     "ans": 1,
     "why": "A second remove() or a set() is not allowed until the next call to next() or previous()."
    }
   ],
   [
    {
     "q": "Which exception does add(null) throw?",
     "opt": [
      "IllegalStateException",
      "NoSuchElementException",
      "NullPointerException"
     ],
     "ans": 2,
     "why": "The write-up says add and set throw a NullPointerException when the element is null."
    },
    {
     "q": "Which exception does remove() throw right after add()?",
     "opt": [
      "IllegalStateException",
      "NoSuchElementException",
      "IndexOutOfBoundsException"
     ],
     "ans": 0,
     "why": "add sets canRemoveOrSet to false, and remove needs a next() or previous() call first, otherwise it throws IllegalStateException."
    },
    {
     "q": "Which exception does previous() throw at the start of the list?",
     "opt": [
      "IllegalStateException",
      "NoSuchElementException",
      "NullPointerException"
     ],
     "ans": 1,
     "why": "There is no element on the left, so previous() throws NoSuchElementException."
    },
    {
     "q": "Inside MyListIterator, which of these is not allowed?",
     "opt": [
      "Using the getters and setters of Node",
      "Defining helper methods inside MyListIterator",
      "Calling a MyLinkedList method such as get(i)"
     ],
     "ans": 2,
     "why": "If an iterator method uses a MyLinkedList method it earns 0 for that method. Node methods and helpers inside the inner class are fine."
    },
    {
     "q": "What access should the instance variables of MyListIterator have?",
     "opt": [
      "The default (package) access",
      "private",
      "public static"
     ],
     "ans": 0,
     "why": "The write-up says not to make instance variables private, so they keep the default access modifier."
    }
   ],
   [
    {
     "q": "How is MyListIteratorCustomTester.java graded?",
     "opt": [
      "Each test must pass on every implementation",
      "Each test must pass on a good implementation and fail on a bad one",
      "The file only has to compile"
     ],
     "ans": 1,
     "why": "A test that fails on a good implementation is wrong, and a test that passes on a bad one is not rigorous enough."
    },
    {
     "q": "One of your tests passes on a bad implementation. What does that mean?",
     "opt": [
      "The bad implementation is actually fine",
      "The test earns extra points",
      "The test may be wrong or not rigorous enough"
     ],
     "ans": 2,
     "why": "Try adding more asserts so the bad implementation is caught."
    },
    {
     "q": "What should testNextEnd do?",
     "opt": [
      "Call next when the iterator is at the end of a list",
      "Call next on a list with one element",
      "Call hasNext at the start of a list"
     ],
     "ans": 0,
     "why": "It checks the case where there is no next element, so the exception must be thrown."
    },
    {
     "q": "Which exception should testCantSet expect?",
     "opt": [
      "NullPointerException",
      "IllegalStateException",
      "NoSuchElementException"
     ],
     "ans": 1,
     "why": "set is called while canRemoveOrSet is false, with a valid non-null element, so it must throw IllegalStateException."
    },
    {
     "q": "What must you not change in MyListIteratorCustomTester.java?",
     "opt": [
      "The test bodies",
      "The imports",
      "The test headers"
     ],
     "ans": 2,
     "why": "The headers must stay exactly as given so the grader can find your tests. You write the bodies."
    }
   ],
   [
    {
     "q": "In PA4, what may mergeLists call on a MyLinkedList?",
     "opt": [
      "Only listIterator(), iterator() and the constructor",
      "get and size",
      "Any method, as in PA3"
     ],
     "ans": 0,
     "why": "Not even size() is allowed this time. The work is done through iterators."
    },
    {
     "q": "What running time must the PA4 mergeLists have?",
     "opt": [
      "O(n squared)",
      "O(n)",
      "O(log n)"
     ],
     "ans": 1,
     "why": "A loop of get(i) calls is O(n squared) because every get walks from the head. The write-up asks for O(n) and hints at using the iterator instead of get(i)."
    },
    {
     "q": "left is 1, 2, 2 and right is 2, 3, 4. What does mergeLists return?",
     "opt": [
      "1, 2, 3, 4",
      "1, 2, 2, 3, 4",
      "1, 2, 2, 2, 3, 4"
     ],
     "ans": 2,
     "why": "Duplicates are kept, so the result holds all six elements in sorted order."
    },
    {
     "q": "What does mergeLists do when left or right is null?",
     "opt": [
      "It throws NullPointerException",
      "It returns an empty list",
      "It returns the other list"
     ],
     "ans": 0,
     "why": "The write-up says it throws a NullPointerException when left or right is null."
    },
    {
     "q": "What does the write-up say about the two lists given to mergeLists?",
     "opt": [
      "Both are sorted in ascending order, there may be duplicates, and the sizes may differ",
      "Both have the same size and no duplicates",
      "Both are sorted in descending order"
     ],
     "ans": 0,
     "why": "The write-up says you are given two lists sorted in ascending order, that there may be duplicates, and that the list sizes may not be equal."
    }
   ]
  ]
 },
 "JOKES_DAYS": {
  "ArrayList": [
   [
    "Why did the ArrayList never feel crowded? It doubles its capacity whenever things get tight."
   ],
   [
    "I asked the ArrayList how it was doing. It said, I am at index 0 and I feel fine."
   ],
   [
    "Size and capacity went to couples therapy. Size said, I only count what is valid. Capacity said, I count the empty seats too."
   ],
   [
    "Why does remove feel so tidy? It always clears the last slot to null before leaving."
   ],
   [
    "Why did the programmer put a 4 at index 2? Everything after it had already booked a seat to the right."
   ],
   [
    "Capacity 3 met requiredCapacity 18 and learned that doubling to 6 was not going to cut it."
   ],
   [
    "Why did moveTargetToEnd cause a scene? It kept sending every 3 to the back of the line."
   ]
  ],
  "LinkedList": [
   [
    "Why does the linked list never get lost? Every node knows where the next one is."
   ],
   [
    "Why did the node leave the array? It was tired of living in a row house with no room to grow."
   ],
   [
    "What do you call a node that lost its next pointer? A very short story."
   ],
   [
    "Removing a node is like leaving a group chat. The neighbors just reconnect around you."
   ],
   [
    "Rewire in the right order. Set the new node's pointers first, or the rest of the list wanders off."
   ],
   [
    "A linked list never needs to resize. It just keeps adding rooms like a rambling old house."
   ],
   [
    "Why did add at index 0 feel quick? The head was already standing right there."
   ]
  ],
  "Iterator": [
   [
    "Why does the iterator never get lost? Its cursor always sits between two elements and knows both."
   ],
   [
    "The iterator is an excellent tour guide. It only ever shows you the next sight."
   ],
   [
    "previous asked next for directions. Next said, I only go the other way."
   ],
   [
    "nextIndex and previousIndex are siblings. They are always exactly one apart."
   ],
   [
    "hasPrevious is the iterator's rear view mirror."
   ],
   [
    "An iterator and a list walk into a node. Only one of them remembers where it was."
   ],
   [
    "What did the cursor say after add? Now I am right after the new guy."
   ]
  ]
 }
};
