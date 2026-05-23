function speak(text){

  speechSynthesis.cancel();

  const utterance=
    new SpeechSynthesisUtterance(text);

  utterance.rate=0.82;

  speechSynthesis.speak(utterance);
}