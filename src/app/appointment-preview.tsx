"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Input } from "@/components/input";

const appointments = [
  { time: "09:00", title: "İlk muayene", status: "Onaylandı" },
  { time: "10:30", title: "Diş temizliği", status: "Onaylandı" },
  { time: "13:15", title: "Kontrol muayenesi", status: "Planlandı" },
];

export function AppointmentPreview() {
  const [query, setQuery] = useState("");
  const search = query.trim().toLocaleLowerCase("tr");
  const results = appointments.filter(({ time, title }) =>
    `${time} ${title.toLocaleLowerCase("tr")}`.includes(search),
  );

  return (
    <Card className="preview">
      <p className="eyebrow">Örnek panel</p>
      <h2 id="panel-baslik">Günün randevuları</h2>
      <p className="muted">Örnek kayıtları işlem adına veya saate göre süzün.</p>
      <div className="preview__filter">
        <Input
          id="randevu-ara"
          label="Randevu ara"
          placeholder="Örn. muayene"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button variant="secondary" disabled={!query} onClick={() => setQuery("")}>
          Temizle
        </Button>
      </div>
      <div aria-live="polite">
        {results.length ? (
          <ul className="preview__list">
            {results.map(({ time, title, status }) => (
              <li key={time}>
                <time dateTime={time}>{time}</time>
                <span>{title}</span>
                <span className="status" data-planned={status === "Planlandı"}>{status}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="preview__empty">Aramanıza uygun randevu bulunamadı.</p>
        )}
      </div>
    </Card>
  );
}
