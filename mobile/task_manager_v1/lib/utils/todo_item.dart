import "package:flutter/material.dart";
import "package:flutter_slidable/flutter_slidable.dart";

class TodoList extends StatelessWidget {
  const TodoList({super.key, 
  required this.taskName,
  required this.taskState,
  required this.onChanged,
  this.deleteFunction});

  final String taskName;
  final bool taskState;
  final Function(bool?)? onChanged;
  final Function(BuildContext)? deleteFunction;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 10, left: 10, right: 10, bottom: 10),
      child: Slidable(
        endActionPane: ActionPane(
          motion: StretchMotion(), 
          children: [
            SlidableAction(
              onPressed: deleteFunction,
              icon: Icons.delete,
              borderRadius: BorderRadius.circular(15),
              )
          ]),
        child: Container(
          decoration: BoxDecoration(
            color: Colors.deepPurple,
            borderRadius: BorderRadius.circular(5),
          ),
        
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Checkbox(value: taskState, onChanged: onChanged),
              Text(
                taskName,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 18,
                  decoration : taskState ? TextDecoration.lineThrough : TextDecoration.none,
                  decorationColor: Colors.white,
                  decorationThickness: 2,
                  ),
              ),
              
            ],
            
          ),
        ),
      ),
    );
    
  }
}
