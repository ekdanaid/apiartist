# APIartist
Rest API สำหรับ ข้อมูลหลังบ้าน

# Install
npm install

# Start
npm start

# Description สำหรับ Method

[Get]find All - localhost:3000/artist 

[Get]findByID - localhost:3000/artist/${id}

[Get]findByname - localhost:3000/artist/name/${name}

[Get]findBygenre - localhost:3000/artist/genre/${genre}



[Post]Create - localhost:3000/artist/create รับ req.body = {"name" : ${name}, "genre" : ${genre}}

[Put]Update - localhost:3000/artist/update/${id} รับ req.body = {"name" : ${name}, "genre" : ${genre}}

[Delete] Delete - localhost:3000/artist/delete/${id}

[Response] ที่ไม่ใช่ Get Method return {"ResponseMessage" : "${message}"} 
