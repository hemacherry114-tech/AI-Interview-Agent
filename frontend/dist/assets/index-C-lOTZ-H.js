(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
<div class="min-h-screen bg-[#050816] text-white relative overflow-hidden">

  <!-- Background Glow -->
  <div class="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

  <div class="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full"></div>

  <!-- Navbar -->
  <nav class="flex justify-between items-center px-10 py-6 border-b border-white/10 backdrop-blur-md relative z-20">

    <h1 class="text-2xl font-bold tracking-wide">
      AI Interview Platform
    </h1>

    <div class="flex gap-8 text-sm text-gray-300">
      <a class="hover:text-cyan-400 transition" href="#">Dashboard</a>
      <a class="hover:text-cyan-400 transition" href="#">Mock Interviews</a>
      <a class="hover:text-cyan-400 transition" href="#">Analytics</a>
      <a class="hover:text-cyan-400 transition" href="#">Resume Insights</a>
    </div>

  </nav>

  <!-- Hero -->
  <section class="px-10 pt-24 pb-20 relative z-10">

    <div class="max-w-4xl">

      <p class="text-cyan-400 tracking-[5px] uppercase text-sm mb-5">
        AI-Powered Interview Automation
      </p>

      <h1 class="text-7xl font-bold leading-tight">
        AI Interview Workflow
        <span class="text-cyan-400">Automation Platform</span>
      </h1>

      <p class="mt-8 text-gray-400 text-xl max-w-3xl leading-relaxed">
        Generate intelligent interview questions, evaluate answers,
        analyze resumes, and simulate real-world technical interviews
        using AI agents and LLM workflows.
      </p>

      <div class="flex gap-5 mt-10">

        <button class="bg-cyan-500 hover:scale-105 hover:bg-cyan-400 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-cyan-500/30">
          Start Interview
        </button>

        <button class="border border-white/10 hover:border-cyan-400 hover:bg-white/5 transition-all duration-300 px-8 py-4 rounded-2xl backdrop-blur-md">
          View Analytics
        </button>

      </div>

    </div>

  </section>

  <!-- Main Dashboard -->
  <section class="px-10 pb-20 relative z-10">

    <div class="grid grid-cols-3 gap-8">

      <!-- Upload Card -->
      <div class="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition">

        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-semibold">
            Resume Upload
          </h2>

          <div class="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
            📄
          </div>
        </div>

        <div class="border-2 border-dashed border-white/10 rounded-2xl p-10 text-center hover:border-cyan-400 transition cursor-pointer">

          <p class="text-gray-300 text-lg">
            Drag & Drop Resume
          </p>

          <p class="text-sm text-gray-500 mt-2">
            PDF, DOCX supported
          </p>

        </div>

      </div>

      <!-- Interview Config -->
      <div class="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition">

        <h2 class="text-2xl font-semibold mb-6">
          Interview Configuration
        </h2>

        <div class="space-y-5">

          <input
            class="w-full bg-[#0b1220] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            placeholder="Enter Job Role"
          />

          <select class="w-full bg-[#0b1220] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400">

            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>

          </select>

          <button class="w-full bg-cyan-500 hover:bg-cyan-400 transition py-4 rounded-2xl font-semibold shadow-lg shadow-cyan-500/20">

            Generate Questions

          </button>

        </div>

      </div>

      <!-- AI Score -->
      <div class="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition">

        <h2 class="text-2xl font-semibold mb-8">
          AI Evaluation
        </h2>

        <div class="space-y-6">

          <div>
            <div class="flex justify-between mb-2">
              <span>Technical Accuracy</span>
              <span>92%</span>
            </div>

            <div class="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div class="w-[92%] h-full bg-cyan-400 rounded-full"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between mb-2">
              <span>Communication</span>
              <span>85%</span>
            </div>

            <div class="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div class="w-[85%] h-full bg-blue-400 rounded-full"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between mb-2">
              <span>Confidence</span>
              <span>88%</span>
            </div>

            <div class="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div class="w-[88%] h-full bg-purple-400 rounded-full"></div>
            </div>
          </div>

        </div>

      </div>

    </div>

    <!-- Questions + Voice Section -->
<section class="px-10 pb-24 relative z-10">

  <div class="grid grid-cols-2 gap-8">

    <!-- Questions Panel -->
    <div class="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

      <div class="flex items-center justify-between mb-8">

        <h2 class="text-3xl font-semibold">
          AI Generated Questions
        </h2>

        <div class="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 text-sm">
          LIVE
        </div>

      </div>

      <div class="space-y-5">

        <div class="bg-[#0b1220] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition">

          <div class="flex items-center gap-3 mb-3">

            <span class="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-sm">
              Backend
            </span>

            <span class="px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-sm">
              FastAPI
            </span>

          </div>

          <p class="text-lg text-gray-200">
            Explain the difference between synchronous and asynchronous APIs in FastAPI.
          </p>

        </div>

        <div class="bg-[#0b1220] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition">

          <div class="flex items-center gap-3 mb-3">

            <span class="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-sm">
              ML
            </span>

            <span class="px-3 py-1 rounded-lg bg-pink-500/20 text-pink-300 text-sm">
              LLM
            </span>

          </div>

          <p class="text-lg text-gray-200">
            How would you evaluate hallucinations in LLM-generated responses?
          </p>

        </div>

        <div class="bg-[#0b1220] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition">

          <div class="flex items-center gap-3 mb-3">

            <span class="px-3 py-1 rounded-lg bg-orange-500/20 text-orange-300 text-sm">
              Behavioral
            </span>

          </div>

          <p class="text-lg text-gray-200">
            Describe a difficult technical challenge you solved recently.
          </p>

        </div>

      </div>

    </div>

    <!-- Voice AI Panel -->
    <div class="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden">

      <div class="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-cyan-500/20 blur-[100px] rounded-full"></div>

      <h2 class="text-3xl font-semibold mb-10 relative z-10">
        Voice Interview Assistant
      </h2>

      <div class="flex flex-col items-center justify-center h-[400px] relative z-10">

        <!-- Mic Circle -->
        <div class="relative">

          <div class="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping"></div>

          <div class="w-36 h-36 rounded-full bg-cyan-500 flex items-center justify-center text-5xl shadow-2xl shadow-cyan-500/40">

            🎤

          </div>

        </div>

        <p class="mt-10 text-2xl font-medium">
          AI is Listening...
        </p>

        <p class="mt-3 text-gray-400 text-center max-w-md">
          Real-time speech recognition and AI-driven interview interaction powered by LLM workflows.
        </p>

        <button class="mt-10 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition border border-white/10">

          Start Voice Session

        </button>

      </div>

    </div>

  </div>

</section>

<!-- Interview Configuration -->
<section class="px-10 pb-24 relative z-10">

  <div class="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10">

    <div class="mb-10">

      <p class="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
        Interview Configuration
      </p>

      <h2 class="text-4xl font-bold mb-4">
        Configure AI Interview Workflow
      </h2>

      <p class="text-gray-400 max-w-3xl">
        Customize interview difficulty, role specialization, AI behavior,
        and technology stack before generating adaptive interview rounds.
      </p>

    </div>

    <div class="grid grid-cols-2 gap-8">



      <!-- Left Side -->
      <div class="space-y-6">

        <!-- Role -->
        <div>

          <label class="block text-gray-300 mb-3">
            Target Role
          </label>

          <input
            type="text"
            placeholder="Backend Engineer / ML Engineer / Full Stack Developer"
            class="w-full bg-[#0b1220] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

        </div>

        <!-- Difficulty -->
        <div>

          <label class="block text-gray-300 mb-3">
            Interview Difficulty
          </label>

          <select
            class="w-full bg-[#0b1220] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

        </div>

        <!-- Interview Style -->
        <div>

          <label class="block text-gray-300 mb-3">
            Interview Style
          </label>

          <select
            class="w-full bg-[#0b1220] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
          >
            <option>Friendly HR</option>
            <option>Technical Panel</option>
            <option>Startup Founder Round</option>
            <option>Behavioral Interview</option>
          </select>

        </div>

      </div>

      <!-- Right Side -->
      <div>

        <label class="block text-gray-300 mb-5">
          Tech Stack Focus
        </label>

        <div class="flex flex-wrap gap-4">

          <div class="px-5 py-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
            Python
          </div>

          <div class="px-5 py-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
            FastAPI
          </div>

          <div class="px-5 py-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
            React
          </div>

          <div class="px-5 py-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
            Machine Learning
          </div>

          <div class="px-5 py-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
            SQL
          </div>

          <div class="px-5 py-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
            System Design
          </div>

        </div>

        <!-- Generate Button -->
        <button
          class="mt-10 w-full bg-cyan-400 text-black font-semibold py-4 rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
        >
          Generate AI Interview Questions
        </button>

      </div>

    </div>

  </div>

</section>

<!-- Resume Upload Section -->
<section class="px-10 pb-24 relative z-10">

  <div class="mb-10">

    <p class="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
      Resume Intelligence
    </p>

    <h2 class="text-4xl font-bold mb-4">
      AI Resume Parsing & Candidate Profiling
    </h2>

    <p class="text-gray-400 max-w-3xl">
      Upload resumes, extract candidate context, analyze technical depth,
      and generate adaptive interview workflows dynamically.
    </p>

  </div>

  <div class="grid grid-cols-3 gap-8">

    <!-- Upload Card -->
    <div class="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">

      <div class="text-5xl mb-6">📄</div>

      <h3 class="text-2xl font-semibold mb-3">
        Resume Upload
      </h3>

      <p class="text-gray-400 mb-6">
        Upload PDF resumes for AI-powered parsing and interview generation.
      </p>

      <div class="border-2 border-dashed border-white/10 rounded-2xl p-10 text-center hover:border-cyan-400/30 transition-all duration-300">

        <p class="text-gray-400">
          Drag & Drop Resume PDF
        </p>

      </div>

    </div>

    <!-- AI Analysis -->
    <div class="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">

      <div class="text-5xl mb-6">🤖</div>

      <h3 class="text-2xl font-semibold mb-3">
        AI Analysis
      </h3>

      <p class="text-gray-400 mb-8">
        Generate technical interview questions using LLM-driven workflows and candidate context extraction.
      </p>

      <div class="space-y-4">

        <div class="flex justify-between items-center">
          <span class="text-gray-300">Resume Parsing</span>
          <span class="text-cyan-400">Active</span>
        </div>

        <div class="flex justify-between items-center">
          <span class="text-gray-300">Question Generation</span>
          <span class="text-cyan-400">Active</span>
        </div>

        <div class="flex justify-between items-center">
          <span class="text-gray-300">Skill Detection</span>
          <span class="text-cyan-400">Active</span>
        </div>

      </div>

    </div>

    <!-- Voice Workflow -->
    <div class="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">

      <div class="text-5xl mb-6">🎤</div>

      <h3 class="text-2xl font-semibold mb-3">
        Voice Interview Workflow
      </h3>

      <p class="text-gray-400 mb-8">
        Simulate realistic AI-driven interviews with speech synthesis and voice interaction support.
      </p>

      <button class="w-full bg-cyan-400 text-black font-semibold py-4 rounded-2xl hover:scale-[1.02] transition-all duration-300">
        Start Voice Interview
      </button>

    </div>

  </div>

</section>

<!-- AI Evaluation Dashboard -->
<section class="px-10 pb-24 relative z-10">

  <div class="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10">

    <div class="flex items-center justify-between mb-12">

      <div>

        <p class="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
          AI Evaluation
        </p>

        <h2 class="text-4xl font-bold">
          Interview Performance Analytics
        </h2>

      </div>

      <div class="px-5 py-3 rounded-2xl bg-green-500/20 text-green-300 border border-green-400/20">
        Candidate Evaluated
      </div>

    </div>

    <!-- Score Cards -->
    <div class="grid grid-cols-3 gap-6 mb-10">

      <div class="bg-[#0b1220] rounded-2xl border border-white/10 p-6">

        <p class="text-gray-400 mb-3">
          Technical Accuracy
        </p>

        <h3 class="text-5xl font-bold text-cyan-400">
          92%
        </h3>

        <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
          <div class="w-[92%] h-full bg-cyan-400 rounded-full"></div>
        </div>

      </div>

      <div class="bg-[#0b1220] rounded-2xl border border-white/10 p-6">

        <p class="text-gray-400 mb-3">
          Communication
        </p>

        <h3 class="text-5xl font-bold text-purple-400">
          88%
        </h3>

        <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
          <div class="w-[88%] h-full bg-purple-400 rounded-full"></div>
        </div>

      </div>

      <div class="bg-[#0b1220] rounded-2xl border border-white/10 p-6">

        <p class="text-gray-400 mb-3">
          Confidence Score
        </p>

        <h3 class="text-5xl font-bold text-green-400">
          90%
        </h3>

        <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
          <div class="w-[90%] h-full bg-green-400 rounded-full"></div>
        </div>

      </div>

    </div>

    <!-- Feedback Cards -->
    <div class="grid grid-cols-2 gap-8">

      <!-- Strengths -->
      <div class="bg-[#0b1220] rounded-2xl border border-green-400/20 p-8">

        <div class="flex items-center gap-3 mb-6">

          <div class="w-4 h-4 rounded-full bg-green-400"></div>

          <h3 class="text-2xl font-semibold text-green-300">
            Strengths
          </h3>

        </div>

        <ul class="space-y-4 text-gray-300">

          <li>
            • Strong understanding of FastAPI architecture and async workflows
          </li>

          <li>
            • Good explanation clarity during backend system design discussion
          </li>

          <li>
            • Effective problem-solving approach in API optimization questions
          </li>

        </ul>

      </div>

      <!-- Weaknesses -->
      <div class="bg-[#0b1220] rounded-2xl border border-red-400/20 p-8">

        <div class="flex items-center gap-3 mb-6">

          <div class="w-4 h-4 rounded-full bg-red-400"></div>

          <h3 class="text-2xl font-semibold text-red-300">
            Improvement Areas
          </h3>

        </div>

        <ul class="space-y-4 text-gray-300">

          <li>
            • Could improve depth in system scalability discussions
          </li>

          <li>
            • Some hesitation observed during behavioral responses
          </li>

          <li>
            • Needs stronger optimization reasoning in ML deployment scenarios
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>

  </section>

</div>
`;
