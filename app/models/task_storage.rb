class TaskStorage
  include Singleton

  def initialize
    @storage_file = File.join(Rails.root, "tmp/tasks.yml")
    load_tasks
    if @tasks.empty?
      generate_demo
      load_tasks
    end
  end

  def next_id
    @tasks.keys.max + 1
  end

  def all
    flatten
  end

  def save(task)
    if task.id.blank?
      task.values.id = next_id
    end
    @tasks[task.id.to_i] = task
    save_tasks
    load_tasks
  end

  def find(id)
    return nil if id.blank?
    @tasks[id.to_i]
  end

  private

  def flatten
    data = @tasks
      .values
      .sort {|a, b| a.id <=> b.id }
  end

  def load_tasks
    if File.exists?(@storage_file)
      tasks = YAML.load_file(@storage_file)
      @tasks = Hash[tasks.map {|t| [t.id, t]}]
    else
      @tasks = {}
    end
  end

  def save_tasks
    File.open(@storage_file, 'w') do |f|
      f.write flatten.to_yaml
    end
  end

  def generate_demo
    tasks = [
      Task.new(
        id: 1,
        name: 'Buy milk',
        message: 'From grogers',
        done: false),
      Task.new(
        id: 2,
        name: 'Buy cheese',
        message: 'Cheese shelf',
        done: true),
    ]

    @tasks = Hash[tasks.map {|t| [t.id, t]}]
    save_tasks
  end
end
