import axios from 'axios';

// Функция для удаления заказа
export const deleteOrderById = async (orderId) => {
    try {
        // Выполняем DELETE запрос к API
        await axios.delete(`http://localhost:8080/api/deleteOrderById?orderId=${orderId}`);
        console.log(`Заказ с ID ${orderId} успешно удален`);
    } catch (error) {
        console.error(`Ошибка при удалении заказа с ID ${orderId}:`, error);
    }
};

// Функция для редактирования заказа
export const editOrder = async (orderId, newData) => {
    try {
        // Выполняем PUT запрос к API
        await axios.put(`http://localhost:8080/api/editOrderById?id=${orderId}`, newData);
        console.log(`Заказ с ID ${orderId} успешно отредактирован`);
    } catch (error) {
        console.error(`Ошибка при редактировании заказа с ID ${orderId}:`, error);
    }
};

// Функция для просмотра заказа
export const viewOrder = (orderId) => {
    // Ваша логика просмотра заказа
    console.log(`Просмотр заказа с ID ${orderId}`);
};
