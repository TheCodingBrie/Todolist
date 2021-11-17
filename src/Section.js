import Task from "./Task.js"


function Section ({section, tasks}) {
    return (
        <div className="section">
            {tasks.map((task) => {
                if (task.state !== section){
                     return null;
                }
                return (
                    <Task key={task.id} task={task} />
                )
        })}
        </div>
    );
}

export default Section ;