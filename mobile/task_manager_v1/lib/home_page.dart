import "package:flutter/material.dart";
import "package:task_manager_v1/utils/todo_item.dart";

// Every class should have a Build method
class HomePage extends StatefulWidget {
  HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List items = [
    ["Clean the room", "fale description 1", false],
    ["Learn flutter", "fale description 2", false],
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.deepPurple.shade300,
      appBar: AppBar(
        title: Text("Hello world"),
        backgroundColor: Colors.deepPurpleAccent,
        foregroundColor: Colors.black,
        centerTitle: true,
      ),

      body: ListView.builder(
        itemCount: items.length,
        itemBuilder: (BuildContext context, index) {
          return TodoList(
            taskName: items[index][0],
            taskDescription: items[index][1],
            taskState: items[index][2],
          );
        },
      ),
    );
  }
}
