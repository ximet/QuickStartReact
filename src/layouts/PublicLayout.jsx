import React from 'react'

export const PublicLayout = (props) => {
    return (
        <div>
            <header>
                Header publick path...
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                Footer
            </footer>
      </div>
    );
  }