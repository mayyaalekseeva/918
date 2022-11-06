import * as React from "react";
import { Document, Page, pdfjs, PDFPageItem } from "react-pdf";
import "./pdfViewer.scss";

type onDocumentLoadSuccess = (pdf: pdfjs.PDFDocumentProxy) => Promise<void>;
type onPageLoadSuccess = (pdf: pdfjs.PDFPageProxy) => Promise<void>;

interface Props {
  file: PDFPageItem;
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer: React.FC<Props> = ({ file }) => {
  const refPdfContainer = React.useRef<HTMLDivElement>(null);
  const [pdfWidth, setPdfWidth] = React.useState<number>();
  const [error, setError] = React.useState<boolean>(false);
  const [numPages, setNumPages] = React.useState<number | null>(null);

  //   React.useEffect(() => {
  //     setError(false);
  //   }, [url]);

  //   const file = React.useMemo(
  //     () => ({
  //       url,
  //     }),
  //     [url]
  //   );

  //   const onDocumentLoadSuccess: onDocumentLoadSuccess = async ({
  //     numPages: nextNumPages,
  //   }) => {
  //     setError(false);
  //     setNumPages(nextNumPages);
  //   };

  //   const onPageLoadSuccess: onPageLoadSuccess = async (page) => {
  //     const containerWidth = refPdfContainer.current?.clientWidth;

  //     if (!containerWidth) {
  //       return;
  //     }
  //     setPdfWidth(containerWidth);
  //   };

  //   const onError = () => {
  //     setError(true);
  //   };

  return (
    <section className="pdf-container" ref={refPdfContainer}>
      <Document
        className="pdf-container__document"
        file={file}
        onLoadError={console.error}
      >
        <Page
          className="pdf-container__document-page"
          width={pdfWidth}
          renderTextLayer
          renderAnnotationLayer
          pageNumber={1}
          onLoadError={console.error}
        />
      </Document>
    </section>
  );
};

export default PdfViewer;
