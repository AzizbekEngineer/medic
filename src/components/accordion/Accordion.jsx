import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./accordion.scss";

export default function AccordionUsage() {
  return (
    <div className="accordion">
      <div className="containerMax">
        <div className="accordion__box">
          <h3 className="accordion__title">Часто задаваемые вопросы</h3>
          <div className="accordion__items">
            <div className="accordion__card">
              <Accordion>
                <AccordionSummary
                  className="accordion__name"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Мочевой будильник реально помогает?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className="accordion__name"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Где производятся будильники?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className="accordion__name"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Какая гарантия на будильник?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion__card">
              <Accordion>
                <AccordionSummary
                  className="accordion__name"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Будильник эффективен для всех?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className="accordion__name"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Терапия энурезным будильником безопасна?
                </AccordionSummary>
                <AccordionDetails>
                  Терапия энурезным будильником абсолютно безопасна. Не имеет
                  побочных эффектов и не вызывает аллергических реакций. В
                  мочевом будильнике использованы минимальные, не представляющие
                  опасности, значения напряжения и силы тока. Не используется
                  радиочастотное излучение.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className="accordion__name"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Пример развёрнутой вкладки вопроса?
                </AccordionSummary>
                <AccordionDetails>
                  Вкла́дка (англ. tab) — элемент графического интерфейса
                  пользователя, который даёт возможность переключения в одном
                  окне приложения между несколькими открытыми документами или
                  предопределёнными наборами элементов интерфейса, когда их
                  доступно несколько, а на выделенном для них пространстве окна
                  можно показывать только один из них.
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
