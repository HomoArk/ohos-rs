use napi::bindgen_prelude::{Buffer,pre_init};
use napi::module_init;
use napi_derive::napi;


#[napi]
pub fn get_info_with_buffer() -> Buffer {
  let he = "hello world".as_bytes();
  he.into()
}

#[napi]
pub fn get_number() -> Buffer {
    vec![1,2,3].into()
}

#[napi]
pub fn add(left: u32, right: u32) -> u32 {
  left + right
}

#[napi]
pub fn subtraction(left: u32, right: u32) -> u32 {
  left - right
}

#[module_init]
fn init() {
  pre_init();
}