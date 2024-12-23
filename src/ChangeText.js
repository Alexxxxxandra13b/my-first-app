import React, { useState } from 'react';

function ChangeText() {
    const [text, setText] = useState("Alexandra");
    function reverseText() {
        if (text == "Alexandra") setText("Александра")
        else setText("Alexandra")
    }

    return (
        <div>
            <p>Привет {text}</p>
            <button onClick={reverseText}>
                Нажми сюда
            </button>
        </div>
    );
}

export default ChangeText;