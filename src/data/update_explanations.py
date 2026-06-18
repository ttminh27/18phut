import json

data_path = "/home/mark/working/18phut/webapp/src/data/quizzes_10_part10.json"
with open(data_path, "r", encoding="utf-8") as f:
    data = json.load(f)

explanations = {
    "45_41. Obama Có Đeo Dây Chuyền Ngọc.md": [
        "Tác giả ban đầu sử dụng các lý lẽ thông thường như giải thích em còn nhỏ hay đã đến giờ ăn sáng. Tuy nhiên, cách dỗ dành này hoàn toàn thất bại trong việc làm cô bé ngừng khóc.",
        "Thay vì tiếp tục dỗ dành, tác giả đột ngột hỏi về hình in trên chiếc áo bé đang mặc. Sự chuyển hướng chú ý này ngay lập tức khiến bé tò mò, bật cười và quên đi cơn giận.",
        "Thí nghiệm được thiết kế để tìm hiểu nguyên nhân tại sao một số đứa trẻ có thể cưỡng lại cám dỗ ban đầu. Mục tiêu là khám phá bí quyết đằng sau khả năng trì hoãn sự thỏa mãn.",
        "Khác với suy nghĩ thông thường về ý chí hay kỷ luật, bí quyết thực sự là khả năng tự đánh lạc hướng bản thân. Những đứa trẻ thành công đã chủ động làm việc khác như che mắt hay ca hát để không nghĩ đến viên kẹo.",
        "Việc cố gắng dùng ý chí để kháng cự lại cám dỗ thường phản tác dụng, giống như cố không nghĩ về 'con voi màu trắng'. Sự tập trung vào việc kiềm chế nghịch lý thay lại khiến ta càng ám ảnh và dễ nhượng bộ hơn.",
        "Đây là cốt lõi của phương pháp quản lý hành vi: sự tập trung cần thiết để bắt đầu công việc. Ngược lại, để tránh làm một việc không mong muốn, tạo ra sự xao nhãng là cách hiệu quả nhất.",
        "Việc liên tục theo dõi tin tức tiêu cực chỉ làm tăng thêm sự lo lắng và căng thẳng. Do đó, giải pháp tốt nhất là chủ động đánh lạc hướng bản thân bằng các hoạt động tích cực khác.",
        "Thay vì cố gắng trực tiếp thay đổi thói quen quản lý vi mô của Phillip, tác giả đề xuất giao cho anh một dự án đúng đam mê. Điều này tạo ra 'sự phân tâm có chủ ý', giúp anh bận rộn và bớt can thiệp vào công việc cấp dưới.",
        "Chương sách đảo ngược quan niệm thông thường về sự phân tâm. Nó chứng minh rằng khi được sử dụng có chủ đích, sự xao nhãng chính là chìa khóa để vượt qua cám dỗ và kiểm soát hành vi.",
        "Tác giả nhấn mạnh rằng để xao nhãng khỏi một việc, bản chất là bạn đang phải tập trung cao độ vào một việc khác. Vì vậy, phân tâm và tập trung thực chất là hai mặt của cùng một đồng xu."
    ],
    "46_42. Bạn Có Phê Thuốc Khi Đang Làm.md": [
        "Nghiên cứu cho thấy việc thực hiện nhiều công việc cùng lúc, cụ thể là kiểm tra email liên tục, làm giảm 10 điểm IQ của người lao động. Mức độ suy giảm này tương đương với tác động của việc thiếu ngủ.",
        "Kết quả nghiên cứu chỉ ra rằng tác động tiêu cực của việc làm nhiều việc cùng lúc đối với nhận thức còn trầm trọng hơn cả việc hút cần sa. Điều này nhấn mạnh mức độ nguy hại của thói quen phân tán sự chú ý.",
        "Con người thực chất không thể xử lý song song nhiều việc cùng một lúc. Thay vào đó, bộ não phải liên tục chuyển đổi trạng thái giữa các nhiệm vụ, dẫn đến sự kém hiệu quả và tiêu hao năng lượng.",
        "Việc liên tục chuyển đổi sự chú ý khiến não bộ phải khởi động lại quá trình xử lý nhiều lần. Hậu quả là tổng thời gian hoàn thành công việc kéo dài hơn và năng suất giảm tới 40%.",
        "Khi từ bỏ việc kiểm tra điện thoại liên tục, tác giả nhận ra mình thực sự hiện diện trong khoảnh khắc hiện tại. Điều này giúp ông kết nối tốt hơn với gia đình và tận hưởng được những điều bình dị xung quanh.",
        "Làm nhiều việc cùng lúc tạo ra áp lực liên tục do phải duy trì sự chú ý vào nhiều luồng thông tin. Bằng cách tập trung hoàn thành từng việc một, tác giả cảm nhận được sự thanh thản và nhẹ nhõm.",
        "Khi không còn tự làm mình phân tâm bằng các việc khác, tác giả buộc phải đối diện trực tiếp với sự trì trệ của cuộc họp. Sự tập trung toàn bộ này khiến ông nhanh chóng nhận ra và chán nản với những khoảng thời gian bị lãng phí vô ích.",
        "Tốc độ xử lý của não bộ nhanh hơn nhiều so với tốc độ tiếp nhận thông tin từ môi trường. Khoảng trống này tạo ra ảo giác rằng ta có dư thừa năng lực và thời gian để làm thêm việc khác.",
        "Bằng cách thu hẹp đáng kể thời gian cho phép, tác giả tạo ra áp lực tích cực buộc bản thân phải tập trung cao độ. Khi thời gian quá gấp rút, ta sẽ không còn tâm trí hay cơ hội để xao nhãng sang việc khác.",
        "Tác giả khẳng định nguyên tắc chung là nên tránh làm nhiều việc cùng lúc vì tính kém hiệu quả của nó. Tuy nhiên, ông cũng thừa nhận rằng trong thực tế cuộc sống, đôi khi ta vẫn phải chấp nhận sự linh hoạt."
    ],
    "47_43. Vấn Đề Không Phải Là Những Kỹ.md": [
        "Dữ liệu Hạnh phúc Thế giới đánh giá Iceland là quốc gia hạnh phúc nhất thế giới bất chấp thời tiết u ám. Điều này cho thấy hạnh phúc không phụ thuộc hoàn toàn vào điều kiện khách quan.",
        "Ở Iceland, văn hóa không lên án sự thất bại, giúp người dân dám theo đuổi đam mê mà không sợ hãi. Sự thoải mái này giải phóng sức sáng tạo và mang lại hạnh phúc cho họ.",
        "Theo Mihaly Csikszentmihalyi, niềm tin vào năng lực của bản thân quan trọng hơn kỹ năng thực tế. Khi tin rằng mình làm được, bạn sẽ có động lực để bắt tay vào hành động.",
        "Có những lĩnh vực đòi hỏi sự chính xác tuyệt đối và không được phép sai sót. Tuy nhiên, tác giả nhấn mạnh đây chỉ là số ít, còn đa số các dự án khác đều có thể chấp nhận thất bại như một bước khởi đầu.",
        "Chủ nghĩa hoàn hảo khiến Raphael tự ti về khả năng hiện tại và ngần ngại không dám bắt đầu. Đây là rào cản tâm lý ngăn cản chúng ta đưa ý tưởng vào thực tế.",
        "Thế giới không quan tâm đến một ý tưởng hoàn hảo nằm trên giấy, mà đánh giá cao những người bắt tay vào hành động để tạo ra kết quả. Tính hiệu quả luôn thực tế và có giá trị hơn sự hoàn hảo viển vông.",
        "Bắt đầu với những bước đi rất nhỏ giúp bạn dễ dàng đạt được thành công ban đầu. Sự thành công liên tục này sẽ xây dựng sự tự tin để bạn tiếp tục theo đuổi các mục tiêu lớn hơn.",
        "Sự bối rối của vợ tác giả trước quá nhiều lời khuyên cho thấy không có một chuẩn mực chung nào cho mọi việc. Đôi khi, từ bỏ việc tìm kiếm một 'câu trả lời hoàn hảo' lại là cách tốt nhất để tìm ra giải pháp phù hợp với bản thân.",
        "Tiêu chuẩn 'vừa đủ tốt' giúp bạn giải tỏa áp lực của sự hoàn hảo và tập trung vào việc hoàn thành công việc. Khi chấp nhận mức độ này, bạn sẽ làm việc thường xuyên hơn và tiến bộ dần dần.",
        "Các nhà quản lý thường có xu hướng chỉ trích sai lầm của nhân viên, làm suy giảm sự tự tin của họ. Tỷ lệ 1/7 đảm bảo rằng những đóng góp tích cực được công nhận đúng mức trước khi nhắc đến thiếu sót."
    ],
    "48_44. Vì Sao Điều Này Không Hiệu Quả.md": [
        "Sự áp đặt một chiều bằng các cuộc họp hay bài thuyết trình dài thường khiến người khác nhàm chán và mất tập trung. Thay vì hợp tác, họ có xu hướng lờ đi vì không cảm thấy mình là một phần của kế hoạch.",
        "Công ty này đối mặt với việc các quản lý không hoàn thành quy trình đánh giá kết quả dù đã được đầu tư kỹ lưỡng. Đây là minh chứng cho việc một hệ thống hoàn hảo trên giấy không đồng nghĩa với việc nó sẽ được thực thi.",
        "Họ đã cố gắng tạo ra một quy trình quá chi tiết và ép buộc mọi người phải tuân theo mà không cho họ quyền tự điều chỉnh. Điều này vô tình cướp đi sự tự chủ của các cá nhân liên quan.",
        "Sau khi áp đặt không thành công, tác giả nhận ra sự sai lầm và quyết định ngừng ngay việc triển khai một cách áp đặt. Ông bắt đầu thay đổi mọi thứ để trở nên 'đúng một nửa' nhằm thu hút sự tham gia.",
        "Câu hỏi này trực tiếp đặt vấn đề về sự bất cập của quy trình đối với từng cá nhân. Nó khơi mào cho việc tìm kiếm những giải pháp thực tế và phù hợp hơn từ chính người sử dụng.",
        "Thay vì bác bỏ, tác giả hoàn toàn đón nhận và khuyến khích các ý kiến đóng góp. Thái độ cởi mở này trao quyền cho nhân viên để họ tự điều chỉnh quy trình cho phù hợp.",
        "Khi người khác được phép chỉnh sửa kế hoạch, họ sẽ làm chủ ý tưởng đó. Nỗ lực và tinh thần trách nhiệm mà họ bỏ ra sẽ vượt xa những rủi ro do sự thay đổi mang lại.",
        "Bằng cách chỉ giới thiệu sản phẩm 'một nửa', bạn mời gọi khách hàng cùng tham gia vào quá trình hoàn thiện nó. Khi họ đóng góp ý tưởng, họ sẽ có xu hướng muốn mua sản phẩm do chính tay mình định hình.",
        "Kết quả đạt được là tỷ lệ hoàn thành vô cùng ấn tượng. Tuy quy trình đã bị sửa đổi không còn hoàn hảo như ban đầu, nhưng tính hiệu quả thực tế của nó đã được chứng minh.",
        "Đừng ngại ngần nhắm đến sự không hoàn hảo trong các dự án hợp tác. Việc chấp nhận khiếm khuyết ban đầu sẽ tạo không gian cho sự đóng góp của mọi người, mang lại thành công thiết thực."
    ],
    "49_45. Đừng Dùng Bóng Rổ Trong Sân Bóng.md": [
        "Đối mặt với hoàn cảnh thay đổi đột ngột và nguy hiểm, tác giả không cố chấp lái xe như bình thường mà lập tức thích ứng. Ông giảm tốc độ, tắt các thiết bị gây xao nhãng để tập trung cao độ và lái xe an toàn.",
        "Khi hoàn cảnh thay đổi hoàn toàn, việc cố gắng nỗ lực hơn với phương pháp cũ sẽ trở nên vô nghĩa. Bạn bắt buộc phải từ bỏ cách làm cũ và sử dụng công cụ, kỹ năng phù hợp với môi trường mới.",
        "Tác giả cho rằng sự nhất quán và kiên định cứng nhắc có thể gây hại khi môi trường thay đổi. Sự linh hoạt, biết điều chỉnh hành vi theo hoàn cảnh mới là chìa khóa để tồn tại và phát triển.",
        "Việc xác định rõ tình huống giúp bạn đánh giá đúng mức độ nghiêm trọng và yêu cầu thực tế của vấn đề. Nhờ đó, bạn mới có thể đưa ra quyết định phù hợp nhất.",
        "Mọi hành động đều tác động đến những người xung quanh. Việc đánh giá năng lực và nhu cầu của đối phương giúp bạn lựa chọn phương pháp tương tác đem lại hiệu quả hợp tác cao nhất.",
        "Tự nhận thức về khả năng và giới hạn của bản thân giúp bạn xác định cách đóng góp phù hợp. Từ đó, bạn có thể đưa ra cách giải quyết vấn đề bằng thế mạnh của mình.",
        "Khi thị trường bất ổn, giá trị cốt lõi giữ chân khách hàng không chỉ nằm ở sản phẩm mà ở sự tin cậy. Xây dựng lòng tin trong lúc khó khăn là sự đầu tư bền vững nhất cho tương lai.",
        "Thay vì phản ứng bản năng như tức giận hay đòi bồi thường, việc hỗ trợ khách hàng lúc khó khăn sẽ tạo dựng mối quan hệ sâu sắc. Đây là cơ hội để biến họ thành đối tác trung thành lâu dài.",
        "Khủng hoảng luôn đi kèm với cơ hội cho những ai biết tận dụng. Các nhà đầu tư xem sự bất ổn không phải là rào cản, mà là điều kiện lý tưởng để tạo ra bước ngoặt thành công.",
        "Sự thay đổi và hoàn cảnh khó khăn không phải là thứ để cản trở bạn, mà là sân khấu để chứng minh năng lực thích ứng. Thay đổi mang đến cơ hội để tạo ra những giá trị mới tốt đẹp hơn."
    ],
    "50_KẾT LUẬN.md": [
        "Phần 1 đặt nền móng bằng cách khuyến khích bạn chậm lại và thấu hiểu chính mình. Việc tạm dừng giúp bạn nhìn nhận lại mọi thứ trước khi hành động để hướng tới đúng kết quả mong đợi.",
        "Tác giả nhấn mạnh việc tận dụng toàn diện mọi khía cạnh của bản thân, không chỉ điểm mạnh mà cả điểm yếu. Sự kết hợp độc đáo này là cơ sở để tạo ra con đường thành công riêng biệt cho mỗi người.",
        "Thay vì ôm đồm quá nhiều việc, bạn cần thu hẹp sự tập trung. Xác định 5 trọng tâm chính giúp định hướng rõ ràng mục tiêu phấn đấu trong suốt một năm.",
        "Phần 3 hướng dẫn cách cụ thể hóa các mục tiêu dài hạn. Việc chia nhỏ chúng thành các công việc hàng ngày đảm bảo bạn luôn di chuyển đúng hướng và bám sát kế hoạch.",
        "Đây là hệ thống công cụ giúp bạn tổ chức quỹ thời gian một cách khoa học. Chúng đóng vai trò duy trì sự tập trung và điều chỉnh lại những điều chưa hiệu quả theo từng ngày.",
        "Trái với quan niệm thông thường, sự xao nhãng không hoàn toàn mang tính tiêu cực. Nếu được sử dụng có chủ đích, nó có thể là giải pháp mạnh mẽ để kiềm chế cám dỗ và giải tỏa căng thẳng.",
        "Tác giả trang bị cho bạn các công cụ để giành lại quyền kiểm soát tâm trí khi bị xao nhãng quá mức. Sự chủ động trong lời nói và hành động sẽ giúp dẹp bỏ những rào cản ảnh hưởng đến hiệu suất.",
        "Đây là ba kỹ năng then chốt để duy trì kỷ luật và hiện thực hóa mục tiêu. Việc rèn luyện khả năng quản lý bản thân giúp bạn vững bước trước những cám dỗ và khó khăn.",
        "Sự hoàn hảo và tập trung chỉ mang lại lợi ích khi ở mức độ vừa đủ. Việc lạm dụng chúng sẽ tạo ra sự cứng nhắc, gây quá tải và làm giảm khả năng thích ứng linh hoạt trong công việc.",
        "Để tránh cảm giác bị choáng ngợp bởi hàng loạt thay đổi, bạn chỉ cần chọn một hành động duy nhất có tác động lớn nhất để thực hiện. Sự đơn giản này là chìa khóa để bắt đầu hành trình cải thiện bản thân."
    ],
    "51_46. Bạn Không Có 10 Cách Hành Xử.md": [
        "Tác giả từ bỏ các phương pháp ăn kiêng rườm rà hay việc thuê huấn luyện viên vì chúng khó duy trì. Thay vào đó, ông lựa chọn một sự thay đổi hành vi duy nhất nhưng mang lại hiệu quả cao.",
        "Nghiên cứu chứng minh rằng mọi chế độ giảm cân, dù khác biệt về tỷ lệ chất dinh dưỡng, đều dựa trên nguyên lý cốt lõi là cắt giảm lượng calo. Do đó, phương pháp đơn giản nhất sẽ là phương pháp tối ưu nhất.",
        "Thay vì tự làm khó mình bằng hàng tá quy tắc rắc rối, bạn chỉ cần tìm ra một hành động cốt lõi mang lại kết quả lớn nhất. Sự tập trung tuyệt đối vào một điểm này sẽ dẫn đến những thay đổi toàn diện.",
        "Khi bạn thiết lập thành công một thói quen nòng cốt, nó sẽ tạo đà tâm lý tích cực. Những thay đổi tốt đẹp khác sẽ diễn ra một cách tự nhiên mà không cần bạn phải gượng ép bản thân.",
        "Tác giả khuyên doanh nghiệp không nên lãng phí công sức đã xây dựng với hệ thống cũ. Việc đơn giản hóa hệ thống và chỉ tập trung vào yếu tố quan trọng nhất sẽ mang lại sự chuyển biến thiết thực hơn.",
        "Công ty nhận ra rằng phần lớn vấn đề có thể được giải quyết nếu sự gắn kết nội bộ được tăng cường. Do đó, đây là mục tiêu duy nhất họ dồn mọi nỗ lực để thực hiện.",
        "Đây là một ngoại lệ so với lời khuyên thông thường của tác giả về việc tập trung vào điểm mạnh. Bằng cách chọn một thử thách khắc phục khuyết điểm lớn nhất, Brandon sẽ xây dựng được sự tự tin mạnh mẽ để thay đổi mọi thứ khác.",
        "Cửa hàng kỳ vọng nhân viên tuân thủ một hệ thống gồm 10 quy tắc ứng xử chuẩn mực. Tuy nhiên, sự rườm rà này không phải là nguyên nhân thực sự mang lại doanh thu.",
        "Khi phân tích dữ liệu, ban quản lý phát hiện ra 9 hành vi khác dù được thực hiện tốt cũng không tạo ra doanh số. Việc nắm bắt chính xác nhu cầu của khách hàng mới là chìa khóa thực sự tạo ra sự khác biệt.",
        "Đây là thông điệp bao trùm toàn bộ chương sách. Mọi sự thay đổi lớn lao trong cuộc sống và công việc luôn bắt nguồn từ một hành động nhỏ nhoi nhưng được định hướng đúng đắn."
    ],
    "52_LỜI CẢM ƠN.md": [
        "Tác giả khẳng định rằng viết sách không phải là một công việc cá nhân lẻ loi. Sự thành công của tác phẩm là kết tinh từ sự giúp đỡ và đóng góp của rất nhiều người xung quanh ông.",
        "Rick Wolff được vinh danh đầu tiên vì sự hỗ trợ to lớn của ông trong vai trò xuất bản. Tác giả cảm ơn ông vì tầm nhìn và sự tin tưởng không ngừng nghỉ dành cho những ý tưởng của sách.",
        "Giles Anderson được trân trọng bởi sự tin cậy, tính chính trực và sự tận tâm. Ông là một cộng sự tuyệt vời đã luôn đồng hành cùng tác giả.",
        "Đây là hai biên tập viên đã tạo động lực và không gian để tác giả cất tiếng nói. Nhờ sự khích lệ của họ, những bản thảo mới có cơ hội được hoàn thiện và ra mắt công chúng.",
        "Mermer đóng vai trò như một người cố vấn quan trọng về mặt văn học. Nhờ sự hỗ trợ của ông, tác giả đã định hình và mài giũa được phong cách viết riêng biệt của mình.",
        "Khách hàng không chỉ là đối tác kinh doanh mà còn là nguồn chất liệu sống động cho cuốn sách. Những câu chuyện thực tế của họ đã mang lại giá trị thực tiễn sâu sắc cho các trang viết.",
        "Độc giả trên blog là nguồn động viên trực tiếp và thường xuyên. Tình cảm và những phản hồi tích cực của họ đã tiếp thêm sức mạnh để tác giả duy trì công việc viết lách.",
        "Gia đình là bến đỗ tinh thần vững chắc. Những cảm xúc hồn nhiên và sự tồn tại giản dị của các con chính là ánh sáng mang lại niềm vui và ý nghĩa sống cho tác giả.",
        "Eleanor không chỉ là người bạn đời mà còn là chỗ dựa lớn nhất của tác giả. Tình yêu thương vô điều kiện của cô đã tiếp thêm cho ông sự tự tin để vượt qua mọi thử thách.",
        "Tác giả đánh giá cao sự đóng góp xây dựng từ những người xung quanh. Dù đôi khi không nhất thiết làm theo lời khuyên, nhưng góc nhìn của họ luôn giúp ông hoàn thiện tác phẩm hơn."
    ]
}

# Update the data
for chapter_name, expl_list in explanations.items():
    if chapter_name in data:
        for i, expl in enumerate(expl_list):
            if i < len(data[chapter_name]):
                data[chapter_name][i]["explanation"] = expl

# Write back
with open(data_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated data written successfully.")
