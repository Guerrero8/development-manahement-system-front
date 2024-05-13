// В файле OrdersLogic.js
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

// Функция для просмотра заказа
export const viewOrder = async (orderId) => {
    try {
        // Выполняем GET запрос к API, передавая orderId как параметр запроса
        const response = await axios.get(`http://localhost:8080/api/getOrderById?id=${orderId}`);
        // Возвращаем полученные данные
        return response.data;
    } catch (error) {
        console.error(`Ошибка при получении данных заказа с ID ${orderId}:`, error);
        return null; // Возвращаем null в случае ошибки
    }
};
