/* 
  # 테스트 코드가 필요한 이유
  - 일일이 기능을 손으로 확인하는 시간을 줄여준다.

  ex) 로그인 페이지
  1. id 인풋박스에 이메일을 입력했을 때, 이메일이 맞는지 확인하는 로직
  2. id, pw가 맞는 경우에 로그인 처리. 다음 페이지로 이동
*/

/*
  describe() : 연관된 테스트 케이스를 그룹화하는 API
  test() : 하나의 테스트 케이스르 검증하는 API
  expect(결과값).toBe(기대값) : 결과값과 기대값이 일치하는지 검증하는 API
*/

// import { sum } from './math';
// describe('[math.js] sum 함수 테스트 코드', () => {
// 	test('10 + 20 = 30', () => {
// 		const result = sum(10, 20);
// 		expect(result).toBe(30);
// 	});
// });

// shallowMount => 특정 컴포넌트 마운트 (componentName, [목업 데이터]{ data() {} })
import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  /* test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
    // 인스턴스가 생성될 때와 인스턴스가 생성되고 나서 정의하는 차이
    // const instance = new Vue(LoginForm).$mount();
    // expect(instance.username).toBe('');
    
    // Instance === wrapper.vm.username
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe('');
  }) */
  test('ID는 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test'
        }
      }
    });
    /* Template의 HTML요소를 찾는 API */
    // const idInput = wrapper.find('#username');
    // console.log('인풋 박스', idInput.element.value);
    // console.log(wrapper.vm.isUsernameValid);

    // const warningText = wrapper.find('.warning');
    // console.log('warningText', warningText.html());

    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: ''
        };
      }
    });

    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
})