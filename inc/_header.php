<?php $root = "http://localhost/" ?>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>test</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <script src="js"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo $root ?>style.css">
  </head>
  <body>
    <div id="wrap">
      <header id="header">
        <div class="sitename">
          <img src="<?php echo $root ?>images/layout/header_logo.svg" alt="CW Facility Solution Inc.">
        </div>
        <nav class="gnav">
          <ul class="list">
            <li class="item is-active">
              <a href="/">
                <span class="en">HOME</span>
                <span class="jp">ホーム</span>
              </a>
            </li>
            <li class="item">
              <a href="/concept/">
                <span class="en">CONCEPT</span>
                <span class="jp">コンセプト</span>
              </a>
            </li>
            <li class="item">
              <a href="">
                <span class="en">CASE STUDY</span>
                <span class="jp">ケーススタディ</span>
              </a>
            </li>
            <li class="item">
              <a href="">
                <span class="en">SERVICE</span>
                <span class="jp">サービス</span>
              </a>
            </li>
            <li class="item">
              <a href="">
                <span class="en">COMPANY</span>
                <span class="jp">会社概要</span>
              </a>
            </li>
            <li class="item is-red is-pc">
              <a href="">
                <span class="en">CONTACT</span>
                <span class="jp">お問い合わせ</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="contact is-st">
          <a href="/contact/"><img src="<?php echo $root ?>images/layout/icon_mail.svg" alt="contact"></a>
        </div>
        <div class="menu is-st">
          <a href="">
            <div></div>
            <div></div>
            <div></div>
          </a>
        </div>
      </header>