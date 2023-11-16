import { users } from "@/pages/data/users";

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(users);
    }
    else if (req.method === "POST") {
        const { id, email, username, password, img, phone, creationDate } = req.body;
        users.push({ id, email, username, password, img, phone, creationDate });
        res.status(201).json(users);
    }
}
