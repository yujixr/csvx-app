use std::sync::Mutex;

use csvx::Table;
use lazy_static::lazy_static;
use wasm_bindgen::prelude::*;

lazy_static! {
    static ref TABLE: Mutex<Table> = Mutex::new(
        Table::new("0,1,2,3,4\n5,6,7,8,9\n10,11,12,13,14\n15,16,17,18,19\n20,21,22,23,24").unwrap()
    );
}

#[wasm_bindgen]
pub fn get_x_size() -> Result<usize, JsValue> {
    match TABLE.lock() {
        Ok(table) => {
            if let Some(row) = table.get_raw_table().get(0) {
                Ok(row.len())
            } else {
                Ok(0)
            }
        }
        Err(e) => Err(JsValue::from_str(e.to_string().as_str())),
    }
}

#[wasm_bindgen]
pub fn get_y_size() -> Result<usize, JsValue> {
    match TABLE.lock() {
        Ok(table) => Ok(table.get_raw_table().len()),
        Err(e) => Err(JsValue::from_str(e.to_string().as_str())),
    }
}

#[wasm_bindgen]
pub fn get_raw_item(x: usize, y: usize) -> Result<String, JsValue> {
    match TABLE.lock() {
        Ok(table) => {
            if let Some(row) = table.get_raw_table().get(y) {
                if let Some(item) = row.get(x) {
                    return Ok(item.to_string());
                }
            }
            Ok(String::new())
        }
        Err(e) => Err(JsValue::from_str(e.to_string().as_str())),
    }
}

#[wasm_bindgen]
pub fn get_calculated_item(x: usize, y: usize) -> Result<String, JsValue> {
    match TABLE.lock() {
        Ok(table) => {
            if let Some(row) = table.get_calculated_table().get(y) {
                if let Some(item) = row.get(x) {
                    return Ok(item.to_string());
                }
            }
            Ok(String::new())
        }
        Err(e) => Err(JsValue::from_str(e.to_string().as_str())),
    }
}

#[wasm_bindgen]
pub fn update_item(x: usize, y: usize, new_value: &str) -> Result<JsValue, JsValue> {
    match TABLE.lock() {
        Ok(mut table) => match table.update(x, y, new_value) {
            Ok(_) => Ok(JsValue::NULL),
            Err(e) => Err(JsValue::from_str(e.to_string().as_str())),
        },
        Err(e) => Err(JsValue::from_str(e.to_string().as_str())),
    }
}

#[wasm_bindgen]
pub fn insert_x(x: usize) -> Result<JsValue, JsValue> {
    match TABLE.lock() {
        Ok(mut table) => {
            table.insert_x(x);
            Ok(JsValue::NULL)
        }
        Err(e) => Err(JsValue::from_str(e.to_string().as_str())),
    }
}

#[wasm_bindgen]
pub fn insert_y(y: usize) -> Result<JsValue, JsValue> {
    match TABLE.lock() {
        Ok(mut table) => {
            table.insert_y(y);
            Ok(JsValue::NULL)
        }
        Err(e) => Err(JsValue::from_str(e.to_string().as_str())),
    }
}

#[wasm_bindgen]
pub fn remove_x(x: usize) -> Result<JsValue, JsValue> {
    match TABLE.lock() {
        Ok(mut table) => {
            if let Some(row) = table.get_raw_table().get(0) {
                if row.len() != 1 {
                    table.remove_x(x);
                }
            }
            Ok(JsValue::NULL)
        }
        Err(e) => Err(JsValue::from_str(e.to_string().as_str())),
    }
}

#[wasm_bindgen]
pub fn remove_y(y: usize) -> Result<JsValue, JsValue> {
    match TABLE.lock() {
        Ok(mut table) => {
            if table.get_raw_table().len() != 1 {
                table.remove_y(y);
            }
            Ok(JsValue::NULL)
        }
        Err(e) => Err(JsValue::from_str(e.to_string().as_str())),
    }
}
