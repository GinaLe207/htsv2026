module.exports = function getSectionsP3() {
  return `
    <!-- 6. #quyen-loi — 2. QUYỀN LỢI DANH VỊ -->
    <section class="section-container" id="quyen-loi">
      <div class="section-header anim">
        <div class="section-tag">
          <i class="fa-solid fa-star"></i> QUYỀN LỢI DANH VỊ
        </div>
        <h2 class="section-title">QUYỀN LỢI NHÀ TÀI TRỢ</h2>
        <p class="section-desc">Chi tiết quyền lợi danh vị theo 3 giai đoạn chiến dịch đảm bảo tối đa hóa giá trị thương hiệu cho Quý Doanh nghiệp.</p>
      </div>

      <!-- Stage Benefits Tabs -->
      <div class="benefits-container anim">
        <div class="benefit-stage-tabs" role="tablist">
          <button class="stage-tab-btn active" data-stage="stage1" role="tab" aria-selected="true">
            <i class="fa-solid fa-bullhorn"></i>
            <span>Trong chiến dịch quảng bá</span>
          </button>
          <button class="stage-tab-btn" data-stage="stage2" role="tab" aria-selected="false">
            <i class="fa-solid fa-champagne-glasses"></i>
            <span>Trong ngày sự kiện chính</span>
          </button>
          <button class="stage-tab-btn" data-stage="stage3" role="tab" aria-selected="false">
            <i class="fa-solid fa-file-lines"></i>
            <span>Sau khi sự kiện kết thúc</span>
          </button>
        </div>

        <!-- Stage 1 Content: Trong chiến dịch quảng bá -->
        <div class="stage-pane active" id="stage1-content">
          <div class="table-responsive">
            <table class="matrix-table">
              <thead>
                <tr>
                  <th class="col-feature">Quyền lợi trong chiến dịch quảng bá</th>
                  <th class="col-tier diamond">NTT Kim Cương<small>70.000.000đ</small></th>
                  <th class="col-tier platinum">NTT Bạch Kim<small>50.000.000đ</small></th>
                  <th class="col-tier gold">NTT Vàng<small>30.000.000đ</small></th>
                  <th class="col-tier silver">NTT Bạc<small>10.000.000đ</small></th>
                  <th class="col-tier bronze">NTT Đồng<small>6.000.000đ</small></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Các bài giới thiệu về nhà tài trợ (NTT) được đăng trên fanpage của chương trình</td>
                  <td class="diamond"><strong>03 bài</strong></td>
                  <td class="platinum"><strong>02 bài</strong></td>
                  <td class="gold"><strong>02 bài</strong></td>
                  <td class="silver">01 bài</td>
                  <td class="bronze">01 bài</td>
                </tr>
                <tr>
                  <td>NTT được thành viên của BTC hỗ trợ phát tài liệu quảng bá tới những người tham dự sự kiện</td>
                  <td class="diamond"><strong>Số lượng lớn</strong></td>
                  <td class="platinum"><strong>Số lượng lớn</strong></td>
                  <td class="gold">Số lượng vừa</td>
                  <td class="silver">Số lượng vừa</td>
                  <td class="bronze">Số lượng nhỏ</td>
                </tr>
                <tr>
                  <td>Logo NTT sẽ được in trang trọng trong tất cả tài liệu liên quan chương trình, trong các phóng sự, clip BTC thực hiện</td>
                  <td class="diamond"><strong>Kích thước nổi bật</strong></td>
                  <td class="platinum"><strong>Kích thước nổi bật</strong></td>
                  <td class="gold">Kích thước lớn</td>
                  <td class="silver">Kích thước vừa</td>
                  <td class="bronze">Kích thước nhỏ</td>
                </tr>
                <tr>
                  <td>NTT sẽ nhận được thông tin về lịch trình, tiến độ thực hiện chương trình</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Được đặt booth, standee có mã QR về NTT, sản phẩm của NTT trong khuôn viên Học viện Tài chính</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Tạo khu vực chụp ảnh Photobooth để tăng độ nhận diện</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver">—</td>
                  <td class="bronze">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Stage 2 Content: Trong ngày sự kiện chính -->
        <div class="stage-pane" id="stage2-content">
          <div class="table-responsive">
            <table class="matrix-table">
              <thead>
                <tr>
                  <th class="col-feature">Quyền lợi trong ngày sự kiện chính</th>
                  <th class="col-tier diamond">NTT Kim Cương<small>70.000.000đ</small></th>
                  <th class="col-tier platinum">NTT Bạch Kim<small>50.000.000đ</small></th>
                  <th class="col-tier gold">NTT Vàng<small>30.000.000đ</small></th>
                  <th class="col-tier silver">NTT Bạc<small>10.000.000đ</small></th>
                  <th class="col-tier bronze">NTT Đồng<small>6.000.000đ</small></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Được nhận vé mời tham gia sự kiện với tư cách là khách mời VIP</td>
                  <td class="diamond"><strong>8 vé</strong></td>
                  <td class="platinum"><strong>5 vé</strong></td>
                  <td class="gold"><strong>4 vé</strong></td>
                  <td class="silver">3 vé</td>
                  <td class="bronze">2 vé</td>
                </tr>
                <tr>
                  <td>Logo/Thông tin quảng cáo của NTT được đưa vào các tài liệu cho người tham gia chương trình</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Được đặt booth, standee có mã QR về NTT, sản phẩm của NTT tại khu vực check in</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>MC giới thiệu với tư cách là NTT, được nêu tên và đọc lời cảm ơn, nhận hoa và quà lưu niệm cuối chương trình</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Được nhận thư cảm ơn và giấy chứng nhận tài trợ từ Ban tổ chức để ghi nhận sự đóng góp của Nhà tài trợ vào thành công của chương trình</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Danh xưng của NTT được sử dụng chính thức trong chương trình kể từ thời điểm ký kết hợp đồng đến khi kết thúc chương trình 3 tháng cho các mục đích quảng bá của NTT</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>NTT được sử dụng tên và hình ảnh của chương trình như hoạt động xã hội của NTT</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Đại diện NTT lên phát biểu trong chương trình</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold">—</td>
                  <td class="silver">—</td>
                  <td class="bronze">—</td>
                </tr>
                <tr>
                  <td>Được trình chiếu video quảng bá lúc khai mạc hoặc trong thời gian teabreak (tối đa 3 phút)</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Được phỏng vấn BTC, người tham dự phục vụ cho mục đích quảng bá chương trình</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold">—</td>
                  <td class="silver">—</td>
                  <td class="bronze">—</td>
                </tr>
                <tr>
                  <td>NTT được hỗ trợ làm khảo sát trực tiếp tới người tham dự sự kiện/ sinh viên</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver">—</td>
                  <td class="bronze">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Stage 3 Content: Sau khi sự kiện kết thúc -->
        <div class="stage-pane" id="stage3-content">
          <div class="table-responsive">
            <table class="matrix-table">
              <thead>
                <tr>
                  <th class="col-feature">Quyền lợi sau khi sự kiện kết thúc</th>
                  <th class="col-tier diamond">NTT Kim Cương<small>70.000.000đ</small></th>
                  <th class="col-tier platinum">NTT Bạch Kim<small>50.000.000đ</small></th>
                  <th class="col-tier gold">NTT Vàng<small>30.000.000đ</small></th>
                  <th class="col-tier silver">NTT Bạc<small>10.000.000đ</small></th>
                  <th class="col-tier bronze">NTT Đồng<small>6.000.000đ</small></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Được xuất hiện trong bài đăng cảm ơn NTT trên Fanpage của chương trình</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Được ưu tiên là NTT cho các mùa tiếp theo hoặc các chương trình tiếp theo do BVP - ĐTN tổ chức</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Nhận danh sách phản hồi báo chí, truyền thông và video tổng thể chương trình</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Nhận được sự hỗ trợ tốt nhất, ưu tiên trong các sự kiện quảng bá, giới thiệu, tuyển dụng</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Nhận giấy chứng nhận, phần quà cảm ơn từ Ban Tổ chức</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>NTT nhận được feedback sử dụng dịch vụ/sản phẩm từ Ban Tổ chức, người tham gia</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="gold"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="silver"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="bronze"><i class="fa-solid fa-check check-icon"></i></td>
                </tr>
                <tr>
                  <td>Được cố vấn học thuật dài hạn cho cuộc thi (định hướng phát triển lâu dài cho các mùa sau)</td>
                  <td class="diamond"><i class="fa-solid fa-check check-icon"></i></td>
                  <td class="platinum">—</td>
                  <td class="gold">—</td>
                  <td class="silver">—</td>
                  <td class="bronze">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <!-- Ghi chú thỏa thuận tài trợ -->
      <div class="agreement-note anim" style="margin-top: 24px;">
        <i class="fa-solid fa-circle-info text-accent"></i>
        <span>
          Các nội dung chi tiết về quyền lợi, trách nhiệm sẽ được thảo luận và thống nhất tại thỏa thuận tài trợ được ký kết giữa hai bên. Ngoài những quyền lợi nêu trên, Quý đối tác có thể đề nghị một số quyền lợi khác cho phù hợp với điều kiện của đơn vị mình. Ban Tổ chức sẽ đáp ứng những yêu cầu hợp lý trong khả năng có thể.
        </span>
      </div>
    </section>

    <!-- 7. #lien-he — CẢM ƠN & LIÊN HỆ -->
    <section class="section-container" id="lien-he">
      <div class="contact-wrapper anim">
        
        <h2 class="contact-heading font-display">CẢM ƠN & LIÊN HỆ</h2>
        
        <div class="thanks-letter-box">
          <p>
            Cuối cùng, BTC cuộc thi <strong>“AOF - Hành trang sinh viên 2026”</strong> xin gửi lời cảm ơn chân thành nhất đến Quý Nhà tài trợ, Mạnh thường quân đã ủng hộ nhiệt tình bằng vật chất và tinh thần cho chương trình này.
          </p>
          <p>
            Chúng tôi vô cùng biết ơn sự đồng hành và tài trợ quý báu của Quý Nhà tài trợ dành cho cuộc thi “AOF - Hành trang sinh viên 2026”. Sự đóng góp của Quý Nhà tài trợ không chỉ góp phần tạo nên sự kiện chất lượng, chuyên nghiệp mà còn giúp chúng tôi thực hiện sứ mệnh kết nối, chia sẻ và khuyến khích tư duy sáng tạo, hướng tới một thông điệp sâu sắc về sự phát triển không ngừng, khai phá triệt để tiềm năng của các bạn sinh viên.
          </p>
          <p>
            Chính sự tin tưởng và hậu thuẫn vững chắc từ Quý Nhà tài trợ đã tạo nên đòn bẩy quan trọng, tiếp thêm động lực để Ban Tổ chức kiến tạo một sân chơi tri thức chất lượng, lan tỏa những giá trị nhân văn và thông điệp phát triển bền vững tới cộng đồng.
          </p>
          <p>
            Chúng tôi hy vọng trong thời gian tới, Quý Nhà tài trợ sẽ tiếp tục đồng hành cùng “AOF - Hành trang sinh viên 2026” để tiếp tục mang đến nhiều chương trình, hoạt động ý nghĩa cũng như cùng nhau <em>“truyền lửa”</em> những thông điệp tích cực đến cộng đồng.
          </p>
          <p class="highlight-wishes">
            Một lần nữa, xin gửi lời cảm ơn chân thành và kính chúc Quý Nhà tài trợ sức khỏe, thành công và phát triển bền vững!
          </p>
        </div>

        <!-- Footer Contact Info matching exact reference image -->
        <div class="footer-contact-list anim">
          <!-- Email -->
          <a href="mailto:bandoingoaibvpdtn.hvtc@gmail.com" class="footer-contact-item">
            <div class="footer-icon-circle">
              <i class="fa-regular fa-envelope"></i>
            </div>
            <div class="footer-contact-text">
              <div class="contact-lead-text"><strong>Email:</strong> bandoingoaibvpdtn.hvtc@gmail.com</div>
            </div>
          </a>

          <!-- SĐT -->
          <a href="tel:0981203819" class="footer-contact-item">
            <div class="footer-icon-circle">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="footer-contact-text">
              <div class="contact-lead-text"><strong>SĐT:</strong> 0981203819</div>
              <div class="contact-sub-text">Nguyễn Thúy Nga &nbsp;–&nbsp; Trưởng ban Đối Ngoại “AOF - Hành trang sinh viên 2026”</div>
            </div>
          </a>

          <!-- Fanpage -->
          <a href="https://www.facebook.com/banvanphongdtn.hvtc" target="_blank" rel="noopener noreferrer" class="footer-contact-item">
            <div class="footer-icon-circle">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div class="footer-contact-text">
              <div class="contact-lead-text"><strong>Fanpage:</strong> Ban Văn phòng - Đoàn Thanh niên Học viện Tài chính</div>
            </div>
          </a>
        </div>

        <!-- Footer -->
        <footer class="site-footer">
          <p>© 2026 Ban Văn phòng - Đoàn Thanh niên Học viện Tài chính.</p>
          <p class="footer-sub">Học viện Tài chính – Số 58 phố Lê Văn Hiến, phường Đông Ngạc, quận Bắc Từ Liêm, TP. Hà Nội</p>
        </footer>

      </div>
    </section>

  </div>

  <!-- Toast notification container -->
  <div class="toast-container" id="toast-container" aria-live="polite"></div>

  <!-- Dossier Download Modal -->
  <div class="modal-backdrop" id="dossier-modal" aria-hidden="true">
    <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button class="modal-close" id="modal-close-btn" aria-label="Đóng"><i class="fa-solid fa-xmark"></i></button>
      <div class="modal-icon"><i class="fa-solid fa-file-pdf"></i></div>
      <h3 class="modal-title" id="modal-title">Hồ Sơ Mời Tài Trợ HTSV 2026</h3>
      <p class="modal-desc">
        Bộ tài liệu chính thức bao gồm Thư ngỏ, Đề án chi tiết, Kế hoạch truyền thông và Bảng quyền lợi dành cho Nhà tài trợ.
      </p>
      <div class="modal-actions">
        <a href="#tai-tro" class="modal-btn-download" id="confirm-download-btn">
          <i class="fa-solid fa-cloud-arrow-down"></i> Tải trọn bộ Hồ sơ (PDF)
        </a>
        <a href="tel:0981203819" class="modal-btn-contact">
          <i class="fa-solid fa-phone"></i> Gọi hotline Ban Đối Ngoại
        </a>
      </div>
    </div>
  </div>

  <!-- Script -->
  <script src="main.js"></script>
</body>
</html>
`;
};
