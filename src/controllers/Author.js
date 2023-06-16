"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Author_1 = require("../models/Author");
var createAuthor = function (req, res, next) {
    var name = req.body.name;
    var author = new Author_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name: name
    });
    return author
        .save()
        .then(function (author) { return res.status(201).json({ author: author }); })
        .catch(function (error) { return res.status(500).json({ error: error }); });
};
var readAuthor = function (req, res, next) {
    var authorId = req.params.authorId;
    return Author_1.default.findById(authorId)
        .then(function (author) {
        return author ? res.status(200).json({ author: author }) : res.status(404).json({ message: 'not found' });
    })
        .catch(function (error) { return res.status(500).json({ error: error }); });
};
var readAll = function (req, res, next) {
    return Author_1.default.find()
        .then(function (authors) { return res.status(200).json({ authors: authors }); })
        .catch(function (error) { return res.status(500).json({ error: error }); });
};
var UpdateAuthor = function (req, res, next) {
    var authorId = req.params.authorId;
    return Author_1.default.findById(authorId)
        .then(function (author) {
        if (author) {
            author.set(req.body);
            return author
                .save()
                .then(function (author) { return res.status(201).json({ author: author }); })
                .catch(function (error) { return res.status(500).json({ error: error }); });
        }
        else {
            res.status(404).json({ message: 'not found' });
        }
    })
        .catch(function (error) { return res.status(500).json({ error: error }); });
};
var DeleteAuthor = function (req, res, next) {
    var authorId = req.params.authorId;
    return Author_1.default.findByIdAndDelete(authorId)
        .then(function (author) {
        return author
            ? res.status(201).json({ message: 'deleted' })
            : res.status(404).json({ message: 'not found' });
    })
        .catch(function (error) { return res.status(500).json({ error: error }); });
};
exports.default = { createAuthor: createAuthor, readAuthor: readAuthor, readAll: readAll, UpdateAuthor: UpdateAuthor, DeleteAuthor: DeleteAuthor };
