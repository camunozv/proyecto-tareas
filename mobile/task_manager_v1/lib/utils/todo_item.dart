import "package:flutter/material.dart";

class TodoList extends StatelessWidget {
  const TodoList({super.key, 
  required this.taskName,
  required this.taskDescription,
  required this.taskState,
  this.onChanged});

  final String taskName;
  final bool taskState;
  final String taskDescription;
  final Function(bool?)? onChanged;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 10, left: 10, right: 10, bottom: 10),
      child: Container(
        decoration: BoxDecoration(
          color: Colors.deepPurple,
          borderRadius: BorderRadius.circular(5),
        ),

        child: Row(
          children: [
            Checkbox(value: taskState, onChanged: onChanged),
            Text(
              taskName,
              style: const TextStyle(color: Colors.white, fontSize: 18),
            ),
            Text(
              taskDescription,
              style: const TextStyle(color: Colors.white, fontSize: 18),
            ),
          ],
          
        ),
      ),
    );
    ;
  }
}
