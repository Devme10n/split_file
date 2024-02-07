const splitFile = require('split-file');
const { logError } = require('../utils/logger'); // logError 함수 import

//=============================================================================================
// 파일 병합
//=============================================================================================

//---------------------------------------------------------
// 8. fileOrderMapping 정보 조회 (아직 구현되지 않음)
//---------------------------------------------------------

//---------------------------------------------------------
// 9. 분할된 파일들을 다운로드 (아직 구현되지 않음)
// Promise.all()을 사용하여 병렬로 다운로드
//---------------------------------------------------------

//#############################################################################################
// 분할된 파일들의 순서가 매핑된 순서와 일치한 상태여서 sort 함수를 사용하지 않아도 파일 병합이 가능함. -> 수정필요
//#############################################################################################
//---------------------------------------------------------
// 10. 파일 정렬
//---------------------------------------------------------
function sortFiles(splitFileNames, splitFileOrderMapping) {
    // 분할된 파일들을 원래대로 정렬
    splitFileNames.sort((a, b) => splitFileOrderMapping[a] - splitFileOrderMapping[b]);
    return splitFileNames;
}

//---------------------------------------------------------
// 11. 파일 병합
//---------------------------------------------------------
async function mergeFiles(sortedFileNames, outputPath) {
    try {
        // 파일 합치기
        await splitFile.mergeFiles(sortedFileNames, outputPath);
        console.log('파일 합치기 완료');
    } catch(err) {
        logError(err);
    }
}

//---------------------------------------------------------
// 12. 파일명 복호화 (아직 구현되지 않음)
//---------------------------------------------------------

//---------------------------------------------------------
// 13. 파일 복호화 (아직 구현되지 않음)
//---------------------------------------------------------

module.exports = {
    sortFiles,
    mergeFiles
    //... (8~13번 기능의 export)
};
