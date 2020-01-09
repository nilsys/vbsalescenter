//
// Example code, not for use in production environments.
//
define(['urijs/URI'], function (URI) {
    'use strict';

    var Request = function () {
    };

    /**
     * Filter transform function
     * @param configuration
     * @param options the JSON payload that defines the filterCriteria
     * @returns {object} configuration object the url looks like ?filter=foo eq 'bar'.
     */
    Request.prototype.filter = function(configuration, options) {
        var filterCriterion = options;

        function jetFilterOpToScim(fop) {
            switch (fop) {
                case '$eq':
                    return 'eq';
                case '$ne':
                    return 'ne';
                case '$co':
                    return 'co';
                default:
                    console.warn('unable to interpret the op ' + fop);
                    return null;
            }
        }

        function isEmpty(val) {
            return (val === undefined || val === null || val === '');
        }

        if (typeof filterCriterion === 'object' && Object.keys(filterCriterion).length > 0) {
            if (filterCriterion.op && filterCriterion.attribute && !isEmpty(filterCriterion.value)) {
              var atomicExpr = {};
              atomicExpr.op = jetFilterOpToScim(filterCriterion.op);
              atomicExpr.attribute = filterCriterion.attribute;
              atomicExpr.value = filterCriterion.value;

              if (atomicExpr.op && atomicExpr.attribute) {
                configuration.url = URI(configuration.url).addQuery({
                  filter: atomicExpr.attribute + ' ' + atomicExpr.op + ' ' + atomicExpr.value
                }).toString();
              }
            }
        }

        return configuration;
    };

    /**
     * Pagination function appends limit and offset parameters to the url
     * @param configuration
     * @param options the JSON payload that defines the pagination criteria
     * @returns {object} configuration object.
     */
    Request.prototype.paginate = function(configuration, options) {
        var newUrl = configuration.url;
        newUrl = URI(newUrl).addSearch({limit: options.size, offset: options.offset}).toString();
        configuration.url = newUrl;
        return configuration;
    };

    /**
     * Sort transform function
     * @param configuration
     * @param options the JSON payload that defines the sort criteria
     * @returns {object} configuration object. the url looks like ?orderBy=foo:asc
     */
    Request.prototype.sort = function(configuration, options) {
        if (Array.isArray(options) && options.length > 0) {
            var firstItem = options[0];
            if (firstItem.attribute) {
                var dir = firstItem.direction === 'descending' ? 'desc' : 'asc';
                var newUrl = configuration.url;
                newUrl = URI(newUrl).addSearch({orderBy: firstItem.attribute + ':' + dir}).toString();
                configuration.url = newUrl;
            }
        }
        return configuration;
    };

    var Response = function() {

    };

    /**
     * Paginate Response Transform Function Implementation
     */
    Response.prototype.paginate = function(result) {
        var tr = {};

        if (result && result.body) {
            var cb = result.body;
            if (cb.totalCount) {
                tr.totalSize = cb.totalCount;
            }
            if (cb.totalCount >= 0) {
                tr.hasMore = !!cb.hasMore;
            } else {
                tr.hasMore = false;
           }
        }
        return tr;
    };

    return {
        request: Request,
        response: Response
   };
});