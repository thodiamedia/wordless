import Games from "@/components/games";

export default function HomePage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
        {/* 游戏区域 */}
        <div className="w-full bg-gradient-to-b from-violet-50 via-violet-50/50 to-white py-8 md:py-16 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent)] pointer-events-none"></div>
          <div className="container mx-auto relative px-4">
            <Games />
          </div>
        </div>

        {/* 标题区域 */}
        <div className="py-8 md:py-16 bg-gradient-to-b from-white to-zinc-50/50">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="relative">
              <div className="absolute -inset-x-4 -inset-y-6 bg-violet-50/50 rounded-2xl -z-10"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 py-6 px-4">
                {/* 标题部分 */}
                <div className="text-center md:text-left w-full md:w-auto">
                  <h1 className="text-2xl md:text-4xl font-bold mb-2">
                    <span className="text-zinc-700">Word</span>
                    <span className="text-violet-500">Puzzle</span>
                  </h1>
                  <p className="text-base md:text-lg text-zinc-500">Challenge Your Word Power!</p>
                </div>

                {/* 按钮组 */}
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                  <div className="flex items-center gap-3 w-full md:w-auto justify-center">
                    <div className="px-3 py-2 md:px-4 md:py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                      <span className="text-sm md:text-base text-violet-700 font-medium">6 tries</span>
                    </div>
                    <div className="px-3 py-2 md:px-4 md:py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                      <span className="text-sm md:text-base text-violet-700 font-medium">3-8 letters</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 w-full md:w-auto justify-center">
                    <button className="p-2 text-sm md:text-base rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:bg-violet-50 transition-colors">
                      <span className="text-violet-600">📊 Stats</span>
                    </button>
                    <button className="p-2 text-sm md:text-base rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:bg-violet-50 transition-colors">
                      <span className="text-violet-600">⚡ Daily</span>
                    </button>
                    <button className="p-2 text-sm md:text-base rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:bg-violet-50 transition-colors">
                      <span className="text-violet-600">🎯 Practice</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 游戏说明区域 */}
        <div id="how-to-play" className="max-w-4xl mx-auto px-4 py-12 md:py-20">
          {/* 主要说明 - 修改标题样式 */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-zinc-800">How to Play</h2>
              <div className="mt-2 w-20 h-1 bg-violet-200 mx-auto rounded-full"></div>
            </div>
            
            <div className="flex items-start space-x-6">
              <span className="text-6xl font-black text-violet-500/10">1</span>
              <div className="flex-1">
                <p className="text-lg text-zinc-600 pt-4 mb-8">
                  Can you crack the hidden word? You've got 6 tries to guess it right! 
                  After each guess, we'll give you some color hints:
                </p>

                {/* 示例区域 */}
                <div className="bg-white/50 rounded-xl p-6 space-y-6">
                  <h3 className="text-lg font-semibold text-zinc-700 mb-4">Examples:</h3>
                  
                  {/* 示例1：全部正确 */}
                  <div className="space-y-2">
                    <p className="text-sm text-zinc-500">If the word is "HEART"</p>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex gap-1 md:gap-2 flex-wrap">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          H
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          E
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          A
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          R
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          T
                        </div>
                      </div>
                      <span className="text-sm md:text-base text-zinc-600">All letters are correct and in position!</span>
                    </div>
                  </div>

                  {/* 示例2：部分正确位置 */}
                  <div className="space-y-2">
                    <p className="text-sm text-zinc-500">If you guess "EARTH"</p>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex gap-1 md:gap-2 flex-wrap">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          E
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          A
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          R
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          T
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          H
                        </div>
                      </div>
                      <span className="text-sm md:text-base text-zinc-600">Some letters are correct but in wrong positions</span>
                    </div>
                  </div>

                  {/* 示例3：字母存在但位置错误 */}
                  <div className="space-y-2">
                    <p className="text-sm text-zinc-500">If you guess "TRAIN"</p>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex gap-1 md:gap-2 flex-wrap">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          T
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          R
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          A
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          I
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          N
                        </div>
                      </div>
                      <span className="text-sm md:text-base text-zinc-600">T is correct, R and A exist but in wrong spots</span>
                    </div>
                  </div>

                  {/* 示例4：完全错误 */}
                  <div className="space-y-2">
                    <p className="text-sm text-zinc-500">If you guess "CLOUD"</p>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex gap-1 md:gap-2 flex-wrap">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          C
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          L
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          O
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          U
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-500 text-white font-bold flex items-center justify-center rounded text-sm md:text-base">
                          D
                        </div>
                      </div>
                      <span className="text-sm md:text-base text-zinc-600">None of these letters are in the word</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 颜色提示说明 */}
          <div className="mb-16 ml-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-semibold text-green-700">Correct Spot</span>
                </div>
                <p className="text-green-600 text-sm">Letter is in the right position</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="font-semibold text-yellow-700">Wrong Spot</span>
                </div>
                <p className="text-yellow-600 text-sm">Letter exists but wrong position</p>
              </div>

              <div className="bg-zinc-50 p-6 rounded-lg border-l-4 border-zinc-500">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-zinc-500 rounded-full mr-3"></div>
                  <span className="font-semibold text-zinc-700">Not Found</span>
                </div>
                <p className="text-zinc-600 text-sm">Letter is not in the word</p>
              </div>
            </div>
          </div>

          {/* 难度说明 */}
          <div className="mb-16">
            <div className="flex items-start space-x-6">
              <span className="text-6xl font-black text-violet-500/10">2</span>
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-zinc-800 mb-2">Level Up Your Game</h3>
                <p className="text-lg text-zinc-600">
                  Use the "+" and "-" buttons to switch between 3-8 letter words. 
                  Whether you're a word newbie or a vocabulary pro, there's a perfect challenge waiting for you.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 部分 */}
          <div className="w-full bg-gradient-to-b from-zinc-50/50 via-zinc-100/30 to-zinc-50/50 py-12 md:py-20 my-12 md:my-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-zinc-800">Frequently Asked Questions</h2>
                <div className="mt-2 w-20 h-1 bg-violet-200 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid gap-4 md:gap-6">
                {/* Question 1 */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-zinc-800 mb-3 flex items-center">
                    <span className="flex-none w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">Q</span>
                    How do I know if my guess is correct?
                  </h3>
                  <p className="text-zinc-600 ml-12">
                    After each guess, the letters will change color to give you hints. Green means the letter is correct and in the right spot, 
                    yellow means the letter exists but is in the wrong position, and gray means the letter isn't in the word at all.
                  </p>
                </div>

                {/* Question 2 */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-zinc-800 mb-3 flex items-center">
                    <span className="flex-none w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">Q</span>
                    Can I play the same word multiple times?
                  </h3>
                  <p className="text-zinc-600 ml-12">
                    Yes! You can play as many times as you want. Use the "Reset" button to start a new game with a different word. 
                    Each game generates a new random word based on your chosen length.
                  </p>
                </div>

                {/* Question 3 */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-zinc-800 mb-3 flex items-center">
                    <span className="flex-none w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">Q</span>
                    How do I adjust the difficulty?
                  </h3>
                  <p className="text-zinc-600 ml-12">
                    Use the "+" and "-" buttons before starting a game to change the word length from 3 to 8 letters. 
                    Longer words generally provide a greater challenge. You can also track your solving time to challenge yourself.
                  </p>
                </div>

                {/* Question 4 */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-zinc-800 mb-3 flex items-center">
                    <span className="flex-none w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">Q</span>
                    What happens if I run out of tries?
                  </h3>
                  <p className="text-zinc-600 ml-12">
                    If you don't guess the word within 6 attempts, the game ends and reveals the correct word. 
                    Don't worry though - you can always start a new game and try again with a different word!
                  </p>
                </div>

                {/* Question 5 */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-zinc-800 mb-3 flex items-center">
                    <span className="flex-none w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">Q</span>
                    Can I use the keyboard to type my guesses?
                  </h3>
                  <p className="text-zinc-600 ml-12">
                    Yes! You can use either your physical keyboard or the on-screen keyboard to enter letters. 
                    Use Backspace to delete and Enter to submit your guess. The game supports both input methods for your convenience.
                  </p>
                </div>

                {/* Question 6 */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-zinc-800 mb-3 flex items-center">
                    <span className="flex-none w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">Q</span>
                    Are all words in English?
                  </h3>
                  <p className="text-zinc-600 ml-12">
                    Yes, all words are common English words. We've carefully selected words that are familiar and frequently used, 
                    making the game both challenging and educational for English language learners and native speakers alike.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 底部号召 */}
          <div className="text-center py-6 md:py-8 bg-violet-50 rounded-2xl mx-4">
            <h2 className="text-2xl font-bold text-violet-900 mb-2">
              Ready to Test Your Skills?
            </h2>
            <p className="text-lg text-violet-700">
              Jump in and see how fast you can solve the puzzle!
              <span className="inline-block animate-bounce ml-2">🚀</span>
            </p>
          </div>
        </div>
      </div>
    )
} 
