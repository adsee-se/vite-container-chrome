import { FC, useState } from 'react';

export const TitleCopy: FC = () => {
  const [buttonText, setButtonText] = useState<string>('Title Copy');

  /**
   * 指定されたセレクタの要素からテキストを取得し、整形する
   * @param selector - CSSセレクタ
   * @returns 整形されたテキスト、またはnull
   */
  const getCleanedText = (selector: string): string | null => {
    const element = document.querySelector<HTMLElement>(selector);
    return element ? element.textContent?.trim().replace(/\s+/g, ' ') || null : null;
  };

  /**
   * コピー処理を実行する
   */
  const handleCopy = async (): Promise<void> => {
    try {
      const cleanedJDBQText = getCleanedText('span.AppHeader-context-item-label');
      // const targetJDBQNumber = document.getElementById('key-val');
      const cleanedTargetText = getCleanedText('a.d-block.overflow-x-hidden.color-fg-default');
      // const targetTitle = document.getElementById('summary-val');
      // const targetTitle = document.querySelector('editable-field in active');

      if (cleanedJDBQText && cleanedTargetText) {
        const combinedText = `${cleanedJDBQText}/${cleanedTargetText}`;
        await navigator.clipboard.writeText(combinedText);
        setButtonText('Copied!');
        console.log('Copied text: ', combinedText);
        setTimeout(() => setButtonText('Title Copy'), 3000);
      } else {
        console.error('Target element(s) not found');
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div>
      <button onClick={handleCopy}>{buttonText}</button>
    </div>
  );
};
