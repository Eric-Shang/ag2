"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95685],{52198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=n(74848),s=n(28453);const i={title:"Agents in AutoGen",authors:"sonichi",tags:["thoughts","interview notes"]},o=void 0,r={permalink:"/ag2/blog/2024/05/24/Agent",source:"@site/blog/2024-05-24-Agent/index.mdx",title:"Agents in AutoGen",description:"agents",date:"2024-05-24T00:00:00.000Z",formattedDate:"May 24, 2024",tags:[{label:"thoughts",permalink:"/ag2/blog/tags/thoughts"},{label:"interview notes",permalink:"/ag2/blog/tags/interview-notes"}],readingTime:8.945,hasTruncateMarker:!1,authors:[{name:"Chi Wang",title:"Founder of AutoGen & FLAML",url:"https://www.linkedin.com/in/chi-wang-autogen/",imageURL:"https://github.com/sonichi.png",key:"sonichi"}],frontMatter:{title:"Agents in AutoGen",authors:"sonichi",tags:["thoughts","interview notes"]},unlisted:!1,prevItem:{title:"AgentEval: A Developer Tool to Assess Utility of LLM-powered Applications",permalink:"/ag2/blog/2024/06/21/AgentEval"},nextItem:{title:"AutoDefense - Defend against jailbreak attacks with AutoGen",permalink:"/ag2/blog/2024/03/11/AutoDefense/Defending LLMs Against Jailbreak Attacks with AutoDefense"}},l={authorsImageUrls:[void 0]},h=[{value:"What&#39;s an agent?",id:"whats-an-agent",level:2},{value:"What are the pros and cons of multi vs. single agent?",id:"what-are-the-pros-and-cons-of-multi-vs-single-agent",level:2},{value:"Interface",id:"interface",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Benefits of multi-agents",id:"benefits-of-multi-agents",level:3},{value:"Cost of multi-agents",id:"cost-of-multi-agents",level:3},{value:"Watch/read the interviews/articles",id:"watchread-the-interviewsarticles",level:2},{value:"Acknowledgements",id:"acknowledgements",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"agents",src:n(92397).A+"",width:"1024",height:"1024"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"TL;DR"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:"AutoGen agents unify different agent definitions."})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:"When talking about multi vs. single agents, it is beneficial to clarify whether we refer to the interface or the architecture."})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"I often get asked two common questions:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"What's an agent?"}),"\n",(0,a.jsx)(t.li,{children:"What are the pros and cons of multi vs. single agent?"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This blog collects my thoughts from several interviews and recent learnings."}),"\n",(0,a.jsx)(t.h2,{id:"whats-an-agent",children:"What's an agent?"}),"\n",(0,a.jsx)(t.p,{children:"There are many different types of definitions of agents. When building AutoGen, I was looking for\nthe most generic notion that can incorporate all these different types of definitions. And to do that we\nreally need to think about the minimal set of concepts that are needed."}),"\n",(0,a.jsx)(t.p,{children:"In AutoGen, we think about the agent as an entity that can act on behalf of human intent. They can send messages, receive messages, respond to other agents after taking actions and interact with other agents. We think it's a minimal set of capabilities that an agent needs to\nhave underneath. They can have different types of backends to support them to perform\nactions and generate replies. Some of the agents can use AI models to generate replies. Some other agents can use functions\nunderneath to generate tool-based replies and other agents can use human input as a way to reply to\nother agents. And you can also have agents that mix these different types of backends or have more\ncomplex agents that have internal conversations among multiple agents. But on the surface, other\nagents still perceive it as a single entity to communicate to."}),"\n",(0,a.jsx)(t.p,{children:"With this definition, we can incorporate both very simple agents that can solve simple tasks with\na single backend, but also we can have agents that are composed of multiple simpler agents. One can recursively build up more powerful agents. The\nagent concept in AutoGen can cover all these different complexities."}),"\n",(0,a.jsx)(t.h2,{id:"what-are-the-pros-and-cons-of-multi-vs-single-agent",children:"What are the pros and cons of multi vs. single agent?"}),"\n",(0,a.jsx)(t.p,{children:"This question can be asked in a variety of ways."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Why should I use multiple agents instead of a single agent?"}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Why think about multi-agents when we don't have a strong single agent?"}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Does multi-agent increase the complexity, latency and cost?"}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"When should I use multi-agents vs. single agent?"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"When we use the word 'multi-agent' and 'single-agent', I think there\nare at least two different dimensions we need to think about."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Interface. This means, from the user's point of view, do they interact with the system in a single\ninteraction point or do they see explicitly multiple agents working and need to interact with multiple of\nthem?"}),"\n",(0,a.jsx)(t.li,{children:"Architecture. Are there multiple agents underneath running at the backend?"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"A particular system can have a single-agent interface and a multi-agent architecture, but the users don't need to know that."}),"\n",(0,a.jsx)(t.h3,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.p,{children:"A single interaction point can make many applications' user experience\nmore straightforward. There are also cases where it is not the best solution. For example, when the application is about having multiple\nagents debate about a subject, the users need to see what each agent says.\nIn that case, it's beneficial for them to actually see the multi-agents' behavior. Another example is the social\nsimulation experiment: People also want to see the behavior of each agent."}),"\n",(0,a.jsx)(t.h3,{id:"architecture",children:"Architecture"}),"\n",(0,a.jsx)(t.p,{children:"The multi-agent design of the architecture is easier to maintain,\nunderstand and extend than a single agent system. Even for the single agent\nbased interface, a multi-agent implementation can potentially make the system more modular, and\neasier for developers to add or remove components of functionality. It's very important to\nrecognize that the multi-agent architecture is a good way to build a single agent. While not obvious, it has a root in the society of mind theory by Marvin Minsky in 1986.\nStarting from simple agents, one can compose and coordinate them\neffectively to exhibit a higher level of intelligence."}),"\n",(0,a.jsx)(t.p,{children:"We don't have a good single agent that\ncan do everything we want, yet. And why is that? It could be because we haven't figured out the right\nway of composing the multi-agent to build this powerful single agent. But firstly, we need to have the\nframework that allows easy experimentation of these different ways of combining models and agents. For example,"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Different ",(0,a.jsx)(t.a,{href:"/docs/tutorial/conversation-patterns",children:"conversation patterns"})," like ",(0,a.jsx)(t.a,{href:"/docs/tutorial/conversation-patterns#sequential-chats",children:"sequential chats"}),", ",(0,a.jsx)(t.a,{href:"/docs/tutorial/conversation-patterns#group-chat",children:"group chat"}),", ",(0,a.jsx)(t.a,{href:"/docs/tutorial/conversation-patterns#constrained-speaker-selection",children:"constrained group chat"}),", ",(0,a.jsx)(t.a,{href:"/docs/topics/groupchat/customized_speaker_selection",children:"customized group chat"}),", ",(0,a.jsx)(t.a,{href:"/docs/tutorial/conversation-patterns#nested-chats",children:"nested chat"})," and recursive composition of them."]}),"\n",(0,a.jsxs)(t.li,{children:["Different prompting and reasoning techniques such as ",(0,a.jsx)(t.a,{href:"/docs/topics/prompting-and-reasoning/reflection",children:"reflection"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/tutorial/tool-use",children:"Tool use"})," and ",(0,a.jsx)(t.a,{href:"/docs/tutorial/code-executors",children:"code execution"}),", as well as their ",(0,a.jsx)(t.a,{href:"/docs/topics/code-execution/user-defined-functions",children:"combination"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/topics/task_decomposition",children:"Planning and task decomposition"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/topics/retrieval_augmentation",children:"Retrieve augmentation"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Integrating multiple ",(0,a.jsx)(t.a,{href:"/blog/2023/11/09/EcoAssistant",children:"models"}),", ",(0,a.jsx)(t.a,{href:"/docs/topics/openai-assistant/gpt_assistant_agent",children:"APIs"}),", ",(0,a.jsx)(t.a,{href:"/blog/2023/11/06/LMM-Agent",children:"modalities"})," and ",(0,a.jsx)(t.a,{href:"/blog/2023/10/26/TeachableAgent",children:"memories"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"My own experience is that if people practice using multi-agents to solve a problem, they often reach a solution faster.\nI have high hopes that they can figure out a robust way of building a complex, multi-faceted single agent using this way.\nOtherwise there are too many possibilities to build this single agent. Without good modularity, it is prone to hitting a complexity limit while keeping the system easy to maintain and modify."}),"\n",(0,a.jsx)(t.p,{children:"On the other hand, we\ndon't have to stop there. We can think about a multi-agent system as a way to multiply the\npower of a single agent. We can connect them with other agents to accomplish bigger goals."}),"\n",(0,a.jsx)(t.h3,{id:"benefits-of-multi-agents",children:"Benefits of multi-agents"}),"\n",(0,a.jsx)(t.p,{children:"There are at least two types of applications that benefit from multi-agent systems."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Single-agent interface.\nDevelopers often find that they need to extend the system with different capabilities, tools, etc. And if\nthey implement that single agent interface with a multi-agent architecture, they can often increase the capability to\nhandle more complex tasks or improve the quality of the response. One example is complex data analytics.\nIt often requires agents of different roles to solve a task. Some agents are good at retrieving the data and\npresenting to others. Some other agents are good at running deep analytics and providing insights. We can also have agents which can critique and suggest more actions. Or agents that can do planning, and so on.\nUsually, to accomplish a complex task, one can build these agents with different roles."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"An example of a real-world production use case:"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["If you don't know about Chi Wang and Microsoft Research's work, please check it out. I want to give a real world production use case for Skypoint AI platform client Tabor AI ",(0,a.jsx)(t.a,{href:"https://tabor.ai",children:"https://tabor.ai"})," AI Copilot for Medicare brokers - selecting a health plan every year for seniors (65 million seniors have to do this every year in the US) is a cumbersome and frustrating task. This process took hours to complete by human research, now with AI agents 5 to 10 minutes without compromising on quality or accuracy of the results. It's fun to see agents doing retail shopping etc. where accuracy is not that mission critical. AI in regulated industries like healthcare, public sector, financial services is a different beast, this is Skypoint AI platform (AIP) focus."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Tisson Mathew, CEO @ Skypoint"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Multi-agent interface. For example, a chess game needs to have at\nleast two different players. A\nfootball game involves even more entities. Multi-agent debates\nand social\nsimulations are good examples, too."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"leadership",src:n(38654).A+"",width:"826",height:"476"})}),"\n",(0,a.jsx)(t.h3,{id:"cost-of-multi-agents",children:"Cost of multi-agents"}),"\n",(0,a.jsx)(t.p,{children:"Very complex multi-agent systems with leading frontier models are expensive, but compared to having humans accomplish the same task they can be exponentially more affordable."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"While not inexpensive to operate, our multi-agent powered venture analysis system at BetterFutureLabs is far more affordable and exponentially faster than human analysts performing a comparable depth of analysis."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Justin Trugman, Cofounder & Head of Technology at BetterFutureLabs"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Will using multiple agents always increase the cost, latency, and chance of failures, compared to using a single agent? It depends on how the multi-agent system is designed, and surprisingly, the answer can, actually, be the opposite."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Even if the performance of a single agent is good enough, you may also want to make this single agent teach some other relatively cheaper agent so that they can become\nbetter with low cost. ",(0,a.jsx)(t.a,{href:"/blog/2023/11/09/EcoAssistant",children:"EcoAssistant"})," is a good example of combining GPT-4 and GPT-3.5 agents to reduce the cost while improving the performance even compared to using a single GPT-4 agent."]}),"\n",(0,a.jsx)(t.li,{children:"A recent use case reports that sometimes using multi-agents with a cheap model can outperform a single agent with an expensive model:"}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Our research group at Tufts University continues to make important improvements in addressing the challenges students face when transitioning from undergraduate to graduate-level courses, particularly in the Doctor of Physical Therapy program at the School of Medicine. With the ongoing support from the Data Intensive Studies Center (DISC) and our collaboration with Chi Wang's team at Microsoft, we are now leveraging StateFlow with Autogen to create even more effective assessments tailored to course content. This State-driven workflow approach complements our existing work using multiple agents in sequential chat, teachable agents, and round-robin style debate formats\u2026\nBy combining StateFlow with multiple agents it\u2019s possible to maintain high-quality results/output while using more cost-effective language models (GPT 3.5). This cost savings, coupled with the increased relevance and accuracy of our results, has really demonstrated for us Autogen\u2019s immense potential for developing efficient and scalable educational solutions that can be adapted to various contexts and budgets."}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Benjamin D Stern, MS, DPT, Assistant Professor, Doctor of Physical Therapy Program,\nTufts University School of Medicine"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/blog/2024/03/11/AutoDefense/Defending%20LLMs%20Against%20Jailbreak%20Attacks%20with%20AutoDefense",children:"AutoDefense"})," demonstrates that using multi-agents reduces the risk of suffering from jailbreak attacks."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"There are certainly tradeoffs to make. The large design space of multi-agents offers these tradeoffs and opens up new opportunities for optimization."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Over a year since the debut of Ask AT&T, the generative AI platform to which we\u2019ve onboarded over 80,000 users, AT&T has been enhancing its capabilities by incorporating 'AI Agents'. These agents, powered by the Autogen framework pioneered by Microsoft (",(0,a.jsx)(t.a,{href:"https://ag2ai.github.io/ag2/blog/2023/12/01/AutoGenStudio/",children:"https://ag2ai.github.io/ag2/blog/2023/12/01/AutoGenStudio/"}),"), are designed to tackle complicated workflows and tasks that traditional language models find challenging. To drive collaboration, AT&T is contributing back to the open-source project by introducing features that facilitate enhanced security and role-based access for various projects and data."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Andy Markus, Chief Data Officer at AT&T"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"watchread-the-interviewsarticles",children:"Watch/read the interviews/articles"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Interview with Joanne Chen from Foundation Capital in ",(0,a.jsx)(t.em,{children:"AI in the Real World"})," (",(0,a.jsx)(t.a,{href:"https://www.forbes.com/sites/joannechen/2024/05/24/the-promise-of-multi-agent-ai/?sh=2c1e4f454d97",children:"Forbes article"}),", ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=RLwyXRVvlNk",children:"YouTube"}),")."]}),"\n",(0,a.jsxs)(t.li,{children:["Interview with Arthur Holland Michel from The Economist in ",(0,a.jsx)(t.a,{href:"https://www.economist.com/science-and-technology/2024/05/13/todays-ai-models-are-impressive-teams-of-them-will-be-formidable",children:(0,a.jsx)(t.em,{children:"Today\u2019s AI models are impressive. Teams of them will be formidable"})}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Interview with Thomas Maybrier from Valory in ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=iMvq_z4LT0U",children:(0,a.jsx)(t.em,{children:"AI Frontiers"})}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["Do you find this note helpful? Would you like to share your thoughts, use cases, findings? Please join our ",(0,a.jsx)(t.a,{href:"https://discord.gg/pAbnFJrkgZ",children:"Discord"})," server for discussion."]})}),"\n",(0,a.jsx)(t.h3,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,a.jsxs)(t.p,{children:["This blogpost is revised based on feedback from ",(0,a.jsx)(t.a,{href:"https://github.com/WaelKarkoub",children:"Wael Karkoub"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/marklysze",children:"Mark Sze"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/jtrugman",children:"Justin Trugman"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/ekzhu",children:"Eric Zhu"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},92397:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agents-49c89d4e594330ec675afc4f066198ab.png"},38654:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/leadership-28508416d262003dd8489b5cdb650169.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);