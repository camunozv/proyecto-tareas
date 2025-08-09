import "package:flutter/material.dart";
import "package:task_manager_v1/utils/todo_item.dart";
import "package:http/http.dart" as http;
import "dart:convert";

// Every class should have a Build method
class HomePage extends StatefulWidget {
  HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final _controller = TextEditingController();

  List items = [
    ["Clean the room", false],
    ["Learn flutter", false],
  ];

  void checkBoxChanged(int index) {
    setState(() {
      items[index][1] = !items[index][1];
    });
  }

  void addNewTask() {
    setState(() {
      items.add([_controller.text, false]);
      _controller.clear();
    });
  }

  void deleteTask(int index) {
    setState(() {
      items.removeAt(index);
    });
  }


  fetchTasks() async {
    var url = Uri.parse("https://proyecto-tareas-dey3.onrender.com/proyecto-tareas/task");
    var response = await http.get(url);

    if (response.statusCode == 200) {
      // do something
      print("Data fetched : ${response.body}");
    } else {
      print("No data found");
    }

  }

  Future<void> createTasks() async {
    var url = Uri.parse("https://proyecto-tareas-dey3.onrender.com/proyecto-tareas/task");
    var response = await http.post(url, body: {'taskName : "nombre", taskDescription: ""'});

    if (response.statusCode == 200) {
      // do something 
      print("Data fetched : ${response.body}");
    } else {
      print("No data found");
    }

  }
  

  

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.deepPurple.shade300,
      appBar: AppBar(
        title: Text("My ToDo APP"),
        actions: [IconButton(icon: Icon(Icons.refresh), onPressed: fetchTasks)],
        backgroundColor: Colors.deepPurpleAccent,
        foregroundColor: Colors.black,
        centerTitle: true,
      ),

      body: ListView.builder(
        itemCount: items.length,
        itemBuilder: (BuildContext context, index) {
          return TodoList(
            taskName: items[index][0],
            taskState: items[index][1],
            onChanged: (value) => checkBoxChanged(index),
            deleteFunction: (context) => deleteTask(index),
          );
        },
      ),

      floatingActionButton: Row(
        children: [
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: TextField(
                controller: _controller,
                decoration: InputDecoration(
                  hintText: "Escriba sus tareas aquí",
                  filled: true,
                  fillColor: Colors.deepPurple.shade200,
                  enabledBorder: OutlineInputBorder(
                    borderSide: const BorderSide(color: Colors.deepPurple),
                    borderRadius: BorderRadius.circular(15),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderSide: const BorderSide(color: Colors.deepPurple),
                    borderRadius: BorderRadius.circular(15),
                  ),
                ),
              ),
            ),
          ),
          FloatingActionButton(
            onPressed: () => addNewTask(),
            child: Icon(Icons.add),
          ),
        ],
      ),
    );
  }
}
