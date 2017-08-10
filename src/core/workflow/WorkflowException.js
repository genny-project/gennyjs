/* This class represents a workflow exception */
class WorkflowException {
  constructor( message ) {
    this.name = 'WorkflowException';
    this.message = message;
  }
}

export default WorkflowException;
