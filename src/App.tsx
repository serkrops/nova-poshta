import React from "react";

export const App: React.FC = () => {
  return (
    <div>
      <form>
        <div>
          <button>ТТН</button>
          <button>Відділення</button>
        </div>
        <div>
          <div>
            <div>
              <input type="text" />
              <button>🔍</button>
              <button>🗙</button>
            </div>
            <div>
              <p>Статус:</p>
              <p>Отримали:</p>
              <p>Відправив:</p>
            </div>
          </div>
          <div>
            <div>
              <p>Історія</p>
              <button>🗑️</button>
            </div>
            <div>
              <h1>TTN</h1>
            </div>
          </div>
        </div>
        <div>
          <div>
            <input type="text" />
            <button>🗙</button>
          </div>
          <div>
            <div>
              <p>Cities</p>
            </div>
            <div>
              <p>Warehouses</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
