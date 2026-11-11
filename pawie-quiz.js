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
  },
  "Hashing": {
   "start": "2026-10-30",
   "due": "2026-11-05",
   "opened": "2026-10-31"
  },
  "StackQueue": {
   "start": "2026-11-06",
   "due": "2026-11-12",
   "opened": "2026-11-10"
  },
  "Heap": {
   "start": "2026-11-13",
   "due": "2026-11-19"
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
  ],
  "Hashing": [
   [
    {
     "q": "How does MyHashMap handle two keys that land in the same bucket?",
     "opt": [
      "Separate chaining: a linked list of nodes in that bucket",
      "It moves the second key to the next empty bucket",
      "It replaces the older key"
     ],
     "ans": 0,
     "why": "The write-up uses separate chaining. Each bucket of the Node array holds a linked list of the (key, value) nodes that hashed there."
    },
    {
     "q": "What kind of linked list holds the nodes of one bucket?",
     "opt": [
      "A doubly linked list with head and tail sentinels",
      "A singly linked list with no sentinel nodes",
      "A circular linked list"
     ],
     "ans": 1,
     "why": "The write-up says not to use sentinel nodes and that this is a singly linked list, which is different from PA3."
    },
    {
     "q": "What are the two instance variables of MyHashMap?",
     "opt": [
      "Node[] hashTable and int size",
      "Node head and Node tail",
      "Object[] data and int capacity"
     ],
     "ans": 0,
     "why": "hashTable is the underlying array of the hash table, and size is the number of (key, value) pairs currently stored."
    },
    {
     "q": "What capacity does new MyHashMap() start with?",
     "opt": [
      "10",
      "16",
      "5"
     ],
     "ans": 2,
     "why": "The no-argument constructor initializes the hash table with a default initial capacity of 5."
    },
    {
     "q": "What does new MyHashMap(0) do?",
     "opt": [
      "Makes a table of capacity 5 instead",
      "Throws IllegalArgumentException",
      "Makes a table with no buckets"
     ],
     "ans": 1,
     "why": "The write-up says the constructor throws an IllegalArgumentException if initialCapacity is 0 or negative."
    }
   ],
   [
    {
     "q": "What does get(key) return when the key is not in the map?",
     "opt": [
      "null",
      "It throws NoSuchElementException",
      "0"
     ],
     "ans": 0,
     "why": "get returns the value the key maps to, or null if the key is not in the hash map."
    },
    {
     "q": "What does get(null) do?",
     "opt": [
      "Returns null",
      "Throws NullPointerException",
      "Returns the first value in the table"
     ],
     "ans": 1,
     "why": "MyHashMap never stores null keys, so get throws a NullPointerException when the key is null."
    },
    {
     "q": "put(\"A\", 1) is called on a map that already maps \"A\" to 9. What does put return?",
     "opt": [
      "null",
      "1",
      "9"
     ],
     "ans": 2,
     "why": "put returns the value previously mapped to the key, here 9, and \"A\" now maps to 1. It returns null only when the key was not in the map before."
    },
    {
     "q": "When does put check whether the table needs to grow?",
     "opt": [
      "At the start, before it tries to add the mapping",
      "After the new node is added",
      "Only when a bucket's chain gets long"
     ],
     "ans": 0,
     "why": "At the start of put, before attempting to add the mapping, it checks whether size is at least 80% of the capacity, and if so it doubles the capacity."
    },
    {
     "q": "A new key hashes to a bucket that already has a chain of nodes. Where does its node go?",
     "opt": [
      "At the front of the chain",
      "At the end of the chain",
      "In the next empty bucket"
     ],
     "ans": 1,
     "why": "The write-up says that if a hash collision happens, the new node is added to the end of the linked list."
    }
   ],
   [
    {
     "q": "What does remove(key) return when the key is in the map?",
     "opt": [
      "true",
      "The value that was mapped to the key",
      "The removed node"
     ],
     "ans": 1,
     "why": "remove returns the value previously mapped to the key, or null if the key was not in the hash map."
    },
    {
     "q": "What does remove(key) return when the key is not in the map?",
     "opt": [
      "false",
      "It throws NoSuchElementException",
      "null"
     ],
     "ans": 2,
     "why": "Nothing is removed and remove returns null. Only a null key throws (NullPointerException)."
    },
    {
     "q": "After remove finds the key in the middle of a chain, what has to be fixed?",
     "opt": [
      "The previous node's next must skip over the removed node",
      "Every bucket must be rehashed",
      "The capacity must shrink"
     ],
     "ans": 0,
     "why": "The write-up says to adjust the Node linked list to reflect the removal, so the node before it now points past it."
    },
    {
     "q": "What does size() return?",
     "opt": [
      "The number of buckets",
      "The number of (key, value) pairs in the map",
      "The number of buckets that are not empty"
     ],
     "ans": 1,
     "why": "size is the number of (key, value) pairs in the hash map. The number of buckets is the capacity, which getCapacity() returns."
    },
    {
     "q": "A map has capacity 10 and holds 3 pairs. What do getCapacity() and isEmpty() return?",
     "opt": [
      "10 and false",
      "3 and false",
      "10 and true"
     ],
     "ans": 0,
     "why": "getCapacity returns the capacity of the table, 10. isEmpty returns true only when the map has no pairs, and it has 3."
    }
   ],
   [
    {
     "q": "A new MyHashMap() of capacity 5 already holds 4 pairs. You put a new key. What happens first?",
     "opt": [
      "Nothing special, the key is added and the table grows next time",
      "The capacity doubles to 10 and every pair is rehashed",
      "put throws because the table is full"
     ],
     "ans": 1,
     "why": "4 is 80% of 5, so size is at the maximum load. put calls expandCapacity first, doubling to 10, and then adds the new pair."
    },
    {
     "q": "What does expandCapacity do to the capacity?",
     "opt": [
      "Adds 5",
      "Doubles it",
      "Sets it to the number of pairs"
     ],
     "ans": 1,
     "why": "expandCapacity doubles the capacity of the hash table and rehashes all (key, value) pairs into the new table."
    },
    {
     "q": "In which order does expandCapacity rehash the old buckets?",
     "opt": [
      "From the last index down to 0",
      "In the order the keys were first put",
      "From index 0 up to index n minus 1"
     ],
     "ans": 2,
     "why": "The write-up says to rehash elements in ascending order, from index 0 to index n minus 1 of hashTable."
    },
    {
     "q": "Two keys share a bucket before expandCapacity. After it runs, where are they?",
     "opt": [
      "Always still together in one bucket",
      "Each in the bucket getHash gives it for the new capacity, which may differ",
      "In the same bucket index they had before"
     ],
     "ans": 1,
     "why": "Every pair is rehashed with the new capacity, so keys that collided before can end up in different buckets."
    },
    {
     "q": "What does getHash(key, 0) do?",
     "opt": [
      "Throws IllegalArgumentException",
      "Returns 0",
      "Throws NullPointerException"
     ],
     "ans": 0,
     "why": "getHash checks its arguments first: a null key throws NullPointerException, and a capacity of 0 or less throws IllegalArgumentException."
    }
   ],
   [
    {
     "q": "What does MyHashSet store its elements in?",
     "opt": [
      "An array of elements",
      "A MyHashMap whose keys are the elements",
      "A MyLinkedList"
     ],
     "ans": 1,
     "why": "MyHashSet is the set ADT built on a MyHashMap. The elements are the keys, and every value is a placeholder."
    },
    {
     "q": "What value does MyHashSet put next to each element in its hashMap?",
     "opt": [
      "The element itself",
      "null",
      "DEFAULT_OBJECT"
     ],
     "ans": 2,
     "why": "public static final Object DEFAULT_OBJECT is the placeholder value stored with every key of the underlying hashMap. A MyHashMap never stores null values."
    },
    {
     "q": "What does add(e) return when e is already in the set?",
     "opt": [
      "false",
      "true",
      "It throws IllegalArgumentException"
     ],
     "ans": 0,
     "why": "add returns true if the set did not already contain the element, and false otherwise."
    },
    {
     "q": "add(e) is called with an element that is already in the set. Does it still call the map's put?",
     "opt": [
      "No, it returns right away",
      "Yes, put is called in either case",
      "Only if the table is at max load"
     ],
     "ans": 1,
     "why": "The write-up says to call put in either case, so the value is replaced if it differs and expandCapacity is called if needed."
    },
    {
     "q": "What does contains(null) do?",
     "opt": [
      "Returns false",
      "Returns true if null was added",
      "Throws NullPointerException"
     ],
     "ans": 2,
     "why": "MyHashSet never stores null elements, and add, remove and contains each throw a NullPointerException for a null element."
    }
   ],
   [
    {
     "q": "testMyHashMapPutKeyAlreadyExists in CustomTester checks which call?",
     "opt": [
      "put with a key that is already in the hash table",
      "put with a null key",
      "get with a key that is not in the table"
     ],
     "ans": 0,
     "why": "The test table describes it as calling put in MyHashMap with a key that already exists in the hash table."
    },
    {
     "q": "A custom test passes on the good implementation and also passes on a bad one. What does that mean?",
     "opt": [
      "It earns full points",
      "It may be wrong or not rigorous enough, so add more asserts",
      "The bad implementation is actually correct"
     ],
     "ans": 1,
     "why": "A test is graded by passing on a good implementation and failing on a bad one. A test that passes on a bad one may need more asserts."
    },
    {
     "q": "What should testMyHashSetRemoveDoesNotExist expect?",
     "opt": [
      "remove returns false and the set is unchanged",
      "remove throws NoSuchElementException",
      "remove returns null"
     ],
     "ans": 0,
     "why": "MyHashSet's remove returns true if the set contained the element and false otherwise. Nothing is removed."
    },
    {
     "q": "With the keys spread evenly, what is the average running time of get?",
     "opt": [
      "O(n)",
      "O(log n)",
      "O(1)"
     ],
     "ans": 2,
     "why": "getHash points to one bucket, and with the load kept at or under 80% the chain there stays short on average."
    },
    {
     "q": "What is the worst case running time of get?",
     "opt": [
      "O(1)",
      "O(n), when every key is in one bucket's chain",
      "O(n squared)"
     ],
     "ans": 1,
     "why": "If every key collides into one bucket, get has to walk a chain of all n nodes."
    }
   ],
   [
    {
     "q": "merchantIds is [1, 2, 3, 1] and certainty is 3. What does hasFraudulentTxns return?",
     "opt": [
      "true",
      "false",
      "It throws IllegalArgumentException"
     ],
     "ans": 0,
     "why": "Merchant ID 1 is at indices i = 0 and j = 3, and Math.abs(i - j) is 3, which is at most certainty. This is Example 1 of the write-up."
    },
    {
     "q": "merchantIds is [7] and certainty is 1. What does it return?",
     "opt": [
      "true",
      "false",
      "It throws IllegalArgumentException"
     ],
     "ans": 1,
     "why": "The spec needs two distinct indices i and j with the same merchant ID. With one transaction there is no second index, so it returns false."
    },
    {
     "q": "What does hasFraudulentTxns do when certainty is 0?",
     "opt": [
      "Returns false",
      "Returns true",
      "Throws IllegalArgumentException"
     ],
     "ans": 2,
     "why": "The write-up says to throw an IllegalArgumentException if certainty is less than or equal to 0."
    },
    {
     "q": "merchantIds is [5, 8, 5] and certainty is 1. What does it return?",
     "opt": [
      "true",
      "false"
     ],
     "ans": 1,
     "why": "Merchant ID 5 is at indices i = 0 and j = 2, and Math.abs(i - j) is 2, which is more than certainty 1."
    },
    {
     "q": "Which running time does your hasFraudulentTxns need for full credit?",
     "opt": [
      "O(n)",
      "O(n log n)",
      "O(n squared)"
     ],
     "ans": 0,
     "why": "To get full credit the implementation needs to be O(n), using MyHashSet and/or MyHashMap."
    }
   ]
  ],
  "StackQueue": [
   [
    {
     "q": "Which instance variables does MyDeque have?",
     "opt": [
      "data, size, rear and front",
      "data, size, head and tail",
      "data and capacity"
     ],
     "ans": 0,
     "why": "data is the Object array, size counts the valid elements, and rear and front are the indices of the last and the first element."
    },
    {
     "q": "What happens with new MyDeque(-1)?",
     "opt": [
      "It creates a deque with capacity 10",
      "It throws IllegalArgumentException",
      "It throws NullPointerException"
     ],
     "ans": 1,
     "why": "The constructor throws an IllegalArgumentException if initialCapacity is negative."
    },
    {
     "q": "What happens with new MyDeque(0)?",
     "opt": [
      "It throws IllegalArgumentException",
      "It creates a deque with capacity 10",
      "It creates a deque with capacity 0"
     ],
     "ans": 2,
     "why": "Only a negative capacity is refused. data is initialized with length initialCapacity, so the capacity is 0 until expandCapacity runs."
    },
    {
     "q": "Right after new MyDeque(5), what are front and rear?",
     "opt": [
      "front is 0 and rear is 4",
      "Both are 0",
      "front is 0 and rear is -1"
     ],
     "ans": 1,
     "why": "When the deque is initialized both front and rear start at index 0. They are also equal whenever the deque is empty or has only one element."
    },
    {
     "q": "What does a null in data mean?",
     "opt": [
      "An empty space in the array",
      "An element whose value is null",
      "The end of the deque"
     ],
     "ans": 0,
     "why": "null cannot be a valid element in the deque. It is used to represent an empty space in the array."
    }
   ],
   [
    {
     "q": "What does addFirst(null) do?",
     "opt": [
      "It adds null at the front",
      "It does nothing",
      "It throws NullPointerException"
     ],
     "ans": 2,
     "why": "addFirst and addLast both throw a NullPointerException when element is null."
    },
    {
     "q": "A new deque of capacity 5 has front and rear at 0. After addLast(0), what are front and rear?",
     "opt": [
      "Both are still 0",
      "front is 0 and rear is 1",
      "front is 4 and rear is 0"
     ],
     "ans": 0,
     "why": "The first element goes into index 0, where front and rear already are. Only size changes, to 1. This is the second example in the write-up."
    },
    {
     "q": "data is [0, null, null, null, null] with front at 0. Where does addFirst(10) put 10?",
     "opt": [
      "Index 1",
      "Index 4, because front wraps around",
      "Index 0, after 0 is shifted to the right"
     ],
     "ans": 1,
     "why": "The new first element goes just before front. There is no index before 0, so front wraps around to index 4. Nothing is shifted."
    },
    {
     "q": "The capacity is 10, front is 1 and rear is 4. After addLast(6), what is rear?",
     "opt": [
      "5",
      "0",
      "4"
     ],
     "ans": 0,
     "why": "The element is added to the rear of the deque, in the next space after the old rear, and rear is updated to 5."
    },
    {
     "q": "The deque is at capacity and you call addFirst. What happens first?",
     "opt": [
      "It throws IllegalStateException",
      "It overwrites the element at rear",
      "It calls expandCapacity, then adds the element"
     ],
     "ans": 2,
     "why": "Before trying to add, addFirst and addLast check if the deque is at capacity and call expandCapacity if necessary."
    }
   ],
   [
    {
     "q": "What does removeFirst() do when the deque is empty?",
     "opt": [
      "It throws an exception",
      "It returns null",
      "It resets front and rear to 0"
     ],
     "ans": 1,
     "why": "If there are no elements in the deque, removeFirst and removeLast return null. No exception is thrown."
    },
    {
     "q": "data is [null, null, null, null, 10] with front and rear at 4. After removeLast(), what are front and rear?",
     "opt": [
      "Both are reset to 0",
      "Both stay at 4",
      "front is 4 and rear is 3"
     ],
     "ans": 1,
     "why": "The write-up says not to reset rear or front to 0 when removing the final element. The next add uses index 4 again."
    },
    {
     "q": "The capacity is 10, front is 9 and rear is 4. After removeFirst(), what is front?",
     "opt": [
      "0, because front wraps around",
      "8",
      "10"
     ],
     "ans": 0,
     "why": "The element at index 9 is removed, and the new first element is at index 0. front wraps around the end of the array."
    },
    {
     "q": "What does peekLast() do?",
     "opt": [
      "It returns the element at the rear and removes nothing",
      "It removes and returns the element at the rear",
      "It returns the element at the front"
     ],
     "ans": 0,
     "why": "peekLast returns the element at the rear of the deque, or null if there are no elements. The deque is not changed."
    },
    {
     "q": "The capacity is 10, front is 1 and rear is 4. After removeLast(), what is rear?",
     "opt": [
      "5",
      "4",
      "3"
     ],
     "ans": 2,
     "why": "The element at index 4 is removed and returned, so the last element is now at index 3."
    }
   ],
   [
    {
     "q": "The capacity is 5. What is it after expandCapacity()?",
     "opt": [
      "6",
      "10",
      "15"
     ],
     "ans": 1,
     "why": "expandCapacity doubles the current capacity, so 5 becomes 10."
    },
    {
     "q": "The capacity is 0. What is it after expandCapacity()?",
     "opt": [
      "0",
      "1",
      "10"
     ],
     "ans": 2,
     "why": "Doubling 0 would still give 0, so the write-up says to set the capacity to a default value of 10."
    },
    {
     "q": "data is [3, 4, 5, 1, 2] with front at 3 and rear at 2. What is data after expandCapacity()?",
     "opt": [
      "[1, 2, 3, 4, 5, null, null, null, null, null]",
      "[3, 4, 5, 1, 2, null, null, null, null, null]",
      "[null, null, null, 1, 2, 3, 4, 5, null, null]"
     ],
     "ans": 0,
     "why": "Elements need to be contiguous after expanding, in their order from first to last, starting at index 0. This is the expandCapacity example in the write-up."
    },
    {
     "q": "In that same example, what are front and rear after expandCapacity()?",
     "opt": [
      "front is 3 and rear is 2",
      "front is 0 and rear is 4",
      "front is 5 and rear is 9"
     ],
     "ans": 1,
     "why": "After expanding, front needs to be 0 and rear should be at size - 1. The size is still 5, so rear is 4."
    },
    {
     "q": "An empty deque of capacity 4 calls expandCapacity(). What is rear afterward?",
     "opt": [
      "0",
      "-1",
      "7"
     ],
     "ans": 0,
     "why": "rear should be at size - 1, or 0 if there are no elements present. The size and the elements are preserved."
    }
   ],
   [
    {
     "q": "What is the instance variable of MyStack?",
     "opt": [
      "An Object array named data",
      "A MyDeque named theStack",
      "A MyLinkedList named theStack"
     ],
     "ans": 1,
     "why": "MyStack implements the Stack ADT with a MyDeque<E> object, theStack, as its underlying data structure."
    },
    {
     "q": "You push 1, then 2, then 3, and call pop(). What does it return?",
     "opt": [
      "1",
      "2",
      "3"
     ],
     "ans": 2,
     "why": "A stack is LIFO, last in first out. The most recent push is at the top, and pop removes from the top."
    },
    {
     "q": "What does pop() return when the stack is empty?",
     "opt": [
      "null",
      "It throws EmptyStackException",
      "0"
     ],
     "ans": 0,
     "why": "pop returns the removed element, or null if there was no such element."
    },
    {
     "q": "Your push is written with addLast. Which deque method does pop need so the stack stays LIFO?",
     "opt": [
      "removeFirst",
      "removeLast",
      "peekFirst"
     ],
     "ans": 1,
     "why": "Push and pop have to work on the same end of the deque. The write-up lets you choose either end, as long as the choice is consistent across all the MyStack methods."
    },
    {
     "q": "Which MyDeque methods may MyStack call?",
     "opt": [
      "Only the methods outlined in DequeInterface",
      "Any method, including helpers you added to MyDeque",
      "None, it should read data directly"
     ],
     "ans": 0,
     "why": "The write-up says to only use the methods outlined in DequeInterface.java, and to refrain from using helper methods you wrote in MyDeque."
    }
   ],
   [
    {
     "q": "You enqueue 1, then 2, then 3, and call dequeue(). What does it return?",
     "opt": [
      "1",
      "2",
      "3"
     ],
     "ans": 0,
     "why": "A queue is FIFO, first in first out. The earliest element is at the front, and dequeue removes from the front."
    },
    {
     "q": "enqueue adds to the ___ of the queue and dequeue removes from the ___.",
     "opt": [
      "front, back",
      "back, front",
      "back, back"
     ],
     "ans": 1,
     "why": "enqueue adds the specified element to the back of the queue. dequeue removes an element from the front of the queue."
    },
    {
     "q": "You enqueue 4 and then 7. What does peek() return?",
     "opt": [
      "4",
      "7",
      "null"
     ],
     "ans": 0,
     "why": "peek returns the element at the front of the queue, which is the one that was enqueued first. It does not remove it."
    },
    {
     "q": "What does dequeue() do when the queue is empty?",
     "opt": [
      "It throws an exception",
      "It returns 0",
      "It returns null"
     ],
     "ans": 2,
     "why": "dequeue returns the removed element, or null if there was no such element."
    },
    {
     "q": "What does new MyQueue(8) do?",
     "opt": [
      "It creates an Object array of length 8 inside MyQueue",
      "It initializes its MyDeque with an initialCapacity of 8",
      "It enqueues the number 8"
     ],
     "ans": 1,
     "why": "The constructor initializes a MyDeque<E> object with the parameter initialCapacity. The array lives inside that deque."
    }
   ],
   [
    {
     "q": "What does isValidBrackets return for \"(abc)\"?",
     "opt": [
      "true",
      "false",
      "It throws IllegalArgumentException"
     ],
     "ans": 0,
     "why": "The input may contain any characters, and only the brackets matter. The one open bracket is closed by the same type. This is the first example in the write-up."
    },
    {
     "q": "What does isValidBrackets return for the empty string?",
     "opt": [
      "false",
      "It throws NullPointerException",
      "true"
     ],
     "ans": 2,
     "why": "The write-up lists the empty string as an example that returns true. It has no bracket that is left unmatched."
    },
    {
     "q": "What does isValidBrackets return for \")(\"?",
     "opt": [
      "true",
      "false"
     ],
     "ans": 1,
     "why": "Every close bracket must have a corresponding open bracket of the same type. The first close bracket has none before it."
    },
    {
     "q": "What does isValidBrackets do when input is null?",
     "opt": [
      "It throws NullPointerException",
      "It returns false",
      "It returns true"
     ],
     "ans": 0,
     "why": "The write-up says to throw a NullPointerException when input is null."
    },
    {
     "q": "Which running time does your isValidBrackets need?",
     "opt": [
      "O(n)",
      "O(n log n)",
      "O(n squared)"
     ],
     "ans": 0,
     "why": "Your implementation must use a stack or a queue and must run in O(n) time."
    }
   ]
  ],
  "Heap": [
   [
    {
     "q": "What is the one instance variable of MyMinHeap?",
     "opt": [
      "An ArrayList named data",
      "An Object array and a size counter",
      "A root node with left and right references"
     ],
     "ans": 0,
     "why": "The write-up allows only protected ArrayList<E> data. The tree is never built out of nodes, it lives inside that list."
    },
    {
     "q": "Where in data is the root of the heap stored?",
     "opt": [
      "Index 1, with index 0 left empty",
      "Index 0",
      "The last index"
     ],
     "ans": 1,
     "why": "The write-up requires 0-based indexing, so the root of the tree is at index 0. All the tests assume it."
    },
    {
     "q": "How does new MyMinHeap(collection) first fill data?",
     "opt": [
      "It calls insert once for every element",
      "It sorts the collection and copies it over",
      "It passes collection straight to the ArrayList(Collection) constructor"
     ],
     "ans": 2,
     "why": "The first step is to initialize data with the ArrayList(Collection) constructor, directly passing in the collection argument. The elements keep the order they came in."
    },
    {
     "q": "After the elements are copied in, how does the constructor make data a heap?",
     "opt": [
      "It iterates through data backward, percolating each element down",
      "It iterates through data forward, percolating each element up",
      "It swaps the smallest element to index 0 and stops"
     ],
     "ans": 0,
     "why": "The write-up says to iterate through data backward, percolating each element down. The percolateDown helper does the work."
    },
    {
     "q": "What does new MyMinHeap(collection) do when one element of collection is null?",
     "opt": [
      "It skips that element",
      "It throws NullPointerException",
      "It stores null at the end of data"
     ],
     "ans": 1,
     "why": "The constructor throws NullPointerException if collection is null or if any element in collection is null."
    }
   ],
   [
    {
     "q": "What does getParentIdx(5) return?",
     "opt": [
      "2",
      "1",
      "3"
     ],
     "ans": 0,
     "why": "With the root at index 0 the parent of index i is (i - 1) / 2 in integer division, so the parent of 5 is 2."
    },
    {
     "q": "What does getLeftChildIdx(3) return?",
     "opt": [
      "6",
      "7",
      "8"
     ],
     "ans": 1,
     "why": "The left child of index i is 2 * i + 1, so the left child of 3 is 7. The method only does arithmetic and never looks at data."
    },
    {
     "q": "What does getRightChildIdx(3) return?",
     "opt": [
      "6",
      "7",
      "8"
     ],
     "ans": 2,
     "why": "The right child of index i is 2 * i + 2, which is the slot right after the left child. For 3 that is 8."
    },
    {
     "q": "data is [1, 4, 4, 9]. What does getMinChildIdx(0) return?",
     "opt": [
      "1",
      "2",
      "-1"
     ],
     "ans": 0,
     "why": "The children of index 0 are at 1 and 2 and both hold 4. When the two children are equal, getMinChildIdx returns the index of the left child."
    },
    {
     "q": "data is [1, 4, 4, 9]. What does getMinChildIdx(2) return?",
     "opt": [
      "3",
      "-1",
      "It throws IndexOutOfBoundsException"
     ],
     "ans": 1,
     "why": "The left child of index 2 would be at index 5, which is past the end of data. A node with no children is a leaf, and for a leaf the method returns -1."
    }
   ],
   [
    {
     "q": "Where does insert put the new element before any percolating?",
     "opt": [
      "At index 0, the root",
      "At the end of data, the right-most spot of the bottom level",
      "At the index where it is in sorted order"
     ],
     "ans": 1,
     "why": "insert adds the element to the end of the heap, so the tree stays complete. Then only that element percolates up."
    },
    {
     "q": "data is [1, 5, 3] and you call insert(2). What is data afterward?",
     "opt": [
      "[1, 2, 3, 5]",
      "[1, 5, 3, 2]",
      "[2, 1, 3, 5]"
     ],
     "ans": 0,
     "why": "2 is added at index 3. Its parent at index 1 holds 5, which is greater, so they swap. The next parent holds 1, which is not greater, so 2 stops at index 1."
    },
    {
     "q": "While percolating up, the element is equal to its parent. What should happen?",
     "opt": [
      "Swap them",
      "Do not swap, and stop",
      "Throw IllegalArgumentException"
     ],
     "ans": 1,
     "why": "A node only has to be no greater than its children. An equal parent already satisfies that, so the write-up says not to swap."
    },
    {
     "q": "What does insert(null) do?",
     "opt": [
      "It adds null at the end of data",
      "It returns false",
      "It throws NullPointerException and adds nothing"
     ],
     "ans": 2,
     "why": "The write-up says to throw a NullPointerException and not add to the heap if element is null."
    },
    {
     "q": "data is [3, 5, 4] and you call insert(1). How many swaps does percolateUp make?",
     "opt": [
      "1",
      "2",
      "3"
     ],
     "ans": 1,
     "why": "1 starts at index 3, swaps with 5 at index 1, then swaps with 3 at index 0. It is now the root, so data is [1, 3, 4, 5] after 2 swaps."
    }
   ],
   [
    {
     "q": "When percolateDown has to swap, which child does it swap with?",
     "opt": [
      "Always the left child",
      "The smaller child, and the left child when both are equal",
      "The larger child"
     ],
     "ans": 1,
     "why": "The write-up says to always swap places with the smaller child, and with the left child if both children are equal."
    },
    {
     "q": "data is [1, 3, 2, 7] and you call remove(). What is data afterward?",
     "opt": [
      "[2, 3, 7]",
      "[3, 7, 2]",
      "[7, 3, 2]"
     ],
     "ans": 0,
     "why": "The root 1 is removed and returned. The last element 7 takes its place, then percolates down by swapping with the smaller child, which is 2."
    },
    {
     "q": "deleteIndex is called on the last index of the heap. What fixing is needed?",
     "opt": [
      "The root has to percolate down",
      "None, the heap properties are maintained",
      "The whole heap is rebuilt"
     ],
     "ans": 1,
     "why": "The write-up says that if we are removing the last element then the heap properties are maintained."
    },
    {
     "q": "deleteIndex removes an element that is not the last one. What replaces it?",
     "opt": [
      "Its smaller child",
      "Its parent",
      "The last element in the heap"
     ],
     "ans": 2,
     "why": "The deleted element is replaced with the last element in the heap, the right-most node of the bottom level, which fixes the completeness property. That element then percolates down or up, and only one of the two is ever necessary."
    },
    {
     "q": "Why should deleteIndex remove from the ArrayList by index and not by element?",
     "opt": [
      "Removing by element could delete the wrong one when there are duplicates",
      "Removing by index never has to shift anything",
      "ArrayList has no method that removes by element"
     ],
     "ans": 0,
     "why": "The write-up warns that removing by element could accidentally delete the wrong element if there are duplicates in the list."
    }
   ],
   [
    {
     "q": "What does getMin() do when the heap is empty?",
     "opt": [
      "It throws NoSuchElementException",
      "It returns null",
      "It returns 0"
     ],
     "ans": 1,
     "why": "getMin returns the root element, and if the heap is empty it returns null instead. The same is true of remove."
    },
    {
     "q": "Which helper does the write-up tell remove() to use?",
     "opt": [
      "percolateUp",
      "getMinChildIdx",
      "deleteIndex"
     ],
     "ans": 2,
     "why": "remove removes and returns the root, and the write-up says to use the deleteIndex helper for it. The root is at index 0."
    },
    {
     "q": "data is [2, 6, 4]. You call getMin() twice. What does the second call return?",
     "opt": [
      "2",
      "4",
      "6"
     ],
     "ans": 0,
     "why": "getMin only returns the root. It does not remove anything, so the heap is unchanged and the second call returns 2 again."
    },
    {
     "q": "A heap holds 5 elements and you call clear(). What does size() return afterward?",
     "opt": [
      "0",
      "5",
      "It throws NullPointerException"
     ],
     "ans": 0,
     "why": "clear empties the entire heap, so size returns 0. The heap can still be used, and the next insert starts it again at the root."
    },
    {
     "q": "The heap holds n elements. What is the worst case running time of insert?",
     "opt": [
      "O(1)",
      "O(log n)",
      "O(n)"
     ],
     "ans": 1,
     "why": "The new element only climbs one path from the bottom toward the root, and a complete tree of n nodes has about log n levels."
    }
   ],
   [
    {
     "q": "What is the one instance variable of MyPriorityQueue?",
     "opt": [
      "An ArrayList of its own",
      "A MyMinHeap named heap",
      "A MyDeque named queue"
     ],
     "ans": 1,
     "why": "MyPriorityQueue has a single instance variable, protected MyMinHeap<E> heap, and every method works through it."
    },
    {
     "q": "Which element of a MyPriorityQueue has the highest priority?",
     "opt": [
      "The smallest one, as compareTo defines it",
      "The largest one",
      "The one that was pushed first"
     ],
     "ans": 0,
     "why": "The underlying structure is a min-heap, so smaller elements have higher priorities. The root of the heap is the smallest element and the one with the highest priority."
    },
    {
     "q": "You push 5, then 2, then 8, and then call pop(). What does it return?",
     "opt": [
      "5",
      "2",
      "8"
     ],
     "ans": 1,
     "why": "pop removes and returns the element with the highest priority, which is the smallest one. The order of the pushes does not matter."
    },
    {
     "q": "May MyPriorityQueue read or change heap.data directly?",
     "opt": [
      "Yes, data is protected so it can be reached",
      "No, it should use only the public methods of MyMinHeap"
     ],
     "ans": 1,
     "why": "The write-up says to use only the MyMinHeap public methods and to treat heap.data as if it were a private instance variable."
    },
    {
     "q": "What is heap after MyPriorityQueue's clear() finishes?",
     "opt": [
      "An empty MyMinHeap, not null",
      "null",
      "A MyMinHeap that holds one null element"
     ],
     "ans": 0,
     "why": "The priority queue should be empty after the call, and the write-up says heap should be an empty MyMinHeap, not null."
    }
   ],
   [
    {
     "q": "atoms is [1, 1, 3]. What does lastAtom return?",
     "opt": [
      "1",
      "2",
      "5"
     ],
     "ans": 0,
     "why": "This is the example in the write-up. Atoms 1 and 1 produce an atom of type 2, then atoms 2 and 3 produce an atom of type 1, which is the last one."
    },
    {
     "q": "The two atoms with the smallest types are 4 and 4. What is the type of the new atom?",
     "opt": [
      "0",
      "8",
      "4"
     ],
     "ans": 1,
     "why": "When the two types are the same the reaction is stable, and the new atom's type is the sum of the two types."
    },
    {
     "q": "The two atoms with the smallest types are 2 and 5. What is the type of the new atom?",
     "opt": [
      "3",
      "7",
      "10"
     ],
     "ans": 0,
     "why": "When the two types differ the reaction is unstable, and the new atom's type is the absolute difference between the two types."
    },
    {
     "q": "What does lastAtom do when atoms is null?",
     "opt": [
      "It returns null",
      "It returns 0",
      "It throws NullPointerException"
     ],
     "ans": 2,
     "why": "The write-up says to throw a NullPointerException if atoms is null. A list that is not null always holds at least one atom."
    },
    {
     "q": "Which running time does your lastAtom need for full credit?",
     "opt": [
      "O(n)",
      "O(n log n)",
      "O(n squared)"
     ],
     "ans": 1,
     "why": "You are required to use a MyPriorityQueue object, and the algorithm must run in O(n log n) time for full credit."
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
  ],
  "Hashing": [
   [
    "Why do hash tables throw the best parties? Everyone gets a bucket instantly, unless two guests have the same hash."
   ],
   [
    "A hash function's favorite saying is, same key, same bucket, every time."
   ],
   [
    "Why can't our HashMap store a null key? It throws a NullPointerException before the first handshake."
   ],
   [
    "The key and the value are inseparable. Remove one and the whole entry is gone."
   ],
   [
    "What did the key say to the hash function? Please be consistent."
   ],
   [
    "Why did put on an existing key feel like redecorating? It replaced the old value in place."
   ],
   [
    "Why are sets so lean? A set is a map whose values never matter."
   ]
  ],
  "StackQueue": [
   [
    "Why was the stack so polite? It always lets the last one in leave first."
   ],
   [
    "Why was the queue so fair? First in, first out, no cutting."
   ],
   [
    "Why did the stack overflow? Nobody told it where the top was."
   ],
   [
    "Why did the queue reach the end of the array and keep going? Modular arithmetic."
   ],
   [
    "Pushing past capacity? The deque quietly expands behind the scenes."
   ],
   [
    "Why is the queue relaxed about resizing? It copies everything in order, starting from the front."
   ],
   [
    "The stack asked the queue for advice. The queue said, wait your turn. The stack said, I go first."
   ]
  ],
  "Heap": [
   [
    "Why is the min-heap so humble? It always puts the smallest one on top."
   ],
   [
    "A new element in a heap starts at the bottom and works its way up. Very relatable."
   ],
   [
    "Insert is O(log n) because the new guy only climbs one branch."
   ],
   [
    "Heapify walked in and said, I can sort out this whole family in linear time."
   ],
   [
    "Why does sifting down compare both children? It swaps with the smaller one so the heap stays valid."
   ],
   [
    "Why did two equal elements not fight? Ties do not break the heap property."
   ],
   [
    "Null elements are not allowed. The heap needs something to compare."
   ]
  ]
 }
};
