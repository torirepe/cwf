
<?php require("../inc/_header.php");?>
  <main id="contact">

  <!-- hero -->
    <div class="visual c-visual">
      <h2 class="visual-heading c-visual-heading">
        <span class="visual-heading__en c-visual-heading__en">CONTACT</span>
        <span class="visual-heading__jp c-visual-heading__jp">お問い合わせ</span>
      </h2>
    </div>
  <!-- /hero -->


  <!-- form -->
  <section>
    <div class="form">
      <div class="intro">
        <p class="text">オフィスに関するお問い合わせ、ご質問などはこちらのフォームよりお問い合わせください。<br>また、フォームがうまく送信出来ない場合などは、メールにてお問い合わせください。</p>
        <p class="caution"><span class="form_required">必須</span>は必須入力項目です</p>
      </div>
      <table class="form-list">
        <tbody>
          <tr class="from-list_item">
            <th>お名前<span class="form_required">必須</span></th>
            <td><input type="text" maxlength="50" placeholder="姓"><input type="text" maxlength="50" placeholder="名"></td>
          </tr>
          <tr class="from-list_item">
            <th>会社名<span class="form_required">必須</span></th>
            <td><input type="text"></td>
          </tr>
          <tr class="from-list_item">
            <th>部署・役職</th>
            <td><input type="text"></td>
          </tr>
          <tr class="from-list_item">
            <th>ご住所</th>
            <td><input type="text"></td>
          </tr>
          <tr class="from-list_item">
            <th>電話番号<span class="form_required">必須</span></th>
            <td><input type="text"></td>
          </tr>
          <tr class="from-list_item">
            <th>FAX番号</th>
            <td><input type="text"></td>
          </tr>
          <tr class="from-list_item">
            <th>E-MAIL<span class="form_required">必須</span></th>
            <td><input type="text"></td>
          </tr>
          <tr class="from-list_item">
            <th>E-MAIL<small>(確認用)</small><span class="form_required">必須</span></th>
            <td><input type="text"></td>
          </tr>
          <tr class="from-list_item">
            <th>お問い合わせ内容<span class="form_required">必須</span></th>
            <td><textarea name="" id="" cols="30" rows="10"></textarea></td>
          </tr>
        </tbody>
      </table>
      <div class="form-check">
        <div class="heading"><a href="../privacyporicy/">個人情報保護方針 ></a></div>
        <div class="check"><label><span class="form_required">必須</span><input type="checkbox">上記の内容に同意する　</label></div>
      </div>
      <div class="form-btn">
        <div class="form-btn__confirm form-btn__parts"><input type="submit" value="送信"></div>
      </div>
    </div>
  </section>
  <!-- form -->

<?php require("../inc/_footer.php");?>