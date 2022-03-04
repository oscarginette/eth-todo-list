pragma solidity ^0.5.0;

contract TodoList {
    // Keep track of the numbers of todos
    // State variables similar to class variables
    uint public taskCount = 0;


    struct Task {
        //uint cant be negative
        uint id;
        string content;
        bool completed;
    }
}