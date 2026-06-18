import json
import os

json_path = "/home/mark/working/18phut/webapp/src/data/quizzes_10_part5.json"

explanations = {
    "20_18. Khi Tương Lai Không Rõ Ràng.md": {
        1: "Hình ảnh những ngôi nhà xây dở dang là ẩn dụ cho việc con người ngừng cố gắng và chờ đợi thụ động khi tin rằng tương lai không còn ý nghĩa. Bài học của chương nhấn mạnh rằng sự bất định có thể làm tê liệt hành động nếu ta để nó kiểm soát.",
        2: "Anne tránh né việc họp hành và đánh giá nhân viên vì công ty đang ở trong giai đoạn không có định hướng rõ ràng, khiến cô cảm thấy bất lực. Tình trạng này phản ánh việc sự bất định về tương lai có thể làm đóng băng khả năng quản lý và giao tiếp hiện tại.",
        3: "Theo giáo sư David McClelland, con người luôn khao khát được thỏa mãn ba yếu tố chính: thành tựu, hòa nhập và quyền lực. Tác giả sử dụng lý thuyết này để gợi ý cách tạo động lực cho bản thân và người khác ngay cả khi tương lai không chắc chắn.",
        4: "Yếu tố 'Quyền lực' không chỉ đơn thuần là sự kiểm soát người khác mà bao gồm cả 'cá nhân hóa' (khả năng tự tạo ảnh hưởng) và 'xã hội hóa' (khả năng trao quyền và dẫn dắt người khác). Điều này giúp nhân viên cảm thấy họ vẫn có tầm ảnh hưởng nhất định trong công việc.",
        5: "Bằng cách giao phó các dự án đòi hỏi sự hợp tác giữa các nhân viên, Anne đã khéo léo đáp ứng nhu cầu 'hòa nhập' của họ. Việc này giúp mọi người cảm thấy gắn kết và có động lực hơn trong giai đoạn thiếu định hướng rõ ràng.",
        6: "Tác giả nhấn mạnh rằng đừng thụ động chờ đợi cấp trên hay hoàn cảnh thay đổi, mà hãy tự tạo ra cơ hội thỏa mãn các yếu tố động lực cho mình. Chủ động định hình lại công việc là cách duy nhất để thoát khỏi sự bế tắc khi tương lai mù mịt.",
        7: "Khi bức tranh tương lai trở nên mù mờ, nhân viên thường rơi vào trạng thái bất an và bắt đầu nghi ngờ lẫn nhau, dẫn đến sự gia tăng của các hành vi tranh giành hay bảo vệ lợi ích cá nhân. Đây là một phản ứng tự nhiên nhưng tiêu cực trước sự bất định.",
        8: "Để lời khen không trở nên sáo rỗng, Anne đã giao quyền kiểm soát thực sự cho nhân viên, từ đó có cơ sở vững chắc để ghi nhận tiến bộ thực tế của họ. Cách này giúp củng cố cả yếu tố 'quyền lực' lẫn 'thành tựu' cho đội ngũ.",
        9: "Khi thiếu đi sự hướng dẫn rõ ràng từ lãnh đạo, phản xạ sinh tồn của hầu hết nhân viên là cố gắng ẩn mình và tỏ ra bận rộn để bảo vệ vị trí của mình. Hành động này thể hiện sự sợ hãi thay vì nỗ lực đóng góp thực sự cho công ty.",
        10: "Chương sách truyền tải thông điệp rằng đừng để sự bất định về tương lai làm bạn chùn bước. Thay vào đó, hãy lấy lại quyền kiểm soát bằng cách tập trung tạo ra thành tựu, tăng cường sự gắn kết và phát huy ảnh hưởng ngay trong bối cảnh hiện tại."
    },
    "21_19. Có Thể Vậy.md": {
        1: "Câu chuyện 'Tái Ông Thất Mã' minh họa cho sự vô thường của cuộc sống, nhắc nhở ta không nên vội vã dán nhãn tốt - xấu cho một sự kiện khi chưa biết diễn biến tiếp theo. Bài học cốt lõi là duy trì sự điềm tĩnh trước mọi biến cố.",
        2: "Một chuyến đi xe đạp bị hủy bỏ đã tình cờ dẫn tác giả đến một chuyến cắm trại định mệnh, mở ra cho ông nhận thức mới và thay đổi hoàn toàn hướng đi sự nghiệp. Điều này chứng minh rằng những sự cố tưởng chừng xui xẻo lại có thể là cơ hội rẽ sang một con đường tốt đẹp hơn.",
        3: "Sự sụp đổ của công ty đầu tiên, dù ban đầu có vẻ là một bi kịch, lại giúp tác giả nhận ra rằng ông thực chất không hề đam mê việc điều hành một tổ chức lớn. Biến cố này chính là cơ hội để ông nhìn nhận lại bản thân và định hướng lại cuộc đời.",
        4: "Tác giả chỉ ra rằng chính nỗi sợ hãi và ám ảnh về việc mất việc làm mới là thứ gặm nhấm và tàn phá tâm lý con người nặng nề nhất. Nó thường gây ra nhiều đau khổ hơn so với chính trải nghiệm thất nghiệp khi nó thực sự xảy ra.",
        5: "Theo GS. Daniel Gilbert, hệ thống miễn dịch tâm lý của con người sẽ giúp chúng ta vượt qua cú sốc ban đầu của tin xấu. Sau một khoảng thời gian ủ rũ, chúng ta sẽ tự động tìm cách thích nghi, giải quyết vấn đề và làm cho tình hình trở nên tốt hơn.",
        6: "Nghiên cứu của Carol Dweck cho thấy người có 'tư duy cố định' tin rằng tài năng là bẩm sinh, nên khi gặp thất bại, họ coi đó là minh chứng cho sự kém cỏi và dễ dàng bỏ cuộc. Khác với người có 'tư duy phát triển', họ không xem nghịch cảnh là cơ hội để rèn luyện.",
        7: "Tác giả nhấn mạnh rằng việc thấu hiểu và chấp nhận bản thân, bao gồm cả điểm mạnh và điểm yếu, cùng với việc theo đuổi đam mê sẽ tạo ra sức mạnh nội tại vững chắc. Đó là 'chiếc mỏ neo' giúp ta không bị cuốn trôi bởi những thăng trầm của hoàn cảnh bên ngoài.",
        8: "Chúng ta không thể định đoạt mọi sự kiện xảy ra trong đời, nhưng chúng ta hoàn toàn nắm quyền làm chủ trong cách nhìn nhận và phản ứng lại chúng. Khả năng phục hồi phụ thuộc vào thái độ và góc nhìn của chính chúng ta.",
        9: "Phản ứng 'Có thể vậy' của người nông dân trong truyện thể hiện trí tuệ điềm tĩnh, không để cảm xúc bị cuốn theo sự phán xét nhất thời của số đông. Nó là sự chấp nhận rằng kết quả cuối cùng vẫn chưa ngã ngũ và mọi thứ đều có thể thay đổi.",
        10: "Bài học của chương nhắc nhở ta rằng may rủi luôn thay đổi và đan xen nhau trong cuộc sống. Quan trọng là thay đổi tư duy, nhìn nhận mọi nghịch cảnh như một ngã rẽ tiềm năng để khám phá và phát triển bản thân."
    },
    "22_20. Làm Gì Trong Năm Nay.md": {
        1: "Tác giả dùng hình ảnh bữa tiệc buffet để so sánh với việc quản lý thời gian: có quá nhiều lựa chọn hấp dẫn nhưng sức chứa của chúng ta là có hạn. Nếu tham lam lấy mọi thứ, ta sẽ không thể tiêu hóa được và làm hỏng cả trải nghiệm.",
        2: "Sai lầm lớn nhất của các phương pháp quản lý thời gian truyền thống là cố gắng nhồi nhét và hoàn thành mọi việc một cách nhanh nhất. Tác giả cho rằng điều này chỉ dẫn đến sự kiệt sức mà không giải quyết được vấn đề cốt lõi là sự lựa chọn ưu tiên.",
        3: "Bí quyết để không bị quá tải trong công việc cũng giống như ở bữa tiệc buffet: chọn lựa có chủ đích, làm ít việc lại nhưng tập trung vào những gì thực sự quan trọng. Sự đơn giản và tập trung là chìa khóa của thành công.",
        4: "Tác giả đề xuất con số 5 là số lượng lý tưởng cho các lĩnh vực trọng tâm trong một năm. Nếu quá nhiều, bạn sẽ bị phân tán năng lượng; nếu quá ít, bạn có thể bỏ lỡ những khía cạnh quan trọng khác của cuộc sống.",
        5: "Một năm được chọn làm khung thời gian vì nó cung cấp một tầm nhìn đủ xa để tạo ra những thay đổi đáng kể, nhưng cũng đủ gần để duy trì động lực và sự tập trung. Nó giúp chúng ta có bước tiến thiết thực mà không bị mơ hồ như kế hoạch cả đời.",
        6: "Nguyên tắc phân bổ thời gian của tác giả là dành tới 95% nỗ lực cho 5 lĩnh vực trọng tâm đã chọn, chỉ để lại 5% cho các việc phát sinh khác. Sự kỷ luật này đảm bảo thời gian được đầu tư đúng chỗ cho những mục tiêu ý nghĩa nhất.",
        7: "Khi các ưu tiên xung đột, tác giả khuyên nên đánh giá xem thời gian qua lĩnh vực nào đang bị 'bỏ đói' nhiều hơn thì dồn sự chú ý cho lĩnh vực đó. Phương pháp này giúp duy trì sự cân bằng động giữa các trọng tâm trong dài hạn.",
        8: "Một danh sách trọng tâm hiệu quả phải phản ánh đúng con người thật của bạn, tận dụng được thế mạnh và khơi gợi đam mê. Chỉ khi các mục tiêu cộng hưởng với năng lực và sở thích, bạn mới có đủ động lực để theo đuổi chúng.",
        9: "Để trung thành với 5 ưu tiên của mình, tác giả đã quyết định rút khỏi ban quản trị công ty vì nó tiêu tốn thời gian mà không phục vụ cho các mục tiêu cốt lõi. Đây là ví dụ về sự dũng cảm từ chối những cơ hội tốt nhưng không phù hợp.",
        10: "Nếu bạn dành hơn 20% thời gian cho những 'việc linh tinh', bạn đang đánh mất quyền kiểm soát cuộc đời mình và để người khác dẫn dắt thời gian của bạn. Kết quả là các ưu tiên quan trọng của chính bạn sẽ bị trì trệ và lãng quên."
    },
    "23_III. Làm Gì Trong Hôm Nay.md": {
        1: "Dù đã dành thời gian cuối tuần để xác định rõ 5 trọng tâm của năm, vào sáng thứ Hai, tác giả vẫn theo quán tính lặp lại thói quen cũ và bỏ qua kế hoạch mới. Điều này cho thấy việc duy trì cam kết với kế hoạch khó khăn hơn rất nhiều so với việc lập ra nó.",
        2: "Những việc thực sự có ý nghĩa và đóng góp vào mục tiêu dài hạn thường đòi hỏi nhiều năng lượng, sự tập trung và khó khăn hơn những việc nhỏ nhặt, khẩn cấp. Do đó, con người có xu hướng né tránh chúng để tìm đến những công việc dễ dàng hơn.",
        3: "Tác giả chỉ ra rằng các hệ thống quản lý thời gian hiện tại thường làm phức tạp hóa vấn đề hoặc áp đặt mục tiêu phải hoàn thành mọi thứ trong danh sách. Điều này vô tình tạo ra áp lực và làm mờ đi ranh giới giữa việc quan trọng và việc không quan trọng.",
        4: "Lập kế hoạch theo ngày không phải là để lấp đầy thời gian biểu, mà là công cụ để neo giữ sự tập trung, duy trì kỷ luật và giúp ta không bị cuốn vào những cám dỗ, gián đoạn thường nhật. Nó đóng vai trò như một chiếc la bàn cho mỗi ngày.",
        5: "Tác giả tập trung vào sự sẵn sàng, việc nhận diện rủi ro và sự bám sát trọng tâm thay vì chạy theo mục tiêu tối đa hóa tài chính trong ngắn hạn. Câu hỏi về việc kiếm tiền không nằm trong triết lý quản lý thời gian hướng đến ý nghĩa của ông.",
        6: "Bản kế hoạch 18-phút là công cụ đơn giản nhưng mạnh mẽ do tác giả sáng tạo ra, giúp duy trì sự kết nối giữa mục tiêu lớn và hành động hàng ngày. Nó nhấn mạnh vào việc dừng lại, suy ngẫm và điều hướng liên tục trong ngày.",
        7: "Khi tác giả mang toàn bộ những đặc điểm đa dạng của bản thân (như sự thấu cảm, khả năng quan sát, tư duy chiến lược) vào công việc, ông tạo ra một giá trị độc đáo và khác biệt. Sự tổng hòa này giúp ông trở thành một chuyên gia xuất sắc hơn việc chỉ đóng một vai trò cố định.",
        8: "Mỗi hành động trong ngày, dù nhỏ như một cuộc gọi, đều cần phải được căn chỉnh để phục vụ cho định hướng sự nghiệp và cuộc đời đã được vạch ra. Nếu không, những nỗ lực đó chỉ là sự lãng phí năng lượng mà không mang lại sự tiến bộ thực sự.",
        9: "Một danh sách to-do list dài lê thê chỉ gây ra cảm giác tội lỗi và quá tải; thay vào đó, tác giả khuyên nên chọn lọc một vài việc quan trọng nhất và đưa chúng vào lịch làm việc cố định. Lịch trình sẽ phản ánh tính khả thi và cam kết thực hiện mục tiêu.",
        10: "Bên trong mỗi chúng ta luôn tồn tại một lực cản vô thức, thúc đẩy ta trốn tránh những công việc khó khăn nhưng mang lại giá trị lớn. Nhận thức được rào cản tâm lý này là bước đầu tiên để vượt qua sự trì hoãn và tập trung vào những ưu tiên thực sự."
    },
    "24_21. Này Anh Bạn, Đã Xảy Ra Chuyện.md": {
        1: "Trong môn đạp xe leo núi, khi người lái nhìn chằm chằm vào chướng ngại vật, họ sẽ bị tâm lý sợ hãi chi phối và vô thức bóp phanh. Điều này làm mất quán tính của xe, khiến họ bị vướng lại và ngã.",
        2: "Một nguyên tắc cơ bản là bánh xe cần phải có đủ tốc độ và quán tính để có thể lăn qua các chướng ngại vật gồ ghề. Khi phanh lại vì sợ hãi, tác giả đã triệt tiêu lực đẩy cần thiết này và dẫn đến thất bại.",
        3: "Giải pháp hiệu quả nhất là thay đổi điểm nhìn: thay vì tập trung vào hòn đá ngay trước mắt, tác giả được khuyên nhìn xa hơn về phía trước khoảng 3 mét. Hành động này giúp cơ thể và chiếc xe tự động điều hướng vượt qua chướng ngại vật một cách tự nhiên.",
        4: "Tác giả ví von rằng, trong cả việc đạp xe lẫn quản lý thời gian, nếu bạn chỉ phản ứng với những rắc rối ngay sát trước mắt mà không có tầm nhìn xa hơn, bạn sẽ bị mắc kẹt. Bạn cần nhìn về phía trước để duy trì đà tiến lên của mình.",
        5: "Việc 'sống cho hiện tại' có thể khiến bạn trở nên thiển cận trong công việc, chỉ biết dập lửa những vấn đề khẩn cấp mà quên đi các mục tiêu lớn lao. Hậu quả là bạn sẽ bị cuốn trôi bởi các yêu cầu của người khác và bỏ lỡ định hướng của chính mình.",
        6: "Khi thiếu một kế hoạch rõ ràng cho tương lai, phản xạ tự nhiên của chúng ta là giải quyết yêu cầu của người đang đứng ngay trước mặt, bất kể việc đó có thực sự quan trọng hay không. Đây là cái bẫy của sự bận rộn không có mục đích.",
        7: "Quản lý một ngày làm việc hiệu quả được so sánh với việc lèo lái chiếc xe đạp qua những địa hình hiểm trở: đầy rẫy các yêu cầu, gián đoạn và chướng ngại vật muốn cản bước bạn. Thành công đòi hỏi sự tập trung, khéo léo và tầm nhìn hướng về phía trước.",
        8: "Để vượt qua một ngày đầy rắc rối, tác giả đưa ra ba bước quyết định: nhìn xa hơn về phía trước, vạch ra một lộ trình rõ ràng, và kiên định bám sát lộ trình đó. Đây là kim chỉ nam để không bị xao nhãng bởi các yếu tố phát sinh.",
        9: "Việc nhìn ra xa 3 mét giúp người lái nhận biết được chướng ngại vật từ sớm, nhưng không để nó trở thành nỗi ám ảnh ngay trước mắt. Nhờ đó, họ vẫn duy trì được tốc độ, sự tự tin và quán tính để băng qua nó một cách mượt mà.",
        10: "Bài học cốt lõi của chương là việc lên kế hoạch trước đóng vai trò như việc 'nhìn xa 3 mét', giúp bạn có đủ đà và sự tập trung để băng qua những khó khăn thường nhật. Kế hoạch là công cụ để bạn làm chủ ngày làm việc và tiến gần hơn đến mục tiêu."
    }
}

with open(json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for chapter, questions in data.items():
    if chapter in explanations:
        for q in questions:
            q_id = q['id']
            if q_id in explanations[chapter]:
                q['explanation'] = explanations[chapter][q_id]

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Update JSON successfully.")
