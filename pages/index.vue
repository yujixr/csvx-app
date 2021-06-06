<template>
  <div>
    <div class="pure-form pure-g">
      <fieldset>
        <legend class="pure-u-1">Edit</legend>
        <input
          type="number"
          v-model="x"
          min="0"
          placeholder="x"
          class="pure-u-1-12"
        />
        <input
          type="number"
          v-model="y"
          min="0"
          placeholder="y"
          class="pure-u-1-12"
        />
        <input
          type="text"
          v-model="new_data"
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
          type="number"
          v-model="insert_remove_pos"
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
        <tr v-for="(column, y) in table" v-bind:key="y">
          <td v-for="(item, x) in column" v-bind:key="x">
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
    x_internal: 0,
    y_internal: 0,
    x_size: 5,
    y_size: 5,
    new_data_internal: '0',
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
    x: {
      get() {
        return this.x_internal
      },
      set(value: number) {
        this.update_edit_pos(value, this.y)
      },
    },
    y: {
      get() {
        return this.y_internal
      },
      set(value: number) {
        this.update_edit_pos(this.x, value)
      },
    },
    new_data: {
      get() {
        return this.new_data_internal
      },
      set(value: string) {
        this.new_data_internal = value

        if (
          this.x < 0 ||
          this.x_size <= this.x ||
          this.y < 0 ||
          this.y_size <= this.y
        ) {
          return
        }

        try {
          let table = this.table
          table[this.x][this.y] = value
          this.table = table
        } catch (error) {}
      },
    },
  },
  methods: {
    update_edit_pos(x: number, y: number) {
      this.x_internal = x
      this.y_internal = y

      if (
        this.x < 0 ||
        this.x_size <= this.x ||
        this.y < 0 ||
        this.y_size <= this.y
      ) {
        this.new_data_internal = ''
        this.is_valid_position = false
        return
      }

      try {
        this.new_data_internal = this.table[this.x][this.y]
        this.is_valid_position = true
      } catch (error) {
        this.new_data_internal = ''
        this.is_valid_position = false
      }
    },
  },
})
</script>
