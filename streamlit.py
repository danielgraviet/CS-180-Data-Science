import streamlit as st
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
            st.write(a)