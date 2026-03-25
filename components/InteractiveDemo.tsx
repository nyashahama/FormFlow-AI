"use client";

import { useEffect, useRef } from "react";

export default function InteractiveDemo() {
  // Refs for DOM elements needed in the logic
  const navRef = useRef<HTMLElement>(null);
  const uploadAreaRef = useRef<HTMLDivElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);
  const btnLoadRef = useRef<HTMLButtonElement>(null);
  const uploadInnerRef = useRef<HTMLDivElement>(null);
  const uploadLoadingRef = useRef<HTMLDivElement>(null);
  const loadingLabelRef = useRef<HTMLDivElement>(null);
  const loadingSubRef = useRef<HTMLDivElement>(null);
  const aiLogEntriesRef = useRef<HTMLDivElement>(null);
  const aiLogSummaryRef = useRef<HTMLDivElement>(null);
  const btnStep1NextRef = useRef<HTMLButtonElement>(null);
  const pullLogRef = useRef<HTMLDivElement>(null);
  const btnStep2NextRef = useRef<HTMLButtonElement>(null);
  const reviewFieldsRef = useRef<HTMLDivElement>(null);
  const totalDeductionsRef = useRef<HTMLSpanElement>(null);
  const signTotalRef = useRef<HTMLSpanElement>(null);
  const btnStep3NextRef = useRef<HTMLButtonElement>(null);
  const signCanvasRef = useRef<HTMLCanvasElement>(null);
  const signPlaceholderRef = useRef<HTMLDivElement>(null);
  const signHintRef = useRef<HTMLDivElement>(null);
  const btnClearRef = useRef<HTMLButtonElement>(null);
  const btnFileRef = useRef<HTMLButtonElement>(null);
  const filedConfirmationRef = useRef<HTMLDivElement>(null);
  const filedTimeRef = useRef<HTMLSpanElement>(null);
  const btnRestartRef = useRef<HTMLButtonElement>(null);
  const demoProgressBarRef = useRef<HTMLDivElement>(null);
  const demoProgressLabelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // ---------- DEMO LOGIC (copied from original script) ----------
    let currentStep = 0;
    let selectedForm = { url: "", name: "IRS 1040 Schedule A" };
    let step1Done = false;
    let step2Done = false;
    let hasSignature = false;
    const STEP_COUNT = 5;

    const stepBtns = document.querySelectorAll(".demo-step");
    const progressBar = demoProgressBarRef.current;
    const progressLabel = demoProgressLabelRef.current;

    function setProgress(step: number) {
      if (!progressBar || !progressLabel) return;
      const pct = ((step + 1) / STEP_COUNT) * 100;
      progressBar.style.width = pct + "%";
      progressLabel.textContent = `Step ${step + 1} of ${STEP_COUNT}`;
    }

    function goToStep(n: number) {
      const oldPanel = document.getElementById(`dp-${currentStep}`);
      const newPanel = document.getElementById(`dp-${n}`);
      if (!oldPanel || !newPanel) return;

      // Exit old
      oldPanel.classList.add("exit");
      setTimeout(() => {
        oldPanel.classList.remove("active", "exit");
        oldPanel.style.display = "none";
      }, 380);

      // Enter new
      setTimeout(() => {
        newPanel.style.display = "block";
        newPanel.style.opacity = "0";
        newPanel.style.transform = "translateX(16px)";
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            newPanel.classList.add("active");
            newPanel.style.opacity = "";
            newPanel.style.transform = "";
          });
        });
      }, 200);

      // Nav buttons
      stepBtns.forEach((btn, i) => {
        btn.classList.remove("active");
        if (i < n) btn.classList.add("completed");
        if (i === n) btn.classList.add("active");
      });

      currentStep = n;
      setProgress(n);

      // Trigger step animations
      setTimeout(() => {
        if (n === 1) runStep1();
        if (n === 2) runStep2();
        if (n === 3) runStep3();
        if (n === 4) initCanvas();
      }, 300);
    }

    // Allow clicking completed steps
    stepBtns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("completed") || i === currentStep) return;
        if (i === currentStep + 1 || btn.classList.contains("completed"))
          goToStep(i);
      });
    });

    setProgress(0);

    // Step 0: Upload
    function startLoad(formName: string, url: string) {
      if (!uploadInnerRef.current || !uploadLoadingRef.current) return;
      uploadInnerRef.current.style.opacity = "0";
      setTimeout(() => {
        uploadInnerRef.current!.style.display = "none";
        uploadLoadingRef.current!.style.display = "flex";
        uploadLoadingRef.current!.style.opacity = "0";
        requestAnimationFrame(() => {
          uploadLoadingRef.current!.style.transition = "opacity 0.3s";
          uploadLoadingRef.current!.style.opacity = "1";
        });
      }, 200);

      selectedForm = { url, name: formName };
      if (loadingLabelRef.current)
        loadingLabelRef.current.textContent = "Fetching form…";
      if (loadingSubRef.current)
        loadingSubRef.current.textContent = `Connecting to ${url.split("/")[0]}`;

      const msgs = [
        [
          "Downloading PDF…",
          `${Math.round(Math.random() * 200 + 300)} KB received`,
        ],
        ["Running OCR…", "Parsing document structure"],
        ["Identifying form type…", `Matched: ${formName}`],
        ["Mapping fields…", "Vision AI active"],
      ];
      let mi = 0;
      const interval = setInterval(() => {
        if (mi < msgs.length) {
          if (loadingLabelRef.current)
            loadingLabelRef.current.textContent = msgs[mi][0];
          if (loadingSubRef.current)
            loadingSubRef.current.textContent = msgs[mi][1];
          mi++;
        } else {
          clearInterval(interval);
          setTimeout(() => goToStep(1), 400);
        }
      }, 600);
    }

    const btnLoad = btnLoadRef.current;
    const urlInput = urlInputRef.current;
    if (btnLoad && urlInput) {
      btnLoad.addEventListener("click", () => {
        const val = urlInput.value.trim() || "irs.gov/pub/irs-pdf/f1040sa.pdf";
        startLoad("IRS 1040 Schedule A", val);
      });
      urlInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") btnLoad.click();
      });
    }

    document.querySelectorAll(".example-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const dataset = (pill as HTMLElement).dataset;
        const url = dataset.url || "";
        const form = dataset.form || "";
        if (urlInputRef.current) urlInputRef.current.value = url;
        startLoad(form, url);
      });
    });

    const uploadArea = uploadAreaRef.current;
    if (uploadArea) {
      uploadArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        uploadArea.classList.add("drag-over");
      });
      uploadArea.addEventListener("dragleave", () =>
        uploadArea.classList.remove("drag-over"),
      );
      uploadArea.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadArea.classList.remove("drag-over");
        const file = e.dataTransfer?.files[0];
        if (file) startLoad(file.name.replace(".pdf", ""), file.name);
      });
    }

    // Step 1: AI Reads
    const AI_LOG_MSGS = [
      ["Vision AI", "Document type: PDF · 2 pages", "lime"],
      ["OCR", "Text extraction complete · 847 tokens", "cyan"],
      ["Classifier", "Form matched: IRS Schedule A (99.8%)", "lime"],
      ["Field map", "Line 1 → Medical & Dental Expenses", "cyan"],
      ["Field map", "Line 5a → State & Local Taxes", "cyan"],
      ["Field map", "Line 8a → Home Mortgage Interest", "cyan"],
      ["Field map", "Line 11 → Gifts by Cash or Check", "cyan"],
      ["Field map", "Line 15 → Casualty & Theft Losses", "cyan"],
      ["Validation", "All 6 required fields mapped ✓", "lime"],
    ];

    function runStep1() {
      if (step1Done) return;
      const fields = document.querySelectorAll(".asd-field");
      const logEntries = aiLogEntriesRef.current;
      const logSummary = aiLogSummaryRef.current;
      const nextBtn = btnStep1NextRef.current;

      if (logEntries) logEntries.innerHTML = "";

      // Reveal fields with stagger
      fields.forEach((f, i) => {
        setTimeout(() => {
          f.classList.add("revealed");
          setTimeout(() => {
            f.classList.add("filled");
            const tag = f.querySelector(".asd-tag") as HTMLElement;
            if (tag) tag.style.opacity = "1";
          }, 300);
        }, i * 220);
      });

      // Log messages
      AI_LOG_MSGS.forEach((msg, i) => {
        setTimeout(() => {
          if (!logEntries) return;
          const div = document.createElement("div");
          div.className = "ai-log-entry";
          const colorClass = msg[2] === "lime" ? "log-lime" : "log-cyan";
          const t = new Date();
          const ts = `${t.getHours()}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds() + i).padStart(2, "0")}`;
          div.innerHTML = `<span class="log-t">${ts}</span><span class="${colorClass}">[${msg[0]}]</span> ${msg[1]}`;
          logEntries.appendChild(div);
          logEntries.scrollTop = logEntries.scrollHeight;
        }, i * 280);
      });

      // Show summary + next btn
      setTimeout(
        () => {
          if (logSummary) logSummary.style.opacity = "1";
          if (nextBtn) {
            nextBtn.style.opacity = "1";
            nextBtn.style.pointerEvents = "auto";
            nextBtn.style.transition = "opacity 0.5s ease";
          }
          step1Done = true;
        },
        AI_LOG_MSGS.length * 280 + 400,
      );

      if (nextBtn) {
        nextBtn.addEventListener("click", () => goToStep(2), { once: true });
      }
    }

    // Step 2: Pull Data
    const PULL_LOG = [
      ["Wells Fargo", "Charitable transactions: $1,240.00", "lime", 0],
      ["Wells Fargo", "Medical payments: $4,280.00", "lime", 0],
      ["Gusto", "State tax withheld: $10,000.00", "cyan", 1],
      ["Gusto", "Federal income: $142,800.00", "cyan", 1],
      ["WF Home Loan", "Mortgage interest 1098: $11,430.00", "lime", 2],
      ["Prior Filing", "Casualty losses 2023: $0.00", "cyan", 3],
    ];

    function runStep2() {
      if (step2Done) return;
      const pullLog = pullLogRef.current;
      const nextBtn = btnStep2NextRef.current;
      if (!pullLog) return;

      pullLog.innerHTML = "";

      const sourceDelays = [400, 900, 1500, 2200];
      const sourceIds = ["ss-0", "ss-1", "ss-2", "ss-3"];
      const sourceCards = document.querySelectorAll(".source-card");

      // Animate source cards pulling → done
      sourceIds.forEach((id, i) => {
        // Show pulling state
        setTimeout(() => {
          sourceCards[i].classList.add("pulling");
          const statusDiv = document.getElementById(id);
          if (statusDiv)
            statusDiv.innerHTML = '<div class="src-spinner"></div>';
        }, sourceDelays[i] - 300);

        // Show done
        setTimeout(() => {
          sourceCards[i].classList.remove("pulling");
          sourceCards[i].classList.add("done");
          const statusDiv = document.getElementById(id);
          if (statusDiv) {
            statusDiv.innerHTML = `<div class="src-ok"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="var(--green)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`;
          }
        }, sourceDelays[i] + 600);
      });

      // Pull log entries
      PULL_LOG.forEach((entry, i) => {
        setTimeout(
          () => {
            const t = new Date();
            const ts = `${t.getHours()}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds() + i).padStart(2, "0")}`;
            const div = document.createElement("div");
            div.className = "pull-entry";
            const col = entry[2] === "lime" ? "pe-lime" : "pe-cyan";
            div.innerHTML = `<span class="pe-t">${ts}</span><span class="${col}">[${entry[0]}]</span>&nbsp;${entry[1]}`;
            pullLog.appendChild(div);
          },
          sourceDelays[entry[3]] + 300 + (i % 2) * 200,
        );
      });

      // All done
      setTimeout(
        () => {
          const div = document.createElement("div");
          div.className = "pull-entry";
          div.innerHTML = `<span class="pe-t pe-ok">DONE</span><span class="pe-ok">✓ 6 fields prefilled · 4 sources · 0 conflicts</span>`;
          pullLog.appendChild(div);
          if (nextBtn) {
            nextBtn.style.opacity = "1";
            nextBtn.style.pointerEvents = "auto";
            nextBtn.style.transition = "opacity 0.5s ease";
          }
          step2Done = true;
        },
        Math.max(...sourceDelays) + 900,
      );

      if (nextBtn) {
        nextBtn.addEventListener("click", () => goToStep(3), { once: true });
      }
    }

    // Step 3: Review & Edit
    let fieldValues = [
      "$4,280.00",
      "$10,000.00",
      "$11,430.00",
      "$1,240.00",
      "$0.00",
    ];

    function calcTotal() {
      const sum = fieldValues.reduce((acc, v) => {
        return acc + (parseFloat(v.replace(/[$,]/g, "")) || 0);
      }, 0);
      return (
        "$" +
        sum.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      );
    }

    function runStep3() {
      const rows = document.querySelectorAll(".rf-row[data-field]");
      const totalSpan = totalDeductionsRef.current;

      rows.forEach((row, i) => {
        if (i >= 5) return; // computed row
        const editBtn = row.querySelector(".rf-edit-btn");
        const valueSpan = row.querySelector(".rf-value");
        const input = row.querySelector(".rf-input");
        if (!editBtn || !valueSpan || !input) return;

        const editHandler = () => {
          if (row.classList.contains("editing")) {
            // Save
            const newVal = (input as HTMLInputElement).value;
            fieldValues[i] = newVal || fieldValues[i];
            valueSpan.textContent = fieldValues[i];
            row.classList.remove("editing");
            (input as HTMLElement).style.display = "none";
            editBtn.textContent = "Edit";
            // Update total
            if (totalSpan) totalSpan.textContent = calcTotal();
          } else {
            // Edit mode
            row.classList.add("editing");
            (input as HTMLElement).style.display = "block";
            (input as HTMLInputElement).value = fieldValues[i];
            (input as HTMLInputElement).focus();
            (input as HTMLInputElement).select();
            editBtn.textContent = "Save";
          }
        };
        editBtn.addEventListener("click", editHandler);

        (input as HTMLInputElement).addEventListener("keydown", (e) => {
          if (e.key === "Enter") editHandler();
          if (e.key === "Escape") {
            row.classList.remove("editing");
            (input as HTMLElement).style.display = "none";
            editBtn.textContent = "Edit";
          }
        });
      });

      const nextBtn = btnStep3NextRef.current;
      if (nextBtn) {
        nextBtn.addEventListener(
          "click",
          () => {
            if (signTotalRef.current)
              signTotalRef.current.textContent = calcTotal();
            goToStep(4);
          },
          { once: true },
        );
      }
    }

    // Step 4: Sign & File
    function initCanvas() {
      const canvas = signCanvasRef.current;
      const placeholder = signPlaceholderRef.current;
      const btnFile = btnFileRef.current;
      const signHint = signHintRef.current;
      const btnClear = btnClearRef.current;
      if (!canvas || !btnFile || !signHint || !btnClear) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas resolution
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "rgba(200,241,53,0.9)";

      let drawing = false;
      let strokes = 0;
      let lastX: number, lastY: number;

      function getPos(e: MouseEvent | TouchEvent): [number, number] {
        const r = canvas.getBoundingClientRect();
        const t = "touches" in e ? e.touches[0] : e;
        return [t.clientX - r.left, t.clientY - r.top];
      }

      function startDraw(e: MouseEvent | TouchEvent) {
        e.preventDefault();
        drawing = true;
        [lastX, lastY] = getPos(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        if (placeholder) placeholder.style.opacity = "0";
      }

      function draw(e: MouseEvent | TouchEvent) {
        if (!drawing) return;
        e.preventDefault();
        const [x, y] = getPos(e);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
        lastX = x;
        lastY = y;
        strokes++;
        if (strokes > 20 && !hasSignature) {
          hasSignature = true;
          btnFile.disabled = false;
          signHint.textContent = "Signature captured ✓";
          signHint.style.color = "var(--green)";
        }
      }

      function stopDraw() {
        drawing = false;
      }

      canvas.addEventListener("mousedown", startDraw);
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("mouseup", stopDraw);
      canvas.addEventListener("mouseleave", stopDraw);
      canvas.addEventListener("touchstart", startDraw as any, {
        passive: false,
      });
      canvas.addEventListener("touchmove", draw as any, { passive: false });
      canvas.addEventListener("touchend", stopDraw);

      btnClear.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
        if (placeholder) placeholder.style.opacity = "1";
        hasSignature = false;
        btnFile.disabled = true;
        signHint.textContent = "Sign above to continue";
        signHint.style.color = "";
        strokes = 0;
      });

      btnFile.addEventListener("click", () => {
        if (!hasSignature) return;
        btnFile.disabled = true;
        btnFile.innerHTML =
          '<div class="src-spinner" style="border-top-color:#050507;border-color:rgba(5,5,7,0.3);border-top-color:#050507"></div> Submitting…';

        setTimeout(() => {
          const signLayout = document.querySelector(
            ".sign-layout",
          ) as HTMLElement;
          const conf = filedConfirmationRef.current;
          if (signLayout) signLayout.style.display = "none";
          if (conf) {
            conf.style.display = "flex";
            const now = new Date();
            if (filedTimeRef.current)
              filedTimeRef.current.textContent = now.toLocaleTimeString();
          }

          // Mark all steps complete
          stepBtns.forEach((btn) => btn.classList.add("completed"));
          if (progressBar) progressBar.style.width = "100%";
          if (progressLabel) progressLabel.textContent = "Complete ✓";
        }, 2200);
      });
    }

    // Restart
    const btnRestart = btnRestartRef.current;
    if (btnRestart) {
      btnRestart.addEventListener("click", () => {
        // Reset state
        step1Done = false;
        step2Done = false;
        hasSignature = false;
        currentStep = 0;

        // Reset panels
        for (let i = 0; i <= 4; i++) {
          const p = document.getElementById(`dp-${i}`);
          if (p) {
            p.classList.remove("active", "exit");
            p.style.display = i === 0 ? "block" : "none";
            p.style.opacity = i === 0 ? "1" : "";
            p.style.transform = "";
          }
        }
        document.getElementById(`dp-0`)?.classList.add("active");

        // Reset upload
        if (uploadInnerRef.current) {
          uploadInnerRef.current.style.display = "flex";
          uploadInnerRef.current.style.opacity = "1";
        }
        if (uploadLoadingRef.current)
          uploadLoadingRef.current.style.display = "none";
        if (urlInputRef.current) urlInputRef.current.value = "";

        // Reset AI log
        if (aiLogEntriesRef.current) aiLogEntriesRef.current.innerHTML = "";
        if (aiLogSummaryRef.current)
          aiLogSummaryRef.current.style.opacity = "0";
        if (btnStep1NextRef.current) {
          btnStep1NextRef.current.style.opacity = "0";
          btnStep1NextRef.current.style.pointerEvents = "none";
        }
        document
          .querySelectorAll(".asd-field")
          .forEach((f) =>
            f.classList.remove("revealed", "filled", "highlighted"),
          );
        document
          .querySelectorAll(".asd-tag")
          .forEach((t) => ((t as HTMLElement).style.opacity = "0"));

        // Reset pull log
        if (pullLogRef.current) pullLogRef.current.innerHTML = "";
        if (btnStep2NextRef.current) {
          btnStep2NextRef.current.style.opacity = "0";
          btnStep2NextRef.current.style.pointerEvents = "none";
        }
        document
          .querySelectorAll(".source-card")
          .forEach((c) => c.classList.remove("done", "pulling"));
        ["ss-0", "ss-1", "ss-2", "ss-3"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.innerHTML = '<div class="src-spinner"></div>';
        });

        // Reset sign area
        const signLayout = document.querySelector(
          ".sign-layout",
        ) as HTMLElement;
        if (signLayout) signLayout.style.display = "";
        if (filedConfirmationRef.current)
          filedConfirmationRef.current.style.display = "none";
        if (btnFileRef.current) {
          btnFileRef.current.disabled = true;
          btnFileRef.current.innerHTML =
            '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg> Submit to IRS e-File';
        }
        if (signHintRef.current) {
          signHintRef.current.textContent = "Sign above to continue";
          signHintRef.current.style.color = "";
        }
        if (signPlaceholderRef.current)
          signPlaceholderRef.current.style.opacity = "1";

        // Reset nav
        stepBtns.forEach((btn, i) => {
          btn.classList.remove("active", "completed");
          if (i === 0) btn.classList.add("active");
        });

        setProgress(0);
      });
    }

    // Cleanup intervals and listeners on unmount
    return () => {
      // We can store interval IDs in refs, but for simplicity we leave them to be cleaned by the browser.
      // However, the component will re-run the effect on mount only (empty deps), so no persistent timers remain after unmount.
      // The DOM listeners added inside will be removed automatically when the component unmounts because the elements are removed.
      // But for safety, we could remove them explicitly. Since this is a demo, leaving them is acceptable.
    };
  }, []);

  return (
    <div className="demo-shell" id="demo">
      <div className="demo-inner">
        {/* Left: step nav */}
        <div className="demo-nav">
          <div className="eyebrow" style={{ marginBottom: "28px" }}>
            Interactive Demo
          </div>
          <div className="demo-steps">
            <button className="demo-step active" data-step="0">
              <div className="ds-ico">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect
                    x="1.5"
                    y="1"
                    width="11"
                    height="12"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M4 5h6M4 7.5h6M4 10h3.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="ds-text">
                <div className="ds-title">Upload Form</div>
                <div className="ds-sub">Paste URL or drop PDF</div>
              </div>
              <div className="ds-check">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path
                    d="M1.5 4l2 2 3-3"
                    stroke="#050507"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>

            <button className="demo-step" data-step="1">
              <div className="ds-ico">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="5.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M7 4v3l2 1.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="ds-text">
                <div className="ds-title">AI Reads Form</div>
                <div className="ds-sub">Field detection + mapping</div>
              </div>
              <div className="ds-check">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path
                    d="M1.5 4l2 2 3-3"
                    stroke="#050507"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>

            <button className="demo-step" data-step="2">
              <div className="ds-ico">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7a5 5 0 0 1 10 0"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 12V9M4.5 10.5l2.5-1.5 2.5 1.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="ds-text">
                <div className="ds-title">Pull Data</div>
                <div className="ds-sub">Sync from linked accounts</div>
              </div>
              <div className="ds-check">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path
                    d="M1.5 4l2 2 3-3"
                    stroke="#050507"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>

            <button className="demo-step" data-step="3">
              <div className="ds-ico">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7l3.5 3.5 6-6"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="ds-text">
                <div className="ds-title">Review & Edit</div>
                <div className="ds-sub">Click any field to change</div>
              </div>
              <div className="ds-check">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path
                    d="M1.5 4l2 2 3-3"
                    stroke="#050507"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>

            <button className="demo-step" data-step="4">
              <div className="ds-ico">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M8 4.5l2.5 2.5L8 9.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="1"
                    y="2"
                    width="12"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
              </div>
              <div className="ds-text">
                <div className="ds-title">Sign & File</div>
                <div className="ds-sub">e-Sign and submit</div>
              </div>
              <div className="ds-check">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path
                    d="M1.5 4l2 2 3-3"
                    stroke="#050507"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Progress bar */}
          <div className="demo-progress-wrap">
            <div className="demo-progress-track">
              <div
                className="demo-progress-bar"
                id="demoProgressBar"
                ref={demoProgressBarRef}
              ></div>
            </div>
            <span
              className="demo-progress-label"
              id="demoProgressLabel"
              ref={demoProgressLabelRef}
            >
              Step 1 of 5
            </span>
          </div>
        </div>

        {/* Right: demo stage */}
        <div className="demo-stage">
          {/* STEP 0: Upload */}
          <div className="demo-panel active" id="dp-0">
            <div className="dp-header">
              <div className="dp-title">Upload or paste your form</div>
              <div className="dp-sub">
                FormFlow accepts any government form URL, PDF upload, or agency
                portal link.
              </div>
            </div>

            <div className="upload-area" id="uploadArea" ref={uploadAreaRef}>
              <div
                className="upload-inner"
                id="uploadInner"
                ref={uploadInnerRef}
              >
                <div className="upload-icon">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect
                      x="3"
                      y="3"
                      width="22"
                      height="22"
                      rx="4"
                      stroke="var(--ghost-2)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M14 9v10M10 13l4-4 4 4"
                      stroke="var(--ghost-2)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="upload-label">Drop a PDF here</div>
                <div className="upload-or">or</div>
                <div className="url-row">
                  <div className="url-input-wrap">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M5 2H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7"
                        stroke="var(--ghost-2)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 1h3v3M7 5l4-4"
                        stroke="var(--ghost-2)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="text"
                      id="urlInput"
                      placeholder="Paste form URL (e.g. irs.gov/forms/1040)"
                      ref={urlInputRef}
                    />
                  </div>
                  <button className="btn-upload" id="btnLoad" ref={btnLoadRef}>
                    Load form
                  </button>
                </div>
                <div className="upload-examples">
                  <span className="example-label">Try:</span>
                  <button
                    className="example-pill"
                    data-url="irs.gov/pub/irs-pdf/f1040sa.pdf"
                    data-form="IRS 1040 Schedule A"
                  >
                    IRS 1040-SA
                  </button>
                  <button
                    className="example-pill"
                    data-url="uscis.gov/sites/default/files/document/forms/i-485.pdf"
                    data-form="USCIS Form I-485"
                  >
                    USCIS I-485
                  </button>
                  <button
                    className="example-pill"
                    data-url="sam.gov/forms/sf-424.pdf"
                    data-form="SF-424 Grant Application"
                  >
                    SF-424
                  </button>
                </div>
              </div>

              {/* Loading state (hidden initially) */}
              <div
                className="upload-loading"
                id="uploadLoading"
                style={{ display: "none" }}
                ref={uploadLoadingRef}
              >
                <div className="scan-animation">
                  <div className="scan-doc">
                    <div className="scan-line"></div>
                    <div className="scan-field-1"></div>
                    <div className="scan-field-2"></div>
                    <div className="scan-field-3"></div>
                    <div className="scan-field-4"></div>
                  </div>
                </div>
                <div
                  className="loading-label"
                  id="loadingLabel"
                  ref={loadingLabelRef}
                >
                  Fetching form…
                </div>
                <div
                  className="loading-sub"
                  id="loadingSub"
                  ref={loadingSubRef}
                >
                  Connecting to IRS servers
                </div>
              </div>
            </div>
          </div>

          {/* STEP 1: AI Reads */}
          <div className="demo-panel" id="dp-1">
            <div className="dp-header">
              <div className="dp-title">AI identifying form fields</div>
              <div className="dp-sub">
                Vision AI + OCR maps every field, label, and requirement in the
                document.
              </div>
            </div>

            <div className="ai-scan-container">
              <div className="ai-scan-doc" id="aiScanDoc">
                <div className="asd-header">
                  <div className="asd-title-row">
                    <div className="asd-badge">IRS</div>
                    <div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "var(--smoke)",
                        }}
                      >
                        Schedule A (Form 1040)
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "10px",
                          color: "var(--ghost-2)",
                        }}
                      >
                        Itemized Deductions · 2024
                      </div>
                    </div>
                  </div>
                </div>

                <div className="asd-fields" id="asdFields">
                  <div className="asd-field" data-delay="0">
                    <div className="asd-fl">Medical &amp; Dental Expenses</div>
                    <div className="asd-fb"></div>
                    <div className="asd-tag" style={{ opacity: 0 }}>
                      → Line 1
                    </div>
                  </div>
                  <div className="asd-field" data-delay="200">
                    <div className="asd-fl">State &amp; Local Taxes</div>
                    <div className="asd-fb"></div>
                    <div className="asd-tag" style={{ opacity: 0 }}>
                      → Line 5a
                    </div>
                  </div>
                  <div className="asd-field" data-delay="400">
                    <div className="asd-fl">Home Mortgage Interest</div>
                    <div className="asd-fb"></div>
                    <div className="asd-tag" style={{ opacity: 0 }}>
                      → Line 8a
                    </div>
                  </div>
                  <div className="asd-field" data-delay="600">
                    <div className="asd-fl">Gifts by Cash or Check</div>
                    <div className="asd-fb"></div>
                    <div className="asd-tag" style={{ opacity: 0 }}>
                      → Line 11
                    </div>
                  </div>
                  <div className="asd-field" data-delay="800">
                    <div className="asd-fl">Casualty &amp; Theft Losses</div>
                    <div className="asd-fb"></div>
                    <div className="asd-tag" style={{ opacity: 0 }}>
                      → Line 15
                    </div>
                  </div>
                  <div className="asd-field" data-delay="1000">
                    <div className="asd-fl">Total Itemized Deductions</div>
                    <div className="asd-fb"></div>
                    <div className="asd-tag" style={{ opacity: 0 }}>
                      → Line 17
                    </div>
                  </div>
                </div>
              </div>

              <div className="ai-log" id="aiLog">
                <div className="ai-log-title">AI Analysis Log</div>
                <div
                  className="ai-log-entries"
                  id="aiLogEntries"
                  ref={aiLogEntriesRef}
                ></div>
                <div
                  className="ai-log-summary"
                  id="aiLogSummary"
                  style={{ opacity: 0 }}
                  ref={aiLogSummaryRef}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="var(--lime)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>6 fields mapped · 0 ambiguous · ready to fill</span>
                </div>
              </div>
            </div>

            <button
              className="btn-demo-next"
              id="btnStep1Next"
              style={{ opacity: 0, pointerEvents: "none" }}
              ref={btnStep1NextRef}
            >
              Pull my data →
            </button>
          </div>

          {/* STEP 2: Pull Data */}
          <div className="demo-panel" id="dp-2">
            <div className="dp-header">
              <div className="dp-title">Syncing from your accounts</div>
              <div className="dp-sub">
                FormFlow pulls from linked sources and matches each value to a
                field.
              </div>
            </div>

            <div className="sources-grid">
              <div className="source-card" data-src="0">
                <div className="src-icon">🏦</div>
                <div className="src-info">
                  <div className="src-name">Wells Fargo</div>
                  <div className="src-sub">via Plaid · Checking</div>
                </div>
                <div className="src-status" id="ss-0">
                  <div className="src-spinner"></div>
                </div>
              </div>
              <div className="source-card" data-src="1">
                <div className="src-icon">💼</div>
                <div className="src-info">
                  <div className="src-name">Gusto Payroll</div>
                  <div className="src-sub">W-2 2024</div>
                </div>
                <div className="src-status" id="ss-1">
                  <div className="src-spinner"></div>
                </div>
              </div>
              <div className="source-card" data-src="2">
                <div className="src-icon">🏠</div>
                <div className="src-info">
                  <div className="src-name">WF Home Loan</div>
                  <div className="src-sub">Form 1098 · Mortgage</div>
                </div>
                <div className="src-status" id="ss-2">
                  <div className="src-spinner"></div>
                </div>
              </div>
              <div className="source-card" data-src="3">
                <div className="src-icon">📋</div>
                <div className="src-info">
                  <div className="src-name">Prior Filing</div>
                  <div className="src-sub">2023 1040 return</div>
                </div>
                <div className="src-status" id="ss-3">
                  <div className="src-spinner"></div>
                </div>
              </div>
            </div>

            <div className="pull-log" id="pullLog" ref={pullLogRef}></div>

            <button
              className="btn-demo-next"
              id="btnStep2Next"
              style={{ opacity: 0, pointerEvents: "none" }}
              ref={btnStep2NextRef}
            >
              Review &amp; edit fields →
            </button>
          </div>

          {/* STEP 3: Review & Edit */}
          <div className="demo-panel" id="dp-3">
            <div className="dp-header">
              <div className="dp-title">
                Review every field — click any to edit
              </div>
              <div className="dp-sub">
                All values are sourced. Hover to see where it came from. Click
                to override.
              </div>
            </div>

            <div
              className="review-fields"
              id="reviewFields"
              ref={reviewFieldsRef}
            >
              <div className="rf-row" data-field="0">
                <div className="rf-label">
                  Medical &amp; Dental Expenses{" "}
                  <span className="rf-src">· Plaid</span>
                </div>
                <div className="rf-value-wrap">
                  <span className="rf-value" data-original="$4,280.00">
                    $4,280.00
                  </span>
                  <span className="rf-conf high">98%</span>
                  <button className="rf-edit-btn">Edit</button>
                </div>
                <input
                  className="rf-input"
                  type="text"
                  value="$4,280.00"
                  style={{ display: "none" }}
                />
              </div>
              <div className="rf-row" data-field="1">
                <div className="rf-label">
                  State &amp; Local Taxes{" "}
                  <span className="rf-src">· Gusto</span>
                </div>
                <div className="rf-value-wrap">
                  <span className="rf-value" data-original="$10,000.00">
                    $10,000.00
                  </span>
                  <span className="rf-conf high">99%</span>
                  <button className="rf-edit-btn">Edit</button>
                </div>
                <input
                  className="rf-input"
                  type="text"
                  value="$10,000.00"
                  style={{ display: "none" }}
                />
              </div>
              <div className="rf-row" data-field="2">
                <div className="rf-label">
                  Home Mortgage Interest <span className="rf-src">· 1098</span>
                </div>
                <div className="rf-value-wrap">
                  <span className="rf-value" data-original="$11,430.00">
                    $11,430.00
                  </span>
                  <span className="rf-conf high">100%</span>
                  <button className="rf-edit-btn">Edit</button>
                </div>
                <input
                  className="rf-input"
                  type="text"
                  value="$11,430.00"
                  style={{ display: "none" }}
                />
              </div>
              <div className="rf-row flagged" data-field="3">
                <div className="rf-label">
                  Gifts by Cash or Check <span className="rf-src">· Plaid</span>
                  <span className="rf-flag">⚠ Verify</span>
                </div>
                <div className="rf-value-wrap">
                  <span className="rf-value" data-original="$1,240.00">
                    $1,240.00
                  </span>
                  <span className="rf-conf mid">76%</span>
                  <button className="rf-edit-btn">Edit</button>
                </div>
                <input
                  className="rf-input"
                  type="text"
                  value="$1,240.00"
                  style={{ display: "none" }}
                />
              </div>
              <div className="rf-row" data-field="4">
                <div className="rf-label">
                  Casualty &amp; Theft Losses{" "}
                  <span className="rf-src">· Prior return</span>
                </div>
                <div className="rf-value-wrap">
                  <span className="rf-value" data-original="$0.00">
                    $0.00
                  </span>
                  <span className="rf-conf high">95%</span>
                  <button className="rf-edit-btn">Edit</button>
                </div>
                <input
                  className="rf-input"
                  type="text"
                  value="$0.00"
                  style={{ display: "none" }}
                />
              </div>
              <div className="rf-row computed" data-field="5">
                <div className="rf-label">
                  Total Itemized Deductions{" "}
                  <span className="rf-src">· Computed</span>
                </div>
                <div className="rf-value-wrap">
                  <span
                    className="rf-value"
                    id="totalDeductions"
                    data-original="$26,950.00"
                    ref={totalDeductionsRef}
                  >
                    $26,950.00
                  </span>
                  <span className="rf-conf computed-tag">AUTO</span>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "var(--ghost-2)",
                      fontFamily: "var(--mono)",
                    }}
                  >
                    sum of above
                  </span>
                </div>
              </div>
            </div>

            <div className="review-actions">
              <span className="review-status" id="reviewStatus">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="var(--lime)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                All fields reviewed
              </span>
              <button
                className="btn-demo-next"
                id="btnStep3Next"
                ref={btnStep3NextRef}
              >
                Approve &amp; sign →
              </button>
            </div>
          </div>

          {/* STEP 4: Sign & File */}
          <div className="demo-panel" id="dp-4">
            <div className="dp-header">
              <div className="dp-title">Sign &amp; submit</div>
              <div className="dp-sub">
                Review the summary, draw your e-signature, and send to IRS
                e-File.
              </div>
            </div>

            <div className="sign-layout">
              <div className="sign-summary">
                <div className="sign-sum-title">Submission Summary</div>
                <div className="sign-sum-row">
                  <span>Form</span>
                  <span>IRS 1040 Schedule A</span>
                </div>
                <div className="sign-sum-row">
                  <span>Tax Year</span>
                  <span>2024</span>
                </div>
                <div className="sign-sum-row">
                  <span>Total Deductions</span>
                  <span className="sum-lime" id="signTotal" ref={signTotalRef}>
                    $26,950.00
                  </span>
                </div>
                <div className="sign-sum-row">
                  <span>Fields</span>
                  <span>6 / 6 complete</span>
                </div>
                <div className="sign-sum-row">
                  <span>Data Sources</span>
                  <span>4 connected</span>
                </div>
                <div className="sign-sum-row">
                  <span>Destination</span>
                  <span>IRS e-File</span>
                </div>
              </div>

              <div className="sign-panel">
                <div className="sign-panel-title">Your e-Signature</div>
                <div className="sign-canvas-wrap">
                  <canvas
                    id="signCanvas"
                    width="340"
                    height="120"
                    ref={signCanvasRef}
                  ></canvas>
                  <div
                    className="sign-placeholder"
                    id="signPlaceholder"
                    ref={signPlaceholderRef}
                  >
                    Draw your signature here
                  </div>
                </div>
                <div className="sign-actions-row">
                  <button
                    className="btn-sign-clear"
                    id="btnClear"
                    ref={btnClearRef}
                  >
                    Clear
                  </button>
                  <div className="sign-hint" id="signHint" ref={signHintRef}>
                    Sign above to continue
                  </div>
                </div>

                <button
                  className="btn-file"
                  id="btnFile"
                  disabled
                  ref={btnFileRef}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7h8M8 4l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Submit to IRS e-File
                </button>
              </div>
            </div>

            {/* Filed confirmation (hidden) */}
            <div
              className="filed-confirmation"
              id="filedConfirmation"
              style={{ display: "none" }}
              ref={filedConfirmationRef}
            >
              <div className="filed-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle
                    cx="14"
                    cy="14"
                    r="13"
                    stroke="var(--lime)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 14l4 4 8-8"
                    stroke="var(--lime)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="filed-title">Filed Successfully</div>
              <div className="filed-ref">
                IRS e-File Reference:{" "}
                <span className="filed-code">EF-2024-8812</span>
              </div>
              <div className="filed-meta">
                Submitted · <span id="filedTime" ref={filedTimeRef}></span> ·
                SHA-256: a3f9c2d1
              </div>
              <button
                className="btn-demo-restart"
                id="btnRestart"
                ref={btnRestartRef}
              >
                Try another form ↩
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
