"use client";

import { useState, useMemo } from "react";
import {
  Plus,
  X,
  AlertTriangle,
  CheckCircle,
  Music,
  Type,
  Hash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Text, Italic, Label } from "@/components/ui/typography";
import { NavBar } from "@/components/ui/navbar";
import {
  countSyllables,
  hasAlliteration,
  hasRhyme,
  calculateFlowScore,
  getInitials,
  isBadAcronym,
} from "@/lib/analysis";

interface NameSlot {
  id: string;
  value: string;
  type: "first" | "middle" | "last" | "suffix";
}

export default function BuilderPage() {
  const [slots, setSlots] = useState<NameSlot[]>([
    { id: "1", value: "", type: "first" },
    { id: "2", value: "", type: "middle" },
    { id: "3", value: "", type: "last" },
  ]);

  const addMiddleName = () => {
    const newId = Date.now().toString();
    const lastIndex = slots.findIndex((s) => s.type === "last");
    const newSlots = [...slots];
    newSlots.splice(lastIndex, 0, { id: newId, value: "", type: "middle" });
    setSlots(newSlots);
  };

  const removeSlot = (id: string) => {
    setSlots(slots.filter((s) => s.id !== id));
  };

  const updateSlot = (id: string, value: string) => {
    setSlots(slots.map((s) => (s.id === id ? { ...s, value } : s)));
  };

  // Analysis using shared utilities
  const analysis = useMemo(() => {
    const names = slots.map((s) => s.value.trim()).filter((n) => n.length > 0);
    const initials = getInitials(names);
    const syllableCounts = names.map(countSyllables);
    const totalSyllables = syllableCounts.reduce((a, b) => a + b, 0);

    return {
      fullName: names.join(" "),
      initials,
      syllableCounts,
      totalSyllables,
      isBadAcronym: isBadAcronym(initials),
      alliteration: hasAlliteration(names),
      rhyme: hasRhyme(names),
      flowScore: calculateFlowScore(names),
    };
  }, [slots]);

  return (
    <div className="min-h-screen pb-16">
      <NavBar />

      {/* Header */}
      <div className="pt-8 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Label>Compose</Label>
          <Heading as="h1" size="3xl" className="mt-2 mb-4">
            Name <Italic>Builder</Italic>
          </Heading>
          <Text size="lg" muted className="max-w-2xl mx-auto">
            Build and analyze the perfect full name. Check flow, rhythm,
            initials, and more in real-time.
          </Text>
        </div>
      </div>

      {/* Builder */}
      <div className="px-6">
        <div className="max-w-4xl mx-auto">
          {/* Name Inputs */}
          <Card hover={false} className="mb-8">
            <CardContent className="p-8">
              <div className="space-y-4">
                {slots.map((slot, index) => (
                  <div key={slot.id} className="flex items-center gap-3">
                    <div className="w-20 text-right">
                      <Label>
                        {slot.type === "first"
                          ? "First"
                          : slot.type === "middle"
                          ? `Middle${slots.filter((s) => s.type === "middle").length > 1 ? ` ${index}` : ""}`
                          : slot.type === "last"
                          ? "Last"
                          : "Suffix"}
                      </Label>
                    </div>
                    <div className="flex-1">
                      <Input
                        value={slot.value}
                        onChange={(e) => updateSlot(slot.id, e.target.value)}
                        placeholder={`Enter ${slot.type} name...`}
                        className="text-lg"
                      />
                    </div>
                    {slot.type === "middle" && slots.filter((s) => s.type === "middle").length > 1 && (
                      <button
                        onClick={() => removeSlot(slot.id)}
                        className="p-2 text-muted hover:text-foreground transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                    {slot.type !== "first" && slot.type !== "last" && slot.type !== "middle" && (
                      <button
                        onClick={() => removeSlot(slot.id)}
                        className="p-2 text-muted hover:text-foreground transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <Button variant="secondary" onClick={addMiddleName}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Middle Name
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Full Name Preview */}
          {analysis.fullName && (
            <div className="text-center mb-12">
              <Label>Full Name</Label>
              <Heading as="h2" size="2xl" className="mt-2">
                <Italic>{analysis.fullName}</Italic>
              </Heading>
            </div>
          )}

          {/* Analysis Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Initials */}
            <Card hover={false}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Hash className="w-5 h-5 text-primary" />
                  <CardTitle>Initials</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center">
                    <span className="font-heading text-2xl font-semibold">
                      {analysis.initials || "—"}
                    </span>
                  </div>
                  <div>
                    {analysis.isBadAcronym ? (
                      <div className="flex items-center gap-2 text-red-600">
                        <AlertTriangle className="w-5 h-5" />
                        <Text>Potentially problematic acronym</Text>
                      </div>
                    ) : analysis.initials ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <Text>No issues detected</Text>
                      </div>
                    ) : (
                      <Text muted>Enter names to check</Text>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Syllables */}
            <Card hover={false}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Music className="w-5 h-5 text-primary" />
                  <CardTitle>Syllables</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="font-heading text-4xl font-semibold">
                      {analysis.totalSyllables || 0}
                    </div>
                    <Text size="sm" muted>Total</Text>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-2">
                      {analysis.syllableCounts.map((count, i) => (
                        <div
                          key={i}
                          className="flex-1 text-center py-2 bg-secondary/50 rounded-lg"
                        >
                          <div className="font-semibold">{count}</div>
                          <Text size="sm" muted>
                            {slots[i]?.value?.slice(0, 8) || "—"}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flow Score */}
            <Card hover={false}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-primary" />
                  <CardTitle>Flow Score</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="var(--border)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="var(--primary)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${(analysis.flowScore / 100) * 251} 251`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-heading text-2xl font-semibold">
                        {analysis.flowScore}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {analysis.alliteration && (
                      <div className="flex items-center gap-2 text-primary">
                        <CheckCircle className="w-4 h-4" />
                        <Text size="sm">Alliteration detected</Text>
                      </div>
                    )}
                    {analysis.rhyme && (
                      <div className="flex items-center gap-2 text-accent">
                        <AlertTriangle className="w-4 h-4" />
                        <Text size="sm">Rhyming detected</Text>
                      </div>
                    )}
                    {!analysis.alliteration && !analysis.rhyme && analysis.fullName && (
                      <Text size="sm" muted>
                        Good rhythmic variety
                      </Text>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card hover={false}>
              <CardHeader>
                <CardTitle>Typography Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label>Serif (Formal)</Label>
                    <div className="font-heading text-xl mt-1">
                      {analysis.fullName || "Enter a name..."}
                    </div>
                  </div>
                  <div>
                    <Label>Sans-Serif (Modern)</Label>
                    <div className="font-body text-xl mt-1">
                      {analysis.fullName || "Enter a name..."}
                    </div>
                  </div>
                  <div>
                    <Label>Italic (Elegant)</Label>
                    <div className="font-heading text-xl italic mt-1">
                      {analysis.fullName || "Enter a name..."}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Save Button */}
          {analysis.fullName && (
            <div className="mt-12 text-center">
              <Button size="lg">
                Save This Combination
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
