<template>
  <div>
    <div class="pure-form pure-g">
      <fieldset>
        <legend class="pure-u-1">Edit</legend>
        <input
          v-model.number="edit_x"
          type="number"
          min="0"
          placeholder="x"
          class="pure-u-1-12"
        />
        <input
          v-model.number="edit_y"
          type="number"
          min="0"
          placeholder="y"
          class="pure-u-1-12"
        />
        <input
          v-model="edit_data"
          type="text"
          placeholder="value or formula"
          class="pure-u-5-6"
          :disabled="is_valid_position == false"
        />
      </fieldset>
    </div>
    <div class="pure-form">
      <fieldset>
        <legend>Insert / Remove</legend>
        <select v-model="row_or_column" class="pure-input-1-4">
          <option disabled value="">Please Select</option>
          <option>Row</option>
          <option>Column</option>
        </select>
        <input
          v-model="insert_remove_pos"
          type="number"
          min="0"
          placeholder="position"
          class="pure-input-1-4"
        />
        <button class="pure-button" :disabled="row_or_column == ''">
          Insert
        </button>
        <button class="pure-button" :disabled="row_or_column == ''">
          Remove
        </button>
        <p v-if="row_or_column != ''">
          Insert / Remove a {{ row_or_column }} at {{ insert_remove_pos }}
        </p>
      </fieldset>
    </div>
    <table class="pure-table pure-table-bordered">
      <tbody>
        <tr v-for="(column, y) in table" :key="y">
          <td v-for="(item, x) in column" :key="x">
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    edit_x_internal: 0,
    edit_y_internal: 0,
    x_size: 5,
    y_size: 5,
    edit_data_internal: '0',
    is_valid_position: true,
    insert_or_remove: '',
    row_or_column: '',
    insert_remove_pos: 0,
    table: [
      ['0', '1', '2', '3', '4'],
      ['5', '6', '7', '8', '9'],
      ['10', '11', '12', '13', '14'],
      ['15', '16', '17', '18', '19'],
      ['20', '21', '22', '23', '24'],
    ],
  }),
  computed: {
    edit_x: {
      get() {
        return this.edit_x_internal
      },
      set(value: number) {
        this.update_edit_pos(value, this.edit_y)
      },
    },
    edit_y: {
      get() {
        return this.edit_y_internal
      },
      set(value: number) {
        this.update_edit_pos(this.edit_x, value)
      },
    },
    edit_data: {
      get() {
        return this.edit_data_internal
      },
      set(value: string) {
        this.edit_data_internal = value

        if (this.is_valid_position) {
          this.table[this.edit_x][this.edit_y] = value
        }
      },
    },
  },
  methods: {
    update_edit_pos(x: number, y: number) {
      this.edit_x_internal = x
      this.edit_y_internal = y

      if (
        !Number.isInteger(x) ||
        !Number.isInteger(y) ||
        this.edit_x < 0 ||
        this.x_size <= this.edit_x ||
        this.edit_y < 0 ||
        this.y_size <= this.edit_y
      ) {
        this.edit_data_internal = ''
        this.is_valid_position = false
      } else {
        this.edit_data_internal = this.table[this.edit_x][this.edit_y]
        this.is_valid_position = true
      }
    },
  },
})
</script>
