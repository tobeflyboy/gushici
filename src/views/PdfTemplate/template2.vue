<template>
  <div class="pdf-container">
    <PDFView :pdfUrl="jsPdf" />
  </div>
</template>
    <script setup>
import PDFView from "@/components/PdfPreview/index.vue";
import jsPdf from "/pdf/test.pdf"; // 本地地址
// const jsPdf = 'http://localhost/test.pdf' // 线上地址也可，但需要注意跨域问题
</script>
    <style scoped>
.pdf-container {
  overflow: auto;
}
</style>
    