function J = costFunctionJ(X,y,theta)
  % X is the "design matrix" containingt our training examples
  % y is the class labels

  m = size(X,1); % # of training examples
  predictions = X*theta; % predictions of hyphothesis on all m examples
  sqrErrors = (predictions - y).^2; % squared errors

  J = 1/(2*m) * sum(sqrErrors);
endfunction
