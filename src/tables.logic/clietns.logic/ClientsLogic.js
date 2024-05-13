// В файле ClientsLogic.js
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

// Функция для просмотра клиента
export const viewClient = async (clientId) => {
    try {
        // Выполняем POST запрос к API, передавая clientId как параметр запроса
        const response = await axios.post(`http://localhost:8080/api/getAllClietnInfo?clientId=${clientId}`);
        // Возвращаем полученные данные
        return response.data;
    } catch (error) {
        console.error(`Ошибка при получении данных клиента с ID ${clientId}:`, error);
        return null; // Возвращаем null в случае ошибки
    }
};

