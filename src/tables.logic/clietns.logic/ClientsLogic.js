import axios from 'axios';

// Функция для удаления клиента
export const deleteClientById = async (clientId) => {
    try {
        // Выполняем DELETE запрос к API
        await axios.delete(`http://localhost:8080/api/deleteClientById?id=${clientId}`);
        console.log(`Клиент с ID ${clientId} успешно удален`);
    } catch (error) {
        console.error(`Ошибка при удалении клиента с ID ${clientId}:`, error);
    }
};

// Функция для редактирования клиента
export const editClient = async (clientId, newData) => {
    try {
        // Выполняем PUT запрос к API, передавая newData в качестве тела запроса
        await axios.put(`http://localhost:8080/api/updateClientById`, newData);
        console.log(`Клиент с ID ${clientId} успешно отредактирован`);
    } catch (error) {
        console.error(`Ошибка при редактировании клиента с ID ${clientId}:`, error);
    }
};

// Функция для просмотра клиента
export const viewClient = async (clientId) => {
    try {
        // Выполняем POST запрос к API, передавая clientId как параметр запроса
        const response = await axios.post(`http://localhost:8080/api/getAllClietnInfo?clientId=${clientId}`);
        // Делаем что-то с полученными данными, например, выводим в консоль
        console.log('Данные клиента:', response.data);
    } catch (error) {
        console.error(`Ошибка при получении данных клиента с ID ${clientId}:`, error);
    }
};

// Функция для удаления заказа
export const deleteOrderById = async (orderId) => {
    try {
        // Выполняем DELETE запрос к API
        await axios.delete(`http://localhost:8080/api/deleteOrderById?id=${orderId}`);
        console.log(`Заказ с ID ${orderId} успешно удален`);
    } catch (error) {
        console.error(`Ошибка при удалении заказа с ID ${orderId}:`, error);
    }
};

// Функция для просмотра заказа
export const viewOrder = (orderId) => {
    // Ваша логика просмотра заказа
    console.log(`Просмотр заказа с ID ${orderId}`);
};
