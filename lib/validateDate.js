const zod = require('zod');


function validateTeacherData(teacherData){
    const schema = zod.Schema({
        name: string
    })
    const data = schema.safeParse(teacherData)
    if(data.success){
        return data.data;
    }else{
        return data.success
    }
}

module.exports = {
    validateTeacherData
}
