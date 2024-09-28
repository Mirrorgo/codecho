# Codecho

<p align="right">
  <a href="#en" id="en-btn">English</a> | <a href="#zh" id="zh-btn">中文</a>
</p>

<div id="en">
  <!-- English content -->
  ## Codecho

  > 💡 **Codecho** is an open-source code snippet library that provides developers with a wide range of reusable snippets. Simply copy and paste to integrate them into your project with ease!

  ## 🖥️ Live Preview

  Check out [Codecho](https://codecho.vercel.app/) to see live demos of the snippets in action.

  ## 📄 License

  This project is licensed under the [MIT License](LICENSE).
</div>

<div id="zh" style="display:none;">
  <!-- 中文内容 -->
  ## Codecho

  > 💡 **Codecho** 是一个开源代码片段库，为开发者提供了丰富的代码片段。只需复制粘贴，即可轻松集成到您的项目中！

  ## 🖥️ 在线预览

  可以访问 [Codecho](https://codecho.vercel.app/) 查看代码片段的实际效果。

  ## 📄 许可证

  本项目基于 [MIT License](LICENSE) 进行开源。
</div>

<script>
  document.getElementById('en-btn').onclick = function() {
    document.getElementById('en').style.display = 'block';
    document.getElementById('zh').style.display = 'none';
  };
  document.getElementById('zh-btn').onclick = function() {
    document.getElementById('en').style.display = 'none';
    document.getElementById('zh').style.display = 'block';
  };
</script>
