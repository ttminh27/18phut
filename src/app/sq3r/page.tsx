"use client";

import { useState } from "react";
import { 
  Compass, 
  HelpCircle, 
  BookOpen, 
  Volume2, 
  RefreshCw, 
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Info,
  BookOpenText,
  BrainCircuit,
  GraduationCap,
  ZoomIn,
  ZoomOut
} from "lucide-react";

interface Step {
  key: string;
  name: string;
  engName: string;
  icon: any;
  color: string;
  bgColor: string;
  description: string;
  details: string[];
  example18Min: string;
  questions: string[];
}

const steps: Step[] = [
  {
    key: "S",
    name: "Survey",
    engName: "Khảo sát / Đọc lướt",
    icon: Compass,
    color: "text-rose-600 dark:text-rose-400 border-rose-500/30",
    bgColor: "bg-rose-50 dark:bg-rose-950/30",
    description: "Khảo sát tổng quan nội dung chương sách trước khi bắt đầu đọc chi tiết để xây dựng bản đồ nhận thức trong tâm trí.",
    details: [
      "Đọc tiêu đề chương và các tiêu đề phụ để nắm bắt dòng suy nghĩ của tác giả.",
      "Xem qua các hình ảnh, biểu đồ, bảng biểu và chú thích đi kèm.",
      "Đọc lướt qua đoạn mở đầu và phần tóm tắt ở cuối chương.",
      "Quan sát các từ in đậm, in nghiêng hoặc danh sách liệt kê."
    ],
    example18Min: "Khi đọc Chương 28 của sách 18 Phút, hãy quét nhanh qua tiêu đề '18 Phút Để Quản Lý Một Ngày Của Bạn', đề mục phụ 'Xây dựng thói quen mỗi ngày' và nhận thấy sơ đồ 3 bước cơ bản ở cuối chương.",
    questions: [
      "Chương này nói về chủ đề tổng quan gì?",
      "Cấu trúc của chương được chia thành bao nhiêu phần chính?",
      "Nội dung này có liên quan gì đến mục tiêu đọc sách hiện tại của mình?"
    ]
  },
  {
    key: "Q",
    name: "Question",
    engName: "Đặt câu hỏi",
    icon: HelpCircle,
    color: "text-amber-600 dark:text-amber-400 border-amber-500/30",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    description: "Chuyển các tiêu đề thành câu hỏi để kích hoạt trạng thái tìm kiếm câu trả lời chủ động trong suốt quá trình đọc.",
    details: [
      "Chuyển các tiêu đề chương và tiêu đề phụ thành câu hỏi bắt đầu bằng Ai, Cái gì, Tại sao, Thế nào.",
      "Tự hỏi bản thân xem mình đã biết những gì về chủ đề này trước đó.",
      "Đặt câu hỏi dựa trên kỳ vọng của bản thân từ nội dung chương sách."
    ],
    example18Min: "Chuyển tiêu đề phụ 'Xây dựng thói quen mỗi ngày' thành câu hỏi: 'Peter Bregman khuyên chúng ta xây dựng thói quen gì?', 'Tại sao nó lại giúp tối ưu hóa 18 phút?' hoặc 'Thói quen này gồm những bước cụ thể nào?'",
    questions: [
      "Mình mong muốn tìm ra câu trả lời nào từ phần này?",
      "Tác giả muốn chứng minh điều gì qua tiêu đề này?",
      "Làm cách nào để áp dụng bài học này vào thực tế?"
    ]
  },
  {
    key: "R1",
    name: "Read",
    engName: "Đọc chủ động",
    icon: BookOpen,
    color: "text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    description: "Đọc kỹ lưỡng với mục đích tìm câu trả lời cho các câu hỏi đã đặt ra ở bước trước. Tránh đọc thụ động từng từ.",
    details: [
      "Đọc chậm rãi ở những phần phức tạp và đọc nhanh hơn ở những ví dụ minh họa.",
      "Tập trung tìm kiếm từ khóa chính, luận điểm chính và câu trả lời cho các câu hỏi của bạn.",
      "Đánh dấu hoặc ghi chú ngắn bên lề (không nên highlight quá nhiều làm loãng thông tin).",
      "Dừng lại khi gặp các khái niệm mới để suy ngẫm."
    ],
    example18Min: "Đọc kỹ Chương 28 để tìm ra cấu trúc cụ thể của kế hoạch 18 phút: 5 phút lập kế hoạch buổi sáng, 8 lần dừng lại 1 phút trong ngày, và 5 phút đánh giá cuối ngày. Hiểu rõ mục đích của từng mốc thời gian.",
    questions: [
      "Luận điểm chính của đoạn văn này là gì?",
      "Câu trả lời cho các câu hỏi mình đặt ra nằm ở đâu?",
      "Có điểm nào trong bài viết mâu thuẫn với hiểu biết cũ của mình không?"
    ]
  },
  {
    key: "R2",
    name: "Recite",
    engName: "Tự thuộc lòng / Nhớ lại",
    icon: Volume2,
    color: "text-blue-600 dark:text-blue-400 border-blue-500/30",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    description: "Che văn bản lại và tự diễn đạt lại các ý chính bằng ngôn ngữ của bản thân. Đây là bước quan trọng nhất để ghi nhớ lâu dài.",
    details: [
      "Sau khi đọc xong một mục, hãy dừng lại và nhắm mắt hoặc che trang sách.",
      "Tự trả lời các câu hỏi đã đặt ra bằng lời nói (nói to) hoặc viết tóm tắt ra nháp.",
      "Nếu phát hiện bản thân không thể giải thích lại, hãy mở sách và đọc lại phần đó ngay lập tức.",
      "Sử dụng kỹ thuật Feynman: Giải thích lại như thể bạn đang giảng cho một đứa trẻ 10 tuổi."
    ],
    example18Min: "Sau khi đọc xong công thức 18 phút, hãy gấp sách lại và tự nhẩm: 'Kế hoạch 18 phút gồm: 5 phút buổi sáng lập danh sách việc cần làm, 8 lần 1 phút mỗi tiếng để kiểm tra sự tập trung thông qua tiếng chuông báo hiệu, và 5 phút buổi tối để suy ngẫm về những gì đã làm tốt.'",
    questions: [
      "Mình có thể tự giải thích ý chính của phần này mà không cần nhìn sách không?",
      "Những từ khóa cốt lõi mình cần ghi nhớ là gì?",
      "Mối liên hệ giữa phần này và các chương trước là gì?"
    ]
  },
  {
    key: "R3",
    name: "Review",
    engName: "Ôn tập / Xem lại",
    icon: RefreshCw,
    color: "text-purple-600 dark:text-purple-400 border-purple-500/30",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    description: "Thực hiện kiểm tra lại kiến thức theo chu kỳ thời gian để củng cố trí nhớ dài hạn và liên kết các kiến thức lại với nhau.",
    details: [
      "Xem lại toàn bộ các ghi chép, câu hỏi và câu trả lời ngay sau khi đọc xong toàn bộ chương.",
      "Lên lịch ôn tập định kỳ: 1 ngày sau khi đọc, 1 tuần sau đó, và 1 tháng sau đó.",
      "Làm các bài mini game, trắc nghiệm liên quan đến nội dung sách để kiểm tra mức độ hiểu sâu.",
      "Cập nhật sơ đồ tư duy hoặc bản tóm tắt cá nhân."
    ],
    example18Min: "Sau khi hoàn thành một phần của cuốn sách '18 Phút', hãy truy cập tab 'Mini Game' để trả lời các câu hỏi trắc nghiệm và đọc phần giải thích chi tiết để khóa chặt kiến thức vào trí nhớ.",
    questions: [
      "Bức tranh tổng thể của cả chương/cuốn sách này là gì?",
      "Kiến thức này sẽ được mình áp dụng như thế nào trong tuần tới?",
      "Có phần nào mình vẫn chưa thực sự hiểu rõ và cần đọc lại không?"
    ]
  }
];

export default function SQ3RPage() {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const [fontSize, setFontSize] = useState(16); // Default base font size
  
  // Self-assessment widget state
  const [scores, setScores] = useState<number[]>([0, 0, 0, 0, 0]);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleZoomIn = () => setFontSize(s => Math.min(s + 2, 24));
  const handleZoomOut = () => setFontSize(s => Math.max(s - 2, 12));

  // Scaled font sizes
  const sizeTitle = `${fontSize * 2.25}px`;
  const sizeHeading = `${fontSize * 1.5}px`;
  const sizeSubHeading = `${fontSize * 1.25}px`;
  const sizeSubtitle = `${fontSize * 1.125}px`;
  const sizeBody = `${fontSize}px`;
  const sizeSmall = `${fontSize * 0.875}px`;
  const sizeTiny = `${fontSize * 0.75}px`;

  const assessmentQuestions = [
    "Tôi thường đọc lướt qua tiêu đề, đề mục phụ và tóm tắt trước khi đọc chi tiết chương sách.",
    "Tôi hay tự đặt câu hỏi trong đầu khi bắt gặp một tiêu đề mới để kích thích tò mò.",
    "Tôi tập trung đọc để tìm câu trả lời cho các câu hỏi thay vì đọc thụ động từ đầu đến cuối.",
    "Sau khi đọc xong một mục, tôi thường che sách lại và tự tóm tắt lại bằng lời của mình.",
    "Tôi có thói quen xem lại ghi chép hoặc làm trắc nghiệm kiểm tra bài học sau khi đọc xong."
  ];

  const handleScoreChange = (index: number, val: number) => {
    const updated = [...scores];
    updated[index] = val;
    setScores(updated);
    setShowResult(false);
  };

  const calculateResult = () => {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return {
      total,
      percentage: Math.round((total / 25) * 100),
      diagnosis: total >= 20 
        ? "Tuyệt vời! Bạn có kỹ năng đọc chủ động xuất sắc và đang áp dụng rất tốt tinh thần SQ3R." 
        : total >= 13 
        ? "Khá tốt! Bạn đã có ý thức đọc chủ động, nhưng nếu áp dụng đầy đủ 5 bước SQ3R, khả năng tập trung và ghi nhớ của bạn sẽ đột phá hơn nhiều."
        : "Bạn đang đọc sách theo cách thụ động (chỉ nhìn chữ). Hãy bắt đầu áp dụng phương pháp SQ3R ngay hôm nay để tránh tình trạng 'đọc xong quên ngay'!"
    };
  };

  const activeStep = steps[selectedStep];
  const ActiveIcon = activeStep.icon;
  const result = calculateResult();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-16">
      {/* Floating Zoom Controls */}
      <div className="fixed bottom-8 right-6 md:right-8 z-50 flex items-center bg-white/90 dark:bg-slate-800/95 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-slate-200/80 dark:border-slate-700/80 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
        <button 
          onClick={handleZoomOut} 
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none"
          disabled={fontSize <= 12}
          title="Thu nhỏ chữ"
        >
          <ZoomOut className="w-4.5 h-4.5" />
        </button>
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 px-2 select-none min-w-[40px] text-center">{fontSize}px</span>
        <button 
          onClick={handleZoomIn} 
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none"
          disabled={fontSize >= 24}
          title="Phóng to chữ"
        >
          <ZoomIn className="w-4.5 h-4.5" />
        </button>
      </div>

      {/* Hero Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-950 p-8 text-white shadow-xl dark:shadow-indigo-950/20 border border-indigo-100/10 dark:border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full uppercase mb-4 border border-white/10" style={{ padding: "0.25rem 0.75rem" }}>
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span className="tracking-wider" style={{ fontSize: sizeTiny, fontWeight: "600" }}>Phương pháp học tập thông minh</span>
          </div>
          <h1 className="font-extrabold tracking-tight mb-4" style={{ fontSize: sizeTitle, lineHeight: "1.15" }}>
            Phương Pháp Đọc SQ3R
          </h1>
          <p className="leading-relaxed mb-6" style={{ fontSize: sizeSubtitle, opacity: 0.9 }}>
            Phát triển bởi giáo sư tâm lý học <strong className="text-white">Francis P. Robinson</strong> trong cuốn sách cổ điển <strong className="text-white">Effective Study (1946)</strong>. Đây là quy trình đọc 5 bước có hệ thống được khoa học chứng minh giúp tối ưu hóa sự tập trung và khả năng ghi nhớ thông tin dài hạn.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-1.5 bg-black/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <BookOpenText className="w-4 h-4 text-white" />
              <span style={{ fontSize: sizeSmall }}>Đọc hiểu sâu</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-black/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <BrainCircuit className="w-4 h-4 text-white" />
              <span style={{ fontSize: sizeSmall }}>Ghi nhớ 80%</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-black/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <GraduationCap className="w-4 h-4 text-white" />
              <span style={{ fontSize: sizeSmall }}>Chủ động học tập</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Guide Section */}
      <section className="grid md:grid-cols-12 gap-6 items-start">
        {/* Step Selector List */}
        <div className="md:col-span-4 space-y-2.5">
          <h2 className="font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 pl-2" style={{ fontSize: sizeTiny }}>
            5 Bước Thực Hiện
          </h2>
          <div className="space-y-2">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={step.key}
                  onClick={() => setSelectedStep(idx)}
                  className={`w-full flex items-center p-3.5 rounded-2xl border text-left transition-all duration-300 ${
                    isSelected 
                      ? "bg-indigo-600 dark:bg-indigo-600 border-indigo-600 dark:border-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none scale-[1.02]" 
                      : "bg-white dark:bg-slate-800 border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-200 dark:hover:border-indigo-800/80 hover:bg-slate-50/50 dark:hover:bg-slate-700/30"
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg mr-3.5 ${
                    isSelected 
                      ? "bg-white/20 text-white" 
                      : `${step.bgColor} ${step.color} border`
                  }`}>
                    {step.key}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div 
                      className="font-bold"
                      style={{ 
                        color: isSelected ? "white" : "inherit", 
                        fontSize: sizeBody 
                      }}
                    >
                      {step.name}
                    </div>
                    <div 
                      style={{ 
                        color: isSelected ? "#c7d2fe" : "inherit", 
                        fontSize: sizeTiny 
                      }} 
                      className="text-slate-500 dark:text-slate-400 truncate"
                    >
                      {step.engName}
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? "text-white rotate-90 md:rotate-0" : "text-slate-400"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Details Glassmorphic Display Card */}
        <div className="md:col-span-8 bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800 shadow-sm relative min-h-[480px] flex flex-col justify-between">
          <div className="space-y-6">
            {/* Header of details */}
            <div className="flex items-center space-x-4 border-b border-slate-100 dark:border-slate-700/50 pb-5">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${activeStep.bgColor} ${activeStep.color} border border-slate-200/20`}>
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400" style={{ fontSize: sizeTiny }}>
                    Bước {selectedStep + 1}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className="font-semibold text-slate-500 dark:text-slate-400" style={{ fontSize: sizeTiny }}>
                    {activeStep.engName}
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-800 dark:text-slate-100" style={{ fontSize: sizeHeading }}>
                  {activeStep.name} ({activeStep.key === "R1" ? "Read" : activeStep.key === "R2" ? "Recite" : activeStep.key === "R3" ? "Review" : activeStep.name})
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed" style={{ fontSize: sizeBody }}>
              {activeStep.description}
            </p>

            {/* Action Checkpoints */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center space-x-1.5" style={{ fontSize: sizeBody }}>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Các hành động cụ thể:</span>
              </h4>
              <ul className="grid gap-2.5 pl-1">
                {activeStep.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300" style={{ fontSize: sizeSmall }}>
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 font-semibold text-slate-500 mr-2.5 mt-0.5 flex-shrink-0" style={{ fontSize: sizeTiny }}>
                      {idx + 1}
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Self-questions */}
            <div className="bg-slate-50 dark:bg-slate-900/40 p-4.5 rounded-2xl border border-slate-100 dark:border-slate-800/80 space-y-2">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider animate-pulse" style={{ fontSize: sizeTiny }}>
                Câu hỏi tự đặt ra trong đầu:
              </h4>
              <div className="grid gap-2">
                {activeStep.questions.map((q, idx) => (
                  <div key={idx} className="flex items-start text-indigo-950 dark:text-indigo-300 font-medium" style={{ fontSize: sizeSmall }}>
                    <span className="text-indigo-500 mr-2 font-bold">?</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application on 18 Minutes Book */}
            <div className="bg-indigo-50/50 dark:bg-indigo-950/20 p-4.5 rounded-2xl border border-indigo-100/50 dark:border-indigo-950/30 space-y-2">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider flex items-center" style={{ fontSize: sizeTiny }}>
                <Info className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                Ví dụ áp dụng với sách "18 Phút":
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed" style={{ fontSize: sizeSmall }}>
                {activeStep.example18Min}
              </p>
            </div>
          </div>

          {/* Navigation buttons inside card */}
          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700/50 pt-5 mt-6">
            <button
              onClick={() => setSelectedStep(s => Math.max(s - 1, 0))}
              disabled={selectedStep === 0}
              className="px-4 py-2 font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors disabled:opacity-30 disabled:pointer-events-none"
              style={{ fontSize: sizeSmall }}
            >
              Bước trước
            </button>
            <span className="font-bold text-slate-400 dark:text-slate-600" style={{ fontSize: sizeTiny }}>
              {selectedStep + 1} / 5
            </span>
            <button
              onClick={() => setSelectedStep(s => Math.min(s + 1, steps.length - 1))}
              disabled={selectedStep === steps.length - 1}
              className="inline-flex items-center space-x-1 px-4 py-2 rounded-xl font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-30 disabled:pointer-events-none"
              style={{ fontSize: sizeSmall }}
            >
              <span>Bước tiếp theo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SQ3R Diagnostic Assessment Widget */}
      <section className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800 shadow-sm space-y-6">
        <div className="space-y-2">
          <h2 className="font-extrabold text-slate-900 dark:text-slate-100 flex items-center space-x-2" style={{ fontSize: sizeHeading }}>
            <span>Tự Đánh Giá Kỹ Năng Đọc Sách</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed" style={{ fontSize: sizeSmall }}>
            Trả lời 5 câu hỏi nhanh dưới đây để chẩn đoán thói quen đọc sách của bạn và cách tối ưu hóa sự ghi nhớ bằng phương pháp SQ3R.
          </p>
        </div>

        {/* Thang điểm chú thích */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 p-4 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-slate-100 dark:border-slate-800/80" style={{ fontSize: sizeTiny }}>
          <span className="font-bold text-slate-700 dark:text-slate-300 mr-1">Thang điểm đánh giá:</span>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/40 w-5.5 h-5.5 rounded-md inline-flex items-center justify-center text-center text-[10px]">1</span>
            <span className="text-slate-500 dark:text-slate-400">Rất hiếm khi / Không bao giờ</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 w-5.5 h-5.5 border border-slate-200 dark:border-slate-700 rounded-md inline-flex items-center justify-center text-center text-[10px]">2</span>
            <span className="text-slate-500 dark:text-slate-400">Hiếm khi</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 w-5.5 h-5.5 border border-slate-200 dark:border-slate-700 rounded-md inline-flex items-center justify-center text-center text-[10px]">3</span>
            <span className="text-slate-500 dark:text-slate-400">Thỉnh thoảng</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 w-5.5 h-5.5 border border-slate-200 dark:border-slate-700 rounded-md inline-flex items-center justify-center text-center text-[10px]">4</span>
            <span className="text-slate-500 dark:text-slate-400">Thường xuyên</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/40 w-5.5 h-5.5 rounded-md inline-flex items-center justify-center text-center text-[10px]">5</span>
            <span className="text-slate-500 dark:text-slate-400">Luôn luôn / Rất thường xuyên</span>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          {assessmentQuestions.map((q, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-slate-100 dark:border-slate-800/80 gap-3">
              <span className="font-medium text-slate-700 dark:text-slate-300 max-w-xl" style={{ fontSize: sizeBody }}>
                <span className="inline-block text-indigo-500 font-bold mr-1.5">{idx + 1}.</span> {q}
              </span>
              <div className="flex items-center space-x-1.5 flex-shrink-0">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleScoreChange(idx, val)}
                    className={`w-9 h-9 rounded-lg font-semibold transition-all ${
                      scores[idx] === val
                        ? "bg-indigo-600 text-white ring-2 ring-indigo-500/20"
                        : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                    style={{ fontSize: sizeTiny }}
                    title={val === 1 ? "Hiếm khi" : val === 5 ? "Luôn luôn" : `${val}/5`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center pt-4">
          {!showResult ? (
            <button
              onClick={() => setShowResult(true)}
              disabled={scores.some(s => s === 0)}
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-md shadow-indigo-200 dark:shadow-none hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-40 disabled:pointer-events-none"
              style={{ fontSize: sizeBody }}
            >
              Phân tích kết quả đọc sách
            </button>
          ) : (
            <div className="w-full bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-950/40 rounded-2xl p-5 text-center animate-in zoom-in-95 duration-300 space-y-3">
              <div className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest" style={{ fontSize: sizeTiny }}>
                Kết quả chẩn đoán đọc sách
              </div>
              <div className="font-black text-indigo-600 dark:text-indigo-400" style={{ fontSize: sizeTitle }}>
                {result.percentage}% <span className="font-bold text-slate-500" style={{ fontSize: sizeSubtitle }}>({result.total}/25 điểm)</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 max-w-xl mx-auto font-medium leading-relaxed" style={{ fontSize: sizeBody }}>
                {result.diagnosis}
              </p>
              <div className="pt-2 font-semibold text-slate-400 dark:text-slate-600" style={{ fontSize: sizeTiny }}>
                * Thang điểm: 5-12 điểm: Đọc thụ động | 13-19 điểm: Đọc bán chủ động | 20-25 điểm: Đọc chủ động hiệu quả.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800 shadow-sm space-y-6">
        <h2 className="font-extrabold text-slate-900 dark:text-slate-100" style={{ fontSize: sizeHeading }}>
          So Sánh SQ3R & Đọc Truyền Thống
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider" style={{ fontSize: sizeTiny }}>
                <th className="py-3 px-4">Đặc điểm</th>
                <th className="py-3 px-4 bg-indigo-50/30 dark:bg-indigo-950/10 text-indigo-600 dark:text-indigo-400">Phương pháp SQ3R (Chủ động)</th>
                <th className="py-3 px-4">Phương pháp truyền thống (Thụ động)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50" style={{ fontSize: sizeSmall }}>
              <tr>
                <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Tư thế bắt đầu</td>
                <td className="py-4 px-4 bg-indigo-50/20 dark:bg-indigo-950/5 text-slate-600 dark:text-slate-300">
                  Khảo sát tổng quan, lập bản đồ tư duy trước khi đọc chi tiết.
                </td>
                <td className="py-4 px-4 text-slate-500 dark:text-slate-400">
                  Mở trang đầu tiên và bắt đầu đọc dòng chữ đầu tiên ngay lập tức.
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Trạng thái tư duy</td>
                <td className="py-4 px-4 bg-indigo-50/20 dark:bg-indigo-950/5 text-slate-600 dark:text-slate-300">
                  Đặt câu hỏi và đi tìm câu trả lời (luôn đặt câu hỏi 'Tại sao?', 'Như thế nào?').
                </td>
                <td className="py-4 px-4 text-slate-500 dark:text-slate-400">
                  Đón nhận thông tin một chiều, tin tưởng tuyệt đối, ít suy ngẫm phản biện.
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Cơ chế ghi nhớ</td>
                <td className="py-4 px-4 bg-indigo-50/20 dark:bg-indigo-950/5 text-slate-600 dark:text-slate-300">
                  Sử dụng kỹ thuật Recall (tự thuộc lòng/nhớ lại) và Review (ôn tập) có chu kỳ.
                </td>
                <td className="py-4 px-4 text-slate-500 dark:text-slate-400">
                  Đọc lướt qua một lượt, hiếm khi dừng lại suy ngẫm hay kiểm tra lại kiến thức.
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Mức độ tập trung</td>
                <td className="py-4 px-4 bg-indigo-50/20 dark:bg-indigo-950/5 text-slate-600 dark:text-slate-300">
                  Cực kỳ cao do não bộ luôn hoạt động tích cực để giải quyết câu hỏi.
                </td>
                <td className="py-4 px-4 text-slate-500 dark:text-slate-400">
                  Dễ buồn ngủ, dễ xao nhãng bởi suy nghĩ vẩn vơ vì não bộ rảnh rỗi.
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Hiệu quả dài hạn</td>
                <td className="py-4 px-4 bg-indigo-50/20 dark:bg-indigo-950/5 font-semibold text-indigo-700 dark:text-indigo-300">
                  Khắc ghi sâu, lưu trữ vào trí nhớ dài hạn, dễ dàng trích xuất để áp dụng.
                </td>
                <td className="py-4 px-4 text-slate-500 dark:text-slate-400">
                  Hiệu ứng 'quên sạch sau khi gấp sách' (mất hơn 80% lượng thông tin sau 24h).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
