DROP TABLE IF EXISTS attendees;

CREATE TABLE attendees(
    attendant_id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    country VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    position VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    PRIMARY KEY (attendant_id)
);

-- INSERT INTO attendees (name, lastname, email, country, phone, position) VALUES
-- ('John', 'Doe', 'jdoe@mail.com', 'Argentina', '1234125345', 'Customer Service Manager')
-- ;
