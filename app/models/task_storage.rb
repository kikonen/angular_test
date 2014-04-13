class TaskStorage
  include Singleton

  def initialize
    @tasks = {}
    @storage_file = File.join(Rails.root, "tmp/tasks.yml")
    generate_demo
  end

  def all
    load
    flatten
  end

  def save(task)
    load
    @tasks[task.id.to_i] = task
  end

  def find(id)
    load
    @tasks[id.to_i]
  end

  private

  def flatten
    data = @tasks
      .values
      .sort {|a, b| a.id <=> b.id }
  end

  def load
    if File.exists?(@storage_file)
      tasks = YAML.load_file(@storage_file)
      @tasks = Hash[tasks.map {|t| [t.id, t]}]
    end
  end

  def save
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
    save
  end
end
