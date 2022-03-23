function solution(id_list, report, k) {
    const id_len = id_list.length;
    var answer = Array(id_len).fill(0);
    const report_len = report.length;
    const reported_cnt = {}
    const report_list = {};
    for (let i = 0; i < id_len; i++) {
        report_list[id_list[i]] = new Set;
        reported_cnt[id_list[i]] = 0;
    }
    const ban_list = new Set;
    
    for (let i = 0; i < report_len; i++) {
        const [userId, reportedId] = report[i].split(' ');
        if (report_list[userId].length === 0
            || !report_list[userId].has(reportedId)) {
            report_list[userId].add(reportedId);
            reported_cnt[reportedId]++;
            if (reported_cnt[reportedId] >= k) {
                ban_list.add(reportedId);
            }
        }
    }
    // console.log(report_list, ban_list);
    for (let i = 0; i < id_len; i++) {
        [...ban_list].forEach((name) => {
            if (report_list[id_list[i]].has(name))
                answer[i]++;
        })
    }
    
    return answer;
}