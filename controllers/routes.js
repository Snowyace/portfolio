
exports.root = function(req, res) {
  console.log('holo');
  res.render('home');

};

exports.works = function(req, res) {
  res.render('works',{title: 'works'})
;
};

exports.writing = function(req, res) {
  res.render('writing');
};

exports.about = function(req, res) {
  res.render('about');
};

exports.vue = function(req, res) {
  res.render('vue');
};


