import request from "@/utils/request";
/*
 * API
 */
// 测试API  test
export function testApi(data) {
  return request({
    url: "/upload",
    method: "post",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
