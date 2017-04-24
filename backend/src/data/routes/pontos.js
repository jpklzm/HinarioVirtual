import express from 'express';
import Ponto from '../../models/ponto';
const router = express.Router();

router.route('/pontos')
.get(function(req, res) {
  Ponto.find(function(err, pontos) {
    if (err) {
      return res.send(err);
    }

    res.json(pontos);
  });
})
.post(function(req, res) {
  var ponto = new Ponto(req.body);

  ponto.save(function(err) {
    if (err) {
      return res.send(err);
    }

    res.send({ message: 'Ponto Added' });
  });
})
.put(function(req,res){
  Ponto.findOne({ _id: req.params.id }, function(err, ponto) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      ponto[prop] = req.body[prop];
    }

    // save the ponto
    ponto.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'Ponto updated!' });
    });
  });
});

router.route('/pontos/:id').get(function(req, res) {
  Ponto.findOne({ _id: req.params.id}, function(err, ponto) {
    if (err) {
      return res.send(err);
    }

    res.json(ponto);
  });
})
.delete(function(req, res) {
  Ponto.remove({
    _id: req.params.id
  }, function(err, ponto) {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;
