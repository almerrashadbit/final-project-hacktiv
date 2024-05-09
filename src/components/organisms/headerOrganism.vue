<template>
  <nav class="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
    <div class="container-fluid">
      <linkAtom link-href="#" link-class="navbar-brand"> Patient Care </linkAtom>
      <buttonAtom
        button-type="button"
        button-class="navbar-toggler"
        button-data-bs-toggle="collapse"
        button-data-bs-target="#navbarSupportedContent"
        button-aria-label="Toggle navigation"
        button-aria-expanded="false"
        button-aria-controls="navbarSupportedContent"
        ><span class="navbar-toggler-icon"></span
      ></buttonAtom>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <unorderedLinkMolecule
          unordered-class="navbar-nav me-auto mb-2 mb-lg-0"
          :unordered-list="headerUnordered.linkForm"
          :unordered-is-link="true"
        >
          <li class="nav-item dropdown">
            <linkAtom
              link-href="#"
              link-class="nav-link dropdown-toggle"
              link-role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Dropdown</linkAtom
            >
            <unorderedLinkMolecule
              :unordered-class="headerUnordered.unorderedDropdownClass"
              :unordered-list="headerUnordered.dropdownLinkForm"
              :unordered-is-link="true"
            /></li
        ></unorderedLinkMolecule>
        <form class="d-flex" role="search">
          <SearchBarMolecule v-if="isSearchBar" search-input-placeholder="Search"
            >Search</SearchBarMolecule
          >
        </form>
        <span class="navbar-text">
          <a href="#">Testing</a>
        </span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import linkAtom from '../atoms/linkAtom.vue'
import buttonAtom from '../atoms/buttonAtom.vue'
import unorderedLinkMolecule from '../molecules/unorderedLinkMolecule.vue'
import SearchBarMolecule from '../molecules/searchBarMolecule.vue'

defineProps({
  headerUnordered: {
    type: Object,
    required: true
  },
  isSearchBar: {
    type: Boolean,
    required: true
  }
})
</script>
