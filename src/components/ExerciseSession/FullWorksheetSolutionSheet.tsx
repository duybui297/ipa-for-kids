import React, { useState } from 'react';
import {
  Printer,
  CheckCheck,
  ChevronDown,
  ChevronUp,
  Layers
} from 'lucide-react';
import {
  PRACTICE_EXAM_SETS,
  getPracticeSetById
} from '../../data/exerciseWorksheetData';
import { soundService } from '../../services/speechService';

interface Props {
  initialSetId?: number;
}

export const FullWorksheetSolutionSheet: React.FC<Props> = ({ initialSetId = 1 }) => {
  const [selectedSetId, setSelectedSetId] = useState<number>(initialSetId);
  const [filterSection, setFilterSection] = useState<string>('all');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    b1: true,
    b2: true,
    b3: true,
    b4: true,
    b5: true,
    b6: true
  });

  const currentSet = getPracticeSetById(selectedSetId);

  const toggleSection = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Solution Sheet Banner */}
      <div className="bg-linear-to-r from-indigo-900 via-purple-900 to-pink-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <CheckCheck className="w-4 h-4 text-emerald-300" />
            <span>Đáp Án & Hướng Dẫn Phát Âm Chi Tiết 100%</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-heading leading-tight">
            Trọn Bộ Lời Giải Chi Tiết Cả 6 Bài Tập
          </h2>
          <p className="text-pink-100 text-sm mt-2 leading-relaxed">
            Tài liệu giải chi tiết dành cho bé, phụ huynh và giáo viên. Bao gồm ký hiệu phiên âm quốc tế IPA chuẩn, giải thích khẩu hình miệng và nguyên nhân chọn đáp án đúng.
          </p>

          {/* Test Set Selector Dropdown inside Solution Sheet */}
          <div className="mt-5 p-3.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-black text-pink-200 shrink-0">
              <Layers className="w-4 h-4 text-amber-300" />
              <span>Xem lời giải của bộ đề:</span>
            </div>
            <select
              value={selectedSetId}
              onChange={(e) => {
                soundService.playPop();
                setSelectedSetId(Number(e.target.value));
              }}
              className="bg-indigo-950/90 text-white font-bold text-xs sm:text-sm rounded-xl px-3 py-2 border border-indigo-300/50 focus:outline-hidden focus:ring-2 focus:ring-pink-400 cursor-pointer w-full sm:w-auto"
            >
              {PRACTICE_EXAM_SETS.map((s) => (
                <option key={s.id} value={s.id} className="bg-slate-900 text-white py-1">
                  {s.title} ({s.topic})
                </option>
              ))}
            </select>

            <span className="text-[11px] text-pink-200 sm:ml-auto">
              Chủ đề: <strong className="text-amber-200">{currentSet.topic}</strong> • {currentSet.badge}
            </span>
          </div>

          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-2xl bg-white text-indigo-950 font-black text-xs sm:text-sm hover:bg-pink-50 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4 text-indigo-600" />
              In / Xuất phiếu lời giải {currentSet.title.split(':')[0]}
            </button>
            <div className="text-xs text-pink-200">
              Tổng cộng: 6 phần bài tập • Đầy đủ 44 âm & 12 nguyên âm đơn trọng tâm
            </div>
          </div>
        </div>

        {/* Decorative sparkles */}
        <div className="absolute top-4 right-4 text-5xl opacity-20 select-none">🎓</div>
      </div>

      {/* Quick Jump Bar */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
        {[
          { id: 'all', label: 'Tất cả bài tập' },
          { id: 'b1', label: 'Bài 1 (Nghe & khoanh)' },
          { id: 'b2', label: 'Bài 2 (Nối ký hiệu)' },
          { id: 'b3', label: 'Bài 3 (Xếp vào nhà)' },
          { id: 'b4', label: 'Bài 4 (Điền khuyết)' },
          { id: 'b5', label: 'Bài 5 (Từ khác âm)' },
          { id: 'b6', label: 'Bài 6 (Nhận diện IPA)' }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilterSection(btn.id)}
            className={`px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all whitespace-nowrap cursor-pointer ${
              filterSection === btn.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* BÀI 1 SOLUTION */}
      {(filterSection === 'all' || filterSection === 'b1') && (
        <div className="bg-white rounded-3xl p-6 border-2 border-pink-100 shadow-xs space-y-4">
          <div
            onClick={() => toggleSection('b1')}
            className="flex items-center justify-between cursor-pointer border-b border-slate-100 pb-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-pink-100 text-pink-700 font-black text-sm flex items-center justify-center">
                1
              </span>
              <div>
                <h3 className="font-black text-lg text-slate-800">
                  Bài 1: Nghe và khoanh ({currentSet.title})
                </h3>
                <p className="text-xs text-slate-500">
                  Phân biệt các cặp âm tối thiểu (Minimal pairs)
                </p>
              </div>
            </div>
            {expandedCards.b1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </div>

          {expandedCards.b1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {currentSet.exercise1.map((q) => (
                <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-slate-700">Câu {q.id}</span>
                    <span className="font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                      Đáp án đúng: {q.correctChoice} ({q.targetAudioWord})
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <div>
                      A: <strong>{q.wordA}</strong> <span className="font-mono text-pink-600">{q.ipaA}</span> ({q.meaningA})
                    </div>
                    <div>
                      B: <strong>{q.wordB}</strong> <span className="font-mono text-pink-600">{q.ipaB}</span> ({q.meaningB})
                    </div>
                  </div>
                  <div className="text-slate-600 bg-white p-2 rounded-xl border border-slate-200/60 text-[11px] leading-relaxed">
                    <strong>💡 Lời giải:</strong> {q.explanation}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* BÀI 2 SOLUTION */}
      {(filterSection === 'all' || filterSection === 'b2') && (
        <div className="bg-white rounded-3xl p-6 border-2 border-purple-100 shadow-xs space-y-4">
          <div
            onClick={() => toggleSection('b2')}
            className="flex items-center justify-between cursor-pointer border-b border-slate-100 pb-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 font-black text-sm flex items-center justify-center">
                2
              </span>
              <div>
                <h3 className="font-black text-lg text-slate-800">
                  Bài 2: Nối ký hiệu với từ (12 ký hiệu nguyên âm đơn)
                </h3>
                <p className="text-xs text-slate-500">12 nguyên âm đơn chuẩn tiếng Anh</p>
              </div>
            </div>
            {expandedCards.b2 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </div>

          {expandedCards.b2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {currentSet.exercise2Symbols.map((item) => (
                <div key={item.symbol} className="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-100 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono font-black text-base text-pink-700">{item.symbol}</span>
                    <span className="font-black text-indigo-700 bg-white px-2 py-0.5 rounded-lg border border-indigo-200">
                      Nối với {item.targetWordId}. {item.word}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px]">{item.explanation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* BÀI 3 SOLUTION */}
      {(filterSection === 'all' || filterSection === 'b3') && (
        <div className="bg-white rounded-3xl p-6 border-2 border-emerald-100 shadow-xs space-y-4">
          <div
            onClick={() => toggleSection('b3')}
            className="flex items-center justify-between cursor-pointer border-b border-slate-100 pb-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 font-black text-sm flex items-center justify-center">
                3
              </span>
              <div>
                <h3 className="font-black text-lg text-slate-800">
                  Bài 3: Xếp từ vào ngôi nhà (Phần 3a & 3b)
                </h3>
                <p className="text-xs text-slate-500">Mỗi nhà đúng 3 từ tương ứng với nguyên âm</p>
              </div>
            </div>
            {expandedCards.b3 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </div>

          {expandedCards.b3 && (
            <div className="space-y-4 pt-2">
              {/* 3a */}
              <div>
                <h4 className="font-black text-sm text-emerald-900 mb-2">
                  {currentSet.exercise3a.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {currentSet.exercise3a.houses.map((h) => (
                    <div key={h.symbol} className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs">
                      <div className="font-mono font-black text-emerald-800 mb-1">
                        Nhà {h.symbol} ({h.soundName})
                      </div>
                      <div className="space-y-0.5 text-slate-700 font-medium">
                        {h.words.map((w) => (
                          <div key={w} className="font-bold">• {w}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3b */}
              <div>
                <h4 className="font-black text-sm text-emerald-900 mb-2">
                  {currentSet.exercise3b.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {currentSet.exercise3b.houses.map((h) => (
                    <div key={h.symbol} className="p-3 rounded-2xl bg-teal-50/60 border border-teal-200 text-xs">
                      <div className="font-mono font-black text-teal-800 mb-1">
                        Nhà {h.symbol} ({h.soundName})
                      </div>
                      <div className="space-y-0.5 text-slate-700 font-medium">
                        {h.words.map((w) => (
                          <div key={w} className="font-bold">• {w}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* BÀI 4 SOLUTION */}
      {(filterSection === 'all' || filterSection === 'b4') && (
        <div className="bg-white rounded-3xl p-6 border-2 border-amber-100 shadow-xs space-y-4">
          <div
            onClick={() => toggleSection('b4')}
            className="flex items-center justify-between cursor-pointer border-b border-slate-100 pb-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-black text-sm flex items-center justify-center">
                4
              </span>
              <div>
                <h3 className="font-black text-lg text-slate-800">
                  Bài 4: Điền ký hiệu còn thiếu (8 câu)
                </h3>
                <p className="text-xs text-slate-500">Khôi phục nguyên âm trong phiên âm IPA</p>
              </div>
            </div>
            {expandedCards.b4 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </div>

          {expandedCards.b4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {currentSet.exercise4.map((q) => (
                <div key={q.id} className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-slate-800">Câu {q.id}: {q.word}</span>
                    <span className="font-mono font-black text-amber-800 bg-white px-2 py-0.5 rounded-md border border-amber-300">
                      {q.correctChoice} ({q.correctChoice === 'A' ? q.choiceA : q.choiceB})
                    </span>
                  </div>
                  <div className="font-mono text-emerald-700 font-bold">
                    {q.fullIpa}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight pt-1">{q.explanation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* BÀI 5 SOLUTION */}
      {(filterSection === 'all' || filterSection === 'b5') && (
        <div className="bg-white rounded-3xl p-6 border-2 border-rose-100 shadow-xs space-y-4">
          <div
            onClick={() => toggleSection('b5')}
            className="flex items-center justify-between cursor-pointer border-b border-slate-100 pb-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-rose-100 text-rose-800 font-black text-sm flex items-center justify-center">
                5
              </span>
              <div>
                <h3 className="font-black text-lg text-slate-800">
                  Bài 5: Tìm từ khác âm (6 câu)
                </h3>
                <p className="text-xs text-slate-500">3 từ chung nguyên âm, 1 từ khác biệt</p>
              </div>
            </div>
            {expandedCards.b5 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </div>

          {expandedCards.b5 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {currentSet.exercise5.map((q) => (
                <div key={q.id} className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-slate-800">Câu {q.id}</span>
                    <span className="font-bold px-2 py-0.5 rounded-md bg-rose-600 text-white">
                      Khoanh: {q.correctChoice}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                    {q.words.map((w) => (
                      <div
                        key={w.letter}
                        className={`p-1.5 rounded-lg border ${
                          w.letter === q.correctChoice
                            ? 'bg-rose-100 border-rose-300 font-bold text-rose-900'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        {w.letter}. <strong>{w.word}</strong> <span className="font-mono">{w.ipa}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-700 bg-white p-2 rounded-xl border border-rose-100 leading-relaxed">
                    💡 <strong>Lời giải:</strong> {q.explanation}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* BÀI 6 SOLUTION */}
      {(filterSection === 'all' || filterSection === 'b6') && (
        <div className="bg-white rounded-3xl p-6 border-2 border-indigo-100 shadow-xs space-y-4">
          <div
            onClick={() => toggleSection('b6')}
            className="flex items-center justify-between cursor-pointer border-b border-slate-100 pb-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-800 font-black text-sm flex items-center justify-center">
                6
              </span>
              <div>
                <h3 className="font-black text-lg text-slate-800">
                  Bài 6: Nhận diện ký hiệu nguyên âm (8 câu)
                </h3>
                <p className="text-xs text-slate-500">Nghe từ và khoanh đúng ký hiệu IPA</p>
              </div>
            </div>
            {expandedCards.b6 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </div>

          {expandedCards.b6 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {currentSet.exercise6.map((q) => (
                <div key={q.id} className="p-3.5 rounded-2xl bg-indigo-50/50 border border-indigo-200 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-slate-800">Câu {q.id}: {q.spokenWord}</span>
                    <span className="font-mono font-black text-indigo-800 bg-white px-2 py-0.5 rounded-md border border-indigo-300">
                      {q.correctChoice} ({q.targetSymbol})
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Nghĩa: {q.wordMeaning} • <span className="font-mono text-indigo-700">{q.fullIpa}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight pt-1">{q.explanation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
