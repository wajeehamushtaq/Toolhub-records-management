const BlockQuote = () => {
  return (
    <>
    <p className="p-2">
        In page <a className="text-primary" href="#">Atari ST:</a>
    </p>
      <div class="row justify-content-center no-gutters">
        <blockquote id="snippet" class="col-10">
          <div id="quotation">"</div>
          <div class="ch-snippet">
            <p>
              To address this growing market segment,
              <span class="ch-cn-marker text-primary">
                <sup>
                  [
                  <i>
                    <span title="This claim needs references to reliable sources. (October 2020)">
                      citation needed
                    </span>
                  </i>
                  ]
                </sup>
              </span>{" "}
              Atari introduced the <i>ST1</i> at Comdex in 1986. Renamed the{" "}
              <i>Mega</i>, it includes a high-quality detached keyboard, a
              stronger case to support the weight of a monitor, and an internal
              bus expansion connector. A 20 MB hard drive could also be
              purchased and placed below or above the main case. Initially
              equipped with 2 or 4 MB of RAM (a 1 MB version, the <i>Mega 1</i>,
              later followed), the Mega machines could be combined with Atari
              laser&apos printer for a low-cost desktop publishing package.
            </p>
          </div>
        </blockquote>
      </div>
    </>
  );
};

export default BlockQuote;
