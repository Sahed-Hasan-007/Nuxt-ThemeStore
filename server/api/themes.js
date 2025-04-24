export default defineEventHandler(() => {
    return [
      {
        name: 'light',
        colors: {
          background: '#ffffff',
          text: '#1a1a1a',
          primary: '#3b82f6',
          card: '#f9fafb'
        }
      },
      {
        name: 'dark',
        colors: {
          background: '#1e1e1e',
          text: '#e4e4e7',
          primary: '#6366f1',
          card: '#2a2a2a'
        }
      },
      {
        name: 'sunset',
        colors: {
          background: '#ffedd5',
          text: '#4b1d1d',
          primary: '#f97316',
          card: '#fed7aa'
        }
      },
      {
        name: 'forest',
        colors: {
          background: '#e6f4ea',
          text: '#1c4532',
          primary: '#38a169',
          card: '#c6f6d5'
        }
      }
    ]
  })
  