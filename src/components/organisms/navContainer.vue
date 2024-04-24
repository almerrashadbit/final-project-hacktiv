<template>
  <linkAtom :href="link.href" :linkClass="link.linkClass" :role="link.role">{{
    link.formLinkText
  }}</linkAtom>
  <buttonAtom
    type="button"
    classButton="navbar-toggler"
    dataBsToggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-label="Toggle navigation"
    aria-expanded="false"
    aria-controls="navbarSupportedContent"
    ><span class="navbar-toggler-icon"></span
  ></buttonAtom>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <unorderedLinkMolecule
      :unorderedClass="unordered.unorderedClass"
      :linkForm="unordered.linkForm"
    >
      <li class="nav-item dropdown">
        <linkAtom
          href="#"
          linkClass="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          >Dropdown</linkAtom
        >
        <unorderedLinkMolecule
          :unorderedClass="unordered.unorderedDropdownClass"
          :linkForm="unordered.dropdownLinkForm"
        /></li
    ></unorderedLinkMolecule>
    <SearchBarMolecule
      v-if="searchBar"
      classButton="btn btn-outline-light"
      inputClass="form-control me-2"
      placeholder="Search"
      type="search"
      ariaLabelInput="Search"
      >Search</SearchBarMolecule
    >
    <span class="navbar-text">
      <a href="#">Testing</a>
    </span>
  </div>
</template>

<script setup>
import linkAtom from '../atoms/linkAtom.vue'
import buttonAtom from '../atoms/buttonAtom.vue'
import unorderedLinkMolecule from '../molecules/unorderedLinkMolecule.vue'
import SearchBarMolecule from '../molecules/searchBarMolecule.vue'

defineProps({
  link: {
    type: Array,
    required: true
  },
  unordered: {
    type: Array,
    required: true
  },
  searchBar: {
    type: Boolean,
    required: true
  }
})
</script>
