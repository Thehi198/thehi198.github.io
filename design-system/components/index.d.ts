import type * as React from 'react';

export interface PageHeaderProps { name: string; affiliation?: string; links?: { label: string; href: string }[]; className?: string }
export declare function PageHeader(props: PageHeaderProps): React.ReactElement;

export interface SectionHeadingProps { number?: string | number; level?: 1 | 2; id?: string; children: React.ReactNode; className?: string }
export declare function SectionHeading(props: SectionHeadingProps): React.ReactElement;

export interface ProjectEntryProps { index?: number; title: string; href?: string; year?: string; role?: string; org?: string; abstract?: string; tags?: string[]; className?: string }
export declare function ProjectEntry(props: ProjectEntryProps): React.ReactElement;

export interface TagProps { tone?: 'neutral' | 'accent' | 'solid'; href?: string; children: React.ReactNode; className?: string }
export declare function Tag(props: TagProps): React.ReactElement;

export interface FigureProps { number?: number | string; caption?: React.ReactNode; src?: string; alt?: string; wide?: boolean; id?: string; children?: React.ReactNode; className?: string }
export declare function Figure(props: FigureProps): React.ReactElement;

export interface SpecTableColumn { label: string; numeric?: boolean; unit?: string }
export interface SpecTableProps { number?: number | string; caption?: React.ReactNode; columns: SpecTableColumn[]; rows: (React.ReactNode[] | { cells: React.ReactNode[]; highlight?: boolean })[]; wide?: boolean; id?: string; className?: string }
export declare function SpecTable(props: SpecTableProps): React.ReactElement;

export interface EquationProps { tex?: string; number?: number | string; id?: string; children?: React.ReactNode; className?: string }
export declare function Equation(props: EquationProps): React.ReactElement;

export interface RemarkProps { kind?: 'Remark' | 'Result' | 'Note' | string; number?: string | number; children: React.ReactNode; className?: string }
export declare function Remark(props: RemarkProps): React.ReactElement;

declare global { interface Window { Monograph: { PageHeader: typeof PageHeader; SectionHeading: typeof SectionHeading; ProjectEntry: typeof ProjectEntry; Tag: typeof Tag; Figure: typeof Figure; SpecTable: typeof SpecTable; Equation: typeof Equation; Remark: typeof Remark } } }
