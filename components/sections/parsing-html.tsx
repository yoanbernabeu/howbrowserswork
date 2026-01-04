import ExampleContainer from "@/components/example-container";
import Highlight from "@/components/highlight";
import Section from "@/components/section";
import ParsingHtmlIntoDomTreeExample from "@/components/examples/parsing-html-into-dom-tree-example";

type SectionProps = {
    sectionId?: string;
    title?: string;
};

export default function ParsingHtml({
    sectionId = "parsing-html",
    title = "Parsing HTML to build the DOM tree",
}: SectionProps) {
    return (
        <Section id={sectionId} title={title}>
            <p>
                After the HTTP response arrives, the browser separates the
                headers from the body and feeds the HTML bytes into the parser.
                The parser turns tags like{" "}
                <Highlight variant="slate">&lt;h1&gt;</Highlight> into tokens
                and builds a <Highlight variant="blue">DOM</Highlight> tree.
            </p>
            <p>
                Click the "Parse" button to watch the HTML stream being parsed
                into the DOM tree:
            </p>
            <ExampleContainer>
                <ParsingHtmlIntoDomTreeExample />
            </ExampleContainer>
            <p>
                Parsing is streaming and error-tolerant: the browser starts
                building nodes before the full document is downloaded, and it
                inserts missing tags to keep the tree valid. When a{" "}
                <Highlight variant="slate">&lt;script&gt;</Highlight> tag
                appears, parsing may pause so the script can run.
            </p>
            <p>
                The DOM tree then combines with CSS to produce the render tree
                that layout and paint use to draw pixels.
            </p>
        </Section>
    );
}
