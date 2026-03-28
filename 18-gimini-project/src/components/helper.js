export  function checkHead(str) {
        return /^(\*)(\*)(.*)\*$/.test(str)
    }


export function replaceHeading(str){
    return  str.replace(/^(\*)(\*)|(\*)$/g,'')

}