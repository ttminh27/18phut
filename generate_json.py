import json

data = {
  "39_34. Mối Quan Hệ Hợp Tác Mất Thời.md": [
    {
      "id": 1,
      "question": "Điều gì được coi là \"mối quan hệ hợp tác mất thời gian\" khiến nhiều nhà lãnh đạo cảm thấy lãng phí nhất?",
      "options": [
        "Các cuộc trò chuyện phím nơi công sở và đi công tác xa.",
        "Các cuộc họp không cần thiết, email không quan trọng và các slide PowerPoint dài lê thê.",
        "Việc nhân viên mới liên tục hỏi đáp và những bữa trưa kéo dài.",
        "Những cuộc điện thoại ngoài giờ làm việc và việc đào tạo nhân sự mới."
      ],
      "answer": "Các cuộc họp không cần thiết, email không quan trọng và các slide PowerPoint dài lê thê."
    },
    {
      "id": 2,
      "question": "Mục đích chính của việc áp dụng \"3 câu hỏi kiểm tra\" trước khi nhận lời một yêu cầu là gì?",
      "options": [
        "Để tìm cách đùn đẩy công việc cho người khác và giảm bớt trách nhiệm.",
        "Để chứng tỏ quyền lực của bạn và khiến người khác phải chờ đợi.",
        "Để sử dụng thời gian vào những việc mang lại giá trị to lớn nhất và bảo đảm ưu tiên của bản thân.",
        "Để phân tích xem người yêu cầu có thật sự cần giúp đỡ hay không."
      ],
      "answer": "Để sử dụng thời gian vào những việc mang lại giá trị to lớn nhất và bảo đảm ưu tiên của bản thân."
    },
    {
      "id": 3,
      "question": "Bạn nên làm gì nếu một yêu cầu (ngay cả từ sếp) KHÔNG vượt qua được bài kiểm tra 3 câu hỏi của bạn?",
      "options": [
        "Cố gắng hoàn thành nó một cách nhanh nhất có thể để không làm sếp phật lòng.",
        "Từ chối, chuyển nó cho người khác, hoặc lên kế hoạch vào lúc khác khi có đủ thông tin.",
        "Làm qua loa để chứng minh rằng bạn không phải là người phù hợp cho việc này.",
        "Phàn nàn với đồng nghiệp về việc sếp giao việc không hợp lý."
      ],
      "answer": "Từ chối, chuyển nó cho người khác, hoặc lên kế hoạch vào lúc khác khi có đủ thông tin."
    },
    {
      "id": 4,
      "question": "Tác giả cảnh báo điều trớ trêu nào khi chúng ta luôn cố gắng đồng ý giúp đỡ người khác để \"trở nên có ích\"?",
      "options": [
        "Chúng ta sẽ được thăng chức quá nhanh nhưng lại không có đủ kỹ năng.",
        "Người khác sẽ đánh giá thấp khả năng của chúng ta và giao những việc lặt vặt.",
        "Chúng ta sẽ làm người khác ỷ lại và không chịu tự học hỏi.",
        "Để công việc khiến ta quá tải, đặc biệt là việc ngoài lề, lại chính là thứ khiến ta trở nên vô dụng."
      ],
      "answer": "Để công việc khiến ta quá tải, đặc biệt là việc ngoài lề, lại chính là thứ khiến ta trở nên vô dụng."
    }
  ],
  "40_35. Nhưng Bố Ơi….md": [
    {
      "id": 1,
      "question": "Tác giả đã mắc phải sai lầm gì khi để hai cô con gái tự ý bước vào phòng làm việc?",
      "options": [
        "Ông đã quát mắng chúng khi đang nói chuyện điện thoại với khách hàng.",
        "Ông đã quên khóa cửa phòng lại như mọi ngày.",
        "Ông đã phá vỡ một quy tắc cốt yếu: Không bao giờ phá vỡ quy tắc đã đặt ra.",
        "Ông đã giải thích luật lệ cho chúng một cách quá phức tạp và khó hiểu."
      ],
      "answer": "Ông đã phá vỡ một quy tắc cốt yếu: Không bao giờ phá vỡ quy tắc đã đặt ra."
    },
    {
      "id": 2,
      "question": "Theo nghiên cứu của Microsoft, hậu quả tồi tệ nhất của việc liên tục bị làm phiền trong lúc làm việc là gì?",
      "options": [
        "Nhân viên trở nên cáu gắt và gây gổ với đồng nghiệp thường xuyên hơn.",
        "40% số lần bị làm phiền, người ta đã không quay lại tiếp tục công việc họ đang làm trước đó.",
        "Năng suất công việc giảm sút 80% do nhân viên phải giải quyết quá nhiều việc lặt vặt.",
        "Người lao động phải làm thêm trung bình 2 giờ mỗi ngày để bù đắp thời gian đã mất."
      ],
      "answer": "40% số lần bị làm phiền, người ta đã không quay lại tiếp tục công việc họ đang làm trước đó."
    },
    {
      "id": 3,
      "question": "Vì sao thư ký của Sean liên tục phá vỡ quy tắc \"không làm phiền\" của anh?",
      "options": [
        "Vì cô ấy không quan tâm đến cảm giác của sếp và muốn chứng tỏ mình.",
        "Vì những câu hỏi của cô ấy luôn là những việc khẩn cấp không thể chờ đợi.",
        "Vì Sean luôn không nhất quán; anh vẫn dừng tay và trả lời câu hỏi của cô mỗi khi bị làm phiền.",
        "Vì cô ấy cho rằng quy định đó chỉ áp dụng đối với những nhân viên khác."
      ],
      "answer": "Vì Sean luôn không nhất quán; anh vẫn dừng tay và trả lời câu hỏi của cô mỗi khi bị làm phiền."
    },
    {
      "id": 4,
      "question": "Để buộc người khác tôn trọng ranh giới và quy tắc bạn đặt ra, bạn phải sẵn sàng chấp nhận điều gì?",
      "options": [
        "Chấp nhận bị coi là một người sếp độc tài và xa cách.",
        "Chấp nhận để mặc cho công việc bị đình trệ.",
        "Tạo ra và đối diện với sự không thoải mái cho cả bạn và người đó khi bạn kiên quyết từ chối.",
        "Dành hàng giờ đồng hồ mỗi ngày để giải thích lý do đằng sau các quy tắc đó."
      ],
      "answer": "Tạo ra và đối diện với sự không thoải mái cho cả bạn và người đó khi bạn kiên quyết từ chối."
    }
  ],
  "41_36. Lần Thứ Ba.md": [
    {
      "id": 1,
      "question": "Nguyên lý của \"Quy tắc 3 lần\" mà tác giả sử dụng là gì?",
      "options": [
        "Góp ý ngay lập tức, cảnh cáo ở lần thứ hai và sa thải ở lần thứ ba.",
        "Bỏ qua lần đầu, phàn nàn với người khác ở lần hai, và đối chất trực tiếp ở lần ba.",
        "Ghi nhận lần đầu, quan sát kỹ và dự tính ở lần hai, nói chuyện trực tiếp về vấn đề ở lần ba.",
        "Phạt tiền lần đầu, lập biên bản lần hai, và đình chỉ công việc ở lần ba."
      ],
      "answer": "Ghi nhận lần đầu, quan sát kỹ và dự tính ở lần hai, nói chuyện trực tiếp về vấn đề ở lần ba."
    },
    {
      "id": 2,
      "question": "Tại sao tác giả khuyên không nên giải quyết mọi vấn đề ngay từ lần đầu tiên nó xảy ra?",
      "options": [
        "Vì ai cũng có lúc bất cẩn và việc nhảy vào giải quyết từng vấn đề ngay lập tức sẽ khiến bạn mất kiểm soát.",
        "Vì người làm sai sẽ luôn phủ nhận nếu bạn không có đủ bằng chứng.",
        "Vì việc giải quyết vấn đề ngay lập tức thường tốn nhiều chi phí hơn so với việc đợi nó tự biến mất.",
        "Vì nhân viên có thể sẽ lập tức xin nghỉ việc nếu cảm thấy bị bắt bẻ từ những lỗi nhỏ nhất."
      ],
      "answer": "Vì ai cũng có lúc bất cẩn và việc nhảy vào giải quyết từng vấn đề ngay lập tức sẽ khiến bạn mất kiểm soát."
    },
    {
      "id": 3,
      "question": "Điều quan trọng nhất mà \"Quy tắc 3 lần\" mang lại cho bạn khi quyết định nói chuyện với ai đó là gì?",
      "options": [
        "Cho bạn niềm tin chắc chắn rằng sự việc đó là một thói quen lặp lại chứ không phải do bạn tưởng tượng ra.",
        "Cho phép bạn có đủ thời gian để thu thập chữ ký đồng tình từ các nhân viên khác.",
        "Giúp bạn tìm ra được người thay thế trước khi trực tiếp đối mặt với nhân viên đó.",
        "Tạo cớ để bạn có thể trừ lương nhân viên một cách hợp pháp."
      ],
      "answer": "Cho bạn niềm tin chắc chắn rằng sự việc đó là một thói quen lặp lại chứ không phải do bạn tưởng tượng ra."
    },
    {
      "id": 4,
      "question": "Khi đối thoại với một nhân viên ở \"lần thứ ba\", cách mở lời nào thể hiện đúng tinh thần của tác giả?",
      "options": [
        "\"Tại sao anh luôn làm sai những điều cơ bản nhất vậy?\"",
        "\"Đây là lần thứ ba tôi thấy chuyện này xảy ra và tôi muốn nói chuyện với anh về nó.\"",
        "\"Anh đã làm tôi thất vọng quá nhiều lần, anh nên tự viết đơn kiểm điểm.\"",
        "\"Tôi vừa bắt tại trận anh làm sai, anh có gì để bào chữa không?\""
      ],
      "answer": "\"Đây là lần thứ ba tôi thấy chuyện này xảy ra và tôi muốn nói chuyện với anh về nó.\""
    }
  ],
  "42_37. Chúng Ta Vẫn Chưa Muộn.md": [
    {
      "id": 1,
      "question": "Theo tác giả, \"thời gian trung chuyển\" (transition time) là gì và có vai trò như thế nào?",
      "options": [
        "Là thời gian di chuyển vật lý giữa các địa điểm, thường là vô ích và cần được loại bỏ hoàn toàn.",
        "Là thời gian trống giữa các công việc để nghỉ ngơi, nhưng thường bị lãng phí vì lướt web hoặc dùng mạng xã hội.",
        "Là khoảng thời gian trước một sự kiện hoặc cuộc họp, có giá trị to lớn để suy nghĩ, lên kế hoạch và chuẩn bị.",
        "Là khoảng thời gian bị trễ hẹn do những sự cố bất khả kháng trên đường đi."
      ],
      "answer": "Là khoảng thời gian trước một sự kiện hoặc cuộc họp, có giá trị to lớn để suy nghĩ, lên kế hoạch và chuẩn bị."
    },
    {
      "id": 2,
      "question": "Tại sao những người có \"nhu cầu rất cao về việc trở nên hiệu quả\" lại thường xuyên đi muộn?",
      "options": [
        "Họ coi thường những người có mặt đúng giờ.",
        "Họ ôm đồm quá nhiều việc và ảo tưởng rằng mình có thể di chuyển/chuyển đổi nhanh hơn khả năng thực tế của con người, bỏ qua thời gian trung chuyển.",
        "Họ cho rằng đến muộn là một chiến thuật đàm phán để chứng tỏ họ quan trọng hơn.",
        "Họ dành quá nhiều thời gian để chuẩn bị chu đáo đến mức luôn lố giờ."
      ],
      "answer": "Họ ôm đồm quá nhiều việc và ảo tưởng rằng mình có thể di chuyển/chuyển đổi nhanh hơn khả năng thực tế của con người, bỏ qua thời gian trung chuyển."
    },
    {
      "id": 3,
      "question": "Việc bỏ qua thời gian trung chuyển dẫn đến hệ quả mỉa mai nào đối với những người muốn tối ưu hóa hiệu suất?",
      "options": [
        "Họ trở nên quá xuất sắc đến mức không ai đuổi kịp tốc độ làm việc của họ.",
        "Nó gây ra sự không hiệu quả: cuộc họp kéo dài vô ích, thiếu định hướng vì không có thời gian dự tính trước.",
        "Họ được giao thêm nhiều việc hơn vì lúc nào cũng tỏ ra bận rộn.",
        "Nó khiến các cuộc họp kết thúc quá sớm và không giải quyết được vấn đề gì."
      ],
      "answer": "Nó gây ra sự không hiệu quả: cuộc họp kéo dài vô ích, thiếu định hướng vì không có thời gian dự tính trước."
    },
    {
      "id": 4,
      "question": "Tác giả đề xuất cách thức nào để đưa thời gian trung chuyển vào thực tế một cách hiệu quả?",
      "options": [
        "Chỉ tham gia các cuộc họp vào buổi sáng và dành toàn bộ buổi chiều làm thời gian trung chuyển.",
        "Yêu cầu mọi người phải đến sớm 30 phút trước mọi cuộc họp để \"làm ấm\".",
        "Lên lịch kết thúc các buổi họp sớm hơn dự định ít nhất 15 phút để chuẩn bị cho công việc tiếp theo.",
        "Bắt đầu mọi cuộc họp trễ 10 phút để đảm bảo ai cũng có thời gian nghỉ ngơi."
      ],
      "answer": "Lên lịch kết thúc các buổi họp sớm hơn dự định ít nhất 15 phút để chuẩn bị cho công việc tiếp theo."
    }
  ],
  "43_38. Con Không Muốn Đến Lớp Học.md": [
    {
      "id": 1,
      "question": "Trong trường hợp con gái tác giả khóc lóc vì lớp học trượt tuyết, việc kéo dài thời gian dỗ dành đã gây ra hậu quả gì?",
      "options": [
        "Giúp con bé bình tĩnh lại và tự nguyện bước vào lớp học với niềm vui.",
        "Khiến con bé càng thêm sợ hãi, khốn khổ và kéo dài sự bi thảm của khoảng thời gian trung chuyển.",
        "Thuyết phục được giáo viên miễn giảm học phí cho ngày hôm đó.",
        "Khiến tác giả nhận ra rằng lớp học đó không an toàn và đưa con về nhà."
      ],
      "answer": "Khiến con bé càng thêm sợ hãi, khốn khổ và kéo dài sự bi thảm của khoảng thời gian trung chuyển."
    },
    {
      "id": 2,
      "question": "Tại sao việc chuẩn bị tâm lý quá kỹ càng đôi khi lại không tốt khi đối mặt với một thay đổi lớn?",
      "options": [
        "Vì nó khiến nhân viên tự mãn và chủ quan.",
        "Vì người ta sẽ dành toàn bộ năng lượng để mong đợi nó mà bỏ bê công việc hiện tại.",
        "Vì việc than vãn và lo nghĩ quá nhiều trong thời gian chờ đợi sẽ vắt kiệt sức lực và khiến chúng ta thấy quyết định đó tồi tệ hơn thực tế.",
        "Vì nó thường dẫn đến việc hủy bỏ dự án do tốn quá nhiều ngân sách cho khâu chuẩn bị."
      ],
      "answer": "Vì việc than vãn và lo nghĩ quá nhiều trong thời gian chờ đợi sẽ vắt kiệt sức lực và khiến chúng ta thấy quyết định đó tồi tệ hơn thực tế."
    },
    {
      "id": 3,
      "question": "Nếu bạn cần thực hiện một việc mà bạn cảm thấy khó khăn và không thoải mái, chiến lược tốt nhất là gì?",
      "options": [
        "Cố gắng dời nó sang cuối tuần để có thêm thời gian suy nghĩ.",
        "Thực hiện nó ngay đầu tiên trong buổi sáng để giảm thiểu thời gian lo lắng về nó.",
        "Giao nó cho người khác và chỉ tham gia vào khâu kiểm tra cuối cùng.",
        "Chờ đợi đến khi bạn có đủ cảm hứng và động lực để hoàn thành nó một cách hoàn hảo."
      ],
      "answer": "Thực hiện nó ngay đầu tiên trong buổi sáng để giảm thiểu thời gian lo lắng về nó."
    },
    {
      "id": 4,
      "question": "Bước quan trọng cuối cùng (bước 3) để giúp người khác tăng tốc vượt qua sự trung chuyển mà không bị mắc kẹt là gì?",
      "options": [
        "Liên tục nhắc nhở họ về những lợi ích của sự thay đổi.",
        "Bù đắp cho họ bằng phần thưởng vật chất ngay lập tức.",
        "Đừng lặp lại quan điểm của bạn sau khi đã lắng nghe và chia sẻ rõ ràng một lần duy nhất.",
        "Chỉ trích sự yếu đuối của họ để thúc đẩy họ hành động."
      ],
      "answer": "Đừng lặp lại quan điểm của bạn sau khi đã lắng nghe và chia sẻ rõ ràng một lần duy nhất."
    }
  ],
  "44_39. Chúng Tôi Sẽ Bê Trễ..md": [
    {
      "id": 1,
      "question": "Nguyên nhân sâu xa nào khiến nhiều người không thể hoàn toàn gác lại công việc trong kỳ nghỉ mát?",
      "options": [
        "Họ sợ rằng công ty sẽ ngừng hoạt động và phá sản nếu thiếu họ.",
        "Nhu cầu cảm thấy mình bận rộn, có giá trị và không thể thay thế khiến họ tự ràng buộc mình vào công việc.",
        "Các thiết bị công nghệ hiện đại bắt buộc họ phải online 24/7 do quy định của công ty.",
        "Họ muốn kiếm thêm tiền làm ngoài giờ trong lúc đang đi du lịch."
      ],
      "answer": "Nhu cầu cảm thấy mình bận rộn, có giá trị và không thể thay thế khiến họ tự ràng buộc mình vào công việc."
    },
    {
      "id": 2,
      "question": "Tác giả nhận ra điều gì thú vị nhất sau khi hoàn toàn ngắt liên lạc một tuần ở Grand Canyon?",
      "options": [
        "Khách hàng đã vô cùng tức giận và hủy bỏ tất cả hợp đồng.",
        "Công ty đã thuê một người khác thế chỗ ông ngay lập tức.",
        "Một nửa số vấn đề gửi đến ông đã được nhóm của ông tự tìm cách giải quyết trong lúc ông vắng mặt.",
        "Không một ai trong công ty nhớ đến ông hay gửi bất kỳ tin nhắn nào."
      ],
      "answer": "Một nửa số vấn đề gửi đến ông đã được nhóm của ông tự tìm cách giải quyết trong lúc ông vắng mặt."
    },
    {
      "id": 3,
      "question": "Phương pháp \"Liên lạc có sắp xếp\" giúp ích như thế nào cho kỳ nghỉ (và cả cuộc sống hàng ngày)?",
      "options": [
        "Bạn chỉ cần trả lời những email được đánh dấu \"khẩn cấp\" và lờ đi tất cả phần còn lại.",
        "Nó yêu cầu bạn giao điện thoại cho người khác giữ và chỉ được kiểm tra vào ngày cuối cùng.",
        "Giới hạn một khoảng thời gian nhất định trong ngày để xử lý công việc, giúp giải phóng hoàn toàn thời gian còn lại mà không bị gián đoạn.",
        "Nó tự động gửi email phản hồi rằng bạn đang đi nghỉ và không bao giờ đọc thư."
      ],
      "answer": "Giới hạn một khoảng thời gian nhất định trong ngày để xử lý công việc, giúp giải phóng hoàn toàn thời gian còn lại mà không bị gián đoạn."
    },
    {
      "id": 4,
      "question": "Sự \"tự làm mình phân tâm\" trong lúc làm việc cô độc thường bắt nguồn từ đâu?",
      "options": [
        "Do đồng nghiệp liên tục gõ cửa phòng dù bạn đã yêu cầu không làm phiền.",
        "Do áp lực từ sếp bắt buộc bạn phải kiểm tra email mỗi phút.",
        "Sự cám dỗ của công nghệ, sự cầu toàn thái quá, hoặc cảm giác muốn bỏ cuộc khi nỗ lực không mang lại kết quả ngay.",
        "Do môi trường làm việc quá ồn ào và thiếu các công cụ hỗ trợ cần thiết."
      ],
      "answer": "Sự cám dỗ của công nghệ, sự cầu toàn thái quá, hoặc cảm giác muốn bỏ cuộc khi nỗ lực không mang lại kết quả ngay."
    }
  ],
  "45_41. Obama Có Đeo Dây Chuyền Ngọc.md": [
    {
      "id": 1,
      "question": "\"Nghiên cứu về kẹo dẻo\" của Đại học Stanford chứng minh rằng những đứa trẻ có thể trì hoãn sự cám dỗ là nhờ vào điều gì?",
      "options": [
        "Chúng có kỷ luật thép và ý chí mạnh mẽ hơn bạn bè đồng trang lứa.",
        "Chúng bị đe dọa bằng hình phạt nếu ăn viên kẹo dẻo.",
        "Chúng áp dụng phương pháp phân tâm (không nhìn vào kẹo, hát, nhắm mắt) để tránh né cám dỗ.",
        "Chúng không hề thích đồ ngọt nên việc chờ đợi là rất dễ dàng."
      ],
      "answer": "Chúng áp dụng phương pháp phân tâm (không nhìn vào kẹo, hát, nhắm mắt) để tránh né cám dỗ."
    },
    {
      "id": 2,
      "question": "Khi đối mặt với \"thử thách của sự kiềm chế\" (ví dụ: không ăn bánh, không nói nhiều), việc dùng ý chí tập trung kháng cự sẽ dẫn đến kết quả gì?",
      "options": [
        "Sẽ giúp chúng ta nhanh chóng vượt qua cám dỗ và đạt được mục tiêu.",
        "Sẽ làm cám dỗ trở nên khó cưỡng hơn và khiến chúng ta dễ dàng thất bại.",
        "Sẽ khiến bộ não trở nên kiệt sức và mất khả năng ghi nhớ ngắn hạn.",
        "Sẽ tạo ra một thói quen tốt vĩnh viễn chỉ sau 21 ngày."
      ],
      "answer": "Sẽ làm cám dỗ trở nên khó cưỡng hơn và khiến chúng ta dễ dàng thất bại."
    },
    {
      "id": 3,
      "question": "Quy tắc đơn giản mà tác giả đưa ra để kiểm soát hành vi của bản thân là gì?",
      "options": [
        "Khi muốn làm một điều gì đó, hãy tập trung. Khi không muốn làm một điều gì đó, hãy xao nhãng.",
        "Luôn luôn đối mặt trực diện với nỗi sợ hãi cho đến khi nó tự biến mất.",
        "Phạt bản thân mỗi khi thất bại và tự thưởng khi thành công.",
        "Ghi chép lại mọi hành vi mỗi ngày để phân tích lý do tại sao bạn lại làm vậy."
      ],
      "answer": "Khi muốn làm một điều gì đó, hãy tập trung. Khi không muốn làm một điều gì đó, hãy xao nhãng."
    },
    {
      "id": 4,
      "question": "Tác giả gợi ý giải pháp nào khi chúng ta bị mất năng suất và sức khỏe do \"lo sợ\" (về kinh tế, mất việc, bệnh tật)?",
      "options": [
        "Đọc thêm nhiều tin tức để trang bị kỹ kiến thức về những mối nguy đó.",
        "Tự tạo ra sự phân tâm có giá trị (đọc sách, xem phim, lao vào công việc) để ngừng nghĩ về nỗi sợ.",
        "Thảo luận liên tục với người khác về nỗi sợ đó để tìm sự đồng cảm.",
        "Dùng thuốc an thần để giảm bớt sự lo âu căng thẳng mỗi đêm."
      ],
      "answer": "Tự tạo ra sự phân tâm có giá trị (đọc sách, xem phim, lao vào công việc) để ngừng nghĩ về nỗi sợ."
    }
  ],
  "46_42. Bạn Có Phê Thuốc Khi Đang Làm.md": [
    {
      "id": 1,
      "question": "Nghiên cứu cho thấy việc để email và các cuộc gọi làm mất tập trung (làm nhiều việc cùng lúc) có ảnh hưởng tồi tệ như thế nào đến trí tuệ?",
      "options": [
        "Nó giúp bộ não linh hoạt hơn nhưng làm giảm khả năng giao tiếp.",
        "Nó làm giảm chỉ số thông minh (IQ) tới 10 điểm, ngang với hậu quả của một đêm mất ngủ hoặc hút cần sa.",
        "Nó tăng tốc độ xử lý thông tin nhưng làm mất trí nhớ dài hạn.",
        "Nó không gây hậu quả gì nếu bạn đã được luyện tập thói quen này từ lâu."
      ],
      "answer": "Nó làm giảm chỉ số thông minh (IQ) tới 10 điểm, ngang với hậu quả của một đêm mất ngủ hoặc hút cần sa."
    },
    {
      "id": 2,
      "question": "Sự thật về việc \"luyện tập thực hiện nhiều công việc cùng lúc\" là gì?",
      "options": [
        "Luyện tập sẽ giúp bạn trở thành người đa nhiệm hoàn hảo và tăng năng suất gấp đôi.",
        "Người càng làm nhiều việc cùng lúc thì càng kém khả năng trong việc đó; luyện tập đa nhiệm chỉ chống lại bạn.",
        "Chỉ những người có chỉ số IQ bẩm sinh cực cao mới có thể thực hành đa nhiệm hiệu quả.",
        "Đa nhiệm chỉ hiệu quả khi bạn kết hợp một việc chân tay với một việc trí óc."
      ],
      "answer": "Người càng làm nhiều việc cùng lúc thì càng kém khả năng trong việc đó; luyện tập đa nhiệm chỉ chống lại bạn."
    },
    {
      "id": 3,
      "question": "Tác giả phát hiện ra lợi ích bất ngờ nào về \"sự kiên nhẫn\" trong tuần lễ thử nghiệm KHÔNG làm nhiều việc một lúc?",
      "options": [
        "Ông có thể kiên nhẫn ngồi họp hàng giờ đồng hồ dù chủ đề cực kỳ nhàm chán.",
        "Ông trở nên cực kỳ thiếu kiên nhẫn với những việc vô nghĩa tốn thời gian, nhưng lại rất kiên nhẫn với những việc thực sự hữu ích.",
        "Ông có đủ kiên nhẫn để đọc và trả lời từng email một ngay lập tức.",
        "Sự kiên nhẫn giúp ông không bao giờ nổi nóng với bất kỳ ai dù họ làm sai."
      ],
      "answer": "Ông trở nên cực kỳ thiếu kiên nhẫn với những việc vô nghĩa tốn thời gian, nhưng lại rất kiên nhẫn với những việc thực sự hữu ích."
    },
    {
      "id": 4,
      "question": "Một trong những cách tác giả đề xuất để chống lại cám dỗ ôm đồm nhiều việc cùng lúc là gì?",
      "options": [
        "Sử dụng các phần mềm chặn trang web giải trí trên máy tính.",
        "Nhờ đồng nghiệp nhắc nhở mỗi khi thấy bạn cầm điện thoại lên.",
        "Đặt ra những thời hạn ngắn đến mức không thực tế (như giảm một nửa thời gian làm việc dự kiến) để buộc bản thân phải tập trung cao độ.",
        "Uống nhiều cà phê để luôn tỉnh táo và có thể xử lý mọi việc cùng một lúc."
      ],
      "answer": "Đặt ra những thời hạn ngắn đến mức không thực tế (như giảm một nửa thời gian làm việc dự kiến) để buộc bản thân phải tập trung cao độ."
    }
  ],
  "47_43. Vấn Đề Không Phải Là Những Kỹ.md": [
    {
      "id": 1,
      "question": "Điều gì trong văn hóa của người Iceland giúp họ hạnh phúc và có nhiều nghệ sĩ sáng tạo?",
      "options": [
        "Họ có hệ thống phúc lợi xã hội trả tiền cho bất kỳ ai muốn làm nghệ thuật.",
        "Họ không coi trọng vật chất và chỉ sống hòa mình với thiên nhiên.",
        "Văn hóa của họ không nhấn mạnh sự thất bại, nên mọi người không sợ sự không hoàn hảo và tự tin bắt tay vào làm.",
        "Họ có gen bẩm sinh về khả năng sáng tạo nghệ thuật ưu việt hơn các quốc gia khác."
      ],
      "answer": "Văn hóa của họ không nhấn mạnh sự thất bại, nên mọi người không sợ sự không hoàn hảo và tự tin bắt tay vào làm."
    },
    {
      "id": 2,
      "question": "Theo tác giả, vấn đề lớn nhất cản trở những người theo \"chủ nghĩa cầu toàn\" bắt đầu một dự án là gì?",
      "options": [
        "Họ không có đủ tài chính để đầu tư cho sự hoàn hảo.",
        "Họ liên tục cảm thấy bản thân mình hoặc sản phẩm của mình chưa đủ sẵn sàng, đủ giỏi để thể hiện ra ngoài.",
        "Họ quá thông minh nên nhìn thấy quá nhiều rủi ro trước khi bắt đầu.",
        "Họ bị đồng nghiệp ganh tị và cố tình cản trở công việc."
      ],
      "answer": "Họ liên tục cảm thấy bản thân mình hoặc sản phẩm của mình chưa đủ sẵn sàng, đủ giỏi để thể hiện ra ngoài."
    },
    {
      "id": 3,
      "question": "Lời khuyên đầu tiên của tác giả để thoát khỏi chủ nghĩa hoàn hảo là gì?",
      "options": [
        "Đừng cố gắng làm một điều lớn lao cho hoàn hảo, hãy bắt đầu bằng một bước nhỏ, có thể thực hiện được để xây dựng sự tự tin.",
        "Hãy tìm một người hướng dẫn xuất sắc để chắc chắn rằng bạn không bao giờ làm sai.",
        "Dành ít nhất 6 tháng chỉ để nghiên cứu và lên kế hoạch tỉ mỉ.",
        "Giao lại công việc khó cho người khác và chỉ nhận phần việc mà bạn chắc chắn sẽ làm tốt."
      ],
      "answer": "Đừng cố gắng làm một điều lớn lao cho hoàn hảo, hãy bắt đầu bằng một bước nhỏ, có thể thực hiện được để xây dựng sự tự tin."
    },
    {
      "id": 4,
      "question": "Đối với một người quản lý, để không \"trở thành chướng ngại vật\" triệt tiêu sự tự tin của nhân viên, họ nên giữ tỷ lệ phê bình như thế nào?",
      "options": [
        "Phê bình 1 lần cho mỗi lỗi sai nhỏ nhất để đảm bảo sự hoàn hảo tuyệt đối.",
        "Quan sát nhân viên làm đúng 7 việc trước khi chỉ ra 1 việc họ làm sai (Tỷ lệ 1/7).",
        "Khen ngợi 3 lần trước khi đưa ra bất kỳ một lời nhắc nhở nào.",
        "Không bao giờ phê bình, chỉ động viên và để nhân viên tự sửa lỗi."
      ],
      "answer": "Quan sát nhân viên làm đúng 7 việc trước khi chỉ ra 1 việc họ làm sai (Tỷ lệ 1/7)."
    }
  ],
  "48_44. Vì Sao Điều Này Không Hiệu Quả.md": [
    {
      "id": 1,
      "question": "Vì sao quy trình đánh giá kết quả hoàn hảo, chi tiết do nhóm của tác giả thiết kế cho 2.000 nhân viên lại thất bại hoàn toàn khi áp dụng?",
      "options": [
        "Vì nó đòi hỏi hệ thống máy tính quá hiện đại mà công ty không có.",
        "Vì nó \"hoàn hảo\" đối với tác giả, nhưng không có chỗ cho sự tùy chỉnh để phù hợp với từng cá nhân sử dụng nó.",
        "Vì nhóm của tác giả đã không tổ chức đủ các buổi tập huấn cho nhân viên.",
        "Vì các nhân viên cố tình đình công để đòi tăng lương trước khi áp dụng hệ thống mới."
      ],
      "answer": "Vì nó \"hoàn hảo\" đối với tác giả, nhưng không có chỗ cho sự tùy chỉnh để phù hợp với từng cá nhân sử dụng nó."
    },
    {
      "id": 2,
      "question": "Câu hỏi \"thần thánh\" nào tác giả luôn dùng khi trình bày hệ thống \"hoàn thành một nửa\" cho người khác?",
      "options": [
        "\"Tại sao điều này không có tác dụng với bạn?\"",
        "\"Anh/chị có thấy tôi đã làm việc vất vả thế nào không?\"",
        "\"Làm sao để chúng ta có thể áp dụng cái này nhanh nhất?\"",
        "\"Anh/chị có đồng ý rằng hệ thống này là tốt nhất không?\""
      ],
      "answer": "\"Tại sao điều này không có tác dụng với bạn?\""
    },
    {
      "id": 3,
      "question": "Lợi ích lớn nhất của việc trình bày một bản kế hoạch, sản phẩm hoặc mô tả công việc \"chỉ mới hoàn thành một nửa\" là gì?",
      "options": [
        "Nó giúp bạn tiết kiệm 50% thời gian làm việc để có thể đi nghỉ mát dài ngày hơn.",
        "Khách hàng/nhân viên sẽ tự hoàn thiện nó, từ đó họ cảm thấy làm chủ, có động lực và có trách nhiệm với ý tưởng của chính mình.",
        "Bạn có thể dễ dàng đổ lỗi cho người khác nếu dự án thất bại ở phần nửa sau.",
        "Nó khiến người khác nghĩ rằng bạn là một người sáng tạo và không bị bó buộc bởi quy tắc."
      ],
      "answer": "Khách hàng/nhân viên sẽ tự hoàn thiện nó, từ đó họ cảm thấy làm chủ, có động lực và có trách nhiệm với ý tưởng của chính mình."
    },
    {
      "id": 4,
      "question": "Phản ứng tốt nhất của bạn khi một người thay đổi kế hoạch của bạn (thậm chí theo cách kém hiệu quả hơn trong mắt bạn) để biến nó thành của họ là gì?",
      "options": [
        "Tranh luận nảy lửa để giải thích tại sao cách của bạn lại ưu việt hơn hẳn.",
        "Tức giận và tước lại quyền quyết định để tự mình hoàn thành nốt.",
        "Chống lại ý muốn sửa lưng họ, chỉ mỉm cười và chấp nhận, vì sự tận tâm và động lực của họ sẽ bù đắp cho sự thiếu hoàn hảo.",
        "Ngấm ngầm sửa lại theo ý mình sau lưng họ để đảm bảo kết quả hoàn hảo."
      ],
      "answer": "Chống lại ý muốn sửa lưng họ, chỉ mỉm cười và chấp nhận, vì sự tận tâm và động lực của họ sẽ bù đắp cho sự thiếu hoàn hảo."
    }
  ],
  "49_45. Đừng Dùng Bóng Rổ Trong Sân Bóng.md": [
    {
      "id": 1,
      "question": "Ẩn dụ \"Dùng bóng rổ trong sân bóng đá\" mang ý nghĩa gì trong việc đối phó với hoàn cảnh thay đổi?",
      "options": [
        "Cố gắng làm việc chăm chỉ và dùng nhiều sức lực hơn với phương pháp cũ dù môi trường đã hoàn toàn khác.",
        "Sự sáng tạo khi kết hợp nhiều môn thể thao để tạo ra lợi thế bất ngờ.",
        "Việc một người có kỹ năng đa dạng có thể chiến thắng trong bất kỳ lĩnh vực nào.",
        "Bạn không thể chơi bất kỳ trò chơi nào nếu không hiểu rõ luật lệ của nó."
      ],
      "answer": "Cố gắng làm việc chăm chỉ và dùng nhiều sức lực hơn với phương pháp cũ dù môi trường đã hoàn toàn khác."
    },
    {
      "id": 2,
      "question": "Tác giả đưa ra lời khuyên \"kỳ lạ\" nào về sự nhất quán?",
      "options": [
        "Sự nhất quán là chìa khóa duy nhất của một nhà lãnh đạo thành công.",
        "Hãy cố gắng \"không kiên định\"; hãy linh hoạt thay đổi phương pháp để thích ứng với môi trường liên tục biến đổi.",
        "Nhất quán trong suy nghĩ nhưng bốc đồng trong hành động để tạo sự khó đoán.",
        "Chỉ nên kiên định khi bạn chắc chắn 100% rằng mình sẽ chiến thắng."
      ],
      "answer": "Hãy cố gắng \"không kiên định\"; hãy linh hoạt thay đổi phương pháp để thích ứng với môi trường liên tục biến đổi."
    },
    {
      "id": 3,
      "question": "Ba câu hỏi nào bạn nên tự hỏi trước khi hành động hoặc nói trong một tình huống biến động?",
      "options": [
        "Tôi có lợi thế gì? Ai là kẻ thù? Làm sao để rút lui an toàn?",
        "Tình huống gì? Còn ai khác liên quan? Tôi có thể giúp được gì?",
        "Ai là người có lỗi? Hậu quả sẽ lớn đến mức nào? Tôi có thể đổ lỗi cho ai?",
        "Tôi sẽ tốn bao nhiêu chi phí? Khách hàng sẽ nói gì? Sếp có đồng ý không?"
      ],
      "answer": "Tình huống gì? Còn ai khác liên quan? Tôi có thể giúp được gì?"
    },
    {
      "id": 4,
      "question": "Một cuộc khủng hoảng kinh tế hoặc một lời từ chối từ khách hàng thực chất mang lại cơ hội gì theo cách nhìn linh hoạt?",
      "options": [
        "Cơ hội để cắt giảm nhân sự và thanh lọc bộ máy công ty một cách hợp pháp.",
        "Cơ hội để từ bỏ dự án khó khăn và chuyển sang một ngành nghề hoàn toàn mới dễ kiếm tiền hơn.",
        "Đó là cái cớ hoàn hảo để bạn có thể nghỉ ngơi và không phải chịu áp lực doanh số.",
        "Cơ hội thể hiện sự thấu hiểu, mạo hiểm vì đối tác, từ đó xây dựng niềm tin và các mối quan hệ trung thành lâu dài."
      ],
      "answer": "Cơ hội thể hiện sự thấu hiểu, mạo hiểm vì đối tác, từ đó xây dựng niềm tin và các mối quan hệ trung thành lâu dài."
    }
  ],
  "50_KẾT LUẬN.md": [
    {
      "id": 1,
      "question": "Theo tóm tắt ở phần KẾT LUẬN, bước đầu tiên để chuẩn bị cho thành công (ở phần 1) là gì?",
      "options": [
        "Viết ra mọi lỗi lầm trong quá khứ để không bao giờ lặp lại.",
        "Hiểu rõ bản thân, sẵn sàng tự vấn, tạm dừng và tập trung vào kết quả muốn đạt được.",
        "Giao tiếp nhiều hơn với đồng nghiệp để mở rộng mạng lưới quan hệ.",
        "Loại bỏ hoàn toàn sự phân tâm và những người có ảnh hưởng tiêu cực ra khỏi cuộc sống."
      ],
      "answer": "Hiểu rõ bản thân, sẵn sàng tự vấn, tạm dừng và tập trung vào kết quả muốn đạt được."
    },
    {
      "id": 2,
      "question": "Tóm tắt phần 2 trong KẾT LUẬN khuyên bạn làm gì để khám phá bí quyết dẫn đến thành công?",
      "options": [
        "Chọn ra 5 việc chính (trọng tâm) bằng cách kết hợp ưu điểm, khuyết điểm, sự khác biệt và đam mê của bản thân.",
        "Tìm ra 10 thói quen của người thành đạt và bắt chước y hệt.",
        "Đăng ký tham gia các khóa học kỹ năng mềm và quản lý thời gian đắt tiền.",
        "Đầu tư toàn bộ tài sản vào một dự án duy nhất để dồn ép bản thân phải thành công."
      ],
      "answer": "Chọn ra 5 việc chính (trọng tâm) bằng cách kết hợp ưu điểm, khuyết điểm, sự khác biệt và đam mê của bản thân."
    },
    {
      "id": 3,
      "question": "Phần 3 của cuốn sách cung cấp công cụ gì để giúp bạn giữ vững tiến độ và di chuyển theo hướng bạn muốn mỗi ngày?",
      "options": [
        "Quy tắc phân công công việc cho người khác và chỉ giám sát từ xa.",
        "Phần mềm theo dõi năng suất tự động báo cáo lên điện thoại của sếp.",
        "Các cuộc họp khích lệ tinh thần kéo dài 2 giờ mỗi sáng.",
        "Bản kế hoạch 18 phút, danh sách việc cần làm hàng ngày và thời gian biểu."
      ],
      "answer": "Bản kế hoạch 18 phút, danh sách việc cần làm hàng ngày và thời gian biểu."
    },
    {
      "id": 4,
      "question": "Theo bài học đúc kết, khi bạn đã đọc xong quyển sách với rất nhiều kỹ năng, bước tiếp theo tốt nhất là gì?",
      "options": [
        "Bắt đầu áp dụng cùng lúc tất cả các công cụ và kỹ năng để thay đổi cuộc đời ngay lập tức.",
        "Tóm tắt quyển sách thành một bản thuyết trình dài để dạy lại cho nhân viên của mình.",
        "Chọn một thứ duy nhất (một sự thay đổi) mà bạn cho là tạo ra tác động lớn nhất và chỉ tập trung vào nó.",
        "Gác lại mọi thứ và đi nghỉ mát một tháng để định hình lại suy nghĩ."
      ],
      "answer": "Chọn một thứ duy nhất (một sự thay đổi) mà bạn cho là tạo ra tác động lớn nhất và chỉ tập trung vào nó."
    }
  ],
  "51_46. Bạn Không Có 10 Cách Hành Xử.md": [
    {
      "id": 1,
      "question": "Nguyên lý cốt lõi nào đã giúp tác giả giảm được 8 ký trong vòng một tháng rưỡi mà không cần kế hoạch phức tạp?",
      "options": [
        "Ông đã thuê một huấn luyện viên cá nhân nghiêm khắc để theo dõi từng bữa ăn.",
        "Ông chọn đúng một thay đổi duy nhất nhưng có tác động mạnh mẽ nhất: ngừng ăn đường.",
        "Ông nhịn ăn hoàn toàn vào các ngày cuối tuần và chỉ uống nước ép.",
        "Ông bắt đầu đếm chi tiết lượng calo của từng món ăn trước khi cho vào miệng."
      ],
      "answer": "Ông chọn đúng một thay đổi duy nhất nhưng có tác động mạnh mẽ nhất: ngừng ăn đường."
    },
    {
      "id": 2,
      "question": "Tại sao đa số các chương trình ăn kiêng hoặc thay đổi hành vi phức tạp lại thường thất bại về lâu dài?",
      "options": [
        "Vì chúng quá phức tạp, tốn kém, phiền phức và bắt ta phải đưa ra quá nhiều quyết định vụn vặt.",
        "Vì tác giả của chúng cố tình viết sai để người đọc phải mua thêm sách hướng dẫn.",
        "Vì cơ thể con người sinh ra đã được lập trình để không bao giờ có thể thay đổi thói quen.",
        "Vì không ai có thể mua được các nguyên liệu đắt đỏ được yêu cầu trong sách."
      ],
      "answer": "Vì chúng quá phức tạp, tốn kém, phiền phức và bắt ta phải đưa ra quá nhiều quyết định vụn vặt."
    },
    {
      "id": 3,
      "question": "Khi thiết kế chương trình tập huấn kỹ năng lãnh đạo mới cho một công ty lớn, tác giả đã khuyên họ điều gì?",
      "options": [
        "Đừng vứt bỏ chương trình cũ, hãy thu gọn nó và chỉ tập trung 100% nỗ lực vào yếu tố cốt lõi nhất (như sự kết nối).",
        "Hãy sao chép mô hình lãnh đạo của quân đội để đảm bảo tính kỷ luật tuyệt đối.",
        "Xóa bỏ hoàn toàn hệ thống cũ vì nó đã lỗi thời và mua một bản quyền hệ thống của nước ngoài.",
        "Trả tiền thưởng thật cao cho những ai thuộc lòng tất cả các triết lý lãnh đạo."
      ],
      "answer": "Đừng vứt bỏ chương trình cũ, hãy thu gọn nó và chỉ tập trung 100% nỗ lực vào yếu tố cốt lõi nhất (như sự kết nối)."
    },
    {
      "id": 4,
      "question": "Trong ví dụ về cửa hàng bán lẻ với \"10 cách hành xử vàng\", vì sao việc nhân viên thực hiện tới 9/10 hành vi vẫn không làm tăng doanh số?",
      "options": [
        "Vì khách hàng ngày nay quá thông minh và không thích bị nhân viên bán hàng tiếp cận.",
        "Vì giá cả sản phẩm quá đắt đỏ so với thị trường nên thái độ tốt cũng không cứu vãn được.",
        "Vì quản lý cửa hàng đã đo lường sai dữ liệu thực tế.",
        "Vì hành vi duy nhất họ bỏ lỡ (tìm hiểu nhu cầu khách) mới chính là hành vi duy nhất có tác động thực sự đến doanh số."
      ],
      "answer": "Vì hành vi duy nhất họ bỏ lỡ (tìm hiểu nhu cầu khách) mới chính là hành vi duy nhất có tác động thực sự đến doanh số."
    }
  ],
  "52_LỜI CẢM ƠN.md": [
    {
      "id": 1,
      "question": "Trong \"Lời Cảm Ơn\", tác giả có góc nhìn như thế nào về quá trình viết sách của mình?",
      "options": [
        "Đó là một nỗ lực trong đơn độc, không ai có thể hiểu được triết lý của ông cho đến khi hoàn thành.",
        "Quyển sách có rất nhiều dấu tay của người khác và ông biết ơn vì sự ủng hộ không hề đơn độc đó.",
        "Đó là một công việc kinh doanh thuần túy, mọi lời cảm ơn đều là xã giao.",
        "Ông cảm thấy hối hận vì đã nhờ vả quá nhiều người để hoàn thành quyển sách này."
      ],
      "answer": "Quyển sách có rất nhiều dấu tay của người khác và ông biết ơn vì sự ủng hộ không hề đơn độc đó."
    },
    {
      "id": 2,
      "question": "Tác giả bày tỏ sự biết ơn đối với những người đọc bản thảo (như Anthony, Howie, Eleanor) về điều gì?",
      "options": [
        "Vì họ đã tự bỏ tiền túi ra để xuất bản quyển sách giúp ông.",
        "Vì họ đã viết lại toàn bộ những chương mà ông bị bí ý tưởng.",
        "Vì những nhận xét của họ giúp tác phẩm hoàn chỉnh hơn, ngay cả khi ông không làm theo lời khuyên của họ.",
        "Vì họ đã ca ngợi quyển sách hết lời trên mạng xã hội trước khi nó ra mắt."
      ],
      "answer": "Vì những nhận xét của họ giúp tác phẩm hoàn chỉnh hơn, ngay cả khi ông không làm theo lời khuyên của họ."
    },
    {
      "id": 3,
      "question": "Tác giả nhìn nhận vai trò của các khách hàng đối với quyển sách này như thế nào?",
      "options": [
        "Họ là những người trả tiền để ông lấy cảm hứng viết sách thay vì làm tư vấn.",
        "Họ là đối tượng chính cần đọc quyển sách này để sửa đổi những sai lầm ngớ ngẩn của họ.",
        "Họ là những người đã phản đối kịch liệt những ý tưởng trong sách nhưng cuối cùng phải phục tùng.",
        "Họ luôn là cội nguồn cảm hứng và sẵn sàng tin tưởng để trở thành một phần trong những câu chuyện của ông."
      ],
      "answer": "Họ luôn là cội nguồn cảm hứng và sẵn sàng tin tưởng để trở thành một phần trong những câu chuyện của ông."
    },
    {
      "id": 4,
      "question": "Dành cho vợ mình là Eleanor, tác giả đã viết lời cảm ơn đặc biệt nhất vì điều gì?",
      "options": [
        "Đã giúp ông đánh máy và chỉnh sửa lỗi chính tả cho toàn bộ quyển sách.",
        "Đã quán xuyến việc nhà và chăm sóc bọn trẻ để ông có thể khóa cửa phòng làm việc 24/7.",
        "Đã yêu ông vì chính ông, khích lệ ông hoàn thiện hơn và khiến việc mạo hiểm trở nên dễ dàng.",
        "Đã thay mặt ông đi gặp mặt và thỏa thuận với các nhà xuất bản khó tính."
      ],
      "answer": "Đã yêu ông vì chính ông, khích lệ ông hoàn thiện hơn và khiến việc mạo hiểm trở nên dễ dàng."
    }
  ]
}

with open("/home/mark/working/18phut/webapp/src/data/quizzes_part4.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("JSON file successfully generated and saved.")
