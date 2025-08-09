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

  List<dynamic> items = [];

  void checkBoxChanged(int index) {
    setState(() {
      items[index]['status'] = !items[index]['status'];
    });
  }

  Future<void> deleteTask(int index, int id) async {

    var url = Uri.parse(
      "https://proyecto-tareas-rbqt.onrender.com/proyecto-tareas/task/$id",
    );

    var response = await http.delete(url);

    if (response.statusCode == 200) {
      setState(() {
        items.removeAt(index);
      });
    } else {
      print("No task deleted");
    }
  }

  Future<void> fetchTasks() async {
    var url = Uri.parse(
      "https://proyecto-tareas-rbqt.onrender.com/proyecto-tareas/task",
    );

    var response = await http.get(url);

    if (response.statusCode == 200) {
      // do something
      setState(() {
        items = json.decode(response.body);  
        print(items);
      });
      print("Data fetched");
    } else {
      print("No data found");
    }
  }

  // 4. Don't forget to dispose it when done
  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  // Hier müssen wir das Post verwenden
  Future<void> addNewTask() async {
    var url = Uri.parse(
      "https://proyecto-tareas-rbqt.onrender.com/proyecto-tareas/task/",
    );
    String userInput = _controller.text;

    final headers = {'Content-Type': 'application/json'};
    final body = json.encode({'taskName': '$userInput', 'taskText': ''});
    var response = await http.post(url, headers: headers, body: body);

    print(userInput);

    if (response.statusCode == 201) {
      setState(() {
        items.add(json.decode(response.body));
        _controller.clear();
      });
    } else {
      print(response.statusCode);
      print("No data added");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.deepPurple.shade300,
      appBar: AppBar(
        title: Text("My ToDo APP"),
        backgroundColor: Colors.deepPurpleAccent,
        foregroundColor: Colors.black,
        centerTitle: true,
      ),

      body: ListView.builder(
        itemCount: items.length,
        itemBuilder: (BuildContext context, index) {
          return TodoList(
            taskName: items[index]['taskName'],
            taskState: items[index]['status'],
            onChanged: (value) => checkBoxChanged(index),
            deleteFunction: (context) => deleteTask(index, items[index]['id']),
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
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              FloatingActionButton(
                onPressed: () => addNewTask(),
                child: Icon(Icons.add),
              ),
              FloatingActionButton(
                onPressed: () => fetchTasks(),
                child: Icon(Icons.refresh),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
