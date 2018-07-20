'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var project_model_1 = require("./project.model");
function ProjectController() { }
;
// Creates Project.
ProjectController.prototype.createProject = function (req, res, next) {
    var newProjectDoc = {};
    if ('body' in req) {
        var body = req.body;
        if ('title' in body) {
            newProjectDoc.title = body.title;
        }
        else {
            var error = new Error('missing title');
            error.message = 'BadRequestError';
            return next(error);
        }
        if ('year' in body) {
            newProjectDoc.year = body.year;
        }
        if ('details' in body) {
            newProjectDoc.details = body.details;
        }
        if ('coverImage' in body) {
            var coverImage = body.coverImage;
            if (!newProjectDoc.coverImage) {
                newProjectDoc.coverImage = {};
            }
            if ('_imageId' in coverImage) {
                newProjectDoc.coverImage._imageId = coverImage._imageId;
            }
        }
        if ('discontinued' in body) {
            newProjectDoc.discontinued = body.discontinued;
        }
    }
    else {
        var error = new Error('missing body');
        error.name = 'BadRequestError';
        return next(error);
    }
    var query = project_model_1.Project.create(newProjectDoc);
    query.then(function (projectDoc) {
        res.status(200).json({ _id: projectDoc._id });
    }).catch(function (error) {
        console.log(error);
        next(error);
    });
};
// one get returns
ProjectController.prototype.getProject = function (req, res, next) {
    var query = project_model_1.Project.findOne({ _id: req.params._projectId });
    var vaildFields = [];
    var requestedFields = req.query.field || [];
    var selectFields = ['image', '_id', 'title', 'year', 'coverImage._imageId', 'details', 'discontinued'];
    requestedFields.forEach(function (field) {
        if (vaildFields.includes(field) && !selectFields.includes(field)) {
            selectFields.push(field);
        }
    });
    query.select(selectFields.join(' '));
    query.then(function (projectDoc) {
        res.status(200).json(projectDoc);
    }).catch(function (error) {
        return next(error);
    });
};
// get list of shop items and returns them and a link for the next
ProjectController.prototype.getProjects = function (req, res, next) {
    var query = project_model_1.Project.find({});
    if ('discontinued' in req.query) {
        query.where('discontinued').equals(req.query.discontinued);
    }
    query.sort('-year');
    query.select('_id');
    query.then(function (projectsDocs) {
        var page = !Number.isNaN(Number(req.query.page)) ? Math.abs(Number(req.query.page)) : 1;
        var limit = !Number.isNaN(Number(req.query.limit)) ? Math.abs(Number(req.query.limit)) : 200;
        var projectsLimited = projectsDocs.slice(limit * (page - 1), limit * (page - 1) + limit);
        var projects = [];
        projectsLimited.forEach(function (projectDocs) {
            projects.push(projectDocs._id);
        });
        var total = projectsDocs.length;
        var pageTotal = projectsLimited.length;
        var totalPages = Math.round(total / limit);
        var res_body = {
            page: page,
            totalPages: totalPages,
            pageLimit: limit,
            total: total,
            totalBatch: pageTotal,
            projects: projects,
        };
        res.status(200).json(res_body);
    }).catch(function (error) {
        return next(error);
    });
};
// Update Project queries: _id update: title, year returns: new shop item 
ProjectController.prototype.updateProject = function (req, res, next) {
    var changes = {};
    if ('body' in req) {
        var body = req.body;
        if (!('_id' in body)) {
            var error = new Error('missing _id');
            error.name = 'BadRequestError';
            return next(error);
        }
        if ('title' in body) {
            changes.title = body.title;
        }
        if ('year' in body) {
            changes.year = body.year;
        }
        if ('details' in body) {
            changes.details = body.details;
        }
        if ('coverImage' in body) {
            var coverImage = body.coverImage;
            if ('_imageId' in coverImage) {
                changes.coverImage = changes.coverImage || {};
                changes.coverImage._imageId = coverImage._imageId;
            }
        }
        if ('discontinued' in body) {
            changes.discontinued = body.discontinued;
        }
    }
    else {
        var error = new Error('missing body');
        error.name = 'BadRequestError';
        return next(error);
    }
    var query = project_model_1.Project.findOneAndUpdate({ _id: req.body._id }, { $set: changes }, { new: true });
    query.then(function (projectDoc) {
        res.status(200).json(projectDoc);
    }).catch(function (error) {
        next(error);
    });
};
// Creates ProjectPage.
ProjectController.prototype.createProjectPage = function (req, res, next) {
    var newpage = {};
    if ('body' in req) {
        var body = req.body;
        if ('_imageId' in body) {
            newpage._imageId = body._imageId;
        }
        if ('title' in body) {
            newpage.title = body.title;
        }
        if ('details' in body) {
            newpage.details = body.details;
        }
        if ('page' in body) {
            newpage.page = body.page;
        }
        if ('discontinued' in body) {
            newpage.discontinued = body.discontinued;
        }
    }
    else {
        var error = new Error('missing body');
        error.name = 'BadRequestError';
        return next(error);
    }
    var project = project_model_1.Project.findOne({ _id: req.params._projectId });
    project.then(function (projectDoc) {
        newpage.page = projectDoc.pages.length + 1;
        // @ts-ignore
        projectDoc.pages.push(newpage);
        projectDoc.save().then(function (projectDoc) {
            if ('page' in req.body) {
                newpage.page = req.body.page;
                if (newpage.page > projectDoc.pages.length) {
                    newpage.page = projectDoc.pages.length;
                }
                if (newpage.page < 1) {
                    newpage.page = 1;
                }
                var pageIndex_1 = projectDoc.pages.findIndex(function (page) {
                    return page.page == projectDoc.pages.length;
                });
                projectDoc.pages.forEach(function (page, index) {
                    if (index == pageIndex_1) {
                        projectDoc.pages[index].page = newpage.page;
                        projectDoc.markModified('pages.' + index + '.page');
                    }
                    else if (page.page >= newpage.page) {
                        projectDoc.pages[index].page++;
                        projectDoc.markModified('pages.' + index + '.page');
                    }
                    else {
                        projectDoc.pages[index].page--;
                        projectDoc.markModified('pages.' + index + '.page');
                    }
                });
                projectDoc.pages.sort(function (a, b) {
                    return a.page - b.page;
                });
                projectDoc.pages.forEach(function (page, index) {
                    projectDoc.pages[index].page = index + 1;
                    projectDoc.markModified('pages.' + index + '.page');
                });
                projectDoc.save().then(function (projectDoc) {
                    res.status(200).json(projectDoc);
                }).catch(function (error) {
                    console.log(error);
                    next(error);
                });
            }
            else {
                res.status(200).json(projectDoc);
            }
        }).catch(function (error) {
            console.log(error);
            next(error);
        });
    }).catch(function (error) {
        console.log(error);
        next(error);
    });
};
// one get returns
ProjectController.prototype.getProjectPage = function (req, res, next) {
    var query = project_model_1.Project.findOne({ _id: req.params._projectId });
    query.then(function (projectDoc) {
        var vaildFields = ['_id', 'title', 'details', 'page', '_imageId', 'discontinued'];
        var requestedFields = req.query.field || [];
        var selectFields = ['_id', 'title', 'details', 'page', '_imageId', 'discontinued'];
        requestedFields.forEach(function (field) {
            if (vaildFields.includes(field) && !selectFields.includes(field)) {
                selectFields.push(field);
            }
        });
        var pageIndex = projectDoc.pages.findIndex(function (page) {
            return page._id == req.params._pageId;
        });
        var page = projectDoc.pages[pageIndex];
        var res_body = {};
        selectFields.forEach(function (key) {
            res_body[key] = page[key];
        });
        res.status(200).json(res_body);
    }).catch(function (error) {
        return next(error);
    });
};
// get list of shop items and returns them and a link for the next
ProjectController.prototype.getProjectPages = function (req, res, next) {
    var project = project_model_1.Project.findOne({ _id: req.params._projectId });
    project.then(function (projectDoc) {
        var _pages = projectDoc.pages.filter(function (page) {
            if ('discontinued' in req.query) {
                if (page.discontinued != (req.query.discontinued == 'true')) {
                    return false;
                }
            }
            return true;
        });
        var page = !Number.isNaN(Number(req.query.page)) ? Math.abs(Number(req.query.page)) : 1;
        var limit = !Number.isNaN(Number(req.query.limit)) ? Math.abs(Number(req.query.limit)) : 200;
        var pagesLimited = _pages.slice(limit * (page - 1), limit * (page - 1) + limit);
        var pages = [];
        pagesLimited.forEach(function (page) {
            pages.push(page._id);
        });
        var total = projectDoc.pages.length;
        var pageTotal = pagesLimited.length;
        var totalPages = Math.round(total / limit);
        var res_body = {
            page: page,
            totalPages: totalPages,
            pageLimit: limit,
            total: total,
            totalBatch: pageTotal,
            pages: pages,
        };
        res.status(200).json(res_body);
        // res.status(200).json(projectDoc);
    }).catch(function (error) {
        return next(error);
    });
};
// Update ProjectPage queries: _id update: title, year returns: new shop item 
ProjectController.prototype.updateProjectPage = function (req, res, next) {
    var changes = {};
    if ('body' in req) {
        var body = req.body;
        if ('_imageId' in body) {
            changes._imageId = body._imageId;
        }
        if ('title' in body) {
            changes.title = body.title;
        }
        if ('page' in body) {
            changes.page = body.page;
        }
        if ('details' in body) {
            changes.details = body.details;
        }
        if ('discontinued' in body) {
            changes.discontinued = body.discontinued;
        }
    }
    else {
        var error = new Error('missing body');
        error.name = 'BadRequestError';
        return next(error);
    }
    var project = project_model_1.Project.findOne({ _id: req.params._projectId });
    project.then(function (projectDoc) {
        var _pageId = req.params._pageId;
        if ('page' in changes) {
            if (changes.page > projectDoc.pages.length) {
                changes.page = projectDoc.pages.length;
            }
            if (changes.page < 1) {
                changes.page = 1;
            }
            var pageIndex_2 = projectDoc.pages.findIndex(function (page) {
                return page._id == _pageId;
            });
            projectDoc.pages.splice(changes.page - 1, 0, projectDoc.pages.splice(pageIndex_2, 1)[0]);
            projectDoc.pages.forEach(function (page, index) {
                projectDoc.pages[index].page = index + 1;
                projectDoc.markModified('pages.' + index + '.page');
            });
        }
        var pageIndex = projectDoc.pages.findIndex(function (page) {
            return page._id == _pageId;
        });
        Object.keys(changes).forEach(function (key) {
            projectDoc.pages[pageIndex][key] = changes[key];
            projectDoc.markModified('pages.' + pageIndex + '.' + key);
        });
        return projectDoc.save(function (err, projectDoc) {
            if (err) {
                return next(err);
            }
            ;
            res.status(200).json(projectDoc);
        });
    }).catch(function (error) {
        next(error);
    });
};
exports.default = ProjectController.prototype;
