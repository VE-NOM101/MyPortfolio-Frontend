<template>
    <div class="admin-layout">
        <AdminSidebar />
        <div class="admin-content">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import AdminSidebar from '@/components/admin/AdminSidebar.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped>
.admin-layout {
    display: flex;
}

.admin-content {
    flex-grow: 1;
    padding: 20px;
}
</style>