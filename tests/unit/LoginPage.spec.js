const loginAPI = params => new Promise((resolve) => {
  const { user, password } = params;
  setTimeout(() => {
    const check = user === 'admin' && password === '123456';
    if (check) {
      resolve({
        code: '1000',
        data: {},
      });
    } else {
      resolve({
        code: '5000',
        data: {},
        message: '用戶名稱或密碼錯誤',
      });
    }
  }, 1500);
});

describe('login api', () => {
  const response = {
    code: '1000',
    data: {},
  };
  const errorResponse = {
    code: '5000',
    data: {},
    message: '用戶名稱或密碼錯誤',
  };
  it('測試正常登入', async () => {
    const params = {
      user: 'admin',
      password: '123456',
    };
    const resp = await loginAPI(params);
    expect(resp).toEqual(response);
  });
  it('測試異常登入', async () => {
    const params = {
      user: 'admin',
      password: '123123',
    };
    expect(await loginAPI(params)).toEqual(errorResponse);
  });
});
