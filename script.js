* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Microsoft YaHei", sans-serif;
  background-color: #0f1116;
  color: #d1d5db;
  line-height: 1.8;
  font-size: 15px;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 50px 20px;
}

/* 头部样式 */
.header {
  text-align: center;
  margin-bottom: 60px;
  padding-bottom: 25px;
  border-bottom: 1px solid #272a33;
}

.header h1 {
  font-size: 46px;
  color: #ffffff;
  letter-spacing: 8px;
  margin-bottom: 12px;
}

.header p {
  font-size: 17px;
  color: #9ca3af;
}

/* 卡片通用样式 */
.card {
  background-color: #181b23;
  border: 1px solid #272a33;
  border-radius: 14px;
  padding: 32px;
  margin-bottom: 26px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.card.show {
  opacity: 1;
  transform: translateY(0);
}

.card:hover {
  border-color: #3b82f6;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
}

.card h2 {
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;
  border-left: 4px solid #3b82f6;
  padding-left: 14px;
}

/* 列表样式 */
.info-list {
  list-style: none;
  margin-bottom: 20px;
}

.info-list li {
  padding: 5px 0;
  font-size: 15px;
}

.course h3 {
  font-size: 17px;
  color: #e5e7eb;
  margin: 15px 0 8px;
}

/* 经历模块 */
.item {
  margin-bottom: 10px;
}

.item h3 {
  font-size: 17px;
  color: #f3f4f6;
  margin-bottom: 10px;
}

.item h3 span {
  font-size: 14px;
  color: #9ca3af;
  font-weight: normal;
  margin-left: 10px;
}

.item p {
  margin: 6px 0;
  color: #d1d5db;
}

.achievement {
  color: #60a5fa !important;
  margin-top: 10px;
}

/* 荣誉列表 */
.honor-list {
  list-style: none;
}

.honor-list li {
  padding: 6px 0;
  position: relative;
  padding-left: 18px;
}

.honor-list li::before {
  content: "•";
  color: #3b82f6;
  position: absolute;
  left: 0;
}

/* 联系方式 */
.contact p {
  font-size: 16px;
  margin: 8px 0;
}
