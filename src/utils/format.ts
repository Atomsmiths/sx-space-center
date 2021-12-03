function capitalizeFirstLetter(word: string): string {
  const normalizedWord = word.toLocaleLowerCase();
  return normalizedWord.charAt(0).toLocaleUpperCase() + normalizedWord.slice(1);
}

function formatCamelCasedWordGroup(wordGroup: string): string {
  return (
    wordGroup.charAt(0).toLocaleUpperCase() +
    wordGroup.slice(1).replace(/[\w][A-Z]/g, (capitalizedGroup) => {
      return (
        capitalizedGroup[0] + " " + capitalizedGroup[1].toLocaleLowerCase()
      );
    })
  );
}
export { capitalizeFirstLetter, formatCamelCasedWordGroup };
