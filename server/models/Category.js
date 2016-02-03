/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app){
    var CategorySchema = app.mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        eventCount: {
            type: Number
        }
    });

    CategorySchema.plugin(require('mongoose-timestamp'));

    var Category = app.mongoose.model('Category', CategorySchema);
    return Category;
};