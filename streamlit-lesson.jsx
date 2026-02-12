import { useState, useEffect } from "react";

const lessons = [
  {
    id: 0,
    title: "Welcome & Setup",
    emoji: "🚀",
    duration: "5 min",
    concept: `Before we write any Streamlit code, let's make sure everything is ready. Streamlit turns Python scripts into interactive web apps — no HTML, CSS, or JS needed.`,
    code: `# In your VS Code terminal, run:
pip install streamlit

# Verify it worked:
streamlit hello

# This opens a demo app in your browser!
# Press Ctrl+C to stop it when you're done exploring.`,
    challenge: `Create a new file called "app.py" in VS Code. We'll use this for the entire lesson. Add this starter code and run it with: streamlit run app.py`,
    challengeCode: `import streamlit as st

st.title("My CS 180 Streamlit App")
st.write("Hello, world! I'm learning Streamlit.")`,
    tip: `Every time you save app.py, Streamlit auto-reloads in the browser. Click "Always rerun" in the top-right for seamless updates.`,
  },
  {
    id: 1,
    title: "Text & Display Elements",
    emoji: "📝",
    duration: "8 min",
    concept: `Streamlit has several ways to display text and content. Each function serves a different purpose — from big titles to formatted markdown to math equations.`,
    code: `import streamlit as st

# Headings hierarchy
st.title("Main Title")        # Biggest
st.header("Section Header")   # Medium
st.subheader("Subsection")    # Smaller

# Text display
st.write("st.write() is the Swiss Army knife — it handles strings, DataFrames, charts, and more.")
st.markdown("Supports **bold**, *italics*, and even \`code\`")
st.caption("This is small caption text — great for footnotes.")

# Special displays
st.code("print('syntax highlighted!')", language="python")
st.latex(r"E = mc^2")

# Status messages
st.success("This is a success message!")
st.warning("This is a warning!")
st.error("This is an error!")
st.info("This is informational.")`,
    challenge: `Build a personal profile page using at least 5 different text/display elements. Include your name as a title, your major, a fun fact with markdown formatting, and at least one status message.`,
    challengeCode: `import streamlit as st

st.title("👋 Hi, I'm [Your Name]")
st.header("CS 180 Student")
st.markdown("I'm studying **Computer Science** and I love building things.")
st.caption("Built with Streamlit")
st.info("Fun fact: I've written over 10,000 lines of Python!")
st.divider()
st.write("This page was created as part of my Streamlit deep dive.")`,
    tip: `st.write() auto-detects types — pass it a dict, list, DataFrame, or even a Matplotlib figure and it renders appropriately. It's the most versatile function.`,
  },
  {
    id: 2,
    title: "Input Widgets",
    emoji: "🎛️",
    duration: "10 min",
    concept: `Widgets are how users interact with your app. Every widget returns a value that you can use in your Python logic. This is what makes Streamlit powerful — reactivity with zero frontend code.`,
    code: `import streamlit as st

# Text inputs
name = st.text_input("What's your name?")
bio = st.text_area("Tell me about yourself")

# Numeric
age = st.number_input("Age", min_value=0, max_value=120, value=20)
rating = st.slider("Rate this lesson", 0, 10, 5)

# Selection
color = st.selectbox("Favorite color", ["Red", "Blue", "Green", "Purple"])
hobbies = st.multiselect("Hobbies", ["Coding", "Gaming", "Reading", "Sports", "Music"])

# Boolean
agree = st.checkbox("I agree to the terms")
subscribe = st.toggle("Enable notifications")

# Date/Time
date = st.date_input("Pick a date")

# Using the values
if name:
    st.write(f"Hello, {name}! You are {age} years old.")
    st.write(f"You like: {', '.join(hobbies) if hobbies else 'nothing yet'}")`,
    challenge: `Build a "Student Survey" that asks for: name (text_input), graduation year (number_input), favorite programming language (selectbox with 5+ options), skills they know (multiselect), and a confidence slider 1–10. Display a summary of their answers below the form.`,
    challengeCode: `import streamlit as st

st.title("🎓 Student Survey")

name = st.text_input("Your name")
grad_year = st.number_input("Graduation year", 2024, 2030, 2026)
fav_lang = st.selectbox("Favorite language", ["Python", "JavaScript", "Java", "C++", "Rust", "Go"])
skills = st.multiselect("Skills you know", ["Git", "SQL", "APIs", "Machine Learning", "Web Dev", "Docker"])
confidence = st.slider("Coding confidence", 1, 10, 5)

st.divider()
if name:
    st.subheader("📋 Survey Results")
    st.write(f"**{name}** graduates in {grad_year}")
    st.write(f"Loves **{fav_lang}** | Confidence: {'🟢' * confidence}{'⚪' * (10 - confidence)}")
    if skills:
        st.write(f"Skills: {', '.join(skills)}")`,
    tip: `Every widget needs a unique label (first argument). If you need two widgets with the same label, use the 'key' parameter: st.text_input("Name", key="name1")`,
  },
  {
    id: 3,
    title: "Layout & Columns",
    emoji: "📐",
    duration: "8 min",
    concept: `By default, Streamlit stacks everything vertically. But you can create sophisticated layouts with columns, sidebars, tabs, containers, and expanders.`,
    code: `import streamlit as st

# --- Sidebar ---
st.sidebar.title("⚙️ Settings")
theme = st.sidebar.radio("Theme", ["Light", "Dark"])
font_size = st.sidebar.slider("Font size", 10, 24, 16)

# --- Columns ---
col1, col2, col3 = st.columns(3)
with col1:
    st.metric("Temperature", "72°F", "+2°F")
with col2:
    st.metric("Humidity", "45%", "-5%")
with col3:
    st.metric("Wind", "12 mph", "+3 mph")

# --- Tabs ---
tab1, tab2 = st.tabs(["📊 Data", "📈 Charts"])
with tab1:
    st.write("Data content goes here")
with tab2:
    st.write("Charts go here")

# --- Expander ---
with st.expander("Click to see more details"):
    st.write("Hidden content that can be expanded!")
    st.code("secret_code = 42")

# --- Container ---
with st.container(border=True):
    st.write("This content has a visible border around it.")`,
    challenge: `Create a "Dashboard Layout" with: a sidebar with at least 2 controls, a row of 3 metric columns at the top, 2 tabs for different content sections, and at least one expander with hidden details.`,
    challengeCode: `import streamlit as st

st.sidebar.title("Dashboard Controls")
page = st.sidebar.radio("View", ["Overview", "Details"])
show_metrics = st.sidebar.checkbox("Show metrics", True)

st.title("📊 My Dashboard")

if show_metrics:
    c1, c2, c3 = st.columns(3)
    c1.metric("Users", "1,234", "+12%")
    c2.metric("Revenue", "$5,678", "+8%")
    c3.metric("Tasks", "42", "-3")

tab1, tab2 = st.tabs(["Summary", "Analysis"])
with tab1:
    st.write(f"You're viewing the **{page}** page.")
    with st.expander("More info"):
        st.write("This dashboard was built with Streamlit!")
with tab2:
    st.write("Analysis content would go here.")`,
    tip: `Columns can have different widths: st.columns([2, 1, 1]) makes the first column twice as wide. The sidebar persists across reruns and is great for global controls.`,
  },
  {
    id: 4,
    title: "DataFrames & Charts",
    emoji: "📊",
    duration: "10 min",
    concept: `Streamlit has first-class support for data. You can display DataFrames interactively (sortable, searchable!) and create charts with just one line of code. It also supports Matplotlib, Plotly, Altair, and more.`,
    code: `import streamlit as st
import pandas as pd
import numpy as np

# Create sample data
df = pd.DataFrame({
    "Name": ["Alice", "Bob", "Charlie", "Diana", "Eve"],
    "Score": [92, 85, 78, 95, 88],
    "Grade": ["A", "B", "C+", "A", "B+"]
})

# Display DataFrame — interactive by default!
st.subheader("Student Grades")
st.dataframe(df, use_container_width=True)

# Editable DataFrame
edited_df = st.data_editor(df, num_rows="dynamic")

# Quick charts
chart_data = pd.DataFrame(
    np.random.randn(20, 3),
    columns=["Model A", "Model B", "Model C"]
)

st.subheader("Line Chart")
st.line_chart(chart_data)

st.subheader("Bar Chart")
st.bar_chart(chart_data)

st.subheader("Area Chart")
st.area_chart(chart_data)

# Scatter chart
scatter_data = pd.DataFrame({
    "x": np.random.randn(100),
    "y": np.random.randn(100),
    "size": np.random.randint(10, 100, 100)
})
st.scatter_chart(scatter_data, x="x", y="y", size="size")`,
    challenge: `Create a grade tracker: build a DataFrame of 5+ students with columns for Name, Midterm, Final, and a computed Average. Display it with st.dataframe, show a bar chart of averages, and use st.metric to show the class average.`,
    challengeCode: `import streamlit as st
import pandas as pd

st.title("📚 Grade Tracker")

data = {
    "Student": ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"],
    "Midterm": [88, 75, 92, 68, 95, 83],
    "Final": [91, 80, 88, 72, 97, 79],
}
df = pd.DataFrame(data)
df["Average"] = (df["Midterm"] + df["Final"]) / 2

st.dataframe(df, use_container_width=True)

class_avg = df["Average"].mean()
top_student = df.loc[df["Average"].idxmax(), "Student"]

c1, c2 = st.columns(2)
c1.metric("Class Average", f"{class_avg:.1f}")
c2.metric("Top Student", top_student)

st.bar_chart(df.set_index("Student")["Average"])`,
    tip: `st.dataframe() supports sorting by clicking column headers, searching, and resizing. st.data_editor() lets users edit cells directly — the edited DataFrame is returned so you can use the new values.`,
  },
  {
    id: 5,
    title: "Session State & Buttons",
    emoji: "🧠",
    duration: "10 min",
    concept: `Here's the KEY insight: Streamlit reruns your ENTIRE script from top to bottom on every interaction. That means variables reset! Session state lets you persist values across reruns. This is critical for counters, forms, multi-step workflows, and any app with memory.`,
    code: `import streamlit as st

# --- THE PROBLEM ---
# This counter will NEVER work without session state:
# count = 0
# if st.button("Add 1"):
#     count += 1  # count resets to 0 on every rerun!
# st.write(count)  # always shows 0 or 1

# --- THE SOLUTION: Session State ---
# Initialize state (only runs once)
if "count" not in st.session_state:
    st.session_state.count = 0

if "messages" not in st.session_state:
    st.session_state.messages = []

# Buttons + session state
col1, col2, col3 = st.columns(3)
with col1:
    if st.button("➕ Add"):
        st.session_state.count += 1
with col2:
    if st.button("➖ Subtract"):
        st.session_state.count -= 1
with col3:
    if st.button("🔄 Reset"):
        st.session_state.count = 0

st.subheader(f"Count: {st.session_state.count}")

# Message log example
msg = st.text_input("Type a message")
if st.button("Send"):
    if msg:
        st.session_state.messages.append(msg)

for m in st.session_state.messages:
    st.write(f"💬 {m}")`,
    challenge: `Build a simple To-Do app: users can type a task and add it to a list (stored in session_state). Each task should have a checkbox to mark it complete. Show a count of total vs completed tasks.`,
    challengeCode: `import streamlit as st

st.title("✅ To-Do App")

if "todos" not in st.session_state:
    st.session_state.todos = []

new_task = st.text_input("New task")
if st.button("Add Task") and new_task:
    st.session_state.todos.append({"task": new_task, "done": False})

for i, todo in enumerate(st.session_state.todos):
    checked = st.checkbox(todo["task"], value=todo["done"], key=f"todo_{i}")
    st.session_state.todos[i]["done"] = checked

total = len(st.session_state.todos)
done = sum(1 for t in st.session_state.todos if t["done"])
if total > 0:
    st.progress(done / total)
    st.caption(f"{done}/{total} tasks completed")`,
    tip: `The rerun model is the #1 thing that trips people up. Think of it this way: your script is a function that runs fresh every time, but st.session_state is a persistent dict that survives across runs. Always initialize with the "if key not in st.session_state" pattern.`,
  },
  {
    id: 6,
    title: "Forms & File Upload",
    emoji: "📤",
    duration: "5 min",
    concept: `Forms let you batch multiple inputs and submit them all at once (instead of rerunning on every keystroke). File uploaders let users upload CSVs, images, and more. Together, they're essential for data apps.`,
    code: `import streamlit as st
import pandas as pd

# --- Forms: batch inputs together ---
with st.form("my_form"):
    st.write("Fill out all fields, then submit:")
    name = st.text_input("Name")
    email = st.text_input("Email")
    role = st.selectbox("Role", ["Student", "TA", "Professor"])
    submitted = st.form_submit_button("Submit")

if submitted:
    st.success(f"Welcome, {name} ({role})!")

# --- File Uploader ---
st.divider()
uploaded_file = st.file_uploader("Upload a CSV", type=["csv"])

if uploaded_file is not None:
    df = pd.read_csv(uploaded_file)
    st.write(f"Loaded {len(df)} rows and {len(df.columns)} columns")
    st.dataframe(df)

# Image uploader
image = st.file_uploader("Upload an image", type=["png", "jpg", "jpeg"])
if image:
    st.image(image, caption="Your upload", use_container_width=True)`,
    challenge: `Build a "Data Explorer" that lets users upload a CSV file. Once uploaded, show: the first 5 rows, the shape (rows × columns), column names in an expander, and a selectbox to pick a numeric column to chart.`,
    challengeCode: `import streamlit as st
import pandas as pd

st.title("🔍 CSV Data Explorer")

uploaded = st.file_uploader("Upload a CSV file", type=["csv"])

if uploaded:
    df = pd.read_csv(uploaded)
    st.write(f"**Shape:** {df.shape[0]} rows × {df.shape[1]} columns")
    st.dataframe(df.head())
    
    with st.expander("Column Details"):
        for col in df.columns:
            st.write(f"- **{col}** ({df[col].dtype})")
    
    numeric_cols = df.select_dtypes(include="number").columns.tolist()
    if numeric_cols:
        chosen = st.selectbox("Chart a column", numeric_cols)
        st.bar_chart(df[chosen])
    else:
        st.warning("No numeric columns found.")
else:
    st.info("Upload a CSV to get started!")`,
    tip: `Without a form, Streamlit reruns on every keystroke in a text_input. Forms prevent this by holding all reruns until the submit button is clicked. Use forms when you have multiple related inputs.`,
  },
  {
    id: 7,
    title: "Caching & Performance",
    emoji: "⚡",
    duration: "5 min",
    concept: `Since Streamlit reruns the full script on every interaction, expensive operations (API calls, loading data, ML models) would run repeatedly. Caching decorators solve this — they memoize results so functions only re-execute when inputs change.`,
    code: `import streamlit as st
import pandas as pd
import time

# --- @st.cache_data: for DATA (DataFrames, strings, numbers) ---
@st.cache_data
def load_data(url):
    """This only runs once, then results are cached!"""
    time.sleep(2)  # Simulate slow load
    df = pd.DataFrame({
        "x": range(100),
        "y": [i**2 for i in range(100)]
    })
    return df

# --- @st.cache_resource: for GLOBAL RESOURCES (DB connections, ML models) ---
@st.cache_resource
def load_model():
    """Cache things that shouldn't be duplicated."""
    time.sleep(3)  # Simulate loading a model
    return {"model": "loaded", "version": "1.0"}

st.title("⚡ Caching Demo")

# First run: takes 2 seconds. Every run after: instant!
data = load_data("fake_url")
st.line_chart(data.set_index("x"))

model = load_model()
st.write(f"Model status: {model['version']}")

# Clear cache with a button
if st.button("Clear Cache"):
    st.cache_data.clear()
    st.rerun()`,
    challenge: `Create an app with a cached function that generates a random DataFrame (use a seed parameter). Add a number_input for the seed — when the seed changes, new data generates. When it stays the same, results are instant. Add st.spinner for loading feedback.`,
    challengeCode: `import streamlit as st
import pandas as pd
import numpy as np
import time

@st.cache_data
def generate_data(seed, n_rows):
    time.sleep(2)  # Simulate expensive computation
    np.random.seed(seed)
    return pd.DataFrame({
        "A": np.random.randn(n_rows),
        "B": np.random.randn(n_rows),
        "C": np.random.rand(n_rows) * 100
    })

st.title("⚡ Cached Data Generator")

seed = st.number_input("Random seed", 0, 100, 42)
n_rows = st.slider("Number of rows", 10, 1000, 100)

with st.spinner("Generating data..."):
    df = generate_data(seed, n_rows)

st.success("Data loaded (cached if same params)!")
st.dataframe(df.head())
st.line_chart(df[["A", "B"]])`,
    tip: `Use @st.cache_data for anything serializable (DataFrames, lists, dicts, strings). Use @st.cache_resource for non-serializable objects like database connections, ML models, or API clients. You can set TTL (time to live): @st.cache_data(ttl=600) clears after 10 minutes.`,
  },
  {
    id: 8,
    title: "Final Project: Put It All Together",
    emoji: "🏆",
    duration: "Remaining time",
    concept: `Time to combine everything you've learned into one complete app! This final project uses text display, widgets, layout, DataFrames, charts, session state, and caching. Use it as a template you can adapt for CS 180 assignments.`,
    code: `import streamlit as st
import pandas as pd
import numpy as np

# --- Page Config (must be first Streamlit command) ---
st.set_page_config(page_title="CS 180 Dashboard", page_icon="🎓", layout="wide")

# --- Caching ---
@st.cache_data
def generate_student_data(n):
    np.random.seed(42)
    names = [f"Student_{i}" for i in range(1, n + 1)]
    return pd.DataFrame({
        "Name": names,
        "Midterm": np.random.randint(50, 100, n),
        "Final": np.random.randint(50, 100, n),
        "Participation": np.random.randint(60, 100, n),
    })

# --- Sidebar ---
st.sidebar.title("⚙️ Controls")
num_students = st.sidebar.slider("Number of students", 5, 50, 20)
weight_mid = st.sidebar.slider("Midterm weight %", 0, 100, 40)
weight_final = 100 - weight_mid
st.sidebar.caption(f"Final weight: {weight_final}%")

# --- Session State ---
if "announcements" not in st.session_state:
    st.session_state.announcements = []

# --- Main Content ---
st.title("🎓 CS 180 Class Dashboard")

df = generate_student_data(num_students)
df["Weighted"] = (df["Midterm"] * weight_mid + df["Final"] * weight_final) / 100

# Metrics row
c1, c2, c3, c4 = st.columns(4)
c1.metric("Students", num_students)
c2.metric("Class Average", f"{df['Weighted'].mean():.1f}")
c3.metric("Highest", f"{df['Weighted'].max():.1f}")
c4.metric("Lowest", f"{df['Weighted'].min():.1f}")

# Tabs
tab1, tab2, tab3 = st.tabs(["📋 Grades", "📊 Analytics", "📢 Announcements"])

with tab1:
    st.dataframe(df.sort_values("Weighted", ascending=False), use_container_width=True)

with tab2:
    st.subheader("Score Distribution")
    st.bar_chart(df.set_index("Name")["Weighted"])
    col1, col2 = st.columns(2)
    with col1:
        st.subheader("Midterm vs Final")
        st.scatter_chart(df, x="Midterm", y="Final")
    with col2:
        st.subheader("Participation Scores")
        st.area_chart(df.set_index("Name")["Participation"])

with tab3:
    with st.form("announcement_form"):
        msg = st.text_area("New announcement")
        if st.form_submit_button("Post"):
            if msg:
                st.session_state.announcements.insert(0, msg)
    for a in st.session_state.announcements:
        with st.container(border=True):
            st.write(a)`,
    challenge: `Customize this dashboard for YOUR CS 180 class! Ideas: add a file uploader for real grade data, add a search/filter for student names, add a "grade distribution" histogram, or add a theme toggle in the sidebar.`,
    challengeCode: `# No specific solution — this is your creative project!
# Start with the code on the left and make it your own.
# 
# Stretch goals:
# 1. Add st.file_uploader to load real CSV data
# 2. Add a text_input to search/filter students
# 3. Add a download button: st.download_button("Download CSV", df.to_csv(), "grades.csv")
# 4. Add st.set_page_config(layout="wide") for more space
# 5. Deploy it! Run: streamlit run app.py --server.port 8501`,
    tip: `st.set_page_config() MUST be the first Streamlit command in your script. For deployment, check out Streamlit Community Cloud (share.streamlit.io) — free hosting for public apps, perfect for class projects.`,
  },
];

const CodeBlock = ({ code, label }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div style={{ position: "relative", marginBottom: "16px" }}>
      {label && (
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          color: "#8b949e",
          marginBottom: "6px",
        }}>{label}</div>
      )}
      <div style={{
        background: "#0d1117",
        borderRadius: "10px",
        border: "1px solid #21262d",
        overflow: "hidden",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 14px",
          borderBottom: "1px solid #21262d",
          background: "#161b22",
        }}>
          <div style={{ display: "flex", gap: "6px" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f85149", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#d29922", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#3fb950", display: "inline-block" }} />
          </div>
          <button onClick={handleCopy} style={{
            background: copied ? "#238636" : "#21262d",
            border: "1px solid #30363d",
            color: "#c9d1d9",
            padding: "3px 10px",
            borderRadius: "6px",
            fontSize: "11px",
            cursor: "pointer",
            transition: "all 0.2s",
            fontFamily: "'DM Mono', monospace",
          }}>
            {copied ? "✓ Copied" : "Copy"}
          </button>
        </div>
        <pre style={{
          margin: 0,
          padding: "16px",
          overflowX: "auto",
          fontSize: "13px",
          lineHeight: "1.65",
          fontFamily: "'DM Mono', 'Fira Code', monospace",
          color: "#c9d1d9",
        }}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

const ProgressDots = ({ total, current }) => (
  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} style={{
        width: i === current ? "28px" : "8px",
        height: "8px",
        borderRadius: "4px",
        background: i < current ? "#3fb950" : i === current ? "#58a6ff" : "#21262d",
        transition: "all 0.4s ease",
      }} />
    ))}
  </div>
);

export default function StreamlitLesson() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [showChallenge, setShowChallenge] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const lesson = lessons[currentLesson];
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  const markComplete = () => {
    setCompletedLessons((prev) => new Set([...prev, currentLesson]));
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setShowChallenge(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#010409",
      color: "#c9d1d9",
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />

      {/* Top Bar */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(1,4,9,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #21262d",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: "22px" }}>🔴</span>
          <span style={{ fontWeight: 700, fontSize: "15px", letterSpacing: "-0.3px" }}>
            Streamlit Deep Dive
          </span>
          <span style={{
            background: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "12px",
            padding: "2px 10px",
            fontSize: "11px",
            color: "#8b949e",
            fontFamily: "'DM Mono', monospace",
          }}>
            CS 180
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <ProgressDots total={lessons.length} current={currentLesson} />
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "13px",
            color: "#58a6ff",
            background: "#0d1117",
            padding: "4px 12px",
            borderRadius: "8px",
            border: "1px solid #21262d",
          }}>
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: "#3fb950",
          }}>
            {completedLessons.size}/{lessons.length} done
          </span>
        </div>
      </div>

      <div style={{ display: "flex", maxWidth: "1400px", margin: "0 auto" }}>
        {/* Sidebar Nav */}
        <nav style={{
          width: "260px",
          minWidth: "260px",
          borderRight: "1px solid #21262d",
          padding: "20px 0",
          height: "calc(100vh - 53px)",
          position: "sticky",
          top: "53px",
          overflowY: "auto",
        }}>
          {lessons.map((l, i) => (
            <button
              key={l.id}
              onClick={() => { setCurrentLesson(i); setShowChallenge(false); }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                padding: "10px 20px",
                background: i === currentLesson ? "#0d1117" : "transparent",
                border: "none",
                borderLeft: i === currentLesson ? "3px solid #58a6ff" : "3px solid transparent",
                color: i === currentLesson ? "#f0f6fc" : completedLessons.has(i) ? "#3fb950" : "#8b949e",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "13px",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s",
              }}
            >
              <span style={{ fontSize: "16px", width: "24px", textAlign: "center" }}>
                {completedLessons.has(i) ? "✅" : l.emoji}
              </span>
              <div>
                <div style={{ fontWeight: i === currentLesson ? 600 : 400 }}>{l.title}</div>
                <div style={{ fontSize: "11px", opacity: 0.6, fontFamily: "'DM Mono', monospace" }}>{l.duration}</div>
              </div>
            </button>
          ))}
        </nav>

        {/* Main Content */}
        <main style={{
          flex: 1,
          padding: "40px 48px",
          maxWidth: "900px",
          overflowY: "auto",
        }}>
          {/* Lesson Header */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#58a6ff",
              fontFamily: "'DM Mono', monospace",
              marginBottom: "8px",
            }}>
              Lesson {currentLesson + 1} of {lessons.length} · {lesson.duration}
            </div>
            <h1 style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#f0f6fc",
              margin: "0 0 16px 0",
              letterSpacing: "-0.5px",
            }}>
              {lesson.emoji} {lesson.title}
            </h1>
            <p style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#8b949e",
              margin: 0,
              maxWidth: "680px",
            }}>
              {lesson.concept}
            </p>
          </div>

          {/* Code Section */}
          <CodeBlock code={lesson.code} label="📖 Learn — read & copy into VS Code" />

          {/* Pro Tip */}
          <div style={{
            background: "linear-gradient(135deg, #0d1117 0%, #0c1524 100%)",
            border: "1px solid #1f3a5f",
            borderRadius: "10px",
            padding: "16px 20px",
            marginBottom: "24px",
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
          }}>
            <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>💡</span>
            <div style={{ fontSize: "13px", lineHeight: "1.6", color: "#79c0ff" }}>
              <strong style={{ color: "#58a6ff" }}>Pro Tip:</strong> {lesson.tip}
            </div>
          </div>

          {/* Challenge Toggle */}
          <button
            onClick={() => setShowChallenge(!showChallenge)}
            style={{
              width: "100%",
              padding: "16px 20px",
              background: showChallenge ? "#161b22" : "linear-gradient(135deg, #238636 0%, #2ea043 100%)",
              border: showChallenge ? "1px solid #30363d" : "none",
              borderRadius: "10px",
              color: "#f0f6fc",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
              fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.3s",
            }}
          >
            <span>🏋️ Code Challenge</span>
            <span style={{ fontSize: "13px", opacity: 0.8 }}>
              {showChallenge ? "▲ Hide" : "▼ Show Challenge"}
            </span>
          </button>

          {showChallenge && (
            <div style={{
              animation: "fadeIn 0.3s ease",
              marginBottom: "24px",
            }}>
              <div style={{
                background: "#0d1117",
                border: "1px solid #238636",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "16px",
              }}>
                <div style={{
                  fontSize: "14px",
                  lineHeight: "1.7",
                  color: "#c9d1d9",
                  marginBottom: "16px",
                }}>
                  {lesson.challenge}
                </div>
              </div>
              <CodeBlock code={lesson.challengeCode} label="💡 Hint / solution" />
            </div>
          )}

          {/* Navigation */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: "1px solid #21262d",
          }}>
            <button
              onClick={() => { setCurrentLesson(Math.max(0, currentLesson - 1)); setShowChallenge(false); }}
              disabled={currentLesson === 0}
              style={{
                padding: "10px 20px",
                background: "#161b22",
                border: "1px solid #30363d",
                borderRadius: "8px",
                color: currentLesson === 0 ? "#484f58" : "#c9d1d9",
                cursor: currentLesson === 0 ? "not-allowed" : "pointer",
                fontSize: "13px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ← Previous
            </button>
            <button
              onClick={markComplete}
              style={{
                padding: "10px 24px",
                background: completedLessons.has(currentLesson) ? "#161b22" : "linear-gradient(135deg, #238636 0%, #2ea043 100%)",
                border: completedLessons.has(currentLesson) ? "1px solid #30363d" : "none",
                borderRadius: "8px",
                color: "#f0f6fc",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {completedLessons.has(currentLesson)
                ? currentLesson === lessons.length - 1 ? "🎉 Complete!" : "Next →"
                : "Mark Complete & Continue →"}
            </button>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #30363d; border-radius: 3px; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
