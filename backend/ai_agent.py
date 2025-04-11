from dotenv import load_dotenv
import os

load_dotenv()

groq_api_key = os.getenv("GROQ_API_KEY")    
tavily_api_key = os.getenv("TAVILY_API_KEY")
from langchain_groq import ChatGroq
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_core.messages.ai import AIMessage
groq_llm = ChatGroq(model="llama-3.3-70b-versatile")
search_tool = TavilySearchResults(max_result=2)
system_prompt = "act as a finance agent and give me a detailed financial report in proper format based on the message provided"
from langgraph.prebuilt import create_react_agent
agent=create_react_agent(
    model=groq_llm,
    tools=[search_tool],
    state_modifier=system_prompt
)

def get_agent_response(query):
    state={"messages":query}
    response=agent.invoke(state)
    messages=response.get("messages")
    ai_messages=[message.content for message in messages if isinstance(message, AIMessage)]
    return ai_messages[-1]

