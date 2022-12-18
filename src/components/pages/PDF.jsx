import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

const PDF = () => {

  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(2)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }
  return (
    <>
      <Helmet>
        <title>Islamic Studies | PDF</title>
      </Helmet>

      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>PDF Viewer</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto  xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>View PDF Example</h2>
          <div className="mx-auto lg:w-[900px] w-full text-end py-32 leading-9">
            <div className="border overflow-hidden w-max mx-auto p-5 shadow rounded-lg">
              <Document file={{ url: "https://www.africau.edu/images/default/sample.pdf" }} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
            </div>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button onClick={() => pageNumber == 1 ? setPageNumber(pageNumber) : setPageNumber(pageNumber - 1)}>prev</button>
            <button onClick={() => pageNumber == numPages ? setPageNumber(pageNumber) : setPageNumber(pageNumber + 1)}>next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PDF
